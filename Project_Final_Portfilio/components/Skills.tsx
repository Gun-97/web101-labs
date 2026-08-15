"use client";

import { motion, useReducedMotion } from "framer-motion";
import SkillCategoryCard from "./skills/SkillCategoryCard";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_18%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_92%_76%,rgba(37,99,235,0.10),transparent_30%)]" />
      <div className="pointer-events-none absolute left-[-7rem] top-28 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-8rem] top-1/3 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-display text-sm font-semibold tracking-[0.28em] text-cyan-600 dark:text-cyan-400">
            MY TECH STACK
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Technical Skills &amp; Tools
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            Technologies and development tools I use to build modern, responsive, and practical applications.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
