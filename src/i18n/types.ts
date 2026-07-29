export type Locale = 'en' | 'de' | 'fr' | 'am'

export const LOCALES: { code: Locale; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR' },
  { code: 'am', label: 'አማ' },
]

export const LOCALE_STORAGE_KEY = 'portfolio-locale'

export interface Dictionary {
  nav: {
    home: string
    about: string
    skills: string
    experience: string
    projects: string
    contact: string
  }
  hero: {
    viewProjects: string
    getInTouch: string
    dragToRotate: string
  }
  about: {
    kicker: string
    title: string
  }
  skills: {
    kicker: string
    title: string
    description: string
  }
  experience: {
    kicker: string
    title: string
    description: string
  }
  projects: {
    kicker: string
    title: string
    description: string
    featured: string
    github: string
    backend: string
    liveDemo: string
  }
  leadership: {
    kicker: string
    title: string
    description: string
  }
  contact: {
    kicker: string
    title: string
    description: string
    email: string
    phone: string
    telegram: string
    location: string
    github: string
    linkedin: string
  }
  footer: {
    rights: string
    tagline: string
  }
  notFound: {
    title: string
    description: string
    backHome: string
  }
  personal: {
    title: string
    objective: string
    about: string
    location: string
  }
  skillCategories: Record<string, string>
  education: Array<{
    degree: string
    location: string
    description?: string
  }>
  experienceItems: Array<{
    role: string
    location: string
    highlights: string[]
  }>
  leadershipItems: Array<{
    role: string
    highlights: string[]
  }>
  projectItems: Record<
    string,
    {
      title: string
      description: string
      links?: Record<string, string>
    }
  >
}
