import Link from "next/link";
import Image from "next/image";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/config/links";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-[#F7F5F2] mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start gap-10 justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/icon.png"
                alt="Sumaya"
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="font-bold text-xl tracking-tight">Sumaya</span>
            </Link>
            <p className="text-sm text-[#F7F5F2]/60 leading-relaxed">
              Meditation and breathing exercises for everyday life. Find calm,
              anywhere.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F7F5F2]/40">
                App
              </p>
              <a
                href={APP_STORE_URL}
                className="text-sm text-[#F7F5F2]/70 hover:text-[#A594D4] transition-colors"
              >
                App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                className="text-sm text-[#F7F5F2]/70 hover:text-[#A594D4] transition-colors"
              >
                Google Play
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F7F5F2]/40">
                Content
              </p>
              <Link
                href="/"
                className="text-sm text-[#F7F5F2]/70 hover:text-[#A594D4] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-sm text-[#F7F5F2]/70 hover:text-[#A594D4] transition-colors"
              >
                Blog
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F7F5F2]/40">
                Legal
              </p>
              <Link
                href="/privacy"
                className="text-sm text-[#F7F5F2]/70 hover:text-[#A594D4] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#F7F5F2]/10 text-xs text-[#F7F5F2]/40">
          © {new Date().getFullYear()} Five Ams Software. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
