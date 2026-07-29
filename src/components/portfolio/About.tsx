import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { portfolio } from '../../lib/portfolio'

export default function About() {
  const { personal, education } = portfolio

  return (
    <AnimatedSection id="about" className="mt-12 sm:mt-16">
      <div className="island-shell rounded-2xl p-6 sm:p-8">
        <SectionHeading
          kicker="About Me"
          title="Building scalable, user-focused software"
          description={personal.objective}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {education.map((edu) => (
            <article
              key={edu.institution}
              className="feature-card rounded-xl p-5"
            >
              <h3 className="mb-1 text-lg font-semibold text-[var(--sea-ink)]">
                {edu.institution}
              </h3>
              <p className="mb-2 text-sm font-medium text-[var(--lagoon-deep)]">
                {edu.degree}
              </p>
              <p className="mb-0 text-sm text-[var(--sea-ink-soft)]">
                {edu.location}
              </p>
              {edu.description && (
                <p className="mt-3 mb-0 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                  {edu.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
