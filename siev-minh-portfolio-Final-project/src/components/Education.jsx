import { GraduationCap, CalendarDays } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const stats = [
    ["4+", "Projects Built"],
    ["20+", "Technologies"],
    ["2+", "Years Studying IT"],
  ];

  return (
    <section id="education" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="EDUCATION"
          title="Academic background"
        />

        {/* Education card */}
        <div className="glass reveal mx-auto mt-10 max-w-4xl rounded-3xl p-7 sm:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            {/* School info */}
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <GraduationCap />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Royal University of Phnom Penh
              </h3>
              <p className="mt-2 text-lg text-cyan-300">
                Information Technology Engineering
              </p>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Coursework spanning data structures & algorithms, object-oriented
                analysis and design, databases, and data communications.
              </p>
            </div>

            {/* Current status */}
            <div className="shrink-0 rounded-2xl border border-cyan-400/15 bg-cyan-400/5 px-5 py-4">
              <p className="text-xs uppercase tracking-[.2em] text-cyan-300">
                Current
              </p>
              <p className="mt-2 flex items-center gap-2 text-slate-300">
                <CalendarDays className="h-4 w-4" />
                2024 — Present
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[.03] p-5 text-center"
              >
                <p className="text-3xl font-bold text-gradient">{value}</p>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
