import { useRef, useEffect, useState } from 'react'
import { projects, categoryLabels, statusLabels } from '../data/projects'
import type { Project } from '../data/projects'

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState<'all' | Project['category']>('all')
  const [expanded, setExpanded] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filters: Array<{ value: 'all' | Project['category']; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'ui', label: 'UI / Components' },
  ]

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-6" style={{ backgroundColor: '#0d0d0d' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm" style={{ color: '#de0a26' }}>03.</span>
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: 'rgba(222,10,38,0.3)' }} />
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle max-w-xl">
            Production-ready applications that demonstrate AI integration, full-stack architecture, and clean UI engineering.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={
                  activeFilter === filter.value
                    ? { background: 'linear-gradient(135deg, #de0a26, #b8001f)', color: '#fff', boxShadow: '0 0 16px rgba(222,10,38,0.3)' }
                    : { backgroundColor: '#141414', border: '1px solid #242424', color: '#6b7280' }
                }
                onMouseEnter={(e) => {
                  if (activeFilter !== filter.value) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(222,10,38,0.3)'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter.value) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#242424'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#6b7280'
                  }
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((project, idx) => {
            const status = statusLabels[project.status]
            const isExpanded = expanded === project.id

            return (
              <div
                key={project.id}
                className={`group rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                  backgroundColor: '#141414',
                  border: '1px solid #242424',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(222,10,38,0.25)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#242424' }}
                onClick={() => setExpanded(isExpanded ? null : project.id)}
              >
                {/* Project image */}
                {project.image && (
                  <div className="relative w-full overflow-hidden" style={{ height: '180px', backgroundColor: '#0f0f0f' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { (e.currentTarget.parentElement as HTMLDivElement).style.display = 'none' }}
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to bottom, transparent 50%, #141414 100%)' }}
                    />
                    {/* Top accent line on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(90deg, #de0a26, transparent)' }}
                    />
                  </div>
                )}

                <div className="p-6">
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono" style={{ color: '#71717a' }}>
                          {categoryLabels[project.category]}
                        </span>
                        <span style={{ color: '#52525b' }}>·</span>
                        <span className="text-xs font-mono" style={{ color: '#71717a' }}>{project.year}</span>
                        <span
                          className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${status.color}12`, color: status.color, border: `1px solid ${status.color}28` }}
                        >
                          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: status.color }} />
                          {status.label}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-red-400">
                        {project.title}
                      </h3>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 flex-shrink-0 ml-4" onClick={(e) => e.stopPropagation()}>
                      {project.github && project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg transition-all duration-200"
                          style={{ backgroundColor: '#1e1e1e', color: '#71717a' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#71717a')}
                          title="View source"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        </a>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg transition-all duration-200"
                          style={{ backgroundColor: '#1e1e1e', color: '#71717a' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#71717a')}
                          title="Live demo"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#9ca3af' }}>
                    {project.description}
                  </p>

                  {/* Expandable highlights */}
                  <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-72 mb-4' : 'max-h-0'}`}>
                    <div className="pt-3" style={{ borderTop: '1px solid #242424' }}>
                      <ul className="space-y-2">
                        {project.highlights.filter(h => h.trim()).map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#9ca3af' }}>
                            <span style={{ color: '#de0a26' }} className="flex-shrink-0 mt-0.5">▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-mono rounded"
                        style={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', color: '#71717a' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expand hint */}
                  <div className="flex items-center gap-1 text-xs transition-colors" style={{ color: '#52525b' }}>
                    <svg
                      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                      className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                    <span>{isExpanded ? 'Show less' : 'See highlights'}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* More on GitHub */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="https://github.com/ing-thejis" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
