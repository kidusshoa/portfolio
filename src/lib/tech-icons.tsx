import type { IconType } from 'react-icons'
import { FaCode, FaGlobe, FaJava, FaWindows } from 'react-icons/fa'
import {
  SiApache,
  SiApple,
  SiArchlinux,
  SiCplusplus,
  SiCss,
  SiDjango,
  SiDocker,
  SiExpress,
  SiExpo,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGo,
  SiGooglegemini,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiRubyonrails,
  SiSanity,
  SiSharp,
  SiSolidity,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTanstack,
  SiTurso,
  SiTypescript,
  SiUbuntu,
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const TECH_ICON_MAP: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  jQuery: SiJquery,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'TanStack Start': SiTanstack,
  'React Native': TbBrandReactNative,
  'Tailwind CSS': SiTailwindcss,
  Django: SiDjango,
  'Express.js': SiExpress,
  FastAPI: SiFastapi,
  ElysiaJS: SiNestjs,
  Solidity: SiSolidity,
  Redis: SiRedis,
  SQLite: SiSqlite,
  'Gemini API': SiGooglegemini,
  'Machine Learning': SiPython,
  JavaFX: SiOpenjdk,
  OOP: FaCode,
  'C++': SiCplusplus,
  Python: SiPython,
  Java: SiOpenjdk,
  PHP: SiPhp,
  'C#': SiSharp,
  'Node.js': SiNodedotjs,
  Go: SiGo,
  TypeScript: SiTypescript,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Turso: SiTurso,
  Sanity: SiSanity,
  Nginx: SiNginx,
  Apache: SiApache,
  NestJS: SiNestjs,
  Expo: SiExpo,
  'Ruby on Rails': SiRubyonrails,
  Figma: SiFigma,
  Git: SiGit,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  'Cloud Computing': SiGooglecloud,
  Ubuntu: SiUbuntu,
  'Ubuntu (4+ years)': SiUbuntu,
  'Windows Server': FaWindows,
  'Arch Linux': SiArchlinux,
  Mac: SiApple,
  'Web Development': FaGlobe,
  Microservices: FaCode,
}

export const ICON_SKILL_CATEGORIES = new Set([
  'Frameworks',
  'Programming Languages',
])

export function getTechIcon(name: string): IconType {
  return TECH_ICON_MAP[name] ?? FaCode
}

interface TechChipProps {
  name: string
  showIcon?: boolean
}

export function TechChip({ name, showIcon = true }: TechChipProps) {
  const Icon = getTechIcon(name)

  return (
    <span className="skill-chip">
      {showIcon && <Icon className="tech-chip-icon" aria-hidden="true" />}
      {name}
    </span>
  )
}

interface TechIconCardProps {
  name: string
}

export function TechIconCard({ name }: TechIconCardProps) {
  const Icon = getTechIcon(name)

  return (
    <div className="tech-icon-card" title={name}>
      <Icon className="tech-icon-card-icon" aria-hidden="true" />
      <span className="tech-icon-card-label">{name}</span>
    </div>
  )
}
