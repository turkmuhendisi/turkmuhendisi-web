"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GalaxyWaveBackground } from "@/src/components/ui/galaxy-wave-background";

const IntroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start bg-black text-white overflow-hidden">
      <GalaxyWaveBackground />

      <div className="hero-content relative z-10 w-full max-w-7xl mx-auto px-6 text-left">
        <div className="max-w-5xl space-y-6 sm:space-y-7 md:space-y-8">
          <h1 className="text-[clamp(2rem,7vw,5.75rem)] font-bold tracking-tight leading-[1.08]">
            <span className="block text-white">Geçmişin Mirasıyla,</span>
            <span className="block mt-2 text-white">Geleceğin İnşasına.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed">
            İlmi veren Allah&apos;tır; bize düşen, çalışmak ve üretmektir.
          </p>

          <div className="flex items-center justify-start gap-6 pt-8">
            <a
              href="https://linkedin.com/in/turkmuhendisi"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://github.com/turkmuhendisi"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
            >
              <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 font-light">Keşfetmek için kaydırın</span>
          <div className="w-6 h-10 border border-white/20 rounded-full p-1">
            <div className="scroll-hint-dot w-1.5 h-1.5 bg-white rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
