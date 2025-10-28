import { motion } from "framer-motion";
import { Github } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

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
      title: "Education & Knowledge Sharing Platform",
      description: "A comprehensive platform for education and knowledge sharing, built with modern technologies including Spring Boot microservices, React frontend, and Kotlin mobile app.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
      tags: ["Spring Boot", "React", "Kotlin", "Microservices", "Docker"],
      link: "/presentation",
      github: "https://github.com/turkmuhendisi",
      live: "https://demo.example.com"
    },
    {
      id: "ecommerce-api",
      title: "E-commerce REST API",
      description: "A robust RESTful API for e-commerce applications with features like user management, product catalog, order processing, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      tags: ["Spring Boot", "PostgreSQL", "Redis", "JWT", "REST API"],
      link: "#",
      github: "https://github.com/turkmuhendisi",
      live: "https://api.example.com"
    },
    {
      id: "task-management",
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "TypeScript"],
      link: "#",
      github: "https://github.com/turkmuhendisi",
      live: "https://tasks.example.com"
    },
    {
      id: "blog-platform",
      title: "Modern Blog Platform",
      description: "A feature-rich blog platform with markdown support, SEO optimization, analytics dashboard, and content management system.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Vercel"],
      link: "#",
      github: "https://github.com/turkmuhendisi",
      live: "https://blog.example.com"
    },
    {
      id: "chat-application",
      title: "Real-time Chat Application",
      description: "A modern real-time chat application with features like group chats, file sharing, message encryption, and push notifications.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800&h=400&fit=crop",
      tags: ["React", "Socket.io", "Express.js", "MongoDB", "WebRTC"],
      link: "#",
      github: "https://github.com/turkmuhendisi",
      live: "https://chat.example.com"
    },
    {
      id: "analytics-dashboard",
      title: "Data Analytics Dashboard",
      description: "A comprehensive analytics dashboard for visualizing business metrics, user behavior, and performance data with interactive charts and reports.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      tags: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      link: "#",
      github: "https://github.com/turkmuhendisi",
      live: "https://analytics.example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-300">Projects</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Featured
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing modern web development, microservices architecture, and innovative solutions
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
              <span className="text-gray-300 text-sm">More projects on</span>
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