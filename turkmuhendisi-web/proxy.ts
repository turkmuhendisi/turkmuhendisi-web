import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE_NAME } from "@/src/config/site";

const DEFAULT_PANEL_HOST = "panel.turkmuhendisi.com";

function getPanelHost(): string {
  const panelUrl = process.env.NEXT_PUBLIC_PANEL_URL;
  if (panelUrl) {
    try {
      return new URL(panelUrl).host;
    } catch {
      return DEFAULT_PANEL_HOST;
    }
  }
  return DEFAULT_PANEL_HOST;
}

function isLocalHost(host: string): boolean {
  return host === "localhost" || host === "127.0.0.1";
}

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0];
  const { pathname } = request.nextUrl;
  const panelHost = getPanelHost();

  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  if (host === panelHost && !pathname.startsWith("/admin")) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/dashboard";
    return NextResponse.redirect(url);
  }

  if (!isLocalHost(host) && host !== panelHost && pathname.startsWith("/admin")) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  if (pathname.startsWith("/admin/dashboard") && !token) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  if ((pathname === "/admin" || pathname === "/admin/") && token) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/((?!_next|favicon.ico|sitemap.xml|robots.txt).*)"],
};
