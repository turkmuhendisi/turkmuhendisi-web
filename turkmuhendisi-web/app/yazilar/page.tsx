import { buildMetadata } from "@/src/lib/metadata";
import { getAllPosts } from "@/src/services/content-server";
import BlogPage from "@/src/screens/blog-page/BlogPage";

export const metadata = buildMetadata({
  title: "Yazılar & Makaleler | Türkmühendisi",
  description:
    "Teknoloji, mühendislik ve yazılım geliştirme üzerine düşünceler, makaleler ve rehberler.",
  canonical: "/yazilar",
  keywords: ["yazılım blogu", "backend yazıları", "mikroservis", "react", "spring boot"],
  image: "/post-bg.jpg",
  imageAlt: "Türkmühendisi yazılar sayfası kapak görseli",
});

export const revalidate = 60;

export default async function Page() {
  const posts = await getAllPosts();
  return <BlogPage initialPosts={posts} />;
}
