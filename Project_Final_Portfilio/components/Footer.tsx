"use client";

import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { personal } from "@/lib/data";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: personal.social.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: personal.social.linkedin,
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: personal.social.facebook,
    icon: Facebook,
  },
  {
    name: "Telegram",
    href: personal.social.telegram,
    icon: Send,
  },
  {
    name: "Email",
    href: personal.social.email,
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 text-slate-700 transition-colors dark:border-white/10 dark:bg-[#050b18] dark:text-slate-300">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stay Connected */}
          <div>
            <FooterHeading title="Stay Connected" />

            <p className="mt-6 max-w-xs text-base leading-7 text-slate-600 dark:text-slate-400">
              Open to new opportunities, collaborations, internships, or
              friendly conversations. Reach out anytime through email or social
              platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading title="Quick Links" />

            <nav className="mt-6 flex flex-col items-start gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base text-slate-600 transition-all duration-300 hover:translate-x-1 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <FooterHeading title="Contact Info" />

            <div className="mt-6 space-y-4">
              <a
                href="https://maps.google.com/?q=Phnom+Penh+Cambodia"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-base text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-500" />

                <span>{personal.location}</span>
              </a>

              <a
                href="tel:+85598975675"
                className="group flex items-center gap-3 text-base text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <Phone className="h-5 w-5 shrink-0 text-cyan-500" />

                <span>(+855) 98 975 675</span>
              </a>

              <a
                href={personal.social.email}
                className="group flex items-center gap-3 break-all text-base text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <Mail className="h-5 w-5 shrink-0 text-cyan-500" />

                <span>seavminh991@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <FooterHeading title="Social" />

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isEmail = social.name === "Email";

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                    aria-label={social.name}
                    title={social.name}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-500 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300"
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>

          <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>

      <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
    </div>
  );
}