import { BadgeCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from '@tanstack/react-router'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <Badge variant="accent" className={cn('gap-1', className)}>
      <BadgeCheck className="h-3 w-3" />
      Verified
    </Badge>
  )
}

export function MatchBadge({ className }: { className?: string }) {
  return (
    <Badge variant="match" className={className}>
      Match
    </Badge>
  )
}

type MemberCardProps = {
  name: string
  location: string
  role: string
  details: string
}

export function MemberCard({ name, location, role, details }: MemberCardProps) {
  return (
    <article className="preview-card">
      <div className="mb-2 flex items-start justify-between gap-3">
        <p className="font-semibold text-[var(--sea-ink)]">
          {name} — {location}
        </p>
        <VerifiedBadge />
      </div>
      <p className="text-sm text-[var(--sea-ink-soft)]">
        {role} · {details}
      </p>
    </article>
  )
}

export function MatchCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <article className="preview-card">
      <div className="mb-2">
        <MatchBadge />
      </div>
      <p className="font-semibold text-[var(--sea-ink)]">{title}</p>
      <p className="mt-1 text-sm text-[var(--sea-ink-soft)]">{description}</p>
    </article>
  )
}

export function TrustPillar({
  title,
  description,
  icon: Icon,
  index = 0,
}: {
  title: string
  description: string
  icon: LucideIcon
  index?: number
}) {
  return (
    <article
      className="feature-card-box rise-in"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <Icon className="mb-4 h-6 w-6 text-[var(--lagoon-deep)]" strokeWidth={1.75} />
      <h3 className="display-title mb-2 text-lg font-bold leading-snug text-[var(--sea-ink)]">
        {title}
      </h3>
      <p className="body-readable m-0 text-sm text-[var(--sea-ink-soft)]">
        {description}
      </p>
    </article>
  )
}

export function StepCard({
  step,
  title,
  description,
  learnMoreHref,
}: {
  step: number
  title: string
  description: string
  learnMoreHref?: string
}) {
  return (
    <article className="feature-card-box">
      <span className="step-number" aria-hidden="true">
        {step}
      </span>
      <h3 className="display-title mb-2 text-lg font-bold leading-snug text-[var(--sea-ink)]">
        {title}
      </h3>
      <p className="body-readable m-0 text-sm text-[var(--sea-ink-soft)]">
        {description}
      </p>
      {learnMoreHref ? (
        <Link
          to={learnMoreHref}
          className="mt-3 inline-block text-sm font-semibold text-[var(--lagoon-deep)] no-underline hover:underline"
        >
          Learn more
        </Link>
      ) : null}
    </article>
  )
}
