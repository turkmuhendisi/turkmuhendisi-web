import { motion } from "framer-motion";

const StatsSection = () => {
    const stats = [
        { label: "Yıllık Deneyim", value: "5+" },
        { label: "Tamamlanan Proje", value: "40+" },
        { label: "Mutlu Müşteri", value: "25+" },
        { label: "Kahve Fincanı", value: "999+" }
    ];

    return (
        <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-xl relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center justify-center text-center px-4"
                        >
                            <h4 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                                {stat.value}
                            </h4>
                            <p className="text-gray-400 font-medium text-sm md:text-base">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
