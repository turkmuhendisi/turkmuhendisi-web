import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PostCard = ({ title, description, image, id }: { title: string; description: string; image: string; id: number }) => {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
            <Link to={`/blog/${id}`} className="block">
                <div className="relative overflow-hidden">
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                        {description}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                        <span>Devamını Oku</span>
                        <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default PostCard;