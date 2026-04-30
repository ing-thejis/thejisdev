import { useRef, useEffect, useState } from 'react'

const differentiators = [
  {
    icon: '🧠',
    title: 'AI Product Mindset',
    description: 'Building real-world AI applications in production — not just prototypes. From LLM integrations to streaming chat interfaces.',
  },
  {
    icon: '⚡',
    title: 'Frontend + AI (High Demand)',
    description: 'Bridging UX, performance and AI capabilities. A rare combination: I design the experience and build the intelligence layer.',
  },
  {
    icon: '🤖',
    title: 'AI-Accelerated Workflow',
    description: 'Daily use of Claude Code, GitHub Copilot, and Cursor. I ship faster without sacrificing code quality or architecture.',
  },
]

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-28 px-6" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm" style={{ color: '#de0a26' }}>01.</span>
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: 'rgba(222,10,38,0.3)' }} />
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Professional Summary */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div
              className="rounded-2xl p-8 h-full"
              style={{ backgroundColor: '#141414', border: '1px solid #242424' }}
            >
              {/* Label */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6"
                style={{ backgroundColor: 'rgba(222,10,38,0.08)', border: '1px solid rgba(222,10,38,0.2)', color: '#ff6b6b' }}
              >
                Professional Summary
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                AI-Driven Software Engineer with <span className="text-white font-medium">4+ years of experience</span> building
                scalable web applications and AI-powered products using modern frontend
                technologies and LLM integrations.
              </p>
              <p className="leading-relaxed mb-6" style={{ color: '#9ca3af' }}>
                Specialized in developing <span className="text-white font-medium">intelligent user interfaces</span>, streaming AI
                experiences, and agentic workflows using <span className="text-white font-medium">React, Next.js, Node.js</span> and
                APIs such as Anthropic, Google Gemini, and OpenAI.
              </p>
              <p style={{ color: '#9ca3af' }} className="leading-relaxed">
                Strong focus on <span className="text-white font-medium">AI-first development</span> — combining prompt engineering,
                real-time architectures, and modern frontend patterns to deliver
                high-impact, production-ready applications. Actively leveraging AI tools
                to accelerate workflows and stay at the edge of the industry.
              </p>

              {/* Key tools */}
              <div className="mt-8 pt-6" style={{ borderTop: '1px solid #242424' }}>
                <p className="text-xs font-mono mb-3" style={{ color: '#52525b' }}>// AI tools I use daily</p>
                <div className="flex flex-wrap gap-2">
                  {['Claude Code', 'GitHub Copilot', 'Cursor', 'v0', 'Gemini API', 'Anthropic API'].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-mono rounded-full"
                      style={{ backgroundColor: 'rgba(222,10,38,0.06)', border: '1px solid rgba(222,10,38,0.15)', color: '#ff6b6b' }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Differentiators */}
          <div className="flex flex-col gap-5">
            {differentiators.map((item, idx) => (
              <div
                key={item.title}
                className={`rounded-2xl p-6 group transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{
                  transitionDelay: `${(idx + 1) * 120}ms`,
                  backgroundColor: '#141414',
                  border: '1px solid #242424',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(222,10,38,0.2)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#242424' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: 'rgba(222,10,38,0.08)', border: '1px solid rgba(222,10,38,0.15)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1.5">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Location / availability card */}
            <div
              className={`rounded-2xl p-5 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: '480ms', backgroundColor: '#141414', border: '1px solid #242424' }}
            >
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2" style={{ color: '#71717a' }}>
                  <span>📍</span>
                  <span>Colombia · <span className="text-white">Remote Ready</span></span>
                </div>
                <div className="flex items-center gap-2" style={{ color: '#71717a' }}>
                  <span>🎓</span>
                  <span>B.Eng. Electronic Engineering</span>
                </div>
                <div className="flex items-center gap-2" style={{ color: '#71717a' }}>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
                  <span className="text-green-400 font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
