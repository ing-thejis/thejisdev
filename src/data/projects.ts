export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  category: "frontend" | "fullstack" | "ui"
  year: string
  status: "live" | "wip" | "archived"
  github?: string
  demo?: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Kira Pet Shop POS",
    description:
      "Production-ready point-of-sale system for a pet shop chain, featuring role-based access control, real-time inventory management, and thermal receipt printing via WebUSB.",
    longDescription:
      "A full-featured POS application built to handle the complete sales workflow of a retail pet shop. Cashiers can search products in real-time, build a cart with per-item discounts, process payments via cash, transfer, or card, and print thermal receipts to a USB-connected 58mm printer using the ESC/POS protocol — with a browser print fallback for graceful degradation. Admins get a separate surface to manage inventory (CRUD with image upload to Supabase Storage), view financial reports, manage clients, run end-of-shift cash reconciliations, and perform daily closures with full audit trails. Authentication is powered by Supabase Auth with persistent sessions via Zustand, and every route is protected by a declarative role-based access layer. The UI adapts between a card grid on mobile and a data-dense desktop layout, keeping the checkout experience fast on any device.",
    tags: [
      "React",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "Radix UI",
      "Vite",
    ],
    category: "fullstack",
    year: "2025",
    status: "live",
    github: "#",
    demo: "https://kira-petshop.vercel.app/",
    highlights: [
      "Role-based access control (admin / cashier) enforced at route and component level",
      "Thermal receipt printing via WebUSB (ESC/POS) with automatic browser-print fallback",
      "Real-time product search with 500ms debounce, stock validation, and per-item discount engine",
      "Supabase BaaS — PostgreSQL, Auth, Storage, and Realtime in a single integration",
      "TanStack Query v5 with smart cache invalidation and networkMode: 'always' for offline resilience",
      "Zustand persistent auth store that survives page reloads and browser restarts",
      "End-of-shift cash reconciliation and daily closure flows with full audit trails",
      "Fully responsive layout: card grid on mobile, data-dense tables on desktop",
    ],
  },
  {
    id: 2,
    title: "Gemini AI Chat",
    description:
      "Real-time AI chat application with streaming responses, built on a Vue 3 + Hono monorepo architecture with a secure backend proxy to the Gemini 2.5 Flash model.",
    longDescription:
      "A full-stack conversational app that lets users chat with Google's Gemini 2.5 Flash model through a clean, responsive interface. The frontend never calls Gemini directly — all requests go through a lightweight Hono backend that owns the API key and streams responses back as plain text chunks, which the Vue client consumes in real time and renders with a blinking cursor effect. The useChat composable centralises all state (messages, loading, errors) using Vue 3 reactivity alone, with no external store library. AI responses are parsed and displayed as rich Markdown (bold, code blocks, lists) via the marked library. Each message gets a UUID for stable list rendering, and the UI auto-scrolls to the latest chunk during streaming. Users can send with Enter, insert newlines with Shift+Enter, and clear the conversation at any time. The project is structured as a pnpm monorepo with fully typed TypeScript on both sides.",
    tags: [
      "Vue 3",
      "TypeScript",
      "Hono",
      "Google Gemini",
      "Vite",
      "pnpm Workspaces",
      "Marked",
      "Lucide",
    ],
    category: "fullstack",
    year: "2026",
    status: "live",
    github: "https://github.com/ing-thejis/ai-chat-assistent",
    demo: "https://ing-thejis.github.io/ai-chat-assistent/",
    highlights: [
      "Streaming-first architecture — Hono backend pipes Gemini chunks via ReadableStream, Vue frontend renders them in real time",
      "Secure backend proxy keeps the Gemini API key server-side, never exposed to the client",
      "useChat composable encapsulates all chat logic with Vue 3 reactivity — no Pinia or Redux needed",
      "Markdown rendering via marked, displaying formatted AI responses (code blocks, lists, bold)",
      "UUID-keyed message list with auto-scroll watcher for smooth UX during long responses",
      "Full TypeScript coverage across frontend and backend with shared Message / MessageRole types",
      "Keyboard UX: Enter to send, Shift+Enter for newline, real-time blinking cursor during streaming",
      "pnpm monorepo with separate frontend (Vue/Vite) and backend (Hono/Node) packages",
    ],
  },
  {
    id: 3,
    title: "Platform Game using Phaser",
    description:
      "A 2D platform game built with Phaser 3 and TypeScript. Features include player movement, physics, tilemaps, and game states.",
    longDescription:
      "A 2D platform game built with Phaser 3 and TypeScript. Features include player movement, physics, tilemaps, and game states.",
    tags: ["Phaser 3", "TypeScript", "HTML5", "JavaScript"],
    category: "ui",
    year: "2025",
    status: "live",
    github: "https://github.com/ing-thejis/game-platform-phaser",
    demo: "https://ing-thejis.github.io/game-platform-phaser/",
    highlights: [
      "2D platform game built with Phaser 3 and TypeScript",
      "Player movement, physics, tilemaps, and game states",
      "",
      "",
    ],
  },
  {
    id: 4,
    title: "Notes App",
    description:
      "Full-stack notes CRUD application built entirely within Next.js 15, using Server Actions and Prisma ORM to manage persistent data without a separate backend.",
    longDescription:
      "A full-stack notes application that leverages Next.js 15's App Router as both the frontend and backend layer, eliminating the need for a separate API server. Users can create, read, update, and delete notes through a clean interface, with all data operations handled by Next.js Server Actions that communicate directly with a relational database via Prisma ORM. The project demonstrates a modern monolithic architecture where the server and client coexist in the same codebase — form submissions trigger server-side mutations, pages are server-rendered by default for fast initial loads, and Turbopack accelerates the development experience with near-instant HMR. Styled with Tailwind CSS and fully typed with TypeScript, the codebase follows Next.js App Router conventions: layouts, loading states, and route segments live in the src/ directory alongside the Prisma schema.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "React 19",
      "Turbopack",
    ],
    category: "fullstack",
    year: "2025",
    status: "live",
    github: "https://github.com/ing-thejis/notes-app-nextjs",
    demo: "#",
    highlights: [
      "Full-stack in a single Next.js 15 project — no separate API server needed",
      "Server Actions handle all CRUD mutations directly from React components",
      "Prisma ORM provides type-safe database access with auto-generated client",
      "App Router architecture with server-rendered pages for fast initial loads",
      "Turbopack dev server for near-instant Hot Module Replacement",
      "Fully typed end-to-end with TypeScript 5 and React 19",
      "Tailwind CSS for utility-first, responsive styling",
    ],
  },
]

export const categoryLabels: Record<Project["category"], string> = {
  frontend: "Frontend",
  fullstack: "Full Stack",
  ui: "UI / Component",
}

export const statusLabels: Record<
  Project["status"],
  { label: string; color: string }
> = {
  live: { label: "Live", color: "#22c55e" },
  wip: { label: "In Progress", color: "#f59e0b" },
  archived: { label: "Archived", color: "#6b7280" },
}
