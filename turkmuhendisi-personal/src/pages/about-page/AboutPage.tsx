import { motion } from "framer-motion";
import { MapPin, Mail, Github, Linkedin, FileText, Briefcase, Code, Monitor, Wrench, Lightbulb, Award, Globe, Database, Server } from "lucide-react";
import { SEO } from "../../components/SEO";
// import resumePDF from "../../assets/resume.pdf";

interface Education {
  degree: string;
  school: string;
  year: string;
}

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
}

interface TechStack {
  backend: string[];
  frontend: string[];
  tools: string[];
  platforms: string[];
  approaches: string[];
}

interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  education: Education[];
  experience: Experience[];
  techStack: TechStack;
}

const AboutPage = () => {
  const personalInfo: PersonalInfo = {
    name: "Samet Berkant Koca",
    title: "Bir Yazılım Mühendisinden Daha Fazlası",
    bio: "Ölçeklenebilir çözümler geliştirme konusunda 7+ yıl deneyime sahip tutkulu yazılım mühendisi. Mikroservis mimarisi, REST API tasarımı ve veritabanı optimizasyonunda uzmanlaştım. Temiz, sürdürülebilir kod yazmaya ve modern teknolojileri güncel takip etmeye kararlıyım.",
    location: "Istanbul, Turkey",
    email: "info@turkmuhendisi.com",
    github: "https://github.com/turkmuhendisi",
    linkedin: "https://linkedin.com/in/turkmuhendisi",
    resume: "#",
    education: [
      {
        degree: "Yazılım Mühendisliği",
        school: "FIRAT UNIVERSITY",
        year: "2022 - 2026",
      }
    ],
    experience: [
      {
        position: "Yazılım Mühendisi",
        company: "ASRIN GLOBAL",
        period: "2025 - Günümüz",
        description: "Mikroservis mimarisi, sistem tasarımı ve RESTful API geliştirme ile backend sistemleri oluşturuyorum."
      },
      {
        position: "Yazılım Mühendisi",
        company: "GOBİZ ENERJİ",
        period: "2025 - Günümüz",
        description: "Spring Boot ile web uygulamaları geliştirme, veritabanı tasarımı ve API optimizasyonu."
      }
    ],
    techStack: {
      backend: ["Spring Boot", "Java", "Kotlin", "PostgreSQL", "Redis"],
      frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      tools: ["Git & GitHub", "Docker", "Kubernetes", "Postman", "Figma"],
      platforms: ["AWS", "Google Cloud", "Azure", "Linux"],
      approaches: [
        "Mikroservis Mimarisi",
        "RESTful API Tasarımı",
        "Test Odaklı Geliştirme",
        "Agile Metodolojisi",
        "CI/CD Süreçleri"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Hakkımda | Türkmühendisi | Samet Berkant Koca"
        description="Yazılım mühendisliği kariyerim, tecrübelerim, uzmanlık alanlarım ve kullandığım teknolojiler hakkında detaylı bilgiler."
        canonical="/hakkimda"
        schemaType="AboutPage"
        keywords={["samet berkant koca", "yazılım mühendisi", "backend geliştirici", "hakkımda", "turkmuhendisi"]}
        image="https://avatars.githubusercontent.com/u/74829377?v=4"
        imageAlt="Samet Berkant Koca profil görseli"
      />
      {/* Hero Section */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >


            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Hakkımda
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.title}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Profile Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/3 backdrop-blur-2xl rounded-3xl p-8 md:p-12 mb-16 border border-white/5 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-48 h-48 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-white/20 relative">
                <img
                  src="https://avatars.githubusercontent.com/u/74829377?v=4"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-white mb-4">{personalInfo.name}</h2>
              <p className="text-xl text-blue-400 mb-6">{personalInfo.title}</p>
              
              <div className="flex flex-col md:flex-row gap-4 md:items-center text-gray-300 mb-8 justify-center lg:justify-start">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <MapPin size={16} className="text-blue-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="hidden md:block h-1 w-1 bg-gray-600 rounded-full"></div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Mail size={16} className="text-blue-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400 transition-colors">{personalInfo.email}</a>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                {personalInfo.bio}
              </p>
              
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl text-gray-300 border border-white/5 shadow-lg group"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl text-gray-300 border border-white/5 shadow-lg group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-2xl text-gray-300 border border-white/5 shadow-lg group"
                  aria-label="Resume"
                >
                  <FileText size={24} />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills & Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Experience Section */}
          {personalInfo.experience.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/3 backdrop-blur-2xl rounded-3xl p-8 border border-white/5 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Briefcase className="mr-3 text-blue-400" size={28} />
                Profesyonel Deneyim
              </h2>
              <div className="space-y-8">
                {personalInfo.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-500/30 pb-8 last:pb-0">
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.position}</h3>
                    <div className="flex items-center text-gray-400 mb-3">
                      <span className="font-medium text-blue-300">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/3 backdrop-blur-2xl rounded-3xl p-8 border border-white/5 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="mr-3 text-blue-400" size={28} />
              Eğitim
            </h2>
            <div className="space-y-6">
              {personalInfo.education.map((edu, index) => (
                <div key={index} className="pb-6 border-b border-white/10 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <div className="text-gray-300 text-lg mb-1">{edu.school}</div>
                  <div className="text-sm text-gray-400">{edu.year}</div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Tech Stack Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/3 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/5 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            <Code className="inline mr-3 text-blue-400" size={32} />
            Teknik Yetenekler
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Backend */}
            <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-lg">
              <div className="flex items-center mb-4">
                <Server className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.techStack.backend.map((tech, index) => (
                  <span key={index} className="px-3 py-2 bg-blue-500/20 text-blue-300 rounded-xl text-sm font-medium border border-blue-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-lg">
              <div className="flex items-center mb-4">
                <Monitor className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.techStack.frontend.map((tech, index) => (
                  <span key={index} className="px-3 py-2 bg-purple-500/20 text-purple-300 rounded-xl text-sm font-medium border border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-lg">
              <div className="flex items-center mb-4">
                <Wrench className="text-emerald-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Araçlar</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.techStack.tools.map((tool, index) => (
                  <span key={index} className="px-3 py-2 bg-emerald-500/20 text-emerald-300 rounded-xl text-sm font-medium border border-emerald-500/30">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-lg">
              <div className="flex items-center mb-4">
                <Globe className="text-amber-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Platformlar</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.techStack.platforms.map((platform, index) => (
                  <span key={index} className="px-3 py-2 bg-amber-500/20 text-amber-300 rounded-xl text-sm font-medium border border-amber-500/30">
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-lg">
              <div className="flex items-center mb-4">
                <Database className="text-red-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Veritabanı</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-red-500/20 text-red-300 rounded-xl text-sm font-medium border border-red-500/30">
                  PostgreSQL
                </span>
                <span className="px-3 py-2 bg-red-500/20 text-red-300 rounded-xl text-sm font-medium border border-red-500/30">
                  Redis
                </span>
                <span className="px-3 py-2 bg-red-500/20 text-red-300 rounded-xl text-sm font-medium border border-red-500/30">
                  MongoDB
                </span>
              </div>
            </div>

            {/* Approaches */}
            <div className="bg-white/3 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-lg md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Lightbulb className="text-indigo-400 mr-3" size={24} />
                <h3 className="text-xl font-bold text-white">Yaklaşımlar</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.techStack.approaches.map((approach, index) => (
                  <span key={index} className="px-3 py-2 bg-indigo-500/20 text-indigo-300 rounded-xl text-sm font-medium border border-indigo-500/30">
                    {approach}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage; 
