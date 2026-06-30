"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import type { Post } from "@/src/data/posts";
import { getCategories, searchPosts } from "@/src/lib/posts";
import { PageSectionHeader } from "@/src/components/ui/page-section-header";
import { BentoCard } from "@/src/components/ui/bento-card";
import PostCard from "../components/PostCard";

interface BlogPageProps {
  initialPosts: Post[];
}

const BlogPage = ({ initialPosts }: BlogPageProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const categories = getCategories(initialPosts);
  const filteredPosts = searchPosts(initialPosts, searchTerm, selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <PageSectionHeader
          title="Mühendislik Notları"
          description="Mimari kararlar, üretim deneyimleri ve öğrendiklerim."
        />

        <BentoCard className="mb-8 p-4 md:p-5" delay={0.1}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
              <input
                type="text"
                placeholder="Yazılarda ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/20"
              />
            </div>
            <div className="relative md:w-56">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm appearance-none focus:outline-none focus:border-white/20"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-zinc-950">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </BentoCard>

        {filteredPosts.length === 0 ? (
          <BentoCard className="p-12 text-center">
            <p className="text-gray-400">Aramanızla eşleşen yazı bulunamadı.</p>
          </BentoCard>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="h-full"
              >
                <PostCard
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  image={post.image}
                  category={post.category}
                  readTime={post.readTime}
                  date={post.date}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
