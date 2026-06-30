"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { BentoCard } from "@/src/components/ui/bento-card";
import { PageSectionHeader } from "@/src/components/ui/page-section-header";
import {
  featuredProject,
  otherProjects,
  getProjectImageSrc,
} from "@/src/data/portfolio-projects";

const FeaturedProjectsSection = () => {
  const flagship = featuredProject;
  const homeProjects = otherProjects.slice(0, 4);

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <PageSectionHeader
          title="İnşa Ettiğim Sistemler"
          description="Gerçek ihtiyaçlardan doğan, üretimde çalışan ve ölçülebilir sonuç veren projeler."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BentoCard className="md:col-span-3 min-h-[340px]" delay={0}>
            <div className="flex flex-col lg:flex-row h-full">
              <div className="relative lg:w-1/2 min-h-[200px] lg:min-h-0 border-b lg:border-b-0 lg:border-r border-white/5">
                <img
                  src={getProjectImageSrc(flagship)}
                  alt={flagship.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
                  <Star className="w-3.5 h-3.5 text-white/80" />
                  <span className="text-xs text-white/80 font-medium">Öne Çıkan Proje</span>
                </div>
              </div>
              <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {flagship.title}
                </h3>
                <div className="space-y-2.5 text-sm text-gray-500 mb-6 flex-1">
                  {flagship.problem && (
                    <p>
                      <span className="text-gray-400">Problem — </span>
                      {flagship.problem}
                    </p>
                  )}
                  {flagship.solution && (
                    <p>
                      <span className="text-gray-400">Çözüm — </span>
                      {flagship.solution}
                    </p>
                  )}
                  {flagship.impact && (
                    <p>
                      <span className="text-gray-400">Etki — </span>
                      {flagship.impact}
                    </p>
                  )}
                </div>
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
                <div className="flex items-center gap-4">
                  <a
                    href={flagship.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
                  >
                    GitHub&apos;da İncele
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={flagship.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-white/10 text-gray-500 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </BentoCard>

          {homeProjects.map((project, index) => (
            <BentoCard key={project.id} className="min-h-[320px]" delay={0.08 + index * 0.05}>
              <div className="relative h-36 border-b border-white/5">
                <img
                  src={getProjectImageSrc(project)}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs text-gray-500 bg-white/5 border border-white/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </BentoCard>
          ))}

          <BentoCard className="md:col-span-3 min-h-[100px]" delay={0.3}>
            <Link
              href="/projeler"
              className="flex items-center justify-between p-6 h-full group hover:bg-white/[0.02] transition-colors"
            >
              <div>
                <p className="text-white font-medium">Tüm projeleri keşfet</p>
                <p className="text-sm text-gray-500 mt-1">
                  AR/XR, yapay zeka, e-ticaret ve kurumsal sistemler
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                <span className="text-sm hidden sm:inline">Projeler sayfası</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
