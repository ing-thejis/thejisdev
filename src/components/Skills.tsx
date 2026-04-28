import { useRef, useEffect, useState } from 'react'
import { skillCategories, levelColors, levelLabels } from '../data/skills'

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-28 px-6" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm" style={{ color: '#de0a26' }}>02.</span>
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: 'rgba(222,10,38,0.3)' }} />
          </div>
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle max-w-xl">
            Technologies and tools I use to build modern, scalable frontend applications.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-4">
            {Object.entries(levelColors).map(([level, color]) => (
              <div key={level} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-xs text-gray-400">{levelLabels[level as keyof typeof levelLabels]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`card p-6 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${catIdx * 80}ms` }}
            >
              <h3 className="text-white font-semibold mb-1">{category.title}</h3>
              <p className="text-xs mb-5" style={{ color: '#9ca3af' }}>{category.description}</p>

              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between group">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{skill.icon}</span>
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: levelColors[skill.level] }}
                      />
                      <span className="text-[10px] font-mono" style={{ color: '#71717a' }}>
                        {levelLabels[skill.level]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className={`text-center text-sm mt-12 font-mono transition-all duration-700 delay-500 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ color: '#52525b' }}
        >
          // Always learning — currently exploring{' '}
          <span style={{ color: '#de0a26' }}>AI-native development</span> &{' '}
          <span style={{ color: '#ff6b6b' }}>edge runtimes</span>
        </p>
      </div>
    </section>
  )
}
