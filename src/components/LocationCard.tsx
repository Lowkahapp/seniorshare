import { Link } from '@tanstack/react-router'
import { MapPin, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { LocationMarket } from '@/data/locationsContent'

export function LocationCard({ location }: { location: LocationMarket }) {
  return (
    <article className="location-card rise-in flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] p-6">
      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <h2 className="display-title text-2xl font-bold text-[var(--sea-ink)]">
            {location.city}
          </h2>
          <p className="mt-1 text-sm font-medium text-[var(--sea-ink-soft)]">
            {location.state}
          </p>
        </div>
        <MapPin
          className="h-5 w-5 shrink-0 text-[var(--sea-ink-soft)]"
          aria-hidden
        />
      </div>

      <p className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--sea-ink-soft)]">
        <Users className="h-4 w-4" aria-hidden />
        <span>
          <strong className="font-semibold text-[var(--sea-ink)]">
            {location.memberCount}+
          </strong>{' '}
          verified members
        </span>
      </p>

      <Button variant="secondary" className="mt-auto w-full" asChild>
        <Link
          to="/onboarding"
          search={{
            city: location.city,
            state: location.state,
          }}
        >
          Browse this area
        </Link>
      </Button>
    </article>
  )
}
