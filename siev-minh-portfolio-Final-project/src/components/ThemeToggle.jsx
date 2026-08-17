import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const value = saved ? saved === "dark" : true;
    setDark(value);
    document.documentElement.classList.toggle("dark", value);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button type="button" onClick={toggleTheme} aria-label="Toggle theme" className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-white/70 text-slate-700 shadow-sm transition hover:bg-cyan-400/10 hover:text-cyan-500 dark:bg-white/10 dark:text-slate-200 dark:hover:text-cyan-300">
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}