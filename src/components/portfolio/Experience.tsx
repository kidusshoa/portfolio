import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { portfolio } from '../../lib/portfolio'
import { useLocale } from '../../i18n/LocaleProvider'
import { TechChip } from '../../lib/tech-icons'

export default function Experience() {
  const { experience } = portfolio
  const { t } = useLocale()

  return (
    <AnimatedSection id="experience" className="mt-12 sm:mt-16">
      <div className="island-shell rounded-2xl p-6 sm:p-8">
        <SectionHeading
          kicker={t.experience.kicker}
          title={t.experience.title}
          description={t.experience.description}
        />

        <StaggerContainer className="space-y-6">
          {experience.map((job, index) => {
            const localized = t.experienceItems[index]
            return (
              <StaggerItem key={`${job.company}-${job.period}`}>
                <article className="feature-card rounded-xl p-5 sm:p-6">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-[var(--sea-ink)]">
                        {localized?.role ?? job.role}
                      </h3>
                      <p className="mb-0 text-base font-medium text-[var(--lagoon-deep)]">
                        {job.company}
                      </p>
                      <p className="mt-1 mb-0 text-sm text-[var(--sea-ink-soft)]">
                        {localized?.location ?? job.location}
                      </p>
                    </div>
                    <span className="period-badge shrink-0">{job.period}</span>
                  </div>

                  <ul className="mb-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                    {(localized?.highlights ?? job.highlights).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.stacks.map((stack) => (
                      <TechChip key={stack} name={stack} />
                    ))}
                  </div>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
