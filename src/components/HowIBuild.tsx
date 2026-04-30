import { useRef, useEffect, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Understand the problem',
    description: 'I start with the user problem, not the tech stack. What\'s the constraint? What does "done" actually look like? This shapes every architecture decision that follows.',
    tools: ['Product spec', 'User flow mapping', 'Claude for requirement clarification'],
    color: '#de0a26',
  },
  {
    number: '02',
    title: 'Design the architecture',
    description: 'Before writing a line of code: what\'s the data flow? Where does state live? Which boundaries need to be server-side? I sketch the component tree and API contract first.',
    tools: ['Component architecture', 'API contract', 'Data flow diagram'],
    color: '#ff6b6b',
  },
  {
    number: '03',
    title: 'Build with AI assistance',
    description: 'I use Claude Code and GitHub Copilot as force multipliers — for scaffolding, generating types from schemas, writing tests, and reviewing edge cases. Engineering judgment stays mine.',
    tools: ['Claude Code', 'GitHub Copilot', 'Cursor', 'TypeScript-first'],
    color: '#f59e0b',
  },
  {
    number: '04',
    title: 'Test and validate',
    description: 'Unit tests for business logic, integration tests for data flows, and manual testing on real devices. I care about edge cases: offline states, empty states, error boundaries.',
    tools: ['Vitest', 'React Testing Library', 'Lighthouse', 'Real device testing'],
    color: '#22c55e',
  },
  {
    number: '05',
    title: 'Ship and iterate',
    description: 'CI/CD via GitHub Actions. Deploy to Vercel or GitHub Pages. Monitor performance with Lighthouse. Ship fast, measure, iterate — not perfect, just production-ready.',
    tools: ['GitHub Actions', 'Vercel', 'Lighthouse', 'Bun'],
    color: '#3ECF8E',
  },
]

const principles = [
  { icon: '🎯', text: 'TypeScript-first — type errors at compile time, not in production' },
  { icon: '🏗️', text: 'Component boundaries reflect domain boundaries, not just UI' },
  { icon: '⚡', text: 'Performance by default: lazy loading, code splitting, minimal re-renders' },
  { icon: '🔒', text: 'Secrets never reach the client — Edge Functions for all API proxying' },
  { icon: '🧪', text: 'Tests for behavior, not implementation — easy to refactor' },
  { icon: '📦', text: 'Ship iteratively — working software > perfect architecture' },
]

export default function HowIBuild() {
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
    <section id="how-i-build" ref={sectionRef} className="py-28 px-6" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm" style={{ color: '#de0a26' }}>05.</span>
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: 'rgba(222,10,38,0.3)' }} />
          </div>
          <h2 className="section-title">
            How I <span className="gradient-text">Build</span>
          </h2>
          <p className="section-subtitle max-w-xl">
            My engineering workflow — from problem definition to production. AI-assisted at every step, judgment-guided throughout.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-16">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, #de0a26, transparent)' }}
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`flex gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Step number */}
                <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-mono text-sm font-bold z-10"
                    style={{ backgroundColor: `${step.color}15`, border: `1px solid ${step.color}40`, color: step.color }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-2xl p-6 group"
                  style={{ backgroundColor: '#141414', border: '1px solid #242424' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${step.color}30` }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#242424' }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    {/* Mobile step number */}
                    <span
                      className="md:hidden text-xs font-mono font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `${step.color}15`, color: step.color }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-white font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#9ca3af' }}>{step.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 text-[10px] font-mono rounded"
                        style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', color: '#71717a' }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering principles */}
        <div
          className={`rounded-2xl p-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '600ms', backgroundColor: '#141414', border: '1px solid #242424' }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6"
            style={{ backgroundColor: 'rgba(222,10,38,0.08)', border: '1px solid rgba(222,10,38,0.2)', color: '#ff6b6b' }}
          >
            Engineering Principles
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p) => (
              <div key={p.text} className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0">{p.icon}</span>
                <span className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{p.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
