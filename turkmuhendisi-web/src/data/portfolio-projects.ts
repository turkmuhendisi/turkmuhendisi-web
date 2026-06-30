import type { StaticImageData } from "next/image";
import harputImage from "@/src/assets/harput.webp";
import roiImage from "@/src/assets/roi.webp";
import yatagunImage from "@/src/assets/yatagun-dombra.webp";
import gobizImage from "@/src/assets/gobiz.webp";
import fubisImage from "@/src/assets/fubis.webp";

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  impact?: string;
  image: StaticImageData;
  tags: string[];
  github: string;
  live?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "anatomic-auto-roi-detection",
    title: "Anatomic Auto ROI Detection",
    description:
      "Tıbbi görüntülerde anatomik bölgelerin otomatik tespiti ve ROI çıkarımı için geliştirilmiş yapay zeka projesi.",
    problem: "Manuel ROI seçimi zaman alıcı ve operatörden operatöre değişkenlik gösteriyordu.",
    solution:
      "Derin öğrenme tabanlı otomatik bölge tespiti ile görüntü analiz sürecini hızlandıran bir pipeline geliştirdim.",
    impact: "Analiz sürecinde tutarlılık artışı ve manuel müdahale ihtiyacında azalma.",
    image: roiImage,
    tags: ["Python", "Deep Learning", "Computer Vision", "ROI"],
    github: "https://github.com/turkmuhendisi/anatomic-auto-roi-detection",
  },
  {
    id: "mirasi-harput",
    title: "Mirası Harput",
    description:
      "Harput'un tarihî mirasını AR/XR teknolojileriyle oyunlaştırılmış bir mobil gezi deneyimine dönüştüren Android uygulaması.",
    image: harputImage,
    tags: ["Kotlin", "Jetpack Compose", "ARCore", "QR", "Android"],
    github: "https://github.com/turkmuhendisi/mirasi-harput",
  },
  {
    id: "yatagun-dombra",
    title: "Yatagun Dombra",
    description:
      "Türk etnik kültürüne özgü ürünlerin tanıtımı ve satışı için geliştirilmiş modern e-ticaret platformu.",
    image: yatagunImage,
    tags: ["React", "TypeScript", "Spring Boot", "Tailwind CSS"],
    github: "https://github.com/turkmuhendisi/yatagun-dombra",
    live: "https://yatagundombra.com",
  },
  {
    id: "generator",
    title: "Generator — Gobiz Enerji",
    description:
      "Gobiz Enerji için jeneratör izleme, yönetim ve operasyonel süreçleri dijitalleştiren kurumsal yazılım çözümü.",
    image: gobizImage,
    tags: ["Spring Boot", "Java", "PostgreSQL", "REST API"],
    github: "https://github.com/turkmuhendisi/generator",
  },
  {
    id: "rent-bicycle",
    title: "FÜBİS — Bisiklet Kiralama",
    description:
      "Fırat Üniversitesi için bisiklet kiralama, bakım takibi ve ödeme süreçlerini yöneten N-Tier mimarili masaüstü sistemi.",
    image: fubisImage,
    tags: ["C#", "Windows Forms", "MySQL", "MVC", "N-Tier"],
    github: "https://github.com/turkmuhendisi/Rent-Bicycle",
  },
];

export const featuredProject = portfolioProjects[0];

export const otherProjects = portfolioProjects.slice(1);

export function getProjectImageSrc(project: PortfolioProject): string {
  return project.image.src;
}
