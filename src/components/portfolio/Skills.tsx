import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { portfolio } from '../../lib/portfolio'
import { useLocale } from '../../i18n/LocaleProvider'
import {
  ICON_SKILL_CATEGORIES,
  TechChip,
  TechIconCard,
} from '../../lib/tech-icons'

export default function Skills() {
  const { skills } = portfolio
  const { t } = useLocale()

  return (
    <AnimatedSection id="skills" className="mt-12 sm:mt-16">
      <div className="island-shell rounded-2xl p-6 sm:p-8">
        <SectionHeading
          kicker={t.skills.kicker}
          title={t.skills.title}
          description={t.skills.description}
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2">
          {skills.map((group) => {
            const useIconCards = ICON_SKILL_CATEGORIES.has(group.category)

            return (
              <StaggerItem
                key={group.category}
                className={useIconCards ? 'sm:col-span-2' : undefined}
              >
                <article className="feature-card h-full rounded-xl p-5">
                  <h3 className="mb-4 text-base font-semibold text-[var(--sea-ink)]">
                    {t.skillCategories[group.category] ?? group.category}
                  </h3>

                  {useIconCards ? (
                    <div className="tech-icon-grid">
                      {group.items.map((item) => (
                        <TechIconCard key={item} name={item} />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <TechChip key={item} name={item} />
                      ))}
                    </div>
                  )}
                </article>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
