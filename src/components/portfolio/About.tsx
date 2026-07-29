import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { portfolio } from '../../lib/portfolio'
import { useLocale } from '../../i18n/LocaleProvider'

export default function About() {
  const { education } = portfolio
  const { t } = useLocale()

  return (
    <AnimatedSection id="about" className="mt-12 sm:mt-16">
      <div className="island-shell rounded-2xl p-6 sm:p-8">
        <SectionHeading
          kicker={t.about.kicker}
          title={t.about.title}
          description={t.personal.about}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((edu, index) => {
            const localized = t.education[index]
            return (
              <article
                key={edu.institution}
                className="feature-card rounded-xl p-5"
              >
                <h3 className="mb-1 text-lg font-semibold text-[var(--sea-ink)]">
                  {edu.institution}
                </h3>
                <p className="mb-2 text-sm font-medium text-[var(--lagoon-deep)]">
                  {localized?.degree ?? edu.degree}
                </p>
                <p className="mb-0 text-sm text-[var(--sea-ink-soft)]">
                  {localized?.location ?? edu.location}
                </p>
                {(localized?.description ?? edu.description) && (
                  <p className="mt-3 mb-0 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                    {localized?.description ?? edu.description}
                  </p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
