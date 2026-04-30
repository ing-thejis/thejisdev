export interface Project {
  id: number
  title: string
  tagline: string          // one-liner: problem solved → result
  description: string      // short card description
  problem: string          // what business/user problem it solved
  architecture: string     // simplified flow diagram (text)
  techDecisions: string[]  // why these choices (not what)
  outcome: string          // concrete, measurable result
  longDescription: string
  tags: string[]
  category: 'frontend' | 'fullstack' | 'ui'
  year: string
  status: 'live' | 'wip' | 'archived'
  github?: string
  demo?: string
  highlights: string[]
  image?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Kira Pet Shop POS',
    tagline: 'Replaced paper-based retail ops with a browser-native POS — offline-resilient, thermal-printing, role-gated.',
    description:
      'Production-ready point-of-sale system for a pet shop chain. Handles the full sales lifecycle: role-based access, real-time inventory, cart with per-item discounts, multi-payment methods, and thermal receipt printing via WebUSB — all from a browser, no native app.',
    problem:
      'A retail pet shop chain needed to replace their manual, paper-based sales process with a reliable POS that could handle offline scenarios, manage inventory with image uploads, enforce admin vs. cashier roles, and print thermal receipts — without deploying a native application.',
    architecture: 'React SPA  →  Supabase Auth + PostgreSQL + Storage\n                  ↘  WebUSB API  →  58mm Thermal Printer (ESC/POS)\n                  ↘  Browser Print API  (fallback)',
    techDecisions: [
      'Supabase over custom backend — auth, database, storage, and realtime in one provider. Faster to build, easier to maintain, and no extra infrastructure to manage.',
      'TanStack Query with networkMode: "always" — cache-first reads survive brief network drops without service workers. Critical for a cashier environment.',
      'Zustand with persist middleware — auth state survives page reloads while keeping bundle size minimal vs. Redux.',
      'WebUSB + ESC/POS over iframe-print — direct USB control means silent printing with no browser dialog, matching real POS UX expectations.',
    ],
    outcome:
      'Running daily in a live retail environment. Handles the full POS lifecycle from product search to thermal receipt. Admin closure flows include full audit trails for end-of-shift reconciliation.',
    longDescription:
      'A full-featured POS handling the complete sales workflow: cashiers search products in real-time with 500ms debounce, build carts with per-item discounts, process cash/transfer/card payments, and print to a 58mm USB printer via ESC/POS — with browser-print fallback. Admins manage inventory with Supabase Storage uploads, view financial reports, and run daily closures with audit trails.',
    tags: ['React', 'TypeScript', 'Supabase', 'TanStack Query', 'Zustand', 'Tailwind CSS', 'Radix UI', 'Vite'],
    category: 'fullstack',
    year: '2025',
    status: 'live',
    github: '#',
    demo: 'https://kira-petshop.vercel.app/',
    image: new URL('../assets/kira-pet-shop.png', import.meta.url).href,
    highlights: [
      'Role-based access control (admin / cashier) enforced at route and component level',
      'Thermal receipt printing via WebUSB (ESC/POS) with automatic browser-print fallback',
      'Real-time product search with 500ms debounce, stock validation, and per-item discount engine',
      'Supabase BaaS — PostgreSQL, Auth, Storage, and Realtime in a single integration',
      'TanStack Query v5 with smart cache invalidation and networkMode: "always" for offline resilience',
      'Zustand persistent auth store that survives page reloads and browser restarts',
      'End-of-shift cash reconciliation and daily closure flows with full audit trails',
      'Fully responsive layout: card grid on mobile, data-dense tables on desktop',
    ],
  },
  {
    id: 2,
    title: 'Gemini AI Chat',
    tagline: 'Secure streaming AI chat — API key stays server-side, responses stream in real time via Edge Functions.',
    description:
      'Full-stack AI chat application with streaming responses. The Vue 3 frontend never calls Gemini directly — all traffic routes through a Supabase Edge Function proxy, keeping the API key server-side. Real-time streaming with markdown rendering and conversational UX.',
    problem:
      'Build a production-quality AI chat that never exposes API keys to the client, handles streaming responses with low perceived latency, and demonstrates a complete AI application architecture — not just a wrapper around a fetch call.',
    architecture: 'Vue 3 Client  →  Supabase Edge Function (proxy, key isolated)\n                  ↘  Gemini 2.5 Flash  →  ReadableStream\n                  ↘  Supabase PostgreSQL  (message persistence)',
    techDecisions: [
      'Supabase Edge Functions as API proxy — API key never reaches the browser. Edge location reduces latency vs. a regional Lambda. Zero cold starts.',
      'ReadableStream over WebSockets — unidirectional AI responses fit SSE semantics exactly. No connection state to manage, simpler error recovery.',
      'Vue 3 useChat composable over Pinia — all conversation state fits in a single composable using native Vue reactivity. Adding a store would be over-engineering for this scope.',
      'marked for markdown rendering — lightweight, battle-tested for code blocks and lists from LLM output.',
    ],
    outcome:
      'Live deployed app on GitHub Pages with real streaming AI conversations. Demonstrates full AI integration architecture: secure proxy, streaming UX, persistent history, and markdown rendering.',
    longDescription:
      'A full-stack conversational app powered by Gemini 2.5 Flash. The frontend never calls the Gemini API directly — requests route through a Supabase Edge Function that owns the API key and streams chunks back to the client. The useChat composable centralizes all state using Vue 3 reactivity with no external store library.',
    tags: ['Vue 3', 'TypeScript', 'Supabase', 'Google Gemini', 'Vite', 'Marked', 'Lucide'],
    category: 'fullstack',
    year: '2026',
    status: 'live',
    github: 'https://github.com/ing-thejis/ai-chat-assistent',
    demo: 'https://ing-thejis.github.io/ai-chat-assistent/',
    image: new URL('../assets/ai-chat.png', import.meta.url).href,
    highlights: [
      'Supabase Edge Function proxy — Gemini API key stays server-side, zero client exposure',
      'ReadableStream-based streaming: responses render chunk-by-chunk with blinking cursor UX',
      'useChat composable encapsulates all chat logic with Vue 3 reactivity — no Pinia needed',
      'Markdown rendering via marked — code blocks, lists, and bold from LLM output display correctly',
      'UUID-keyed message list with auto-scroll watcher for smooth UX during long responses',
      'Full TypeScript coverage across frontend and Edge Functions',
    ],
  },
  {
    id: 3,
    title: 'Platform Game — Phaser 3',
    tagline: 'Browser-native 2D platformer proving TypeScript competency outside the React ecosystem.',
    description:
      'A 2D platform game built with Phaser 3 and TypeScript. Features layered tilemaps, physics-based player movement, enemy collision, collectibles, and multi-scene state management — fully deployed and playable in the browser.',
    problem:
      'Explore browser-native game architecture, physics engines, and TypeScript scene/state management patterns — skills directly transferable to complex interactive UIs and animation-heavy frontend work.',
    architecture: 'TypeScript  →  Phaser 3 (Arcade Physics + Tilemap + Scene Manager)\n                  ↘  HTML5 Canvas API  →  GitHub Pages',
    techDecisions: [
      'Phaser 3 for battle-tested 2D physics — no reinventing collision detection. Focus goes to architecture, not math.',
      'Scene-based state machine over ad-hoc conditionals — maps directly to component/route thinking, making the patterns transferable to complex React UIs.',
      'TypeScript throughout — strict types on game objects, physics bodies, and scene data. Good practice for large codebases.',
    ],
    outcome:
      'Deployed and playable on GitHub Pages. Demonstrates TypeScript comfort outside the React ecosystem and understanding of state machine patterns.',
    longDescription:
      'A 2D platform game built with Phaser 3 and TypeScript featuring player movement, physics, tilemaps, collectibles, and game state management across multiple scenes.',
    tags: ['Phaser 3', 'TypeScript', 'HTML5', 'JavaScript'],
    category: 'ui',
    year: '2025',
    status: 'live',
    github: 'https://github.com/ing-thejis/game-platform-phaser',
    demo: 'https://ing-thejis.github.io/game-platform-phaser/',
    image: new URL('../assets/platform-game.png', import.meta.url).href,
    highlights: [
      '2D platformer with Phaser 3 Arcade Physics — player movement, gravity, and enemy collision',
      'Layered Tiled tilemaps with foreground/background separation',
      'Scene-based state machine: Boot → Preload → Game → UI → GameOver',
      'TypeScript across all game objects, physics bodies, and scene configs',
    ],
  },
  {
    id: 4,
    title: 'Notes App — Next.js 15',
    tagline: 'Full-stack CRUD in a single Next.js 15 project — zero API routes, Server Actions all the way.',
    description:
      'Full-stack notes application demonstrating Next.js 15 App Router architecture. Server Actions replace REST endpoints entirely — mutations run server-side, pages render with zero client-side data fetching, and Prisma provides type-safe DB access throughout.',
    problem:
      'Demonstrate the full-stack capabilities of Next.js 15 App Router: building a complete CRUD application without a separate API layer, proving RSC and Server Actions understanding for modern React positions.',
    architecture: 'Next.js 15 App Router\n  Server Components (default) → zero JS for reads\n  Server Actions → mutations co-located with UI\n  Prisma ORM → PostgreSQL',
    techDecisions: [
      'Server Actions over REST API routes — mutations co-located with the component that triggers them. Eliminates client/server round-trip boilerplate for this scope.',
      'Prisma over raw SQL — generated type-safe client means query errors surface at compile time, not at runtime in production.',
      'React Server Components as default — pages have zero client-side JavaScript for data fetching, which directly improves Core Web Vitals.',
    ],
    outcome:
      'Complete full-stack CRUD with near-zero client JavaScript for data operations. Demonstrates React Server Components, Server Actions, and Prisma in a production-adjacent setup.',
    longDescription:
      'A full-stack notes app leveraging Next.js 15 App Router as both frontend and backend. Server Actions handle all CRUD mutations directly from React components, pages are server-rendered by default for fast initial loads, and Turbopack accelerates development with near-instant HMR.',
    tags: ['Next.js 15', 'TypeScript', 'Prisma', 'Tailwind CSS', 'React 19', 'Turbopack'],
    category: 'fullstack',
    year: '2025',
    status: 'live',
    github: 'https://github.com/ing-thejis/notes-app-nextjs',
    demo: '#',
    highlights: [
      'Zero REST API routes — Server Actions handle all mutations co-located with UI components',
      'React Server Components by default — minimal client JS, fast First Contentful Paint',
      'Prisma ORM: type-safe queries with auto-generated client from schema definition',
      'App Router architecture with layouts, loading states, and error boundaries',
      'Turbopack dev server for near-instant HMR vs. webpack',
    ],
  },
]

export const categoryLabels: Record<Project['category'], string> = {
  frontend: 'Frontend',
  fullstack: 'Full Stack',
  ui: 'UI / Creative',
}

export const statusLabels: Record<Project['status'], { label: string; color: string }> = {
  live: { label: 'Live', color: '#22c55e' },
  wip: { label: 'In Progress', color: '#f59e0b' },
  archived: { label: 'Archived', color: '#6b7280' },
}
