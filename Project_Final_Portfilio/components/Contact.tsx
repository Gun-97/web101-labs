"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, Send, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personal } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="CONTACT"
          title="Let's build something together"
          description="Have a project, an internship opportunity, or just want to say hi? My inbox is open."
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass col-span-3 rounded-2xl p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="focus-ring mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:shadow-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="focus-ring mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:shadow-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-400">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                className="focus-ring mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:shadow-none"
                placeholder="What's this about?"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="focus-ring mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:shadow-none"
                placeholder="Tell me about your idea..."
              />
            </div>

            <button
              type="submit"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3.5 text-base font-semibold text-slate-950 transition-transform hover:scale-[1.01] active:scale-[0.99] sm:w-auto"
            >
              {status === "sent" ? (
                <>
                  <Check className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-2 flex flex-col justify-between gap-6"
          >
            <div className="glass rounded-2xl p-6">
              <p className="text-base text-slate-600 dark:text-slate-400">
                Based in {personal.location}. Open to internships, freelance
                web projects, and collaboration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
