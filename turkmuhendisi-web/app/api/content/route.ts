import { NextResponse } from "next/server";
import { isInfrastructureEnabled } from "@/src/config/env";
import { getAuthToken, requireAuthSession } from "@/src/lib/auth";
import { addLocalContent, getLocalContent, isLocalToken } from "@/src/lib/local-auth";
import { createContent, listAllContent } from "@/src/repositories/content.repository";

export async function GET() {
  const token = await getAuthToken();
  if (!token) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }

  if (isInfrastructureEnabled()) {
    const userId = await requireAuthSession();
    if (!userId) {
      return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
    }

    try {
      const items = await listAllContent();
      return NextResponse.json(items);
    } catch (error) {
      console.error("Content list error:", error);
      return NextResponse.json({ error: "İçerikler alınamadı." }, { status: 500 });
    }
  }

  if (isLocalToken(token)) {
    return NextResponse.json(getLocalContent());
  }

  return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
}

export async function POST(request: Request) {
  const token = await getAuthToken();
  if (!token) {
    return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
  }

  let body: {
    title?: string;
    description?: string;
    category?: string;
    image?: string;
    content?: string;
    status?: "draft" | "published";
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  if (!body.title || !body.description || !body.category || !body.image || !body.status) {
    return NextResponse.json({ error: "Eksik alanlar var." }, { status: 400 });
  }

  if (isInfrastructureEnabled()) {
    const userId = await requireAuthSession();
    if (!userId) {
      return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
    }

    try {
      await createContent({
        title: body.title,
        description: body.description,
        category: body.category,
        image: body.image,
        content: body.content ?? "",
        status: body.status,
      });
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("Content create error:", error);
      return NextResponse.json({ error: "İçerik kaydedilemedi." }, { status: 500 });
    }
  }

  if (isLocalToken(token)) {
    addLocalContent({
      title: body.title,
      description: body.description,
      category: body.category,
      image: body.image,
      status: body.status,
    });
    return NextResponse.json({ success: true, mode: "local" });
  }

  return NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 });
}
