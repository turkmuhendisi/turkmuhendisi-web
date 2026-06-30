import { buildMetadata } from "@/src/lib/metadata";
import AdminDashboard from "@/src/screens/admin-page/AdminDashboard";

export const metadata = buildMetadata({
  title: "Panel İçerik Yönetimi | Türkmühendisi",
  description: "Türkmühendisi panel içerik yönetimi.",
  canonical: "/admin/dashboard",
  noindex: true,
});

export default function Page() {
  return <AdminDashboard />;
}
