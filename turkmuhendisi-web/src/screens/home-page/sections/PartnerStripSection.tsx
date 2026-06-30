"use client";

import { motion } from "framer-motion";

const PartnerStripSection = () => {
  const services = [
    "Android Uygulama Geliştirme",
    "iOS Uygulama Geliştirme",
    "IoT Çözümleri",
    "Mikroservis Mimarisi",
    "Backend API Geliştirme",
    "Bulut ve DevOps",
    "Veritabanı Tasarımı",
    "Yapay Zeka Entegrasyonları",
  ];
  const marqueeItems = [...services, ...services];

  return (
    <section className="relative z-10 border-y border-white/10 bg-zinc-950/80 py-6 backdrop-blur-sm">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden px-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-28 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent sm:w-36 md:w-44" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-28 bg-gradient-to-l from-zinc-950 via-zinc-950/70 to-transparent sm:w-36 md:w-44" />

        <motion.div
          className="flex w-max items-center gap-8 md:gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {marqueeItems.map((service, index) => (
            <div key={`${service}-${index}`} className="flex items-center gap-8 md:gap-12">
              <span className="whitespace-nowrap text-base font-medium tracking-wide text-white/90 md:text-lg">
                {service}
              </span>
              <span className="text-white/35">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerStripSection;
