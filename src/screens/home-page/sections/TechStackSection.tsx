"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Backend",
    items: ["Spring Boot", "Java", "Kotlin", "PostgreSQL", "Redis"],
  },
  {
    title: "Frontend / Web",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Mobil",
    items: ["Android", "iOS", "Kotlin"],
  },
  {
    title: "Altyapı",
    items: ["Docker", "Kubernetes", "AWS", "Linux"],
  },
  {
    title: "Yaklaşımlar",
    items: ["Mikroservis", "REST API", "TDD", "CI/CD", "Agile"],
  },
];

const TechStackSection = () => {
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
            Kullandığım Teknolojiler
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Proje ihtiyacına göre doğru aracı seçen, uçtan uca üretim yapabilen bir yığın.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-white font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-white/10 text-gray-300 text-sm rounded-full border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
