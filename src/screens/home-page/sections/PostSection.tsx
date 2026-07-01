import PostCard from "../../components/PostCard";
import type { Post } from "@/src/data/posts";

interface PostSectionProps {
  posts: Post[];
}

const PostSection = ({ posts }: PostSectionProps) => {
  return (
    <section className="py-24 bg-black text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Mühendislik Notları</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Mimari kararlar, üretim deneyimleri ve öğrendiklerim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {posts.map((post) => (
            <div key={post.id} className="h-full">
              <PostCard
                id={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                category={post.category}
                readTime={post.readTime}
                date={post.date}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/yazilar"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-300 group"
          >
            <span className="text-white font-medium">Tüm Yazıları Gör</span>
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PostSection;
