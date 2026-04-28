import { useEffect, useRef } from 'react'

const techBadges = [
  { label: 'React 18', color: '#61dafb', x: '8%', y: '25%', delay: '0s' },
  { label: 'TypeScript', color: '#3178c6', x: '85%', y: '20%', delay: '0.5s' },
  { label: 'Tailwind CSS', color: '#38bdf8', x: '78%', y: '65%', delay: '1s' },
  { label: 'TanStack', color: '#ef4444', x: '5%', y: '68%', delay: '1.5s' },
  { label: 'Node.js', color: '#68a063', x: '50%', y: '85%', delay: '0.8s' },
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const count = 60

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.4 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x > canvas!.width) this.x = 0
        if (this.x < 0) this.x = canvas!.width
        if (this.y > canvas!.height) this.y = 0
        if (this.y < 0) this.y = canvas!.height
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(222, 10, 38, ${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new Particle())
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(222, 10, 38, ${0.07 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      particles.forEach((p) => { p.update(); p.draw() })
      animId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.55 }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(222,10,38,0.07)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ backgroundColor: 'rgba(180,0,20,0.05)' }}
      />

      {/* Floating tech badges */}
      {techBadges.map((badge) => (
        <div
          key={badge.label}
          className="absolute hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-gray-400 animate-float pointer-events-none"
          style={{
            left: badge.x,
            top: badge.y,
            animationDelay: badge.delay,
            backgroundColor: 'rgba(20,20,20,0.85)',
            border: '1px solid #2d2d2d',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: badge.color }} />
          {badge.label}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in"
          style={{
            backgroundColor: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.2)',
            color: '#4ade80',
          }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Open to new opportunities
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up">
          Hi, I'm{' '}
          <span className="gradient-text">Jesith</span>
          <br />
          <span className="text-gray-300">Frontend Developer</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
          4 years crafting modern UIs with{' '}
          <span className="font-medium" style={{ color: '#ff6b6b' }}>React & TypeScript</span>. I care about
          software architecture, clean code, and user experience.
        </p>

        {/* Tech stack chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 animate-fade-up animation-delay-300">
          {['React', 'TypeScript', 'Tailwind CSS', 'TanStack', 'Node.js'].map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-up animation-delay-400">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            <span>View my work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary"
          >
            Get in touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 justify-center mt-16 animate-fade-up animation-delay-500">
          {[
            { value: '4+', label: 'Years of experience' },
            { value: '20+', label: 'Projects shipped' },
            { value: '100%', label: 'TypeScript first' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-xs font-mono">scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
