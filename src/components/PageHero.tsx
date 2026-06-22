import type { ReactNode } from 'react'

import { Badge } from '@/components/ui/badge'

type PageHeroProps = {
  kicker: string
  title: string
  description?: string
  children?: ReactNode
}

export function PageHero({ kicker, title, description, children }: PageHeroProps) {
  return (
    <section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
      <div className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.28),transparent_66%)]" />
      <p className="island-kicker mb-3">{kicker}</p>
      <h1 className="display-title mb-4 max-w-3xl text-3xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mb-6 max-w-2xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </section>
  )
}

export function CategoryBadge({ children }: { children: ReactNode }) {
  return (
    <Badge variant="accent" className="text-xs">
      {children}
    </Badge>
  )
}
