import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PostCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  readTime?: string;
  date?: string;
}

const PostCard = ({ id, title, description, image, category, readTime, date }: PostCardProps) => {
  return (
    <Link href={`/yazilar/${id}`} className="block h-full group">
      <div className="h-full bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-white/20 transition-colors">
        <div className="relative h-40 border-b border-white/5 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            {category && (
              <span className="px-2.5 py-1 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full">
                {category}
              </span>
            )}
            {readTime && <span className="text-xs text-gray-500">{readTime}</span>}
          </div>

          <h3 className="text-base font-semibold text-white mb-2 leading-tight line-clamp-2">
            {title}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed flex-1 mb-4">
            {description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
            {date && <span className="text-xs text-gray-500">{date}</span>}
            <span className="inline-flex items-center gap-1 text-xs text-gray-400 group-hover:text-white transition-colors">
              Oku
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
