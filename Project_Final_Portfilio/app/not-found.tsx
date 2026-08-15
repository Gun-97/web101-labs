import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b1120] px-6 text-center">
      <p className="font-display text-8xl font-bold text-gradient">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-white">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-3 max-w-sm text-sm text-slate-400">
        The page you&apos;re looking for may have been moved or never
        existed. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03]"
      >
        <Home className="h-4 w-4" />
        Back to home
      </Link>
    </div>
  );
}
