"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import CmsImage from "@/src/components/CmsImage";
import type { Post } from "@/src/data/posts";
import { BentoCard } from "@/src/components/ui/bento-card";

interface BlogDetailPageProps {
  post?: Post;
  relatedPosts: Post[];
}

const BlogDetailPage = ({ post, relatedPosts }: BlogDetailPageProps) => {
  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center pt-24">
        <BentoCard className="p-10 text-center max-w-md mx-6">
          <h1 className="text-2xl font-bold text-white mb-3">Yazı Bulunamadı</h1>
          <p className="text-gray-500 text-sm mb-6">Aradığınız yazı mevcut değil.</p>
          <Link
            href="/yazilar"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Yazılara Dön
          </Link>
        </BentoCard>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-black text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          href="/yazilar"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Yazılara Dön
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <BentoCard className="p-6 md:p-8">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">{post.title}</h1>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-gray-500 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.authorImage || "https://avatars.githubusercontent.com/u/74829377?v=4"}
                      alt={post.author}
                      className="w-7 h-7 rounded-full border border-white/10 object-cover"
                    />
                    <span className="text-gray-300">{post.author}</span>
                  </div>
                  <span className="text-gray-700">•</span>
                  <span>{post.category}</span>
                  <span className="text-gray-700">•</span>
                  <time dateTime={post.modifiedAt ?? post.date}>{post.date}</time>
                  <span className="text-gray-700">•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden mb-8 border border-white/5 relative h-[420px]">
                  <CmsImage
                    src={post.image}
                    alt={post.title}
                    className="object-cover opacity-90 w-full h-full"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                </div>

                <div
                  className="prose prose-invert prose-sm md:prose-base max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </BentoCard>
          </div>

          <div className="space-y-4">
            <BentoCard className="p-5">
              <h3 className="text-sm font-semibold text-white mb-4">Paylaş</h3>
              <div className="flex flex-wrap gap-2">
                {[FaLinkedin, FaTwitter, FaFacebook].map((Icon, i) => (
                  <button
                    key={i}
                    className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-500 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </BentoCard>

            <BentoCard className="p-5">
              <h3 className="text-sm font-semibold text-white mb-4">İlgili Yazılar</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    href={`/yazilar/${relatedPost.id}`}
                    key={relatedPost.id}
                    className="group flex gap-3 items-center"
                  >
                    <div className="relative w-16 h-14 rounded-lg overflow-hidden shrink-0 border border-white/10">
                      <CmsImage
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2 leading-snug mb-1">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-gray-600">{relatedPost.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetailPage;
