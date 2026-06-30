import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME } from "@/src/config/site";
import { isInfrastructureEnabled } from "@/src/config/env";
import {
  createLocalToken,
  isLocalAuthEnabled,
  validateLocalCredentials,
} from "@/src/lib/local-auth";
import { createSession, verifyAdminCredentials } from "@/src/repositories/auth.repository";

function setAuthCookie(response: NextResponse, token: string) {
  response.cookies.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function POST(request: Request) {
  let body: { email?: string; password?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";
  const password = body.password ?? "";

  if (!email || !password) {
    return NextResponse.json({ error: "E-posta ve şifre gerekli." }, { status: 400 });
  }

  if (isInfrastructureEnabled()) {
    try {
      const user = await verifyAdminCredentials(email, password);
      if (!user) {
        return NextResponse.json({ error: "Giriş başarısız." }, { status: 401 });
      }

      const token = await createSession(user.id);
      const res = NextResponse.json({ success: true });
      setAuthCookie(res, token);
      return res;
    } catch (error) {
      console.error("Login error:", error);
      return NextResponse.json({ error: "Giriş sırasında sunucu hatası." }, { status: 500 });
    }
  }

  if (isLocalAuthEnabled() && validateLocalCredentials(email, password)) {
    const res = NextResponse.json({ success: true, mode: "local" });
    setAuthCookie(res, createLocalToken());
    return res;
  }

  return NextResponse.json({ error: "Giriş başarısız." }, { status: 401 });
}
