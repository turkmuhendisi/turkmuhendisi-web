"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail, ArrowRight } from "lucide-react";

const ContactCTASection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Birlikte İnşa Edelim</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Yeni bir ürün, sistem dönüşümü veya teknik danışmanlık için iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="mailto:info@turkmuhendisi.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Proje Konuşalım
            </a>
            <Link
              href="/hakkimda"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-2xl hover:bg-white/10 transition-colors"
            >
              Hakkımda Sayfasına Git
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/turkmuhendisi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-gray-300" />
            </a>
            <a
              href="https://github.com/turkmuhendisi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 text-gray-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTASection;
