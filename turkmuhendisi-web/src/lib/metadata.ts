import type { Metadata } from "next";
import { DOMAIN_CONFIG } from "@/src/config/site";

const DEFAULT_IMAGE = "/post-bg.jpg";
const DEFAULT_IMAGE_ALT = "Türkmühendisi görseli";

export interface PageMetadataOptions {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string | string[];
  image?: string;
  imageAlt?: string;
  imageType?: string;
  type?: "website" | "article" | "profile";
  authorName?: string;
  datePublished?: string;
  dateModified?: string;
  section?: string;
  noindex?: boolean;
}

const toAbsoluteUrl = (value: string) => {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }
  return `${DOMAIN_CONFIG.web}${value.startsWith("/") ? value : `/${value}`}`;
};

export function buildMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    canonical,
    keywords,
    image = DEFAULT_IMAGE,
    imageAlt = DEFAULT_IMAGE_ALT,
    imageType = "image/jpeg",
    type = "website",
    authorName = "Samet Berkant Koca",
    datePublished,
    dateModified,
    section,
    noindex = false,
  } = options;

  const fullTitle = title.includes("Türkmühendisi") ? title : `${title} | Türkmühendisi`;
  const canonicalUrl = canonical ? toAbsoluteUrl(canonical) : undefined;
  const imageUrl = toAbsoluteUrl(image);
  const keywordsContent = Array.isArray(keywords) ? keywords.join(", ") : keywords;

  return {
    title: fullTitle,
    description,
    keywords: keywordsContent,
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: "Türkmühendisi",
      locale: "tr_TR",
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
          type: imageType,
          width: 1200,
          height: 630,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime: datePublished,
            modifiedTime: dateModified,
            section,
            authors: [authorName],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: imageUrl, alt: imageAlt }],
    },
  };
}
