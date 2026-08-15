"use client";

import { motion, useReducedMotion } from "framer-motion";
import SkillRow from "./SkillRow";
import type { SkillCategory } from "@/data/skills";

type SkillCategoryCardProps = {
  category: SkillCategory;
  index: number;
};

export default function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = category.icon;

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white/75 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-colors hover:border-cyan-400/45 sm:p-6 dark:border-cyan-300/10 dark:bg-slate-950/65 dark:shadow-[0_18px_55px_rgba(2,8,23,0.30)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-600/10 opacity-70" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl transition-opacity group-hover:opacity-100" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 text-cyan-600 shadow-[0_8px_24px_rgba(6,182,212,0.12)] dark:text-cyan-300">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
            {category.title}
          </h3>
          <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {category.description}
          </p>
        </div>
      </div>

      <div className="relative mt-6 space-y-3">
        {category.skills.map((skill, skillIndex) => (
          <SkillRow key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.article>
  );
}
