import type { ElementType } from "react";
import { Code2, Database, Wrench } from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export type Skill = {
  name: string;
  icon: ElementType;
  level: "Intermediate";
  progress: number;
};

export type SkillCategory = {
  title: string;
  description: string;
  icon: ElementType;
  skills: Skill[];
};

const intermediate = (name: string, icon: ElementType, progress = 68): Skill => ({
  name,
  icon,
  level: "Intermediate",
  progress,
});

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces and modern web experiences built with reusable components.",
    icon: Code2,
    skills: [
      intermediate("HTML", SiHtml5, 74),
      intermediate("CSS", SiCss, 72),
      intermediate("JavaScript", SiJavascript, 70),
      intermediate("React", SiReact, 68),
      intermediate("Next.js", SiNextdotjs, 67),
      intermediate("Tailwind CSS", SiTailwindcss, 72),
      intermediate("TypeScript", SiTypescript, 66),
    ],
  },
  {
    title: "Backend & Database",
    description:
      "Application logic, server-side development, and structured data management.",
    icon: Database,
    skills: [
      intermediate("Java", FaJava, 70),
      intermediate("Python", SiPython, 68),
      intermediate("Node.js", SiNodedotjs, 65),
      intermediate("MySQL", SiMysql, 70),
    ],
  },
  {
    title: "Development Tools",
    description:
      "Tools for source control, coding, interface design, collaboration, and deployment.",
    icon: Wrench,
    skills: [
      intermediate("Git", SiGit, 72),
      intermediate("GitHub", SiGithub, 72),
      intermediate("VS Code", VscCode, 76),
      intermediate("IntelliJ IDEA", SiIntellijidea, 68),
      intermediate("Figma", SiFigma, 65),
      intermediate("Vercel", SiVercel, 67),
    ],
  },
];
