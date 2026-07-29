import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTelegram,
} from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { portfolio } from '../../lib/portfolio'
import { useLocale } from '../../i18n/LocaleProvider'

export default function Contact() {
  const { personal } = portfolio
  const { t } = useLocale()
  const telegramHandle = personal.telegram.replace('@', '')

  const contactItems = [
    {
      icon: FaEnvelope,
      label: t.contact.email,
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: FaPhone,
      label: t.contact.phone,
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: FaTelegram,
      label: t.contact.telegram,
      value: personal.telegram,
      href: `https://t.me/${telegramHandle}`,
    },
    {
      icon: FaMapMarkerAlt,
      label: t.contact.location,
      value: t.personal.location,
      href: null,
    },
    {
      icon: FaGithub,
      label: t.contact.github,
      value: 'github.com/kidusshoa',
      href: personal.github,
    },
    {
      icon: FaLinkedin,
      label: t.contact.linkedin,
      value: 'linkedin.com/in/kidus-zekarias',
      href: personal.linkedin,
    },
  ]

  return (
    <AnimatedSection id="contact" className="mt-12 sm:mt-16">
      <div className="island-shell rounded-2xl p-6 sm:p-8">
        <SectionHeading
          kicker={t.contact.kicker}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon
            const content = (
              <motion.div
                className="contact-card feature-card rounded-xl p-5"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="mb-3 text-2xl text-[var(--lagoon)]" />
                <p className="mb-1 text-xs font-bold tracking-wide text-[var(--kicker)] uppercase">
                  {item.label}
                </p>
                <p className="m-0 text-sm font-medium text-[var(--sea-ink)]">
                  {item.value}
                </p>
              </motion.div>
            )

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    item.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="no-underline"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {content}
                </a>
              )
            }

            return (
              <div key={item.label} style={{ animationDelay: `${index * 80}ms` }}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
