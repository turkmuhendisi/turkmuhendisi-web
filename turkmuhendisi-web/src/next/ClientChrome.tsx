"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import ScrollToTop from "@/src/components/ScrollToTop";

export default function ClientChrome() {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <ScrollToTop />;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
    </>
  );
}
