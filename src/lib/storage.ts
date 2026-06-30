import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { env, getCdnBaseUrl, isInfrastructureEnabled } from "@/src/config/env";

let s3Client: S3Client | null = null;

function getS3Client(): S3Client {
  if (!isInfrastructureEnabled()) {
    throw new Error("MinIO is not available without DATABASE_URL configuration.");
  }

  if (!s3Client) {
    s3Client = new S3Client({
      endpoint: `${env.minio.useSsl ? "https" : "http"}://${env.minio.endpoint}:${env.minio.port}`,
      region: "us-east-1",
      credentials: {
        accessKeyId: env.minio.accessKey,
        secretAccessKey: env.minio.secretKey,
      },
      forcePathStyle: true,
    });
  }

  return s3Client;
}

export async function uploadObject(
  key: string,
  body: Buffer,
  contentType: string,
): Promise<string> {
  const client = getS3Client();

  await client.send(
    new PutObjectCommand({
      Bucket: env.minio.bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
      CacheControl: "public, max-age=31536000, immutable",
    }),
  );

  return `${getCdnBaseUrl()}/${key}`;
}

export function buildUploadKey(filename: string): string {
  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "-");
  return `uploads/${Date.now()}-${safeName}`;
}
