"use client";

import {
  Smartphone,
  Cloud,
  Code2,
  Shield,
  Fingerprint,
} from "lucide-react";
import { BentoCard } from "@/src/components/ui/bento-card";

function WaveChart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={`w-full h-full ${className}`} preserveAspectRatio="none">
      <path
        d="M0 40 Q25 10 50 35 T100 25 T150 40 T200 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-white/60"
      />
      <path
        d="M0 50 Q30 30 60 45 T120 35 T180 50 T200 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-white/25"
      />
    </svg>
  );
}

function SparklineChart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 100" className={`w-full h-full ${className}`} preserveAspectRatio="none">
      <path
        d="M0 70 L20 65 L40 72 L60 45 L80 55 L100 30 L120 50 L140 20 L160 40 L180 25 L200 45 L220 15 L240 35 L260 10 L280 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-white/70"
      />
    </svg>
  );
}

const ServicesSection = () => {
  const techPills = ["Docker", "Kubernetes", "CI/CD", "AWS"];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ürettiğim Çözümler</h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-lg">
            Fikirden canlı sisteme uzanan, ölçeklenebilir ve sürdürülebilir mühendislik çözümleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Üst sıra — 3 kart */}
          <BentoCard className="min-h-[300px] p-6" delay={0}>
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                <svg
                  viewBox="0 0 120 80"
                  className="w-40 h-28 text-white/30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <ellipse cx="60" cy="40" rx="52" ry="32" strokeDasharray="4 3" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Smartphone className="w-10 h-10 text-white/80" strokeWidth={1.5} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Android Geliştirme</h3>
              <p className="text-sm text-gray-500 mt-1">Kotlin tabanlı, performans odaklı mobil uygulamalar</p>
            </div>
          </BentoCard>

          <BentoCard className="min-h-[300px] p-6" delay={0.05}>
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center">
                <Fingerprint className="w-6 h-6 text-white/70" strokeWidth={1.5} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-3">Güvenli iOS Çözümleri</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Kullanıcı deneyimi güçlü, güvenli veri yönetimi ve App Store optimizasyonu ile
                ölçeklenebilir iOS uygulamaları.
              </p>
            </div>
          </BentoCard>

          <BentoCard className="min-h-[300px] p-6" delay={0.1}>
            <div className="flex-1 flex flex-col justify-end mb-4">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span>Canlı veri</span>
                <span className="text-white/70">↑ 99.9%</span>
              </div>
              <div className="h-16">
                <WaveChart />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">IoT Çözümleri</h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                Cihazdan buluta veri akışı ve gerçek zamanlı izleme sistemleri.
              </p>
            </div>
          </BentoCard>

          {/* Alt sıra — 2 geniş kart */}
          <BentoCard className="md:col-span-2 min-h-[260px] p-6" delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-6 h-full">
              <div className="flex-1 flex flex-col">
                <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Mikroservis Mimarisi</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                  Yüksek trafikte stabil çalışan dağıtık sistemler. Servis ayrıştırma, event-driven
                  yapı ve yatay ölçeklenebilirlik.
                </p>
              </div>
              <div className="flex-1 min-h-[120px] sm:min-h-0 border border-white/5 rounded-xl p-4 bg-white/[0.02]">
                <SparklineChart />
              </div>
            </div>
          </BentoCard>

          <BentoCard className="min-h-[260px] p-6" delay={0.2}>
            <div className="flex flex-col h-full">
              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 text-white/70" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Backend API</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                RESTful ve GraphQL tabanlı, güvenli ve gözlemlenebilir API&apos;ler.
              </p>
              <div className="mt-auto space-y-2">
                {["Auth", "Rate Limit", "Metrics"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 border border-white/5"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/10 shrink-0" />
                    <span className="text-xs text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Alt tam genişlik — Bulut & DevOps */}
          <BentoCard className="md:col-span-3 min-h-[180px] p-6" delay={0.25}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 h-full">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center shrink-0">
                  <Cloud className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Bulut ve DevOps</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                    Üretim ortamına güvenli geçiş, CI/CD pipeline ve sürdürülebilir deployment süreçleri.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {techPills.map((pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1.5 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
