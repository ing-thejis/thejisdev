export interface Skill {
  name: string
  level: 'expert' | 'advanced' | 'intermediate'
  icon: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'AI & LLM Engineering',
    description: 'Building real-world AI products with language models and agentic workflows',
    skills: [
      { name: 'LLM Integrations', level: 'advanced', icon: '🧠' },
      { name: 'Prompt Engineering', level: 'advanced', icon: '💬' },
      { name: 'Streaming UI / SSE', level: 'advanced', icon: '⚡' },
      { name: 'Agentic Workflows', level: 'intermediate', icon: '🤖' },
      { name: 'Claude Code', level: 'advanced', icon: '⬛' },
      { name: 'GitHub Copilot', level: 'advanced', icon: '🐙' },
    ],
  },
  {
    title: 'Frontend Core',
    description: 'Technologies I use daily to build production-grade UIs',
    skills: [
      { name: 'React 18+', level: 'expert', icon: '⚛️' },
      { name: 'TypeScript', level: 'expert', icon: '🔷' },
      { name: 'JavaScript', level: 'expert', icon: '🟡' },
      { name: 'Next.js 14+', level: 'advanced', icon: '▲' },
      { name: 'Vue 3', level: 'intermediate', icon: '💚' },
    ],
  },
  {
    title: 'Styling & UI',
    description: 'Tools for building beautiful, accessible, responsive interfaces',
    skills: [
      { name: 'Tailwind CSS', level: 'expert', icon: '🎨' },
      { name: 'Shadcn/UI', level: 'advanced', icon: '🧩' },
      { name: 'Radix UI', level: 'advanced', icon: '○' },
      { name: 'CSS Modules', level: 'advanced', icon: '📦' },
      { name: 'Responsive Design', level: 'expert', icon: '📱' },
    ],
  },
  {
    title: 'React Ecosystem',
    description: 'State management, data fetching and React patterns at scale',
    skills: [
      { name: 'React Hooks', level: 'expert', icon: '🪝' },
      { name: 'TanStack Query', level: 'advanced', icon: '🔄' },
      { name: 'TanStack Router', level: 'advanced', icon: '🧭' },
      { name: 'Zustand', level: 'advanced', icon: '🐻' },
      { name: 'React Hook Form', level: 'advanced', icon: '📋' },
    ],
  },
  {
    title: 'Architecture & DX',
    description: 'Software patterns, clean code, and developer experience tooling',
    skills: [
      { name: 'Component Architecture', level: 'expert', icon: '🏗️' },
      { name: 'Clean Code', level: 'expert', icon: '✅' },
      { name: 'Git / GitHub Actions', level: 'expert', icon: '🐱' },
      { name: 'Vite', level: 'advanced', icon: '⚡' },
      { name: 'Vitest / Testing', level: 'intermediate', icon: '🧪' },
    ],
  },
  {
    title: 'Backend & Data',
    description: 'Server-side knowledge that completes the full-stack picture',
    skills: [
      { name: 'Node.js / Express', level: 'intermediate', icon: '🟢' },
      { name: 'HonoJS', level: 'intermediate', icon: '🔥' },
      { name: 'Supabase', level: 'advanced', icon: '⚡' },
      { name: 'PostgreSQL', level: 'intermediate', icon: '🐘' },
      { name: 'MongoDB', level: 'intermediate', icon: '🍃' },
    ],
  },
]

export const levelColors: Record<Skill['level'], string> = {
  expert: '#de0a26',
  advanced: '#ff6b6b',
  intermediate: '#4b4b4b',
}

export const levelLabels: Record<Skill['level'], string> = {
  expert: 'Expert',
  advanced: 'Advanced',
  intermediate: 'Intermediate',
}
