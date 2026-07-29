import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { portfolio } from '../lib/portfolio'
import { useLocale } from '../i18n/LocaleProvider'

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const { personal } = portfolio
  const { t } = useLocale()

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ]

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
            className="site-logo inline-flex items-center py-1 pl-1 text-sm text-[var(--sea-ink)] no-underline shadow-[0_8px_24px_rgba(30,90,72,0.08)] sm:pr-4"
          >
            <img
              src="/images/portfolio.png"
              alt=""
              width={32}
              height={32}
              className="site-logo-img"
            />
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
          <LanguageSwitcher />
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
