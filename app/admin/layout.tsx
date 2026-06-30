import AdminNavbar from "@/src/components/AdminNavbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="relative z-10">
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
}
