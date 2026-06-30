"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Keşif ve Analiz",
    description: "İhtiyaç analizi, teknik fizibilite ve proje kapsamının netleştirilmesi.",
    output: "Kapsam dokümanı",
    icon: Search,
  },
  {
    step: "02",
    title: "Mimari Tasarım",
    description: "Sistem diyagramı, veri modeli ve teknoloji seçiminin belirlenmesi.",
    output: "Mimari plan",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Geliştirme",
    description: "Modüler geliştirme, code review ve test odaklı iterasyon.",
    output: "MVP / modüller",
    icon: Code2,
  },
  {
    step: "04",
    title: "Yayınlama",
    description: "CI/CD pipeline, staging testleri ve production deployment.",
    output: "Canlı sürüm",
    icon: Rocket,
  },
  {
    step: "05",
    title: "İzleme ve İyileştirme",
    description: "Log, metric ve performans takibi ile sürekli optimizasyon.",
    output: "İyileştirme raporu",
    icon: LineChart,
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Fikirden Canlı Sisteme
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Şeffaf, planlı ve ölçülebilir bir geliştirme süreci.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-400">{item.step}</span>
                <item.icon className="w-5 h-5 text-gray-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
              <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                Çıktı: {item.output}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
