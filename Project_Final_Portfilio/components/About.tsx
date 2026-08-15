"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Code2, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personal } from "@/lib/data";

const cards = [
  { icon: MapPin, label: "Location", value: personal.location },
  { icon: GraduationCap, label: "University", value: personal.university },
  { icon: Code2, label: "Major", value: personal.major },
  { icon: Sparkles, label: "Interests", value: "Web Apps, Databases, DSA" },
];

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="ABOUT ME" title="Getting to know me" />

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">
              A student who likes turning ideas into working software
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {personal.about}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {personal.aboutExtra}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-5 transition-colors hover:border-cyan-400/30"
              >
                <card.icon className="h-6 w-6 text-cyan-400" />
                <p className="mt-4 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  {card.label}
                </p>
                <p className="mt-1 text-base font-medium text-slate-800 dark:text-slate-200">
                  {card.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
