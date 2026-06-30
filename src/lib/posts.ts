import type { Post } from "@/src/data/posts";

export function searchPosts(posts: Post[], searchTerm: string, category: string): Post[] {
  let filtered = posts;

  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.description.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term),
    );
  }

  if (category && category !== "Tümü") {
    filtered = filtered.filter((post) => post.category === category);
  }

  return filtered;
}

export function getCategories(posts: Post[]): string[] {
  const categories = posts.map((post) => post.category);
  return ["Tümü", ...Array.from(new Set(categories))];
}
