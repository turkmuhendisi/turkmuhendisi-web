const DEV_TOKEN_PREFIX = "local:";

export function createLocalToken(): string {
  return `${DEV_TOKEN_PREFIX}${crypto.randomUUID()}`;
}

export function isLocalToken(token: string): boolean {
  return token.startsWith(DEV_TOKEN_PREFIX);
}

export function validateLocalCredentials(email: string, password: string): boolean {
  const adminEmail = process.env.ADMIN_EMAIL ?? "berkantwn@gmail.com";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "571632";
  return email === adminEmail && password === adminPassword;
}

export function isLocalAuthEnabled(): boolean {
  return process.env.NODE_ENV === "development";
}

interface LocalContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  status: "draft" | "published";
  updatedAt: string;
}

const localContentStore: LocalContentItem[] = [];

export function getLocalContent(): LocalContentItem[] {
  return localContentStore;
}

export function addLocalContent(payload: {
  title: string;
  description: string;
  category: string;
  image: string;
  status: "draft" | "published";
}): LocalContentItem {
  const item: LocalContentItem = {
    id: crypto.randomUUID(),
    title: payload.title,
    description: payload.description,
    category: payload.category,
    image: payload.image,
    status: payload.status,
    updatedAt: new Date().toLocaleDateString("tr-TR"),
  };

  localContentStore.unshift(item);
  return item;
}
