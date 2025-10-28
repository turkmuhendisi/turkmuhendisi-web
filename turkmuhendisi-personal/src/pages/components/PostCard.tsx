
import { Link } from "react-router-dom";

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
    <div className="group h-full">
      <Link to={`/blog/${id}`} className="block h-full">
        <div className="h-full bg-white/3 backdrop-blur-2xl rounded-3xl border border-white/5 shadow-lg overflow-hidden flex flex-col">
          {/* Image */}
          <div className="relative h-48 overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />

          </div>
          
          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Meta Info */}
            <div className="flex items-center justify-between mb-4">
              {category && (
                <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full border border-white/20">
                  {category}
                </span>
              )}
              {readTime && (
                <span className="text-gray-400 text-sm">{readTime}</span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white mb-3 leading-tight line-clamp-2">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed text-sm flex-1">
              {description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
              {date && (
                <span className="text-gray-500 text-sm">{date}</span>
              )}
              <div className="text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;