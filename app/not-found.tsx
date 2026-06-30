import Link from "next/link";
import { buildMetadata } from "@/src/lib/metadata";

export const metadata = buildMetadata({
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa bulunamadı veya kaldırılmış olabilir.",
  noindex: true,
});

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">404</p>
        <h1 className="text-3xl font-semibold mb-3">Sayfa bulunamadı</h1>
        <p className="text-zinc-400 mb-8">
          Bağlantı hatalı olabilir veya sayfa taşınmış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/yazilar"
            className="px-5 py-2.5 rounded-full border border-white/15 text-sm text-zinc-200 hover:bg-white/5 transition-colors"
          >
            Yazılar
          </Link>
        </div>
      </div>
    </div>
  );
}
