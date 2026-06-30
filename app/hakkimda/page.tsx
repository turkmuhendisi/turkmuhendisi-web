import { buildMetadata } from "@/src/lib/metadata";
import AboutPage from "@/src/screens/about-page/AboutPage";

export const metadata = buildMetadata({
  title: "Hakkımda | Türkmühendisi | Samet Berkant Koca",
  description:
    "Yazılım mühendisliği kariyerim, tecrübelerim, uzmanlık alanlarım ve kullandığım teknolojiler hakkında detaylı bilgiler.",
  canonical: "/hakkimda",
  keywords: ["samet berkant koca", "yazılım mühendisi", "backend geliştirici", "hakkımda", "turkmuhendisi"],
  image: "https://avatars.githubusercontent.com/u/74829377?v=4",
  imageAlt: "Samet Berkant Koca profil görseli",
  type: "profile",
});

export default function Page() {
  return <AboutPage />;
}
