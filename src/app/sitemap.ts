import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog";
import { SITE_URL } from "@/config/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllPostSlugs();

  const blogEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
