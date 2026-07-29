interface SectionHeadingProps {
  kicker: string
  title: string
  description?: string
}

export default function SectionHeading({
  kicker,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="island-kicker mb-2">{kicker}</p>
      <h2 className="section-title m-0 text-3xl tracking-tight text-[var(--sea-ink)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="gelasio-body mt-3 mb-0 max-w-2xl text-base text-[var(--sea-ink-soft)]">
          {description}
        </p>
      )}
    </div>
  )
}
