import { motion } from "framer-motion";

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Sistemimizin altyapısını modernize etme sürecinde aldığımız hizmet tam anlamıyla mükemmeldi. Kesintisiz geçiş ve yüksek performans elde ettik.",
            name: "Ahmet Yılmaz",
            role: "CTO, TechCorp",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        },
        {
            quote: "Scale edilebilir API çözümleri sayesinde müşteri trafiğimizdeki ani artışları sorunsuz bir şekilde yönetebiliyoruz. Kesinlikle tavsiye ederim.",
            name: "Ayşe Kaya",
            role: "Kurucu Ortak, StartupX",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
        },
        {
            quote: "Veritabanı optimizasyonu sonrası sorgu sürelerimiz %80 oranında düştü. Hızlı ve güvenilir bir çözüm ortağı bulduğumuz için şanslıyız.",
            name: "Mehmet Demir",
            role: "Lead Engineer, DataSys",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
                        Müşterilerimiz Ne Diyor?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Birlikte çalıştığımız değerli markaların ve yöneticilerin deneyimleri.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 transition-colors"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-300 italic mb-8 h-24">"{testimonial.quote}"</p>
                            
                            <div className="flex items-center gap-4">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/10" />
                                <div>
                                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
