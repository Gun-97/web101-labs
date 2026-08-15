"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Atom,
  Binary,
  Bot,
  BrainCircuit,
  Braces,
  CircuitBoard,
  CloudCog,
  Code2,
  Cpu,
  Database,
  Eye,
  FileCode2,
  GitBranch,
  Layers3,
  MessageSquareCode,
  Network,
  ScanSearch,
  SearchCode,
  Sparkles,
  WandSparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type OrbitIcon = {
  Icon: LucideIcon;
  position: string;
  label: string;
  className?: string;
};

const outerIcons: OrbitIcon[] = [
  { Icon: Bot, position: "left-1/2 top-0 -translate-x-1/2", label: "AI assistant" },
  { Icon: MessageSquareCode, position: "right-[18%] top-[5%]", label: "AI chat" },
  { Icon: BrainCircuit, position: "right-[3%] top-[25%]", label: "Neural intelligence" },
  { Icon: Eye, position: "right-[1%] top-1/2 -translate-y-1/2", label: "Computer vision", className: "hidden sm:flex" },
  { Icon: Network, position: "bottom-[19%] right-[7%]", label: "Neural network" },
  { Icon: CloudCog, position: "bottom-[4%] right-[24%]", label: "Cloud AI", className: "hidden sm:flex" },
  { Icon: Cpu, position: "bottom-0 left-1/2 -translate-x-1/2", label: "AI processor" },
  { Icon: Database, position: "bottom-[4%] left-[24%]", label: "Training data", className: "hidden sm:flex" },
  { Icon: ScanSearch, position: "bottom-[19%] left-[7%]", label: "Machine vision" },
  { Icon: Binary, position: "left-[3%] top-[25%]", label: "AI data" },
  { Icon: SearchCode, position: "left-[1%] top-1/2 -translate-y-1/2", label: "AI search", className: "hidden sm:flex" },
  { Icon: CircuitBoard, position: "left-[18%] top-[5%]", label: "AI hardware" },
];

const middleIcons: OrbitIcon[] = [
  { Icon: Sparkles, position: "left-1/2 top-0 -translate-x-1/2", label: "Generative AI" },
  { Icon: WandSparkles, position: "right-[5%] top-[23%]", label: "AI generation" },
  { Icon: Workflow, position: "bottom-[15%] right-[8%]", label: "AI workflow" },
  { Icon: Atom, position: "bottom-0 left-1/2 -translate-x-1/2", label: "AI model" },
  { Icon: Layers3, position: "bottom-[15%] left-[8%]", label: "Model layers" },
  { Icon: GitBranch, position: "left-[5%] top-[23%]", label: "Decision paths" },
];

const innerIcons: OrbitIcon[] = [
  { Icon: Code2, position: "left-1/2 top-0 -translate-x-1/2", label: "AI coding" },
  { Icon: Braces, position: "right-0 top-1/2 -translate-y-1/2", label: "Structured output" },
  { Icon: FileCode2, position: "bottom-0 left-1/2 -translate-x-1/2", label: "Generated code" },
  { Icon: Cpu, position: "left-0 top-1/2 -translate-y-1/2", label: "Model inference" },
];

function IconBadge({ Icon, position, label, className = "" }: OrbitIcon) {
  return (
    <div
      className={`absolute ${position} ${className} flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/20 bg-white/55 text-cyan-600 shadow-[0_0_24px_rgba(6,182,212,0.14)] backdrop-blur-md dark:border-cyan-300/20 dark:bg-slate-950/45 dark:text-cyan-300 sm:h-12 sm:w-12 lg:h-14 lg:w-14`}
      title={label}
    >
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" strokeWidth={1.5} />
    </div>
  );
}

export default function AIBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 opacity-30 sm:h-[1000px] sm:w-[1000px] lg:h-[1320px] lg:w-[1320px] dark:opacity-25">
        <div className="absolute inset-[22%] rounded-full bg-cyan-400/8 blur-[120px] dark:bg-cyan-400/10" />
        <div className="absolute inset-[36%] rounded-full bg-blue-500/8 blur-[90px] dark:bg-blue-500/10" />

        <motion.div
          className="absolute inset-[2%]"
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-cyan-500/12 dark:border-cyan-300/12" />
          <div className="absolute inset-[7%] rounded-full border border-dashed border-blue-500/10 dark:border-blue-300/10" />
          {outerIcons.map((item) => <IconBadge key={item.label} {...item} />)}
        </motion.div>

        <motion.div
          className="absolute inset-[20%]"
          animate={shouldReduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 76, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/15 dark:border-cyan-300/15" />
          {middleIcons.map((item) => <IconBadge key={item.label} {...item} />)}
        </motion.div>

        <motion.div
          className="absolute inset-[34%]"
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-blue-500/12 dark:border-blue-300/12" />
          {innerIcons.map((item) => <IconBadge key={item.label} {...item} />)}
        </motion.div>

        <motion.div
          className="absolute inset-[43%] flex items-center justify-center rounded-full border border-cyan-500/15 bg-white/35 shadow-[0_0_80px_rgba(6,182,212,0.12)] backdrop-blur-sm dark:border-cyan-300/15 dark:bg-slate-950/30"
          animate={shouldReduceMotion ? undefined : { rotate: 360, scale: [1, 1.06, 1] }}
          transition={{
            rotate: { duration: 34, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <BrainCircuit className="h-14 w-14 text-cyan-500/45 dark:text-cyan-300/45 sm:h-20 sm:w-20 lg:h-24 lg:w-24" strokeWidth={1.15} />
        </motion.div>

        <motion.span
          className="absolute left-[14%] top-[49%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
          animate={shouldReduceMotion ? undefined : { opacity: [0.25, 1, 0.25], scale: [0.8, 1.35, 0.8] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute right-[16%] top-[38%] h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.75)]"
          animate={shouldReduceMotion ? undefined : { opacity: [1, 0.3, 1], scale: [1, 0.75, 1] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
