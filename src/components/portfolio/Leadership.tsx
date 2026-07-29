import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { portfolio } from '../../lib/portfolio'

export default function Leadership() {
  const { leadership } = portfolio

  return (
    <AnimatedSection id="leadership" className="mt-12 sm:mt-16">
      <div className="island-shell rounded-2xl p-6 sm:p-8">
        <SectionHeading
          kicker="Leadership"
          title="Community involvement"
          description="Leading initiatives that foster innovation, mentorship, and technical excellence."
        />

        <div className="space-y-5">
          {leadership.map((item) => (
            <article
              key={item.organization}
              className="feature-card rounded-xl p-5 sm:p-6"
            >
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-[var(--sea-ink)]">
                    {item.role}
                  </h3>
                  <p className="mb-0 text-base font-medium text-[var(--lagoon-deep)]">
                    {item.organization}
                  </p>
                </div>
                <span className="period-badge shrink-0">{item.period}</span>
              </div>

              <ul className="m-0 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
