export interface Skill {
  name: string
  level: "expert" | "advanced" | "intermediate"
  icon: string // emoji fallback
  iconUrl?: string // devicon / simpleicons CDN
  invert?: boolean // invert filter for dark-bg icons (e.g. Next.js, GitHub)
}

export interface SkillCategory {
  title: string
  description: string
  skills: Skill[]
}

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"
const SI = "https://cdn.simpleicons.org"

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & LLM Engineering",
    description:
      "Building real-world AI products with language models and agentic workflows",
    skills: [
      {
        name: "LLM Integrations",
        level: "advanced",
        icon: "🧠",
        iconUrl: `${SI}/openai/ffffff`,
      },
      {
        name: "Prompt Engineering",
        level: "advanced",
        icon: "💬",
        iconUrl: `${SI}/anthropic/ffffff`,
      },
      { name: "Streaming UI / SSE", level: "advanced", icon: "⚡" },
      { name: "Agentic Workflows", level: "intermediate", icon: "🤖" },
      {
        name: "Claude Code",
        level: "advanced",
        icon: "⬛",
        iconUrl: `${SI}/anthropic/de0a26`,
      },
      {
        name: "GitHub Copilot",
        level: "advanced",
        icon: "🐙",
        iconUrl: `${SI}/githubcopilot/ffffff`,
      },
    ],
  },
  {
    title: "Frontend Core",
    description: "Technologies I use daily to build production-grade UIs",
    skills: [
      {
        name: "React 18+",
        level: "expert",
        icon: "⚛️",
        iconUrl: `${DI}/react/react-original.svg`,
      },
      {
        name: "TypeScript",
        level: "expert",
        icon: "🔷",
        iconUrl: `${DI}/typescript/typescript-original.svg`,
      },
      {
        name: "JavaScript",
        level: "expert",
        icon: "🟡",
        iconUrl: `${DI}/javascript/javascript-original.svg`,
      },
      {
        name: "Next.js 14+",
        level: "advanced",
        icon: "▲",
        iconUrl: `${DI}/nextjs/nextjs-original.svg`,
        invert: true,
      },
      {
        name: "Vue 3",
        level: "intermediate",
        icon: "💚",
        iconUrl: `${DI}/vuejs/vuejs-original.svg`,
      },
    ],
  },
  {
    title: "Styling & UI",
    description:
      "Tools for building beautiful, accessible, responsive interfaces",
    skills: [
      {
        name: "Tailwind CSS",
        level: "expert",
        icon: "🎨",
        iconUrl: `${DI}/tailwindcss/tailwindcss-original.svg`,
      },
      {
        name: "Shadcn/UI",
        level: "advanced",
        icon: "🧩",
        iconUrl: `${SI}/shadcnui/ffffff`,
      },
      {
        name: "Radix UI",
        level: "advanced",
        icon: "○",
        iconUrl: `${SI}/radixui/ffffff`,
      },
      {
        name: "CSS Modules",
        level: "advanced",
        icon: "📦",
        iconUrl: `${DI}/css3/css3-original.svg`,
      },
      {
        name: "Responsive Design",
        level: "expert",
        icon: "📱",
        iconUrl: `${DI}/html5/html5-original.svg`,
      },
    ],
  },
  {
    title: "React Ecosystem",
    description: "State management, data fetching and React patterns at scale",
    skills: [
      {
        name: "React Hooks",
        level: "expert",
        icon: "🪝",
        iconUrl: `${DI}/react/react-original.svg`,
      },
      {
        name: "TanStack Query",
        level: "advanced",
        icon: "🔄",
        iconUrl: `${SI}/reactquery/EF4444`,
      },
      {
        name: "TanStack Router",
        level: "advanced",
        icon: "🧭",
        iconUrl: `${SI}/reactrouter/CA4245`,
      },
      { name: "Zustand", level: "advanced", icon: "🐻" },
      {
        name: "React Hook Form",
        level: "advanced",
        icon: "📋",
        iconUrl: `${SI}/reacthookform/EC5990`,
      },
    ],
  },
  {
    title: "Architecture & DX",
    description:
      "Software patterns, clean code, and developer experience tooling",
    skills: [
      { name: "Component Architecture", level: "expert", icon: "🏗️" },
      { name: "Clean Code", level: "expert", icon: "✅" },
      {
        name: "Git / GitHub Actions",
        level: "expert",
        icon: "🐱",
        iconUrl: `${DI}/git/git-original.svg`,
      },
      {
        name: "Vite",
        level: "advanced",
        icon: "⚡",
        iconUrl: `${DI}/vitejs/vitejs-original.svg`,
      },
      {
        name: "Vitest / Testing",
        level: "intermediate",
        icon: "🧪",
        iconUrl: `${DI}/vitest/vitest-original.svg`,
      },
    ],
  },
  {
    title: "Backend & Data",
    description: "Server-side knowledge that completes the full-stack picture",
    skills: [
      {
        name: "Node.js / Express",
        level: "intermediate",
        icon: "🟢",
        iconUrl: `${DI}/nodejs/nodejs-original.svg`,
      },
      {
        name: "HonoJS",
        level: "intermediate",
        icon: "🔥",
        iconUrl: `${SI}/hono/E36002`,
      },
      {
        name: "Supabase",
        level: "advanced",
        icon: "⚡",
        iconUrl: `${DI}/supabase/supabase-original.svg`,
      },
      {
        name: "PostgreSQL",
        level: "intermediate",
        icon: "🐘",
        iconUrl: `${DI}/postgresql/postgresql-original.svg`,
      },
      {
        name: "MongoDB",
        level: "intermediate",
        icon: "🍃",
        iconUrl: `${DI}/mongodb/mongodb-original.svg`,
      },
    ],
  },
]

export const levelColors: Record<Skill["level"], string> = {
  expert: "#de0a26",
  advanced: "#ff6b6b",
  intermediate: "#4b4b4b",
}

export const levelLabels: Record<Skill["level"], string> = {
  expert: "Expert",
  advanced: "Advanced",
  intermediate: "Intermediate",
}
