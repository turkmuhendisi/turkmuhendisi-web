import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "@/src/config/site";
import { isInfrastructureEnabled } from "@/src/config/env";
import { getSessionUserId } from "@/src/repositories/auth.repository";

export async function getAuthToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value;
}

export async function requireAuthSession(): Promise<string | null> {
  if (!isInfrastructureEnabled()) return null;

  const token = await getAuthToken();
  if (!token) return null;

  const userId = await getSessionUserId(token);
  return userId;
}
