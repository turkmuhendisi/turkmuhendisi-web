function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function isInfrastructureEnabled(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

const DEFAULT_CDN_URL = "https://cdn.turkmuhendisi.com";

export function getCdnBaseUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_CDN_URL ??
    (typeof window === "undefined" ? process.env.MINIO_PUBLIC_URL : undefined) ??
    DEFAULT_CDN_URL;
  return url.replace(/\/$/, "");
}

export function getDefaultUploadUrl(): string {
  return `${getCdnBaseUrl()}/uploads/`;
}

export const env = {
  get redisUrl() {
    return process.env.REDIS_URL ?? "redis://localhost:6379";
  },
  minio: {
    get endpoint() {
      return process.env.MINIO_ENDPOINT ?? "localhost";
    },
    get port() {
      return Number(process.env.MINIO_PORT ?? "9000");
    },
    get accessKey() {
      return process.env.MINIO_ACCESS_KEY ?? "minioadmin";
    },
    get secretKey() {
      return process.env.MINIO_SECRET_KEY ?? "minioadmin";
    },
    get bucket() {
      return process.env.MINIO_BUCKET ?? "turkmuhendisi";
    },
    get useSsl() {
      return process.env.MINIO_USE_SSL === "true";
    },
    get publicUrl() {
      return getCdnBaseUrl();
    },
  },
  admin: {
    get email() {
      return process.env.ADMIN_EMAIL ?? "berkantwn@gmail.com";
    },
    get password() {
      return process.env.ADMIN_PASSWORD ?? "571632";
    },
  },
  get sessionTtlSeconds() {
    return Number(process.env.SESSION_TTL_SECONDS ?? String(60 * 60 * 24 * 7));
  },
};

export function getDatabaseUrl(): string {
  return required("DATABASE_URL", process.env.DATABASE_URL);
}
