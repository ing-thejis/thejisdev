export interface Skill {
  name: string
  level: "expert" | "advanced" | "intermediate" | "beginner"
  icon: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Core",
    description: "Technologies I use daily to build modern UIs",
    skills: [
      { name: "React", level: "expert", icon: "⚛️" },
      { name: "TypeScript", level: "expert", icon: "🔷" },
      { name: "JavaScript", level: "expert", icon: "🟡" },
      { name: "HTML5/CSS3", level: "expert", icon: "🧡" },
    ],
  },
  {
    title: "Styling & UI",
    description: "Tools for building beautiful, responsive interfaces",
    skills: [
      { name: "Tailwind CSS", level: "expert", icon: "🎨" },
      { name: "CSS Modules", level: "advanced", icon: "📦" },
      { name: "Responsive Design", level: "expert", icon: "📱" },
    ],
  },
  {
    title: "React Ecosystem",
    description: "Libraries and tools within the React ecosystem",
    skills: [
      { name: "React Hooks", level: "expert", icon: "🪝" },
      { name: "TanStack Query", level: "advanced", icon: "🔄" },
      { name: "TanStack Router", level: "advanced", icon: "🧭" },
      { name: "Zustand", level: "advanced", icon: "🐻" },
      { name: "React Hook Form", level: "advanced", icon: "📋" },
    ],
  },
  {
    title: "Architecture & DX",
    description:
      "Software architecture patterns and developer experience tools",
    skills: [
      { name: "Component Architecture", level: "expert", icon: "🏗️" },
      { name: "Clean Code", level: "expert", icon: "✅" },
      { name: "Git / GitHub", level: "expert", icon: "🐙" },
      { name: "Vite", level: "advanced", icon: "⚡" },
      { name: "Vitest / Testing", level: "intermediate", icon: "🧪" },
    ],
  },
  {
    title: "AI Tools",
    description: "Modern AI-powered tools I integrate into my workflow",
    skills: [
      { name: "Claude Code", level: "advanced", icon: "🤖" },
      { name: "GitHub Copilot", level: "advanced", icon: "🧠" },
      { name: "Cursor", level: "intermediate", icon: "🎯" },
      { name: "Prompt Engineering", level: "intermediate", icon: "💬" },
    ],
  },
  {
    title: "Backend Basics",
    description: "Backend knowledge that completes my full-stack understanding",
    skills: [
      { name: "Node.js", level: "intermediate", icon: "🟢" },
      { name: "Express.js", level: "intermediate", icon: "🚂" },
      { name: "HonoJS", level: "beginner", icon: "🔥" },
      { name: "PostgreSQL", level: "beginner", icon: "🐘" },
      { name: "MongoDB", level: "beginner", icon: "🍃" },
    ],
  },
]

export const levelColors: Record<Skill["level"], string> = {
  expert: "#de0a26",
  advanced: "#cc3939",
  intermediate: "#ff6b6b",
  beginner: "#4b4b4b",
}

export const levelLabels: Record<Skill["level"], string> = {
  expert: "Expert",
  advanced: "Advanced",
  intermediate: "Intermediate",
  beginner: "Beginner",
}
