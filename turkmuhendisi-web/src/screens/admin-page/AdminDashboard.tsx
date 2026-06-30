"use client";

import { useEffect, useState } from "react";
import { CheckCircle, PenTool, RefreshCcw, Save } from "lucide-react";
import RichTextEditor from "../../components/RichTextEditor";
import { DOMAIN_CONFIG } from "@/src/config/site";
import { getDefaultUploadUrl } from "@/src/config/env";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  status: "draft" | "published";
  updatedAt: string;
}

interface CreateContentPayload {
  title: string;
  description: string;
  category: string;
  image: string;
  content: string;
  status: "draft" | "published";
}

const AdminDashboard = () => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(getDefaultUploadUrl());
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const loadContents = async () => {
    try {
      setError("");
      const response = await fetch("/api/content");
      if (!response.ok) {
        throw new Error("İçerikler alınamadı.");
      }
      const data = (await response.json()) as ContentItem[];
      setItems(data);
    } catch (_err) {
      setError("İçerikler alınamadı. API servis durumunu kontrol edin.");
    }
  };

  useEffect(() => {
    void loadContents();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const payload: CreateContentPayload = {
      title,
      description,
      category,
      image,
      content,
      status,
    };

    try {
      const response = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("İçerik kaydedilemedi.");
      }

      setSuccess("İçerik başarıyla kaydedildi.");
      setTitle("");
      setDescription("");
      setCategory("");
      setImage(getDefaultUploadUrl());
      setContent("");
      setStatus("draft");
      await loadContents();
    } catch (_err) {
      setError("İçerik kaydedilemedi. API endpointlerini kontrol edin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-4 pb-12 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">İçerik Yönetimi</h1>
            <p className="text-zinc-400 mt-1 text-sm">
              API: {DOMAIN_CONFIG.api} • CDN: {DOMAIN_CONFIG.cdn}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => void loadContents()}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 text-zinc-200 hover:bg-white/10 rounded-full transition-colors text-sm border border-white/15"
            >
              <RefreshCcw size={16} />
              Yenile
            </button>
          </div>
        </div>

        {error ? <p className="mb-4 text-sm text-zinc-300">{error}</p> : null}
        {success ? (
          <div className="mb-4 p-3 bg-white/5 border border-white/15 rounded-2xl flex items-center gap-2 text-zinc-200 text-sm">
            <CheckCircle className="w-4 h-4" />
            {success}
          </div>
        ) : null}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <section className="xl:col-span-2 bg-white/5 border border-white/15 rounded-3xl p-6 backdrop-blur-2xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-2 bg-white/10 rounded-xl">
                <PenTool className="text-zinc-200 w-5 h-5" />
              </div>
              <h2 className="text-lg font-medium">Yeni İçerik</h2>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-black/70 border border-white/10 rounded-2xl"
                  placeholder="Başlık"
                  required
                />
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-black/70 border border-white/10 rounded-2xl"
                  placeholder="Kategori"
                  required
                />
              </div>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                className="w-full px-4 py-3 bg-black/70 border border-white/10 rounded-2xl resize-none"
                placeholder="Kısa açıklama"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="md:col-span-2 w-full px-4 py-3 bg-black/70 border border-white/10 rounded-2xl"
                  placeholder="https://cdn.turkmuhendisi.com/uploads/..."
                  required
                />
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as "draft" | "published")}
                  className="w-full px-4 py-3 bg-black/70 border border-white/10 rounded-2xl"
                >
                  <option value="draft">Taslak</option>
                  <option value="published">Yayında</option>
                </select>
              </div>

              <RichTextEditor value={content} onChange={setContent} placeholder="İçerik..." />

              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-white text-black hover:bg-zinc-200 disabled:opacity-70 font-medium rounded-2xl transition-all flex items-center gap-2"
              >
                <Save className="w-5 h-5" />
                {isLoading ? "Kaydediliyor..." : "Kaydet"}
              </button>
            </form>
          </section>

          <aside className="bg-white/5 border border-white/15 rounded-3xl p-6 backdrop-blur-2xl">
            <h3 className="text-lg font-medium mb-4">Mevcut İçerikler</h3>
            <div className="space-y-3 max-h-[680px] overflow-y-auto pr-1">
              {items.length === 0 ? (
                <p className="text-sm text-zinc-400">Henüz içerik bulunamadı.</p>
              ) : (
                items.map((item) => (
                  <article key={item.id} className="border border-white/10 rounded-2xl p-4 bg-black/40">
                    <p className="text-sm text-zinc-400 mb-1">{item.category}</p>
                    <h4 className="font-medium text-zinc-100 line-clamp-2">{item.title}</h4>
                    <div className="mt-2 flex items-center justify-between text-xs text-zinc-500">
                      <span>{item.status}</span>
                      <span>{item.updatedAt}</span>
                    </div>
                  </article>
                ))
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
