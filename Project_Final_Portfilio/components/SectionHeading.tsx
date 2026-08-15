"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="font-display text-base font-medium tracking-widest text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{description}</p>
      )}
    </motion.div>
  );
}
