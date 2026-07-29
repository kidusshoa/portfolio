import { createFileRoute } from '@tanstack/react-router'
import About from '../components/portfolio/About'
import Contact from '../components/portfolio/Contact'
import Experience from '../components/portfolio/Experience'
import Hero from '../components/portfolio/Hero'
import Leadership from '../components/portfolio/Leadership'
import Projects from '../components/portfolio/Projects'
import Skills from '../components/portfolio/Skills'

export const Route = createFileRoute('/')({ component: PortfolioPage })

function PortfolioPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-8 sm:pt-14">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Leadership />
      <Contact />
    </main>
  )
}
