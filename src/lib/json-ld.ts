import type { Post } from "@/src/data/posts";
import { DOMAIN_CONFIG, toWebUrl } from "@/src/config/site";
import { toIsoDate } from "@/src/lib/post-dates";

const AUTHOR_NAME = "Samet Berkant Koca";

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Türkmühendisi",
    url: DOMAIN_CONFIG.web,
    description: "Samet Berkant Koca — yazılım mühendisi ve backend geliştirici kişisel web sitesi.",
    inLanguage: "tr-TR",
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: DOMAIN_CONFIG.web,
    },
  };
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: toWebUrl("/hakkimda"),
    image: "https://avatars.githubusercontent.com/u/74829377?v=4",
    jobTitle: "Yazılım Mühendisi",
    worksFor: {
      "@type": "Organization",
      name: "Türkmühendisi",
    },
    sameAs: [
      "https://linkedin.com/in/turkmuhendisi",
      "https://github.com/turkmuhendisi",
    ],
  };
}

export function buildArticleJsonLd(post: Post) {
  const published = post.modifiedAt ?? toIsoDate(post.date);
  const image = post.ogImage || post.image;
  const imageUrl = image.startsWith("http") ? image : toWebUrl(image);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [imageUrl],
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Türkmühendisi",
      logo: {
        "@type": "ImageObject",
        url: toWebUrl("/tmfav.png"),
      },
    },
    datePublished: published,
    dateModified: published,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": toWebUrl(`/yazilar/${post.id}`),
    },
    articleSection: post.category,
    inLanguage: "tr-TR",
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toWebUrl(item.path),
    })),
  };
}
