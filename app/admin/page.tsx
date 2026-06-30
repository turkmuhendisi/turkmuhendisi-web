import { buildMetadata } from "@/src/lib/metadata";
import AdminLogin from "@/src/screens/admin-page/AdminLogin";

export const metadata = buildMetadata({
  title: "Panel Girişi | Türkmühendisi",
  description: "Türkmühendisi panel giriş ekranı.",
  canonical: "/admin",
  noindex: true,
});

export default function Page() {
  return <AdminLogin />;
}
