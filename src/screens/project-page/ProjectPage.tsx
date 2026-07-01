"use client";

import { FaGithub } from "react-icons/fa6";
import { ArrowRight, Star } from "lucide-react";
import { PageSectionHeader } from "@/src/components/ui/page-section-header";
import { BentoCard } from "@/src/components/ui/bento-card";
import ProjectCard from "../components/ProjectCard";
import {
  featuredProject,
  otherProjects,
  getProjectImageSrc,
} from "@/src/data/portfolio-projects";

const ProjectPage = () => {
  const flagship = featuredProject;

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <PageSectionHeader
          title="İnşa Ettiğim Sistemler"
          description="Gerçek ihtiyaçlardan doğan, üretimde çalışan ve ölçülebilir sonuç veren projeler."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard className="md:col-span-3 min-h-[300px]" delay={0}>
            <div className="flex flex-col lg:flex-row h-full">
              <div className="relative lg:w-2/5 min-h-[200px] border-b lg:border-b-0 lg:border-r border-white/5">
                <img
                  src={getProjectImageSrc(flagship)}
                  alt={flagship.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  <Star className="w-3.5 h-3.5 text-white/80" />
                  <span className="text-xs text-white/80">Öne Çıkan</span>
                </div>
              </div>
              <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">{flagship.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{flagship.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {flagship.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  GitHub&apos;da İncele
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </BentoCard>

          {otherProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                image={getProjectImageSrc(project)}
                tags={project.tags}
                link={project.github}
                github={project.github}
                live={project.live}
              />
            </div>
          ))}

          <BentoCard className="md:col-span-3" delay={0.3}>
            <a
              href="https://github.com/turkmuhendisi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 group hover:bg-white/[0.02] transition-colors"
            >
              <div>
                <p className="text-white font-medium text-sm">Daha fazla proje için GitHub</p>
                <p className="text-gray-500 text-xs mt-1">Açık kaynak repolar ve kaynak kodlar</p>
              </div>
              <FaGithub className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
            </a>
          </BentoCard>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
