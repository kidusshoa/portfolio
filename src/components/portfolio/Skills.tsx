import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { portfolio } from '../../lib/portfolio'

export default function Skills() {
  const { skills } = portfolio

  return (
    <AnimatedSection id="skills" className="mt-12 sm:mt-16">
      <div className="island-shell rounded-2xl p-6 sm:p-8">
        <SectionHeading
          kicker="Skills"
          title="Technologies I work with"
          description="A snapshot of the tools and technologies I use to build modern, scalable applications."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2">
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <article className="feature-card h-full rounded-xl p-5">
                <h3 className="mb-3 text-base font-semibold text-[var(--sea-ink)]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
