import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  live?: string;
}

const ProjectCard = ({ title, description, image, tags, link, github, live }: ProjectCardProps) => {
  const isExternal = link.startsWith("http");

  const detailLink = (
    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
      {isExternal ? "GitHub" : "Detay"}
      {isExternal ? <ExternalLink className="h-3 w-3" /> : <ArrowRight className="h-3.5 w-3.5" />}
    </span>
  );

  return (
    <div className="h-full bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-white/20 transition-colors group">
      <div className="relative h-36 border-b border-white/5 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs text-gray-500 bg-white/5 border border-white/5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
          {isExternal ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {detailLink}
            </a>
          ) : (
            <Link href={link}>{detailLink}</Link>
          )}
          <div className="flex items-center gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Canlı demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
