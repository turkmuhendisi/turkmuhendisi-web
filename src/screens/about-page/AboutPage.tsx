"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, FileText, Briefcase, Code, Monitor, Wrench, Lightbulb, Award, Globe, Database, Server } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { PageSectionHeader } from "@/src/components/ui/page-section-header";
import { BentoCard } from "@/src/components/ui/bento-card";

interface Education {
  degree: string;
  school: string;
  year: string;
}

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
}

interface TechStack {
  backend: string[];
  frontend: string[];
  tools: string[];
  platforms: string[];
  approaches: string[];
}

const personalInfo = {
  name: "Samet Berkant Koca",
  title: "Yazılım Mühendisi & Backend Geliştirici",
  bio: "Ölçeklenebilir çözümler geliştirme konusunda deneyime sahip yazılım mühendisi. Mikroservis mimarisi, REST API tasarımı ve veritabanı optimizasyonunda uzmanlaştım. Temiz, sürdürülebilir kod yazmaya ve modern teknolojileri güncel takip etmeye kararlıyım.",
  location: "İstanbul, Türkiye",
  email: "info@turkmuhendisi.com",
  github: "https://github.com/turkmuhendisi",
  linkedin: "https://linkedin.com/in/turkmuhendisi",
  resume: "#",
  education: [
    {
      degree: "Yazılım Mühendisliği",
      school: "Fırat Üniversitesi",
      year: "2022 - 2026",
    },
  ] as Education[],
  experience: [
    {
      position: "Yazılım Mühendisi",
      company: "ASRIN GLOBAL",
      period: "2025 - Günümüz",
      description: "Mikroservis mimarisi, sistem tasarımı ve RESTful API geliştirme ile backend sistemleri oluşturuyorum.",
    },
    {
      position: "Yazılım Mühendisi",
      company: "GOBİZ ENERJİ",
      period: "2025 - Günümüz",
      description: "Spring Boot ile web uygulamaları geliştirme, veritabanı tasarımı ve API optimizasyonu.",
    },
  ] as Experience[],
  techStack: {
    backend: ["Spring Boot", "Java", "Kotlin", "PostgreSQL", "Redis"],
    frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    tools: ["Git & GitHub", "Docker", "Kubernetes", "Postman", "Figma"],
    platforms: ["AWS", "Google Cloud", "Azure", "Linux"],
    approaches: ["Mikroservis Mimarisi", "RESTful API", "TDD", "Agile", "CI/CD"],
  } as TechStack,
};

const techCategories = [
  { title: "Backend", icon: Server, items: personalInfo.techStack.backend },
  { title: "Frontend", icon: Monitor, items: personalInfo.techStack.frontend },
  { title: "Araçlar", icon: Wrench, items: personalInfo.techStack.tools },
  { title: "Platformlar", icon: Globe, items: personalInfo.techStack.platforms },
  { title: "Veritabanı", icon: Database, items: ["PostgreSQL", "Redis", "MongoDB"] },
  { title: "Yaklaşımlar", icon: Lightbulb, items: personalInfo.techStack.approaches },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <PageSectionHeader title="Hakkımda" description={personalInfo.title} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Profil */}
          <BentoCard className="md:col-span-2 p-6 md:p-8" delay={0}>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                <img
                  src="https://avatars.githubusercontent.com/u/74829377?v=4"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white mb-1">{personalInfo.name}</h2>
                <p className="text-sm text-gray-500 mb-4">{personalInfo.title}</p>
                <div className="flex flex-col gap-2 text-sm text-gray-500 mb-5">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    {personalInfo.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{personalInfo.bio}</p>
              </div>
            </div>
          </BentoCard>

          {/* Sosyal */}
          <BentoCard className="p-6 flex flex-col justify-center" delay={0.05}>
            <p className="text-sm text-gray-500 mb-4">Bağlantılar</p>
            <div className="flex gap-3">
              {[
                { href: personalInfo.github, Icon: FaGithub, label: "GitHub" },
                { href: personalInfo.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
                { href: personalInfo.resume, Icon: FileText, label: "Özgeçmiş" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </BentoCard>

          {/* Deneyim */}
          <BentoCard className="md:col-span-2 p-6" delay={0.1}>
            <div className="flex items-center gap-2 mb-5">
              <Briefcase className="w-5 h-5 text-gray-500" />
              <h3 className="text-base font-semibold text-white">Profesyonel Deneyim</h3>
            </div>
            <div className="space-y-5">
              {personalInfo.experience.map((exp) => (
                <div key={exp.company} className="border-l-2 border-white/10 pl-4">
                  <h4 className="text-sm font-medium text-white">{exp.position}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {exp.company} · {exp.period}
                  </p>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Eğitim */}
          <BentoCard className="p-6" delay={0.15}>
            <div className="flex items-center gap-2 mb-5">
              <Award className="w-5 h-5 text-gray-500" />
              <h3 className="text-base font-semibold text-white">Eğitim</h3>
            </div>
            {personalInfo.education.map((edu) => (
              <div key={edu.school}>
                <h4 className="text-sm font-medium text-white">{edu.degree}</h4>
                <p className="text-sm text-gray-500 mt-1">{edu.school}</p>
                <p className="text-xs text-gray-600 mt-0.5">{edu.year}</p>
              </div>
            ))}
          </BentoCard>

          {/* Teknik yetenekler — bento grid */}
          <BentoCard className="md:col-span-3 p-6" delay={0.2}>
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-5 h-5 text-gray-500" />
              <h3 className="text-base font-semibold text-white">Teknik Yetenekler</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techCategories.map((cat, index) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/[0.03] border border-white/5 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <cat.icon className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-white">{cat.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 text-xs text-gray-500 bg-white/5 border border-white/5 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
