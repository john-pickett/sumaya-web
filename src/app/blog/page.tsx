import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Meditation tips, breathing techniques, and mindfulness guides from the Sumaya team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-[#F7F5F2] min-h-screen">
      {/* Header */}
      <div className="bg-[#FFFDF9] border-b border-[#E7E1D8] py-16">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#7B68B5] text-sm font-semibold uppercase tracking-widest mb-3">
            The Sumaya Blog
          </p>
          <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">
            Mindfulness, simplified
          </h1>
          <p className="text-[#6F6B66] text-lg leading-relaxed">
            Practical guides on meditation, breathing, and building a calmer
            daily life.
          </p>
        </div>
      </div>

      {/* Post list */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-[#6F6B66]">
            <p className="text-lg">No posts yet — check back soon.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
