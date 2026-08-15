"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-white/70 text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-200"
      >
        <Sun className="h-4 w-4" aria-hidden="true" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-white/70 text-slate-700 shadow-sm transition-colors hover:bg-cyan-400/10 hover:text-cyan-500 dark:bg-white/10 dark:text-slate-200 dark:hover:text-cyan-300"
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
