export const personal = {
  name: "Pet Sievminh",
  firstName: "Sievminh",
  title: "Information Technology Engineering Student",
  location: "Phnom Penh, Cambodia",
  university: "Royal University of Phnom Penh",
  major: "Information Technology Engineering",
  email: "seavminh991@gmail.com",
  avatar: "/profile.jpg",
  about:
    "I am a second-year Information Technology Engineering student at the Royal University of Phnom Penh. I enjoy building software applications, modern web interfaces, databases, and solving problems using data structures and algorithms.",
  aboutExtra:
    "I enjoy learning new technologies and creating practical projects that improve my programming, teamwork, and problem-solving skills.",
    social: {
    github: "https://github.com/Gun-97",
    linkedin: "https://linkedin.com/",
    facebook: "https://www.facebook.com/SIEVMINH.PET",
    email: "mailto:seavminh991@gmail.com",
    telegram: "https://t.me/Sievminh_Pet",
  },
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export type SkillIconLib = "si" | "di" | "vsc" | "lucide";

export type SkillCategory = {
  category: string;
  skills: { name: string; icon: string; lib: SkillIconLib; color: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "C++", icon: "SiCplusplus", lib: "si", color: "#00599C" },
      { name: "Python", icon: "SiPython", lib: "si", color: "#3776AB" },
      { name: "Java", icon: "DiJava", lib: "di", color: "#EA2D2E" },
      { name: "JavaScript", icon: "SiJavascript", lib: "si", color: "#F7DF1E" },
      { name: "SQL", icon: "Database", lib: "lucide", color: "#4479A1" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: "SiHtml5", lib: "si", color: "#E34F26" },
      { name: "CSS", icon: "SiCss", lib: "si", color: "#1572B6" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", lib: "si", color: "#38BDF8" },
      { name: "React", icon: "SiReact", lib: "si", color: "#61DAFB" },
      { name: "Next.js", icon: "SiNextdotjs", lib: "si", color: "#FFFFFF" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs", lib: "si", color: "#339933" },
      { name: "Express", icon: "SiExpress", lib: "si", color: "#FFFFFF" },
      { name: "PHP", icon: "SiPhp", lib: "si", color: "#777BB4" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: "SiMysql", lib: "si", color: "#4479A1" },
      { name: "MongoDB", icon: "SiMongodb", lib: "si", color: "#47A248" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: "SiGit", lib: "si", color: "#F05032" },
      { name: "GitHub", icon: "SiGithub", lib: "si", color: "#FFFFFF" },
      { name: "VS Code", icon: "VscVscode", lib: "vsc", color: "#007ACC" },
      { name: "Figma", icon: "SiFigma", lib: "si", color: "#F24E1E" },
      { name: "Draw.io", icon: "SiDiagramsdotnet", lib: "si", color: "#F08705" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "Data Structures" | "Systems" | "Web";
  github: string;
  demo?: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "movie-recommendation-system",
    title: "Movie Recommendation System",
    description:
      "A console-based recommendation engine demonstrating core Data Structures and Algorithms concepts.",
    longDescription:
      "Built entirely in Python with a multi-file, object-oriented structure. Movies are indexed with a custom hash table for fast lookups, relationships between titles are modeled as a graph to power similarity search, and a decision tree drives genre-based recommendations from a small catalog of sample movies.",
    tags: ["Python", "Hash Table", "Graph", "Decision Tree"],
    category: "Data Structures",
    github: "https://github.com/Gun-97/Project-Based-Learning-For-DSA",
    image: "movie",
  },
  {
    id: "asset-central",
    title: "Asset Central",
    description:
      "An inventory management tool built in C++ with direct Excel integration for reporting.",
    longDescription:
      "A C++ console application for tracking organizational assets, supporting add/update/remove operations and exporting structured inventory reports directly to Excel spreadsheets.",
    tags: ["C++", "Inventory Management", "Excel Integration"],
    category: "Systems",
    github: "https://github.com/Gun-97/ASSET-CENTRAL-PROJECT",
    image: "asset",
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    description:
      "A desktop application for managing student records with a MySQL-backed Java Swing interface.",
    longDescription:
      "A Java Swing desktop application connected to a MySQL database, allowing records for students to be created, searched, updated, and removed through a structured graphical interface.",
    tags: ["Java", "MySQL", "Swing"],
    category: "Systems",
    github: "https://github.com/",
    image: "student",
  },
  {
    id: "rupper-connect",
    title: "RUPPER Connect",
    description:
      "A responsive web application connecting students, built with React and a Laravel API.",
    longDescription:
      "A full-stack, mobile-first web application with a React front end and a Laravel + MySQL back end, designed to help students at the university connect, share, and stay informed.",
    tags: ["React", "Laravel", "MySQL", "Responsive Web App"],
    category: "Web",
    github: "https://github.com/",
    demo: "https://example.com/",
    image: "rupper",
  },
];

export const education = [
  {
    school: "Royal University of Phnom Penh",
    program: "Information Technology Engineering",
    period: "2024 — Present",
    status: "Current",
    description:
      "Coursework spanning data structures & algorithms, object-oriented analysis and design, databases, and data communications.",
  },
];

export const stats = [
  { label: "Projects Built", value: 4 },
  { label: "Technologies", value: 20 },
  { label: "Years Studying IT", value: 2 },
];
