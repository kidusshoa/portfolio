import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { portfolio } from '../lib/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  const { personal } = portfolio

  return (
    <footer className="site-footer mt-20 px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year} {personal.name}. All rights reserved.
        </p>
        <p className="island-kicker m-0">
          Built with TanStack Start, Framer Motion & React Icons
        </p>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
          aria-label="GitHub profile"
        >
          <FaGithub size={28} />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </footer>
  )
}
