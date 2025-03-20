import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import gridBg from "../../../assets/grid.svg";

const IntroSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0" style={{ backgroundImage: `url(${gridBg})`, opacity: 0.1 }}></div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center px-4"
            >
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    Samet Berkant Koca
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl mt-4 text-gray-300"
                >
                    Software Engineer - Backend Developer
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center justify-center gap-6 mt-8"
                >
                    <a 
                        href="https://linkedin.com/in/turkmuhendisi" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-gray-600 backdrop-blur-sm rounded-full text-white transition-all duration-300 transform"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                        href="https://github.com/turkmuhendisi" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-gray-600 backdrop-blur-sm rounded-full text-white transition-all duration-300 transform"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                </motion.div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full p-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce mx-auto"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default IntroSection;
