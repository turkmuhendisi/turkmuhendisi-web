import { isInfrastructureEnabled } from "@/src/config/env";
import { staticPosts, type Post } from "@/src/data/posts";
import {
  getPublishedContentBySlug,
  listPublishedContent,
  type ContentDto,
} from "@/src/repositories/content.repository";

function mapDbToPost(item: ContentDto): Post {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    content: item.content,
    image: item.image,
    category: item.category,
    readTime: "5 min read",
    date: item.updatedAt,
    author: "Samet Berkant Koca",
    authorImage: "https://avatars.githubusercontent.com/u/74829377?v=4",
  };
}

function parseDate(date: string): number {
  const parts = date.split("-");
  if (parts.length === 3) {
    const [day, month, year] = parts.map(Number);
    return new Date(year, month - 1, day).getTime();
  }
  const parsed = Date.parse(date);
  return Number.isNaN(parsed) ? 0 : parsed;
}

async function fetchPublishedFromDb(): Promise<Post[]> {
  if (!isInfrastructureEnabled()) return [];

  try {
    const items = await listPublishedContent();
    return items.map(mapDbToPost);
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const dbPosts = await fetchPublishedFromDb();
  const staticIds = new Set(staticPosts.map((post) => post.id));
  const merged = [...dbPosts.filter((post) => !staticIds.has(post.id)), ...staticPosts];

  return merged.sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

export async function getPostById(id: string): Promise<Post | undefined> {
  if (isInfrastructureEnabled()) {
    try {
      const item = await getPublishedContentBySlug(id);
      if (item) return mapDbToPost(item);
    } catch {
      // fall through to static lookup
    }
  }

  const posts = await getAllPosts();
  return posts.find((post) => post.id === id);
}

export async function getRecentPosts(limit: number): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}
