
import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

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
  return (
    <div className="group h-full">
      <div className="h-full bg-white/3 backdrop-blur-2xl rounded-3xl border border-white/5 shadow-lg overflow-hidden flex flex-col">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />

        </div>
        
        {/* Project Content */}
        <div className="p-6 flex flex-col h-full">
          {/* Project Title */}
          <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
            {title}
          </h3>

          {/* Project Description */}
          <p className="text-gray-400 mb-4 leading-relaxed text-sm flex-1 line-clamp-3">
            {description}
          </p>

          {/* Project Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Actions */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <Link
              to={link}
              className="flex items-center gap-2 text-blue-400"
            >
              <span className="font-medium text-sm">View Project</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex items-center gap-2">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-xl text-gray-400"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-xl text-gray-400"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 