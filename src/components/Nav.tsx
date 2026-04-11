"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { APP_STORE_URL } from "@/config/links";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5F2]/90 backdrop-blur-md border-b border-[#E7E1D8]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/icon.png"
            alt="Sumaya"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-bold text-[#1A1A2E] text-lg tracking-tight">
            Sumaya
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#6F6B66]">
          <Link href="/" className="hover:text-[#1A1A2E] transition-colors">
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:text-[#1A1A2E] transition-colors"
          >
            Blog
          </Link>
          <a
            href={APP_STORE_URL}
            className="ml-2 px-4 py-2 rounded-xl bg-[#7B68B5] text-white hover:bg-[#6a58a4] transition-colors font-semibold"
          >
            Download
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#1A1A2E]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E7E1D8] bg-[#F7F5F2] px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link
            href="/"
            className="text-[#6F6B66] hover:text-[#1A1A2E]"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-[#6F6B66] hover:text-[#1A1A2E]"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <a
            href={APP_STORE_URL}
            className="px-4 py-2 rounded-xl bg-[#7B68B5] text-white text-center font-semibold"
          >
            Download
          </a>
        </div>
      )}
    </header>
  );
}
