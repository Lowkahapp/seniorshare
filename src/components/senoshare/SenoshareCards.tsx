import { BadgeCheck, Shield } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <Badge variant="accent" className={cn('gap-1.5 text-xs uppercase tracking-wide', className)}>
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
    <article className={cn('py-1', !compact && 'py-2')}>
      <div className="mb-2 flex items-start justify-between gap-3">
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
    <article className="border-l-2 border-[var(--lagoon)] py-1 pl-4">
      <div className="mb-2 flex items-center gap-2">
        <Shield className="h-4 w-4 text-[var(--lagoon-deep)]" />
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--lagoon-deep)]">
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
      className="flat-item rise-in"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <p className="mb-3 text-sm font-bold text-[var(--lagoon-deep)]">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mb-2 text-lg font-semibold leading-snug text-[var(--sea-ink)]">
        {title}
      </h3>
      <p className="body-readable m-0 text-base text-[var(--sea-ink-soft)]">
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
    <article className="flat-item">
      <p className="mb-3 text-sm font-bold text-[var(--lagoon-deep)]">
        Step {step}
      </p>
      <h3 className="mb-2 text-lg font-semibold leading-snug text-[var(--sea-ink)]">
        {title}
      </h3>
      <p className="body-readable m-0 text-base text-[var(--sea-ink-soft)]">
        {description}
      </p>
    </article>
  )
}
