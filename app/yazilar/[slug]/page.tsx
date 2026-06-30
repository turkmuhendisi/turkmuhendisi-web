import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import { buildMetadata } from "@/src/lib/metadata";
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from "@/src/lib/json-ld";
import { getAllPosts, getPostById } from "@/src/services/content-server";
import BlogDetailPage from "@/src/screens/blog-page/BlogDetailPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostById(slug);

  if (!post) {
    return { title: "Yazı Bulunamadı | Türkmühendisi" };
  }

  const published = post.modifiedAt ?? post.date;

  return buildMetadata({
    title: post.title,
    description: post.description,
    canonical: `/yazilar/${post.id}`,
    type: "article",
    image: post.ogImage || post.image,
    imageAlt: post.title,
    imageType: post.ogImageType,
    authorName: post.author,
    datePublished: published,
    dateModified: published,
    section: post.category,
    keywords: [post.title, post.category, post.author, "türkmuhendisi blog"],
  });
}

export const revalidate = 60;

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostById(slug);
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((item) => item.id !== slug).slice(0, 4);

  if (!post) {
    return <BlogDetailPage post={undefined} relatedPosts={relatedPosts} />;
  }

  const jsonLd = [
    buildArticleJsonLd(post),
    buildBreadcrumbJsonLd([
      { name: "Ana Sayfa", path: "/" },
      { name: "Yazılar", path: "/yazilar" },
      { name: post.title, path: `/yazilar/${post.id}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogDetailPage post={post} relatedPosts={relatedPosts} />
    </>
  );
}
