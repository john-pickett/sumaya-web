import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export default function BlogCard({ post }: { post: PostMeta }) {
  const dateStr = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-[#FFFDF9] border border-[#E7E1D8] rounded-2xl p-6 hover:border-[#7B68B5]/40 hover:shadow-md transition-all group"
    >
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#7B68B5]/10 text-[#7B68B5]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <h2 className="text-lg font-bold text-[#1A1A2E] group-hover:text-[#7B68B5] transition-colors leading-snug mb-2">
        {post.title}
      </h2>
      {post.excerpt && (
        <p className="text-[#6F6B66] text-sm leading-relaxed line-clamp-3 mb-4">
          {post.excerpt}
        </p>
      )}
      <div className="flex items-center gap-3 text-xs text-[#6F6B66]">
        {dateStr && <span>{dateStr}</span>}
        {dateStr && <span>·</span>}
        <span>{post.readingTime} min read</span>
      </div>
    </Link>
  );
}
