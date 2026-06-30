import type { Metadata } from "next";
import "./globals.css";
import ClientChrome from "@/src/next/ClientChrome";
import { DOMAIN_CONFIG } from "@/src/config/site";

export const metadata: Metadata = {
  title: "Türkmühendisi",
  description: "Samet Berkant Koca kişisel web sitesi",
  metadataBase: new URL(DOMAIN_CONFIG.web),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Türkmühendisi",
    description: "Samet Berkant Koca kişisel web sitesi",
    url: DOMAIN_CONFIG.web,
    siteName: "Türkmühendisi",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Türkmühendisi",
    description: "Samet Berkant Koca kişisel web sitesi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <ClientChrome />
        {children}
      </body>
    </html>
  );
}
