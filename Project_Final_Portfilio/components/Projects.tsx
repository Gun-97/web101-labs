"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

const filters = ["All", "Data Structures", "Systems", "Web"] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="PROJECTS"
          title="Things I've built"
          description="A selection of coursework and personal projects across systems, data structures, and the web."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`focus-ring rounded-full px-5 py-2.5 text-base font-medium transition-colors ${
                active === f
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-950"
                  : "glass text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="glass group overflow-hidden rounded-2xl"
              >
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.25),transparent_60%)]" />
                  <Sparkles className="h-10 w-10 text-cyan-400/70 transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-sm font-medium text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-base text-slate-700 dark:border-white/10 dark:text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-slate-950 dark:hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2.5 text-base font-medium text-slate-950 transition-transform hover:scale-[1.02]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
