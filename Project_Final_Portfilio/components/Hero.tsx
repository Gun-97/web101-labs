"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  FolderGit2,
  MapPin,
} from "lucide-react";

import NodeGraph from "./NodeGraph";
import TypingText from "./TypingText";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen w-full overflow-hidden bg-slate-50/75 transition-colors duration-300 dark:bg-[#070d1c]/75"
    >
      <NodeGraph />

      {/* Background overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50/10 via-transparent to-slate-50/70 dark:from-[#070d1c]/20 dark:to-[#070d1c]/70" />

      <div className="pointer-events-none absolute -left-64 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="pointer-events-none absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:px-12 lg:pb-0 lg:pt-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative z-20 order-2 text-center lg:order-1 lg:text-left"
        >
          {/* Small heading */}
          <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="font-display text-xs font-semibold tracking-[0.35em] text-cyan-400 sm:text-sm">
              HELLO, I&apos;M
            </p>
          </div>

          {/* Name */}
          <h1 className="font-display text-5xl font-bold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
            {personal.name}
          </h1>

          {/* Typing title */}
          <div className="mt-5 min-h-[68px] max-w-2xl font-display text-xl font-medium leading-snug text-slate-700 dark:text-slate-300 sm:min-h-[44px] sm:text-2xl lg:text-3xl">
            <TypingText text={personal.title} />
          </div>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg lg:mx-0">
            I build modern web applications, software systems, and practical
            projects using programming, databases, and data structures.
          </p>

          {/* Location and status */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:shadow-none backdrop-blur-md">
              <MapPin className="h-4 w-4 text-cyan-400" />
              Phnom Penh, Cambodia
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-sm text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Open to opportunities
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_12px_40px_rgba(6,182,212,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(6,182,212,0.35)]"
            >
              <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3.5 font-semibold text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:shadow-none backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-100 dark:hover:bg-white/[0.09]"
            >
              <FolderGit2 className="h-5 w-5 text-slate-600 transition-colors dark:text-slate-300 group-hover:text-cyan-400" />
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative order-1 mx-auto flex h-[420px] w-full max-w-[500px] items-end justify-center sm:h-[540px] lg:order-2 lg:h-[680px] lg:max-w-[570px]"
        >
          {/* Animated glow */}
          <motion.div
            animate={{
              opacity: [0.25, 0.5, 0.25],
              scale: [0.95, 1.08, 0.95],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[8%] left-1/2 h-[65%] w-[65%] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[100px]"
          />

          {/* Accent glow behind head */}
          <div className="absolute left-1/2 top-[16%] h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[80px] sm:h-80 sm:w-80" />

          {/* Decorative text */}
          <div className="absolute right-2 top-[22%] hidden items-center gap-2 text-[10px] font-medium tracking-[0.25em] text-cyan-400/60 xl:flex">
            <span className="h-px w-8 bg-cyan-400/50" />
            DEVELOPER
          </div>

          {/* Cut-corner portrait frame */}
        <div className="relative h-[92%] w-[92%]">
          {/* Glow */}
          <div
            className="absolute -inset-[3px] bg-cyan-400/30 blur-md"
            style={{
              clipPath:
                "polygon(28px 0, calc(100% - 28px) 0, 100% 28px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)",
            }}
          />

          {/* Main frame */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-400 p-[1px]"
            style={{
              clipPath:
                "polygon(28px 0, calc(100% - 28px) 0, 100% 28px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)",
            }}
          >
            <div
              className="relative h-full w-full overflow-hidden bg-white dark:bg-[#08101f]"
              style={{
                clipPath:
                  "polygon(27px 0, calc(100% - 27px) 0, 100% 27px, 100% calc(100% - 27px), calc(100% - 27px) 100%, 27px 100%, 0 calc(100% - 27px), 0 27px)",
              }}
            >
              <Image
                src={personal.avatar || "/profile.jpg"}
                alt={`${personal.name} professional portrait`}
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 570px"
                className="object-cover object-top"
              />

              {/* Bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-slate-50 to-transparent dark:from-[#070d1c]" />
            </div>
          </div>

          {/* Top-right decoration */}
          <div className="absolute -right-1 top-3 z-20">
            <div className="h-[2px] w-14 bg-cyan-400" />
            <div className="ml-auto h-10 w-[2px] bg-gradient-to-b from-cyan-400 to-transparent" />
          </div>

          {/* Bottom-left decoration */}
          <div className="absolute -left-1 bottom-3 z-20">
            <div className="h-10 w-[2px] bg-gradient-to-t from-cyan-400 to-transparent" />
            <div className="h-[2px] w-14 bg-cyan-400" />
          </div>
        </div>

          {/* Floating developer badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[12%] left-0 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-[#0b1325]/70 px-4 py-3 shadow-xl shadow-black/30 backdrop-blur-xl sm:flex"
          >

            <div>
              <p className="text-xs text-slate-500 dark:text-slate-500">Currently studying</p>

              <p className="text-sm font-medium text-slate-900 dark:text-white">
                IT Engineering
              </p>
            </div>
          </motion.div>

          {/* Decorative cyan line */}
          <motion.div
            animate={{
              height: ["45px", "100px", "45px"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-3 top-[20%] hidden w-px bg-gradient-to-b from-cyan-400 to-transparent lg:block"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] text-slate-600">
          <span>SCROLL</span>

          <motion.span
            animate={{
              scaleY: [0.25, 1, 0.25],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px origin-top bg-gradient-to-b from-cyan-400 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}