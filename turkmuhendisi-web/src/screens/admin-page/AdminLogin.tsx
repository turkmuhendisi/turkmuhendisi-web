"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, LogIn, AlertCircle } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Giriş başarısız.");
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (_err) {
      setError("Giriş başarısız. API bağlantısını ve bilgileri kontrol edin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 relative pb-12 min-h-[calc(100vh-5rem)]">
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/5 border border-white/15 rounded-3xl p-8 backdrop-blur-2xl shadow-[0_24px_80px_rgba(255,255,255,0.08)]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold tracking-tight text-white mb-2">Panel</h1>
            <p className="text-sm text-zinc-400">İçerik yönetimi için giriş yapın</p>
          </div>

          {error ? (
            <div className="mb-6 p-4 bg-white/5 border border-white/15 rounded-2xl flex items-start gap-3">
              <AlertCircle className="text-zinc-300 w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-zinc-300">{error}</p>
            </div>
          ) : null}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300 ml-1">E-posta</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-zinc-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-black/70 border border-white/10 rounded-2xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="ornek@turkmuhendisi.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300 ml-1">Şifre</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-zinc-500" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-black/70 border border-white/10 rounded-2xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-white text-black hover:bg-zinc-200 disabled:opacity-70 font-medium rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              <span>{isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
