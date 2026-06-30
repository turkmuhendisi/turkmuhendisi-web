import { buildMetadata } from "@/src/lib/metadata";
import ProjectPage from "@/src/screens/project-page/ProjectPage";

export const metadata = buildMetadata({
  title: "Güçlü Projeler ve Çalışmalarım | Türkmühendisi",
  description:
    "Modern web geliştirme, mikroservis mimarisi ve yenilikçi çözümleri sergileyen projeler topluluğu.",
  canonical: "/projeler",
  keywords: [
    "yazılım projeleri",
    "portfolio",
    "mikroservis projeleri",
    "react projeleri",
    "spring boot projeleri",
  ],
  image: "/post-bg.jpg",
  imageAlt: "Türkmühendisi projeler sayfası",
});

export default function Page() {
  return <ProjectPage />;
}
