"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education, stats } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="EDUCATION" title="Academic background" />

        <div className="relative mt-10 border-l border-slate-200 dark:border-white/10 pl-8">
          {education.map((item, i) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-4"
            >
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-slate-950">
                <GraduationCap className="h-4 w-4" />
              </span>

              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                    {item.school}
                  </h3>
                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                    {item.status}
                  </span>
                </div>
                <p className="mt-1 text-base font-medium text-blue-400">
                  {item.program}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">{item.period}</p>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <p className="font-display text-4xl font-bold text-gradient">
                {stat.value}+
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
