import Link from 'next/link'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: PageHeroProps) {
  const renderLink = (href: string, label: string, className: string) => {
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a href={href} className={className}>
          {label}
        </a>
      )
    }

    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <section className="relative overflow-hidden pt-36 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="absolute right-[8%] top-0 hidden h-32 w-24 bg-primary/70 lg:block [clip-path:polygon(0_0,100%_0,100%_82%,50%_100%,0_82%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="mb-5 block text-sm uppercase tracking-[0.3em] text-primary">{eyebrow}</span>
          <h1 className="font-[var(--font-display)] text-4xl font-bold leading-tight tracking-[0.04em] text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mt-7 flex items-center gap-4">
            <span className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
            <span className="h-1.5 w-1.5 rotate-45 bg-primary/80" />
          </div>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">{description}</p>

          {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {primaryHref && primaryLabel ? (
                renderLink(
                  primaryHref,
                  primaryLabel,
                  'inline-flex items-center justify-center bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors duration-300 hover:bg-primary/90'
                )
              ) : null}
              {secondaryHref && secondaryLabel ? (
                renderLink(
                  secondaryHref,
                  secondaryLabel,
                  'inline-flex items-center justify-center border border-primary/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-primary hover:text-primary'
                )
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
