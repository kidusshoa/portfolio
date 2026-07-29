import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import { portfolio } from '../lib/portfolio'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const { personal } = portfolio

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm text-[var(--sea-ink)] no-underline shadow-[0_8px_24px_rgba(30,90,72,0.08)] sm:px-4 sm:py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#56c6be,#7ed3bf)]" />
            KZ
          </a>
        </h2>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-none sm:w-auto sm:flex-nowrap sm:pb-0">
          {navItems.map((item) => {
            const id = item.href.slice(1)
            const isActive = activeSection === id
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
            aria-label="GitHub profile"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={22} />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
