export interface PersonalInfo {
  name: string
  title: string
  location: string
  phone: string
  email: string
  telegram: string
  github: string
  linkedin: string
  objective: string
  about: string
}

export interface ProfilePhoto {
  image: string
  alt: string
  model?: string
}

export interface Education {
  institution: string
  location: string
  degree: string
  description?: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface Experience {
  company: string
  location: string
  role: string
  period: string
  highlights: string[]
  stacks: string[]
}

export interface Leadership {
  organization: string
  role: string
  period: string
  highlights: string[]
}

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  stacks: string[]
  github: string
  links?: ProjectLink[]
  live: string | null
  featured: boolean
}

export interface PortfolioData {
  personal: PersonalInfo
  profile: ProfilePhoto
  education: Education[]
  skills: SkillCategory[]
  experience: Experience[]
  leadership: Leadership[]
  projects: Project[]
}
