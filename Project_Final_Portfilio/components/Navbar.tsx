"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = navLinks.find(
              (l) => l.href === `#${entry.target.id}`
            );
            if (match) setActive(match.name);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "" : ""
        }`}
      >
        <div className="glass flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3">
          <a
            href="#home"
            className="focus-ring flex items-center gap-2 font-display font-semibold tracking-tight text-slate-900 dark:text-white"
          >
            <Terminal className="h-5 w-5 text-cyan-400" />
            <span>
              Siev<span className="text-gradient">.dev</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-2" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="focus-ring relative px-4 py-2 text-base text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {active === link.name && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-cyan-400/10 dark:bg-white/5"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="focus-ring text-slate-700 dark:text-slate-200 md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass mt-2 overflow-hidden rounded-2xl md:hidden"
              aria-label="Mobile"
            >
              <div className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`focus-ring rounded-lg px-4 py-3 text-base transition-colors ${
                      active === link.name
                        ? "bg-cyan-400/10 text-slate-900 dark:text-white"
                        : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
