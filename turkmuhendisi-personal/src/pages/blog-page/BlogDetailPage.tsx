import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react";
import { getPost } from "../../data/posts";

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = getPost(id || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/3 backdrop-blur-2xl rounded-2xl border border-white/5 shadow-lg"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 transition-colors mb-8 group"
                >
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Articles
                </Link>

                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-300 text-sm">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex items-center gap-6 text-gray-300">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/3 backdrop-blur-2xl rounded-3xl p-4 sm:p-8 md:p-12 border border-white/5 shadow-lg"
          >
            <div
              className="prose prose-lg prose-invert max-w-none overflow-hidden"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: '#f3f4f6',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                '--tw-prose-body': '#f3f4f6',
                '--tw-prose-headings': '#ffffff',
                '--tw-prose-links': '#60a5fa',
                '--tw-prose-bold': '#ffffff',
                '--tw-prose-counters': '#9ca3af',
                '--tw-prose-bullets': '#6b7280',
                '--tw-prose-hr': '#374151',
                '--tw-prose-quotes': '#e5e7eb',
                '--tw-prose-quote-borders': '#374151',
                '--tw-prose-captions': '#9ca3af',
                '--tw-prose-code': '#ffffff',
                '--tw-prose-pre-code': '#e5e7eb',
                '--tw-prose-pre-bg': '#1f2937',
                '--tw-prose-th-borders': '#4b5563',
                '--tw-prose-td-borders': '#374151'
              } as React.CSSProperties}
            />
          </motion.div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Share this article:</span>
              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-all duration-300">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/3 backdrop-blur-2xl rounded-2xl border border-white/5 shadow-lg"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">More Articles</h2>
            <p className="text-gray-300">Explore more articles on similar topics</p>
          </motion.div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/3 backdrop-blur-2xl rounded-2xl border border-white/5 shadow-lg"
            >
              View All Articles
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage; 