"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  LayoutDashboard,
  PenTool,
  Globe,
  LogIn,
  LogOut,
} from "lucide-react";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isDashboard = pathname.startsWith("/admin/dashboard");

  const navItems = isDashboard
    ? [
        { name: "İçerik Yönetimi", path: "/admin/dashboard", icon: PenTool },
        { name: "Siteye Dön", path: "/", icon: Globe },
      ]
    : [{ name: "Giriş", path: "/admin", icon: LogIn }];

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
    router.refresh();
  };

  return (
    <div className="relative w-full px-4 sm:px-6 pt-4 sm:pt-6 pb-2 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <nav className="relative inline-block">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`bg-white/3 backdrop-blur-2xl border border-white/5 shadow-lg relative overflow-hidden transition-all duration-300 ${
            isOpen ? "rounded-3xl" : "rounded-full"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-pink-500/3" />

          <div className="relative flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-6 py-2 md:py-3">
            <Link
              href={isDashboard ? "/admin/dashboard" : "/admin"}
              className="flex items-center gap-2 focus:outline-none rounded-full px-2 py-1 border border-transparent shrink-0"
            >
              <LayoutDashboard size={16} className="text-zinc-300" />
              <span className="text-base sm:text-lg font-semibold text-white whitespace-nowrap">
                TM Panel
              </span>
            </Link>

            <div className="hidden sm:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`relative px-3 md:px-4 py-2 rounded-full text-xs sm:text-sm font-medium focus:outline-none border ${
                      isActive(item.path)
                        ? "text-white border-white/30"
                        : "text-gray-400 border-white/10"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon size={14} />
                      <span>{item.name}</span>
                    </span>
                  </Link>
                );
              })}

              {isDashboard ? (
                <button
                  type="button"
                  onClick={() => void handleLogout()}
                  className="relative px-3 md:px-4 py-2 rounded-full text-xs sm:text-sm font-medium focus:outline-none border text-gray-400 border-white/10 hover:text-white hover:border-white/30 transition-colors"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <LogOut size={14} />
                    <span>Çıkış</span>
                  </span>
                </button>
              ) : (
                <Link
                  href="/"
                  className="relative px-3 md:px-4 py-2 rounded-full text-xs sm:text-sm font-medium focus:outline-none border text-gray-400 border-white/10"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Globe size={14} />
                    <span>Siteye Dön</span>
                  </span>
                </Link>
              )}
            </div>

            <div className="sm:hidden ml-auto">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="admin-mobile-navigation"
                aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
                className="p-2 text-gray-400 rounded-full focus:outline-none border border-white/10"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                id="admin-mobile-navigation"
                className="sm:hidden overflow-hidden border-t border-white/5 relative z-10"
              >
                <div className="px-4 pb-4 space-y-2 pt-3">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-full text-sm font-medium w-full text-left focus:outline-none border ${
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

                  {isDashboard ? (
                    <button
                      type="button"
                      onClick={() => {
                        setIsOpen(false);
                        void handleLogout();
                      }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-full text-sm font-medium w-full text-left focus:outline-none border text-gray-400 border-white/10"
                    >
                      <LogOut size={16} />
                      Çıkış
                    </button>
                  ) : (
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-full text-sm font-medium w-full text-left focus:outline-none border text-gray-400 border-white/10"
                    >
                      <Globe size={16} />
                      Siteye Dön
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-lg opacity-30 pointer-events-none -z-10" />
        </nav>
      </div>
    </div>
  );
};

export default AdminNavbar;
