import { useState } from "react";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/siteData";

const FILTERS = ["All", "Data Structures", "Systems", "Web"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="PROJECTS"
          title="Things I've built"
          description="A selection of coursework and personal projects across systems, data structures, and the web."
        />

        {/* Filter buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`focus-ring rounded-full px-5 py-2.5 text-base font-medium transition ${
                active === f
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950"
                  : "glass text-slate-300 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <article
              key={p.id}
              className="glass project-card group overflow-hidden rounded-2xl"
            >
              {/* Project header image */}
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,.25),transparent_60%)]" />
                <Sparkles className="h-10 w-10 text-cyan-400/70 transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-400">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-sm font-medium text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-base text-slate-200 transition hover:border-cyan-400/40 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2.5 text-base text-cyan-300 transition hover:bg-cyan-400/20"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
