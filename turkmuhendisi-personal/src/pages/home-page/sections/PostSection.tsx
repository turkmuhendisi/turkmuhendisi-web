import PostCard from "../../components/PostCard";
import { motion } from "framer-motion";
import { getRecentPosts } from "../../../data/posts";

const PostsSection = () => {
    // Get the 6 most recent posts
    const posts = getRecentPosts(6);

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Son Yazılar</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        En son yazılarım ve güncellemelerim
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <PostCard 
                                id={post.id}
                                title={post.title} 
                                description={post.description} 
                                image={post.image} 
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PostsSection;