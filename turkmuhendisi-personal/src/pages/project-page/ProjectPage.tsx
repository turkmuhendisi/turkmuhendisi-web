import { motion } from "framer-motion";
import { Github } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { SEO } from "../../components/SEO";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  live?: string;
}

const ProjectPage = () => {
  const projects: Project[] = [
    {
      id: "education-platform",
      title: "Eğitim ve Bilgi Paylaşım Platformu",
      description: "Spring Boot, React ve Kotlin mobil uygulaması ile geliştirilmiş kapsamlı bir eğitim ve bilgi paylaşım platformu.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
      tags: ["Spring Boot", "React", "Kotlin", "Microservices", "Docker"],
      link: "/projeler/egitim-platformu",
      github: "https://github.com/turkmuhendisi",
      live: "https://demo.example.com"
    },
    {
      id: "ecommerce-api",
      title: "E-ticaret REST API",
      description: "Kullanıcı yönetimi, ürün kataloğu, sipariş işleme ve ödeme entegrasyonu sunan güçlü e-ticaret API.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      tags: ["Spring Boot", "PostgreSQL", "Redis", "JWT", "REST API"],
      link: "#",
      github: "https://github.com/turkmuhendisi",
      live: "https://api.example.com"
    },
    {
      id: "task-management",
      title: "Görev Yönetim Sistemi",
      description: "Gerçek zamanlı güncellemeler ve gelişmiş proje takip özellikleri sunan işbirlikçi görev yönetim uygulaması.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "TypeScript"],
      link: "#",
      github: "https://github.com/turkmuhendisi",
      live: "https://tasks.example.com"
    },
    {
      id: "blog-platform",
      title: "Modern Blog Platformu",
      description: "Markdown desteği, SEO optimizasyonu ve analitik paneli içeren zengin özellikli blog platformu.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Vercel"],
      link: "#",
      github: "https://github.com/turkmuhendisi",
      live: "https://blog.example.com"
    },
    {
      id: "chat-application",
      title: "Gerçek Zamanlı Sohbet Uygulaması",
      description: "Grup sohbeti, dosya paylaşımı ve anlık bildirim özellikleri sunan modern mesajlaşma çözümü.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800&h=400&fit=crop",
      tags: ["React", "Socket.io", "Express.js", "MongoDB", "WebRTC"],
      link: "#",
      github: "https://github.com/turkmuhendisi",
      live: "https://chat.example.com"
    },
    {
      id: "analytics-dashboard",
      title: "Veri Analitiği Paneli",
      description: "İş metrikleri, kullanıcı davranışları ve performans verilerini etkileşimli grafiklerle görselleştiren analiz paneli.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      link: "#",
      github: "https://github.com/turkmuhendisi",
      live: "https://analytics.example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Güçlü Projeler ve Çalışmalarım | Türkmühendisi"
        description="Modern web geliştirme, mikroservis mimarisi ve yenilikçi çözümleri sergileyen projeler topluluğu."
        canonical="/projeler"
        schemaType="CollectionPage"
        keywords={["yazılım projeleri", "portfolio", "mikroservis projeleri", "react projeleri", "spring boot projeleri"]}
        image="/post-bg.jpg"
        imageAlt="Türkmühendisi projeler sayfası"
      />
      {/* Hero Section */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >


            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Öne Çıkan
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projeler
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Modern web geliştirme, mikroservis mimarisi ve yenilikçi çözümleri sergileyen projeler topluluğu
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  link={project.link}
                  github={project.github}
                  live={project.live}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <span className="text-gray-300 text-sm">Daha fazla proje için:</span>
              <a
                href="https://github.com/turkmuhendisi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors font-medium flex items-center gap-2"
              >
                GitHub
                <Github className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage; 
