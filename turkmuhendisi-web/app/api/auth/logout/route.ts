import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME } from "@/src/config/site";
import { isInfrastructureEnabled } from "@/src/config/env";
import { getAuthToken } from "@/src/lib/auth";
import { deleteSession } from "@/src/repositories/auth.repository";
import { isLocalToken } from "@/src/lib/local-auth";

export async function POST() {
  const token = await getAuthToken();

  if (token && isInfrastructureEnabled() && !isLocalToken(token)) {
    await deleteSession(token);
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}
