import SkillCategoryCard from "./skills/SkillCategoryCard";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,.08),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,.08),_transparent_34%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-base font-medium tracking-widest text-cyan-400">
            MY TECH STACK
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Technical Skills & Tools
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Technologies and development tools I use to build modern, responsive,
            and practical applications.
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((c) => (
            <SkillCategoryCard key={c.title} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
