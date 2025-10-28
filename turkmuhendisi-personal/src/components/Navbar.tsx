import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, FileText, Briefcase, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Blog", path: "/blog", icon: FileText },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "About", path: "/about", icon: User },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 sm:pt-3 md:pt-4 px-3 sm:px-4">
      <nav className="relative">
        {/* Main Navbar Container */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`bg-white/3 backdrop-blur-2xl border border-white/5 shadow-lg w-full max-w-[calc(100vw-1.5rem)] sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto relative overflow-hidden transition-all duration-300 ${
            isOpen ? 'rounded-3xl sm:rounded-full' : 'rounded-full'
          }`}
        >
          {/* Subtle background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-pink-500/3 transition-all duration-300 ${
            isOpen ? 'rounded-3xl sm:rounded-full' : 'rounded-full'
          }`}></div>
          
          <div className="relative flex items-center justify-between px-3 sm:px-6 md:px-8 py-2 md:py-3">
            {/* Brand Name */}
            <Link to="/" className="flex items-center focus:outline-none rounded-full px-2 py-1 border border-transparent">
              <span className="text-base sm:text-lg font-semibold text-white">
                türkmühendisi
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center space-x-2 md:space-x-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-2 sm:px-3 md:px-4 py-2 rounded-full text-xs sm:text-sm font-medium focus:outline-none border ${
                      isActive(item.path)
                        ? "text-white border-white/30"
                        : "text-gray-400 border-white/10"
                    }`}
                  >

                    <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                      <Icon size={14} className="sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">{item.name}</span>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-400 rounded-full focus:outline-none border border-white/10"
              >
                {isOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="sm:hidden overflow-hidden border-t border-white/5 relative z-10"
              >
                <div className="px-4 pb-4 space-y-2 pt-3 relative z-20">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-full text-sm font-medium w-full text-left focus:outline-none border relative z-30 ${
                          isActive(item.path)
                            ? "text-white bg-white/8 border-white/30"
                            : "text-gray-400 border-white/10"
                        }`}
                      >
                        <Icon size={16} />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Subtle decorative elements */}
        <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-lg opacity-30 pointer-events-none -z-10"></div>
        <div className="absolute -top-0.5 -left-0.5 -right-0.5 -bottom-0.5 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-md opacity-20 pointer-events-none -z-10"></div>
      </nav>
    </div>
  );
};

export default Navbar; 