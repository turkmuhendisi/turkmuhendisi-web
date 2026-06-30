import type { MetadataRoute } from "next";
import { DOMAIN_CONFIG } from "@/src/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/*", "/api", "/api/*"],
      },
    ],
    sitemap: `${DOMAIN_CONFIG.web}/sitemap.xml`,
    host: DOMAIN_CONFIG.web,
  };
}
