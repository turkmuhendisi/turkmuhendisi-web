import { desc, eq } from "drizzle-orm";
import { getDb, schema } from "@/src/db";
import type { ContentItem } from "@/src/db/schema";
import { cacheDel, cacheGet, cacheKeys, cacheSet } from "@/src/lib/redis";

export interface ContentDto {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  content: string;
  status: "draft" | "published";
  updatedAt: string;
  modifiedAt: string;
}

function toDto(item: ContentItem): ContentDto {
  return {
    id: item.slug,
    title: item.title,
    description: item.description,
    category: item.category,
    image: item.image,
    content: item.content,
    status: item.status,
    updatedAt: item.updatedAt.toLocaleDateString("tr-TR"),
    modifiedAt: item.updatedAt.toISOString(),
  };
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function uniqueSlug(title: string): Promise<string> {
  const db = getDb();
  const base = slugify(title) || `icerik-${Date.now()}`;
  let candidate = base;
  let index = 1;

  while (true) {
    const [existing] = await db
      .select({ id: schema.contentItems.id })
      .from(schema.contentItems)
      .where(eq(schema.contentItems.slug, candidate))
      .limit(1);

    if (!existing) return candidate;
    candidate = `${base}-${index}`;
    index += 1;
  }
}

async function invalidatePublishedCache() {
  await cacheDel(cacheKeys.publishedContent);
}

export async function listAllContent(): Promise<ContentDto[]> {
  const db = getDb();
  const rows = await db
    .select()
    .from(schema.contentItems)
    .orderBy(desc(schema.contentItems.updatedAt));

  return rows.map(toDto);
}

export async function listPublishedContent(): Promise<ContentDto[]> {
  const cached = await cacheGet<ContentDto[]>(cacheKeys.publishedContent);
  if (cached) return cached;

  const db = getDb();
  const rows = await db
    .select()
    .from(schema.contentItems)
    .where(eq(schema.contentItems.status, "published"))
    .orderBy(desc(schema.contentItems.updatedAt));

  const items = rows.map(toDto);
  await cacheSet(cacheKeys.publishedContent, items, 60);
  return items;
}

export async function getPublishedContentBySlug(slug: string): Promise<ContentDto | null> {
  const items = await listPublishedContent();
  return items.find((item) => item.id === slug) ?? null;
}

export async function createContent(input: {
  title: string;
  description: string;
  category: string;
  image: string;
  content: string;
  status: "draft" | "published";
}): Promise<ContentDto> {
  const db = getDb();
  const slug = await uniqueSlug(input.title);

  const [item] = await db
    .insert(schema.contentItems)
    .values({
      slug,
      title: input.title,
      description: input.description,
      category: input.category,
      image: input.image,
      content: input.content,
      status: input.status,
      updatedAt: new Date(),
    })
    .returning();

  await invalidatePublishedCache();
  return toDto(item);
}
