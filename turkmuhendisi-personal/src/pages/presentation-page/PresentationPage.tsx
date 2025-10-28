import { useState } from "react";
import { FaReact } from "react-icons/fa6";
import { SiSpringboot, SiKotlin } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code, Database, Smartphone, Globe } from "lucide-react";

const PresentationPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const technologies = {
    Web: [
      { name: "Web Repository", icon: FaReact, link: "https://github.com/turkmuhendisi/tm-web", description: "Frontend codebase for the education platform" },
    ],
    Mobile: [
      { name: "Mobile Repository", icon: SiKotlin, link: "https://github.com/turkmuhendisi/Alpura", description: "Android mobile application" },
    ],
    Backend: [
      { name: "user-microservice", icon: SiSpringboot, link: "https://github.com/turkmuhendisi/tm-user-microservice", description: "User management microservice" },
      { name: "auth-microservice", icon: SiSpringboot, link: "https://github.com/turkmuhendisi/tm-auth-microservice", description: "Authentication and authorization microservice" },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-300">Project</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Education &
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Knowledge Platform
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              A comprehensive platform built with modern technologies, bringing together passionate individuals for knowledge sharing and education
            </p>

            {/* Back to Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === "overview"
                    ? "bg-white/10 text-white border border-white/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("repositories")}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === "repositories"
                    ? "bg-white/10 text-white border border-white/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Repositories
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-8"
            >
              {/* Project Overview */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Code className="mr-3 text-blue-400" size={28} />
                  Project Overview
                </h2>
                <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                  <p>
                    This platform brings together different technologies to create a comprehensive education and knowledge sharing environment. The backend is designed with microservice architecture, including user management and authentication services.
                  </p>
                  <p>
                    The project features a React-based web interface and a Kotlin-based mobile application. The system is designed as a modular and extensible structure following modern software development principles.
                  </p>
                </div>
              </div>

              {/* Technical Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Backend */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Database className="mr-3 text-blue-400" size={24} />
                    Backend
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Spring Boot microservices</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">REST API</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">JWT Authentication</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">PostgreSQL database</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Docker and Docker Compose</span>
                    </div>
                  </div>
                </div>

                {/* Frontend */}
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Globe className="mr-3 text-purple-400" size={24} />
                    Frontend
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">React web application</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Kotlin-based Android app</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Redux state management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Responsive design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Modern UI/UX</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "repositories" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {Object.entries(technologies).map(([title, items]) => (
                <div key={title} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    {title === "Web" && <Globe className="mr-3 text-blue-400" size={24} />}
                    {title === "Mobile" && <Smartphone className="mr-3 text-purple-400" size={24} />}
                    {title === "Backend" && <Database className="mr-3 text-emerald-400" size={24} />}
                    {title}
                  </h3>
                  <div className="space-y-4">
                    {items.map(({ name, icon: Icon, link, description }, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                            <Icon className="text-2xl text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                              {name}
                            </h4>
                            {description && (
                              <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300">
                                {description}
                              </p>
                            )}
                          </div>
                          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-300 transition-colors" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PresentationPage;
