"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Skill } from "@/data/skills";

type SkillRowProps = {
  skill: Skill;
  index: number;
};

export default function SkillRow({ skill, index }: SkillRowProps) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = skill.icon;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.35, delay: index * 0.055 }}
      whileHover={shouldReduceMotion ? undefined : { x: 3 }}
      className="group/skill rounded-2xl border border-slate-200/80 bg-white/65 p-3.5 shadow-sm transition-colors hover:border-cyan-400/40 hover:bg-white/90 dark:border-white/10 dark:bg-slate-900/55 dark:hover:bg-slate-900/80"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-medium text-slate-800 dark:text-slate-100">
              {skill.name}
            </span>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-cyan-700 dark:text-cyan-300">
              {skill.level}
            </span>
          </div>

          <div
            className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200/90 dark:bg-slate-800"
            role="progressbar"
            aria-label={`${skill.name} proficiency: ${skill.level}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={skill.progress}
          >
            <motion.div
              initial={shouldReduceMotion ? { width: `${skill.progress}%` } : { width: 0 }}
              whileInView={{ width: `${skill.progress}%` }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.12 + index * 0.055, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.45)]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
