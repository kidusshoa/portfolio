import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import AnimatedSection, {
  StaggerContainer,
  StaggerItem,
} from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { portfolio } from '../../lib/portfolio'

export default function Projects() {
  const { projects } = portfolio

  return (
    <AnimatedSection id="projects" className="mt-12 sm:mt-16">
      <div className="island-shell rounded-2xl p-6 sm:p-8">
        <SectionHeading
          kicker="Projects"
          title="Featured work"
          description="Edit projects in src/data/portfolio.json — update titles, descriptions, stacks, and GitHub links anytime."
        />

        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="feature-card flex h-full flex-col rounded-xl p-5">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <h3 className="m-0 text-lg font-semibold text-[var(--sea-ink)]">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="featured-badge">Featured</span>
                  )}
                </div>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--sea-ink-soft)]">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stacks.map((stack) => (
                    <span key={stack} className="skill-chip">
                      {stack}
                    </span>
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
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
