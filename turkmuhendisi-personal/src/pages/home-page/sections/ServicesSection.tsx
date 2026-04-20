import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud } from "lucide-react";

const ServicesSection = () => {
    const services = [
        {
            title: "Backend Geliştirme",
            description: "Yüksek performanslı, ölçeklenebilir ve güvenli sunucu tarafı uygulamaları.",
            icon: Server,
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Veritabanı Tasarımı",
            description: "Karmaşık verileri yönetmek için optimize edilmiş ilişkisel ve NoSQL veritabanları.",
            icon: Database,
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "API Geliştirme",
            description: "Modern uygulamalar için RESTful ve GraphQL API tasarımları.",
            icon: Code2,
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Bulut Bilişim",
            description: "AWS, Azure ve Google Cloud üzerinde dağıtık sistem mimarileri.",
            icon: Cloud,
            color: "from-orange-500 to-yellow-500"
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16 md:text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                    >
                        Neler Yapıyorum?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Modern teknolojiler kullanarak işletmeler için kalıcı, ölçeklenebilir ve güvenli çözümler üretiyorum.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors group"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-6 shadow-lg transform group-hover:-translate-y-2 transition-all duration-300`}>
                                <service.icon className="w-full h-full text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
