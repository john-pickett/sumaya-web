import { APP_STORE_URL, PLAY_STORE_URL } from "@/config/links";

interface Props {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function DownloadButtons({
  variant = "light",
  size = "md",
}: Props) {
  const base =
    size === "sm"
      ? "px-4 py-2 text-sm gap-2"
      : size === "lg"
        ? "px-7 py-4 text-base gap-3"
        : "px-5 py-3 text-sm gap-2.5";

  const light =
    "bg-[#7B68B5] text-white hover:bg-[#6a58a4] border border-transparent";
  const dark =
    "bg-white text-[#1A1A2E] hover:bg-[#F7F5F2] border border-white/20";

  const cls = `inline-flex items-center rounded-xl font-semibold transition-colors ${base} ${variant === "dark" ? dark : light}`;

  return (
    <div className="flex flex-wrap gap-3">
      <a href={APP_STORE_URL} className={cls} aria-label="Download on App Store">
        <AppleIcon size={size} variant={variant} />
        <span>App Store</span>
      </a>
      <a
        href={PLAY_STORE_URL}
        className={cls}
        aria-label="Get it on Google Play"
      >
        <PlayIcon size={size} variant={variant} />
        <span>Google Play</span>
      </a>
    </div>
  );
}

function AppleIcon({
  size,
  variant,
}: {
  size: "sm" | "md" | "lg";
  variant: "light" | "dark";
}) {
  const sz = size === "lg" ? 22 : 18;
  const fill = variant === "dark" ? "#1A1A2E" : "#fff";
  return (
    <svg
      width={sz}
      height={sz}
      viewBox="0 0 24 24"
      fill={fill}
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.17 1.26-2.14 3.76.02 2.99 2.62 3.99 2.65 4l-.06.16zm-6.53-17.06c.68-.83 1.8-1.44 2.73-1.44.03 1.09-.41 2.17-1.06 2.94-.64.76-1.73 1.37-2.77 1.3-.05-1.04.47-2.11 1.1-2.8z" />
    </svg>
  );
}

function PlayIcon({
  size,
  variant,
}: {
  size: "sm" | "md" | "lg";
  variant: "light" | "dark";
}) {
  const sz = size === "lg" ? 22 : 18;
  const fill = variant === "dark" ? "#1A1A2E" : "#fff";
  return (
    <svg
      width={sz}
      height={sz}
      viewBox="0 0 24 24"
      fill={fill}
      aria-hidden="true"
    >
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.85a1 1 0 010 1.732L15.515 14l-2.417-2.416L15.515 9.1l2.183 1.757zM5.864 3.658L16.8 9.99l-2.302 2.302-8.635-8.634z" />
    </svg>
  );
}
