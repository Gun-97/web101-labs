import { MapPin, Phone, Mail } from "lucide-react";
import { navLinks, personal } from "../data/siteData";

export default function Footer() {
  const technologies = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Vite",
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#050a15]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Footer grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Stay Connected */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              Stay Connected
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Open to new opportunities, collaborations, internships,
              or friendly conversations. Reach out anytime through email
              or social platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-4 grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 transition hover:text-cyan-300"
                >
                  {link.name === "About"
                    ? "About Me"
                    : link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white">
              Contact Info
            </h3>

            <div className="mt-4 space-y-3 text-slate-400">

              {/* Location */}
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-cyan-400" />

                <span>
                  {personal.location}
                </span>
              </p>

              {/* Phone */}
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-2 transition hover:text-cyan-300"
              >
                <Phone className="h-4 w-4 shrink-0 text-cyan-400" />

                <span>
                  {personal.phone}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 transition hover:text-cyan-300"
              >
                <Mail className="h-4 w-4 shrink-0 text-cyan-400" />

                <span className="break-all">
                  {personal.email}
                </span>
              </a>
            </div>
          </div>

          {/* Built With */}
          <div>
            <h3 className="font-semibold text-white">
              Built With
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Technologies used to build this portfolio.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-lg
                    border
                    border-cyan-400/20
                    bg-cyan-400/[0.05]
                    px-3
                    py-1.5
                    text-sm
                    font-medium
                    text-cyan-300
                    transition
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/[0.1]
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Pet Sievminh. All rights reserved.
          </p>

          <p>
            Designed & built with React + JavaScript.
          </p>
        </div>
      </div>
    </footer>
  );
}