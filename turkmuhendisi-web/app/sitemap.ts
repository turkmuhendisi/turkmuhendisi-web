import type { MetadataRoute } from "next";
import { DOMAIN_CONFIG, toWebUrl } from "@/src/config/site";
import { getAllPosts } from "@/src/services/content-server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/yazilar", "/projeler", "/hakkimda"].map(
    (path) => ({
      url: toWebUrl(path),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    }),
  );

  const posts = await getAllPosts();
  const postRoutes = posts.map((post) => ({
    url: `${DOMAIN_CONFIG.web}/yazilar/${post.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
