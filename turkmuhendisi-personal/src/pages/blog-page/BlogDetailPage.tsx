import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Share2, MessageCircle, Heart, Linkedin, Twitter, Facebook, Mail, Send } from "lucide-react";
import { getPost, getRecentPosts } from "../../data/posts";

const BlogDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const post = getPost(id || "");

    if (!post) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Yazı Bulunamadı</h1>
                    <p className="text-gray-400 mb-8">Aradığınız yazı mevcut değil.</p>
                    <Link
                        to="/yazilar"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/3 backdrop-blur-2xl rounded-2xl border border-white/5 shadow-lg"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Yazılara Dön
                    </Link>
                </div>
            </div>
        );
    }

    // Get a few related posts safely (excluding current post)
    const relatedPosts = getRecentPosts(5).filter(p => p.id !== post.id).slice(0, 4);

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Back Link */}
                <Link to="/yazilar" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="h-4 w-4" /> Yazılara Dön
                </Link>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* LEFT COLUMN: Main Content */}
                    <div className="lg:w-2/3">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
                                <div className="flex items-center gap-2">
                                    <img src={post.authorImage || "https://avatars.githubusercontent.com/u/74829377?v=4"} alt={post.author} className="w-8 h-8 rounded-full border border-white/10 object-cover" />
                                    <span className="text-gray-200 font-medium">{post.author}</span>
                                </div>
                                <span className="text-gray-600">•</span>
                                <span>{post.category}</span>
                                <span className="text-gray-600">•</span>
                                <span>{post.date}</span>
                                <span className="text-gray-600">•</span>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>

                            <div className="rounded-3xl overflow-hidden mb-10 border border-white/5 bg-white/5">
                                <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover" />
                            </div>

                            <div
                                className="prose prose-invert prose-lg max-w-none mb-12"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Engagement Footer */}
                            <div className="border-t border-white/10 pt-6 mt-12 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-400 text-sm font-medium">
                                    <button className="flex items-center gap-2 hover:text-white transition-colors">
                                        <Heart className="w-5 h-5" /> 1.3 B
                                    </button>
                                    <button className="flex items-center gap-2 hover:text-white transition-colors">
                                        <MessageCircle className="w-5 h-5" /> 55 Yorum
                                    </button>
                                    <button className="flex items-center gap-2 hover:text-white transition-colors">
                                        <Share2 className="w-5 h-5" /> 960 Paylaşım
                                    </button>
                                </div>
                                <div className="w-full sm:w-auto flex-1 sm:ml-8 relative">
                                    <input
                                        type="text"
                                        placeholder="Bir yorum yaz..."
                                        className="w-full bg-white/5 border border-white/10 rounded-full pl-5 pr-12 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
                                    />
                                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Sidebar */}
                    <div className="lg:w-1/3 lg:border-l lg:border-white/5 lg:pl-10">
                        <div className="sticky top-24">
                            {/* Share Buttons */}
                            <div className="mb-12">
                                <h3 className="text-xl font-bold text-white mb-6">Paylaş</h3>
                                <div className="flex flex-wrap items-center gap-3">
                                    <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </button>
                                    <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                                        <MessageCircle className="w-5 h-5" />
                                    </button>
                                    <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </button>
                                    <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                                        <Facebook className="w-5 h-5" />
                                    </button>
                                    <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Related Articles */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6">İlgili Yazılar</h3>
                                <div className="space-y-6">
                                    {relatedPosts.map((rPost, idx) => (
                                        <Link to={`/yazilar/${rPost.id}`} key={idx} className="group flex gap-4 items-center">
                                            <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-white/5 border border-white/10">
                                                <img src={rPost.image} alt={rPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-gray-200 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight mb-2">
                                                    {rPost.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 font-medium">{rPost.category}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;