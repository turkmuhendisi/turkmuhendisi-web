import { Compass, Layers, Shield, Code2 } from "lucide-react";

const principles = [
  {
    title: "Köklerden İlham, Bugünün Teknolojisi",
    description:
      "Geçmişin yenilikçi ruhundan ilham alır, modern mühendislik araçlarıyla geleceğe kalıcı sistemler inşa ederim.",
    icon: Compass,
  },
  {
    title: "Sade Mimari, Güçlü Sistem",
    description:
      "Gereksiz karmaşıklık yerine anlaşılır, sürdürülebilir ve genişletilebilir mimariler tercih ederim.",
    icon: Layers,
  },
  {
    title: "Ölçeklenebilirlik ve Güvenlik",
    description: "Trafik artışına hazır, güvenli ve gözlemlenebilir altyapılar kurarım.",
    icon: Shield,
  },
  {
    title: "Uzun Ömürlü Kod",
    description:
      "Okunabilir, test edilebilir ve ekip dostu kod tabanları oluşturmayı önceliklendiririm.",
    icon: Code2,
  },
];

const EngineeringApproachSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Nasıl Düşünüyorum,
              <br />
              Nasıl İnşa Ediyorum
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Doğru mimariyi kurmak, emekle üretmek ve istikrarlı sistemler bırakmak.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Her sistem, bir ihtiyacın cevabıdır. Benim için mühendislik; sadece kod yazmak değil,
              doğru problemi doğru mimariyle çözmektir. Geçmişin birikiminden güç alır, bugünün
              teknolojileriyle geleceğe kalıcı eserler bırakırım.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <principle.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{principle.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproachSection;
