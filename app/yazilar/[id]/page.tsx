import type { Metadata } from "next";
import { buildMetadata } from "@/src/lib/metadata";
import { getAllPosts, getPostById } from "@/src/services/content-server";
import BlogDetailPage from "@/src/screens/blog-page/BlogDetailPage";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    return { title: "Yazı Bulunamadı | Türkmühendisi" };
  }

  return buildMetadata({
    title: post.title,
    description: post.description,
    canonical: `/yazilar/${post.id}`,
    type: "article",
    image: post.ogImage || post.image,
    imageAlt: post.title,
    imageType: post.ogImageType,
    authorName: post.author,
    datePublished: post.date,
    dateModified: post.date,
    section: post.category,
    keywords: [post.title, post.category, post.author, "türkmühendisi blog"],
  });
}

export const revalidate = 60;

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const post = await getPostById(id);
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((item) => item.id !== id).slice(0, 4);

  return <BlogDetailPage post={post} relatedPosts={relatedPosts} />;
}
