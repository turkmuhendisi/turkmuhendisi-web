import Redis from "ioredis";
import { env, isInfrastructureEnabled } from "@/src/config/env";

let redis: Redis | null = null;

export function getRedis(): Redis {
  if (!isInfrastructureEnabled()) {
    throw new Error("Redis is not available without DATABASE_URL configuration.");
  }

  if (!redis) {
    redis = new Redis(env.redisUrl, {
      maxRetriesPerRequest: 1,
      lazyConnect: true,
      retryStrategy: () => null,
    });

    redis.on("error", () => {
      // Build/runtime sırasında bağlantı hatalarını sessizce yut.
    });
  }

  return redis;
}

async function withRedis<T>(operation: (client: Redis) => Promise<T>): Promise<T | null> {
  try {
    const client = getRedis();
    if (client.status === "wait") {
      await client.connect();
    }
    return await operation(client);
  } catch {
    return null;
  }
}

export const cacheKeys = {
  publishedContent: "content:published",
  session: (token: string) => `session:${token}`,
} as const;

export async function cacheGet<T>(key: string): Promise<T | null> {
  const value = await withRedis((client) => client.get(key));
  if (!value) return null;
  return JSON.parse(value) as T;
}

export async function cacheSet(key: string, value: unknown, ttlSeconds?: number): Promise<void> {
  const payload = JSON.stringify(value);
  await withRedis(async (client) => {
    if (ttlSeconds) {
      await client.set(key, payload, "EX", ttlSeconds);
      return;
    }
    await client.set(key, payload);
  });
}

export async function cacheDel(key: string): Promise<void> {
  await withRedis((client) => client.del(key));
}
