import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPost } from "@/lib/blog";
import { SITE_URL } from "@/config/links";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const dateStr = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="bg-[#F7F5F2] min-h-screen">
      {/* Post header */}
      <div className="bg-[#FFFDF9] border-b border-[#E7E1D8] py-14">
        <div className="max-w-2xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[#7B68B5] font-medium mb-6 hover:underline"
          >
            ← Back to Blog
          </Link>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#7B68B5]/10 text-[#7B68B5]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] leading-tight mb-4">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-[#6F6B66] text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-3 text-sm text-[#6F6B66]">
            <span>{post.author}</span>
            {dateStr && <span>·</span>}
            {dateStr && <span>{dateStr}</span>}
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>

      {/* Post content */}
      <div className="max-w-2xl mx-auto px-6 py-14">
        <article className="prose prose-neutral max-w-none text-[#1A1A2E] prose-headings:text-[#1A1A2E] prose-headings:font-bold prose-p:text-[#4a4844] prose-p:leading-relaxed prose-a:text-[#7B68B5] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1A1A2E] prose-li:text-[#4a4844] prose-hr:border-[#E7E1D8]">
          <MDXRemote source={post.content} />
        </article>

        <div className="mt-16 pt-8 border-t border-[#E7E1D8]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[#7B68B5] font-medium hover:underline"
          >
            ← All posts
          </Link>
        </div>
      </div>
    </div>
  );
}
