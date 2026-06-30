import { NextResponse } from "next/server";
import { isInfrastructureEnabled } from "@/src/config/env";
import { requireAuthSession } from "@/src/lib/auth";
import { buildUploadKey, uploadObject } from "@/src/lib/storage";

export async function POST(request: Request) {
  if (!isInfrastructureEnabled()) {
    return NextResponse.json({ error: "Dosya yükleme için Docker altyapısı gerekli." }, { status: 503 });
  }

  const userId = await requireAuthSession();
  if (!userId) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Dosya bulunamadı." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const key = buildUploadKey(file.name);
    const url = await uploadObject(key, buffer, file.type || "application/octet-stream");

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Dosya yüklenemedi." }, { status: 500 });
  }
}
