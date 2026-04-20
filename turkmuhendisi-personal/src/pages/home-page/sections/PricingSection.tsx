import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PricingSection = () => {
    const plans = [
        {
            name: "Başlangıç",
            price: "Ücretsiz",
            description: "Küçük projeler ve bireysel kullanımlar için temel özellikler.",
            features: ["Temel API Erişimi", "Standart Destek", "5 GB Depolama", "Topluluk Erişimi"],
            recommended: false,
            buttonText: "Hemen Başla"
        },
        {
            name: "Pro",
            price: "₺499/ay",
            description: "Büyüyen ekipler ve orta ölçekli projeler için geliştirilmiş özellikler.",
            features: ["Sınırsız API Erişimi", "Öncelikli 7/24 Destek", "50 GB Depolama", "Gelişmiş Analitik"],
            recommended: true,
            buttonText: "Pro'ya Geç"
        },
        {
            name: "Kurumsal",
            price: "Özel",
            description: "Büyük ölçekli firmalar için tamamen özelleştirilebilir çözümler.",
            features: ["Özel Sunucu Mimarisi", "Özel Müşteri Temsilcisi", "Sınırsız Depolama", "SLA Garantisi"],
            recommended: false,
            buttonText: "İletişime Geç"
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
                        Esnek ve Şeffaf Fiyatlandırma
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        İhtiyaçlarınıza en uygun planı seçin ve projenizi hemen ölçeklendirmeye başlayın.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white/5 border rounded-3xl p-8 ${plan.recommended ? 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/20' : 'border-white/10 hover:bg-white/10'} transition-all duration-300`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                                        En Çok Tercih Edilen
                                    </span>
                                </div>
                            )}
                            
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <div className="mb-4">
                                <span className={plan.price === "Özel" || plan.price === "Ücretsiz" ? "text-3xl font-bold text-white" : "text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"}>
                                    {plan.price}
                                </span>
                            </div>
                            <p className="text-gray-400 mb-8 h-12">{plan.description}</p>
                            
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                        <div className="bg-blue-500/20 rounded-full p-1 mr-3 flex-shrink-0">
                                            <Check className="w-3 h-3 text-blue-400" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            <button className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${plan.recommended ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/25' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                                {plan.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
