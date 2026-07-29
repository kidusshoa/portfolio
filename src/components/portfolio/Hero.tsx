import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa'
import { portfolio } from '../../lib/portfolio'

export default function Hero() {
  const { personal } = portfolio

  return (
    <section
      id="home"
      className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14"
    >
      <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />

      <motion.p
        className="island-kicker mb-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Software Developer Portfolio
      </motion.p>

      <motion.h1
        className="display-title mb-4 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight text-[var(--sea-ink)] sm:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {personal.name}
      </motion.h1>

      <motion.p
        className="mb-6 text-lg font-semibold text-[var(--lagoon-deep)] sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {personal.title}
      </motion.p>

      <motion.p
        className="mb-8 max-w-2xl text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {personal.objective}
      </motion.p>

      <motion.div
        className="mb-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--sea-ink-soft)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <span className="inline-flex items-center gap-2">
          <FaMapMarkerAlt className="text-[var(--lagoon)]" />
          {personal.location}
        </span>
        <a
          href={`tel:${personal.phone}`}
          className="inline-flex items-center gap-2 no-underline hover:text-[var(--sea-ink)]"
        >
          <FaPhone className="text-[var(--lagoon)]" />
          {personal.phone}
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 no-underline hover:text-[var(--sea-ink)]"
        >
          <FaEnvelope className="text-[var(--lagoon)]" />
          {personal.email}
        </a>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a href="#projects" className="btn-primary">
          View Projects
        </a>
        <a href="#contact" className="btn-secondary">
          Get In Touch
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-icon"
          aria-label="GitHub profile"
        >
          <FaGithub size={20} />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-icon"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin size={20} />
        </a>
      </motion.div>
    </section>
  )
}
