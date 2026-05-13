# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sumaya is a marketing and blog website for a free meditation and breathing exercise app. The site includes a blog with posts about meditation, breathing techniques, and mindfulness. Built with Next.js 16, React 19, and TypeScript.

## Key Technologies

- **Framework**: Next.js 16.2.3 (App Router) — see AGENTS.md for breaking changes vs older versions
- **UI**: React 19.2.4 with Tailwind CSS 4
- **Content**: MDX/Markdown files with YAML frontmatter
- **Parsing**: gray-matter (frontmatter), next-mdx-remote (MDX rendering)
- **Build**: Turbopack (configured in next.config.ts)
- **Linting**: ESLint 9 with Next.js config

## Commands

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Run ESLint
npm run deploy:prod  # Build and push to git (use with caution)
```

## Project Structure

```
src/
  app/              # Next.js App Router pages and layouts
    blog/
      [slug]/       # Dynamic blog post route (renders MDX)
      page.tsx      # Blog index page
    page.tsx        # Home page
    layout.tsx      # Root layout with Nav and Footer
    globals.css     # Global Tailwind styles
    robots.ts       # robots.txt generation
    sitemap.ts      # sitemap.xml generation
  components/       # Reusable React components
    Nav.tsx
    Footer.tsx
    BlogCard.tsx    # Card component for blog listings
    DownloadButtons.tsx
  lib/
    blog.ts         # Blog utilities: reading posts, parsing metadata
  config/
    links.ts        # External links (App Store, Play Store, site URL)
  constants.ts      # Global constants

content/blog/       # Blog content as .mdx or .md files with YAML frontmatter
public/             # Static assets (images, icons)
```

## Blog System

### How Posts Work

1. **Content Source**: Posts live in `content/blog/` as `.mdx` or `.md` files
2. **Metadata**: Each post has YAML frontmatter with title, date, excerpt, SEO fields, tags, etc.
3. **Parsing**: `src/lib/blog.ts` uses `gray-matter` to parse frontmatter and extract content
4. **Rendering**: Posts are rendered dynamically at `/blog/[slug]` using next-mdx-remote

### Post Frontmatter Structure

```yaml
---
title: "Post Title"
date: "2024-04-11"
excerpt: "Short description for previews"
seoTitle: "Optional SEO-specific title"
seoDescription: "Optional SEO-specific description"
keywords: ["key1", "key2"]
tags: ["meditation", "stress"]
author: "Author Name"
---
Content here...
```

### Key Functions in `src/lib/blog.ts`

- `getAllPostSlugs()` — List all post filenames without extension
- `getPost(slug)` — Read a single post and return parsed metadata + content
- `getAllPosts()` — Return all posts sorted by date (newest first)
- `calcReadingTime(content)` — Calculate reading time (words / 200)

Reading time and author default to "Sumaya Team" if not in frontmatter.

## URL Configuration

`src/config/links.ts` defines external URLs:
- `SITE_URL` — defaults to `https://getsumaya.com`, can be overridden with `NEXT_PUBLIC_SITE_URL` env var
- `APP_STORE_URL` — iOS app link
- `PLAY_STORE_URL` — Android app link

## Path Aliases

TypeScript is configured with `@/*` → `src/*` path alias. Use `import { Nav } from "@/components/Nav"` instead of relative paths.

## SEO Setup

- Root layout sets metadata base, OG tags, and Twitter card in `src/app/layout.tsx`
- Blog pages can override with dynamic metadata via `generateMetadata()` (Next.js 13+ pattern)
- `robots.ts` and `sitemap.ts` handle search engine indexing

## Important Next.js 16 Notes

- **Breaking Changes**: Consult `node_modules/next/dist/docs/` for documentation — APIs and conventions may differ from your training data
- **Turbopack**: Configured for faster builds but may have stability differences vs Webpack
- **App Router**: This project uses the newer App Router, not Pages Router
- **TypeScript**: Strict mode enabled; no loose types

## Development Tips

- Run `npm run lint` before committing to catch issues
- Blog posts update immediately in dev mode when saved (fast refresh)
- The sitemap and robots.txt are auto-generated at build time from blog content
- New blog posts automatically appear on `/blog` without extra configuration

## App Store Links
Links to the iOS and Android apps can be found in src/constants.ts