import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { portfolio } from '../../lib/portfolio'
import { useLocale } from '../../i18n/LocaleProvider'
import { TechChip } from '../../lib/tech-icons'

export default function Projects() {
  const { projects } = portfolio
  const { t } = useLocale()

  return (
    <AnimatedSection id="projects" className="mt-12 sm:mt-16">
      <div className="island-shell rounded-2xl p-6 sm:p-8">
        <SectionHeading
          kicker={t.projects.kicker}
          title={t.projects.title}
          description={t.projects.description}
        />

        <StaggerContainer className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const localized = t.projectItems[project.id]
            return (
              <StaggerItem key={project.id}>
                <article className="feature-card flex h-full flex-col rounded-xl p-5">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="m-0 text-lg font-semibold text-[var(--sea-ink)]">
                      {localized?.title ?? project.title}
                    </h3>
                    {project.featured && (
                      <span className="featured-badge">{t.projects.featured}</span>
                    )}
                  </div>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                    {localized?.description ?? project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.stacks.map((stack) => (
                      <TechChip key={stack} name={stack} />
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                      {project.links?.length
                        ? t.projects.backend
                        : t.projects.github}
                    </a>
                    {project.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub />
                        {localized?.links?.[link.label] ?? link.label}
                      </a>
                    ))}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt />
                        {t.projects.liveDemo}
                      </a>
                    )}
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
