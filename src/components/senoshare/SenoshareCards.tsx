import { BadgeCheck, Shield } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
  photoUrl?: string
  compact?: boolean
}

export function MemberCard({
  name,
  location,
  role,
  details,
  initials,
  photoUrl,
  compact = false,
}: MemberCardProps) {
  return (
    <article
      className={cn(
        'hero-member-card rounded-lg border border-[var(--line)] bg-white p-4',
        !compact && 'island-shell feature-card p-5',
      )}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar className={cn(compact ? 'h-11 w-11' : 'h-12 w-12')}>
            {photoUrl ? <AvatarImage src={photoUrl} alt={name} /> : null}
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
      <p className="body-readable mt-1 text-sm text-[var(--sea-ink-soft)]">{details}</p>
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
    <article className="hero-member-card rounded-lg border border-[#bfdbfe] bg-white p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--lagoon-light)]">
          <Shield className="h-4 w-4 text-[var(--lagoon-deep)]" />
        </div>
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--lagoon-deep)]">
          Match
        </p>
      </div>
      <p className="font-semibold text-[var(--sea-ink)]">{title}</p>
      <p className="body-readable mt-1 text-sm text-[var(--sea-ink-soft)]">
        {description}
      </p>
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
      className="island-shell feature-card rise-in flex h-full flex-col rounded-xl p-8"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--lagoon-light)] text-sm font-bold text-[var(--lagoon-deep)]">
        {index + 1}
      </div>
      <h3 className="mb-2 text-lg font-semibold leading-snug text-[var(--sea-ink)]">
        {title}
      </h3>
      <p className="body-readable m-0 mt-auto text-base text-[var(--sea-ink-soft)]">
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
    <article className="island-shell flex h-full flex-col rounded-xl p-8">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--lagoon-light)] text-lg font-bold text-[var(--lagoon-deep)]">
        {step}
      </div>
      <h3 className="mb-2 text-lg font-semibold leading-snug text-[var(--sea-ink)]">
        {title}
      </h3>
      <p className="body-readable m-0 mt-auto text-base text-[var(--sea-ink-soft)]">
        {description}
      </p>
    </article>
  )
}
