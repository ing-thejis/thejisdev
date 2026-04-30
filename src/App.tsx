import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import AIEngineering from './components/AIEngineering'
import Projects from './components/Projects'
import HowIBuild from './components/HowIBuild'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <AIEngineering />
        <Projects />
        <HowIBuild />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
