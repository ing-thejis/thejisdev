export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6" style={{ borderTop: '1px solid #1a1a1a' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold" style={{ color: '#de0a26' }}>thejis.dev</span>
          <span style={{ color: '#52525b' }} className="text-xs">·</span>
          <span className="text-xs" style={{ color: '#71717a' }}>Frontend Developer · AI Engineer</span>
        </div>

        <p className="text-xs font-mono text-center" style={{ color: '#71717a' }}>
          Built with{' '}
          <span style={{ color: '#61dafb' }}>React</span> +{' '}
          <span style={{ color: '#3178c6' }}>TypeScript</span> +{' '}
          <span style={{ color: '#38bdf8' }}>Tailwind CSS</span>
          {' '}— {year}
        </p>

        <div className="flex items-center gap-1.5 text-xs" style={{ color: '#71717a' }}>
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span>Available for work</span>
        </div>
      </div>
    </footer>
  )
}
