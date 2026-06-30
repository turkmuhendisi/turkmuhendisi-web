import { buildMetadata } from "@/src/lib/metadata";
import { getRecentPosts } from "@/src/services/content-server";
import HomePage from "@/src/screens/HomePage";

export const metadata = buildMetadata({
  title: "Samet Berkant Koca | Yazılım Mühendisi & Backend Geliştirici",
  description:
    "Modern web teknolojileri ve mikroservis mimarileri ile ölçeklenebilir backend çözümleri. Portfolyomu ve güncel projelerimi keşfedin.",
  canonical: "/",
  keywords: [
    "yazılım mühendisi",
    "backend geliştirici",
    "samet berkant koca",
    "türkmühendisi",
    "react",
    "nodejs",
    "mikroservis mimarisi",
  ],
  image: "/post-bg.jpg",
  imageAlt: "Türkmühendisi ana sayfa tanıtım görseli",
});

export const revalidate = 60;

export default async function Page() {
  const recentPosts = await getRecentPosts(6);
  return <HomePage recentPosts={recentPosts} />;
}
