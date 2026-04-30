import { useRef, useEffect, useState } from 'react'

const capabilities = [
  {
    icon: '🔗',
    title: 'LLM Integrations',
    description: 'Production integrations with OpenAI, Anthropic (Claude), and Google Gemini APIs. Secure key management via server-side proxies, never client-exposed.',
    tags: ['OpenAI', 'Anthropic', 'Gemini', 'Edge Functions'],
  },
  {
    icon: '⚡',
    title: 'Streaming Architectures',
    description: 'Real-time AI response streaming via ReadableStream / SSE. Chunk-by-chunk rendering with blinking cursor UX, auto-scroll, and error recovery — the UX users expect from AI products.',
    tags: ['ReadableStream', 'SSE', 'Supabase Edge', 'Low Latency'],
  },
  {
    icon: '💬',
    title: 'Prompt Engineering',
    description: 'Structuring system prompts, handling context windows, designing multi-turn conversation flows, and managing token efficiency for production cost control.',
    tags: ['System Prompts', 'Context Management', 'Multi-turn', 'Token Efficiency'],
  },
  {
    icon: '🤖',
    title: 'Agentic Workflows',
    description: 'Building goal-oriented AI flows: tool calling, function routing, and multi-step task decomposition. Learning RAG patterns and vector retrieval for context-augmented responses.',
    tags: ['Tool Calling', 'Function Routing', 'RAG', 'Task Decomposition'],
  },
  {
    icon: '🎨',
    title: 'Conversational UX',
    description: 'Designing AI-native interfaces: chat layouts, streaming indicators, markdown rendering for LLM output, error states, and retry logic. UX that doesn\'t make AI feel like a black box.',
    tags: ['Chat UI', 'Markdown Rendering', 'Loading States', 'AI UX Patterns'],
  },
  {
    icon: '🛠️',
    title: 'AI-Accelerated Dev',
    description: 'Daily use of Claude Code, GitHub Copilot, and Cursor for code generation, architecture review, and test writing. I treat AI tools as force multipliers — not as replacements for engineering judgment.',
    tags: ['Claude Code', 'GitHub Copilot', 'Cursor', 'AI-first Workflow'],
  },
]

const stack = [
  { label: 'Anthropic Claude', color: '#de0a26' },
  { label: 'Google Gemini', color: '#4285F4' },
  { label: 'OpenAI GPT-4', color: '#10a37f' },
  { label: 'Supabase Edge Functions', color: '#3ECF8E' },
  { label: 'ReadableStream / SSE', color: '#ff6b6b' },
  { label: 'Prompt Engineering', color: '#f59e0b' },
  { label: 'RAG Patterns', color: '#8b5cf6' },
  { label: 'Streaming UI', color: '#06b6d4' },
]

export default function AIEngineering() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="ai-engineering" ref={sectionRef} className="py-28 px-6" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm" style={{ color: '#de0a26' }}>03.</span>
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: 'rgba(222,10,38,0.3)' }} />
          </div>
          <h2 className="section-title">
            AI <span className="gradient-text">Engineering</span>
          </h2>
          <p className="section-subtitle max-w-2xl">
            Beyond using AI tools — building real products with language models, streaming architectures, and agentic workflows.
            This is the layer that separates a frontend dev from an AI-product engineer.
          </p>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item.label}
                className="px-3 py-1 text-xs font-mono rounded-full"
                style={{ backgroundColor: `${item.color}12`, border: `1px solid ${item.color}30`, color: item.color }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.title}
              className={`rounded-2xl p-6 transition-all duration-700 group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: `${idx * 70}ms`,
                backgroundColor: '#141414',
                border: '1px solid #242424',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(222,10,38,0.2)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#242424' }}
            >
              <div className="text-2xl mb-3">{cap.icon}</div>
              <h3 className="text-white font-semibold mb-2">{cap.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#9ca3af' }}>{cap.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-mono rounded"
                    style={{ backgroundColor: 'rgba(222,10,38,0.06)', border: '1px solid rgba(222,10,38,0.15)', color: '#ff6b6b' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture pattern callout */}
        <div
          className={`rounded-2xl p-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '500ms', backgroundColor: '#141414', border: '1px solid #242424' }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-4"
                style={{ backgroundColor: 'rgba(222,10,38,0.08)', border: '1px solid rgba(222,10,38,0.2)', color: '#ff6b6b' }}
              >
                🏗️ Production Pattern
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Secure AI Integration Architecture</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                The pattern I use to ship AI features without exposing credentials or creating fragile integrations.
                Keeps API keys server-side, handles streaming gracefully, and gives users the low-latency UX they expect.
              </p>
            </div>
            <div
              className="flex-1 p-5 rounded-xl font-mono text-sm leading-relaxed"
              style={{ backgroundColor: '#0a0a0a', border: '1px solid #1f1f1f', color: '#71717a' }}
            >
              <span style={{ color: '#de0a26' }}>Client</span>
              {' '}→{' '}
              <span style={{ color: '#ff6b6b' }}>Edge Function</span>
              {' '}(key isolated){'\n\n'}
              <span style={{ color: '#9ca3af' }}>           ↘ </span>
              <span style={{ color: '#4285F4' }}>LLM API</span>
              {' '}→{' '}
              <span style={{ color: '#3ECF8E' }}>ReadableStream</span>
              {'\n\n'}
              <span style={{ color: '#9ca3af' }}>           ↘ </span>
              <span style={{ color: '#8b5cf6' }}>DB / Vector Store</span>
              {' '}(context){'\n\n'}
              <span style={{ color: '#52525b' }}>Result: streaming UX, zero key exposure,</span>
              {'\n'}
              <span style={{ color: '#52525b' }}>        persistent context across sessions</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
