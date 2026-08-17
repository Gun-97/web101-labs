import {
  Download,
  FolderGit2,
  MapPin,
  Sparkles,
} from "lucide-react";

import NodeGraph from "./NodeGraph";
import TypingText from "./TypingText";
import { personal } from "../data/siteData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070d1c]"
    >
      <NodeGraph />

      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070d1c]/30 via-transparent to-[#070d1c]" />

      <div className="pointer-events-none absolute -left-64 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="pointer-events-none absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />

      {/* =========================
          MAIN HERO GRID
      ========================== */}

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:px-12 lg:pb-0 lg:pt-20">
        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div className="hero-left relative z-20 order-2 text-center lg:order-1 lg:text-left">
          {/* Greeting */}

          <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="font-display text-xs font-semibold tracking-[0.35em] text-cyan-400 sm:text-sm">
              HELLO, I'M
            </p>
          </div>

          {/* Name */}

          <h1 className="font-display text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
            {personal.name}
          </h1>

          {/* Typing title */}

          <div className="mt-5 min-h-[68px] max-w-2xl font-display text-xl font-medium leading-snug text-slate-300 sm:min-h-[44px] sm:text-2xl lg:text-3xl">
            <TypingText text={personal.title} />
          </div>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
            I build modern web applications, software systems, and practical
            projects using programming, databases, and data structures.
          </p>

          {/* =========================
              LOCATION + STATUS
          ========================== */}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {/* Location */}

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
              <MapPin className="h-4 w-4 text-cyan-400" />

              {personal.location}
            </div>

            {/* Availability */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-sm text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Open to opportunities
            </div>
          </div>

          {/* =========================
              BUTTONS
          ========================== */}

          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            {/* CV */}

            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_12px_40px_rgba(6,182,212,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(6,182,212,0.32)]"
            >
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />

              Download CV
            </a>

            {/* Projects */}

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.09]"
            >
              <FolderGit2 className="h-5 w-5 text-slate-300 transition-colors duration-300 group-hover:text-cyan-400" />

              View Projects
            </a>
          </div>
        </div>

        {/* =========================
            RIGHT PORTRAIT
        ========================== */}

        <div className="hero-right relative order-1 mx-auto flex h-[430px] w-full max-w-[500px] items-end justify-center sm:h-[560px] lg:order-2 lg:h-[660px] lg:max-w-[540px]">
          {/* Main cyan glow */}

          <div className="absolute left-1/2 top-[23%] h-[65%] w-[75%] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[120px]" />

          {/* Blue glow */}

          <div className="absolute left-1/2 top-[13%] h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[90px] sm:h-80 sm:w-80" />

          {/* Decorative back glow */}

          <div className="absolute bottom-[7%] left-1/2 h-[45%] w-[80%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

          {/* =========================
              PORTRAIT FRAME
          ========================== */}

          <div className="portrait-frame relative h-[90%] w-[88%]">
            {/* Glass frame background */}

            <div className="absolute inset-0 rounded-[32px] border border-cyan-400/15 bg-gradient-to-b from-cyan-400/[0.05] via-white/[0.02] to-transparent shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm" />

            {/* =========================
                IMAGE
            ========================== */}

            <div className="absolute inset-[3px] overflow-hidden rounded-[29px]">
              <img
                src="/profile.webp"
                alt={`${personal.name} professional portrait`}
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out hover:scale-[1.015]"
              />

              {/* Dark bottom fade */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070d1c] via-[#070d1c]/10 via-35% to-transparent" />

              {/* Strong bottom blend */}

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[28%] bg-gradient-to-t from-[#070d1c] via-[#070d1c]/75 to-transparent" />

              {/* Side fade */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070d1c]/15 via-transparent to-[#070d1c]/15" />

              {/* Slight top glow */}

              <div className="pointer-events-none absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-cyan-400/[0.03] to-transparent" />
            </div>

            {/* =========================
                FRAME CORNERS
            ========================== */}

            {/* Top left */}

            <div className="absolute -left-3 -top-3 h-16 w-16">
              <div className="absolute left-0 top-0 h-px w-12 bg-gradient-to-r from-cyan-300 to-cyan-400/20" />

              <div className="absolute left-0 top-0 h-12 w-px bg-gradient-to-b from-cyan-300 to-cyan-400/20" />

              <div className="absolute left-0 top-0 h-3 w-3 border-l border-t border-cyan-200" />
            </div>

            {/* Top right */}

            <div className="absolute -right-3 -top-3 h-16 w-16">
              <div className="absolute right-0 top-0 h-px w-12 bg-gradient-to-l from-cyan-300 to-cyan-400/20" />

              <div className="absolute right-0 top-0 h-12 w-px bg-gradient-to-b from-cyan-300 to-cyan-400/20" />

              <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-cyan-200" />
            </div>

            {/* Bottom left */}

            <div className="absolute -bottom-3 -left-3 h-16 w-16">
              <div className="absolute bottom-0 left-0 h-px w-12 bg-gradient-to-r from-cyan-300 to-cyan-400/20" />

              <div className="absolute bottom-0 left-0 h-12 w-px bg-gradient-to-t from-cyan-300 to-cyan-400/20" />
            </div>

            {/* Bottom right */}

            <div className="absolute -bottom-3 -right-3 h-16 w-16">
              <div className="absolute bottom-0 right-0 h-px w-12 bg-gradient-to-l from-cyan-300 to-cyan-400/20" />

              <div className="absolute bottom-0 right-0 h-12 w-px bg-gradient-to-t from-cyan-300 to-cyan-400/20" />
            </div>

            {/* =========================
                DEVELOPER LABEL
            ========================== */}

            <div className="absolute -right-10 top-[20%] hidden items-center gap-2 xl:flex">
              <span className="h-px w-8 bg-cyan-400/50" />

              <span className="text-[10px] font-semibold tracking-[0.28em] text-cyan-400/60">
                DEVELOPER
              </span>
            </div>

            {/* Vertical cyan line */}

            <div className="cyan-line absolute -right-3 top-[27%] hidden h-24 w-px bg-gradient-to-b from-cyan-400 via-cyan-400/40 to-transparent lg:block" />

            {/* Small decorative point */}

            <div className="absolute -right-[15px] top-[26%] hidden h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)] lg:block" />
          </div>

          {/* =========================
              FLOATING STUDY BADGE
          ========================== */}

          <div className="float-badge absolute bottom-[7%] left-[1%] z-20 hidden items-center gap-3 rounded-2xl border border-cyan-400/20 bg-[#0b1325]/80 px-4 py-3 shadow-[0_18px_50px_rgba(6,182,212,0.15)] backdrop-blur-xl sm:flex">
            {/* Icon */}

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 text-cyan-400">
              <Sparkles className="h-5 w-5" />
            </div>

            {/* Text */}

            <div>
              <p className="text-xs text-slate-500">
                Currently studying
              </p>

              <p className="text-sm font-semibold text-white">
                IT Engineering
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          SCROLL INDICATOR
      ========================== */}

      <div className="scroll-indicator absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:flex md:flex-col md:items-center md:gap-2">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500">
          Scroll
        </span>

        <div className="relative h-9 w-px overflow-hidden bg-slate-700">
          <div className="scroll-line absolute left-0 top-0 h-4 w-px bg-cyan-400" />
        </div>
      </div>
    </section>
  );
}