import { BadgeCheck, Shield } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <Badge variant="accent" className={cn('gap-1.5 text-xs', className)}>
      <BadgeCheck className="h-3.5 w-3.5" />
      Verified
    </Badge>
  )
}

type MemberCardProps = {
  name: string
  location: string
  role: string
  details: string
  initials: string
}

export function MemberCard({
  name,
  location,
  role,
  details,
  initials,
}: MemberCardProps) {
  return (
    <article className="island-shell feature-card rounded-2xl p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-[var(--sea-ink)]">{name}</p>
            <p className="text-sm text-[var(--sea-ink-soft)]">{location}</p>
          </div>
        </div>
        <VerifiedBadge />
      </div>
      <p className="text-sm font-semibold text-[var(--lagoon-deep)]">{role}</p>
      <p className="mt-1 text-sm text-[var(--sea-ink-soft)]">{details}</p>
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
    <article className="island-shell rounded-2xl border-2 border-[rgba(79,184,178,0.35)] bg-[rgba(79,184,178,0.08)] p-5">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(79,184,178,0.2)]">
          <Shield className="h-4 w-4 text-[var(--lagoon-deep)]" />
        </div>
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--lagoon-deep)]">
          Match
        </p>
      </div>
      <p className="font-semibold text-[var(--sea-ink)]">{title}</p>
      <p className="mt-1 text-sm text-[var(--sea-ink-soft)]">{description}</p>
    </article>
  )
}

export function TrustPillar({
  title,
  description,
  index,
}: {
  title: string
  description: string
  index: number
}) {
  return (
    <article
      className="island-shell feature-card rise-in rounded-2xl p-6"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(79,184,178,0.14)] text-sm font-bold text-[var(--lagoon-deep)]">
        {index + 1}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">{title}</h3>
      <p className="m-0 text-base leading-relaxed text-[var(--sea-ink-soft)]">
        {description}
      </p>
    </article>
  )
}

export function StepCard({
  step,
  title,
  description,
}: {
  step: number
  title: string
  description: string
}) {
  return (
    <article className="island-shell rounded-2xl p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(79,184,178,0.14)] text-lg font-bold text-[var(--lagoon-deep)]">
        {step}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">{title}</h3>
      <p className="m-0 text-base leading-relaxed text-[var(--sea-ink-soft)]">
        {description}
      </p>
    </article>
  )
}
