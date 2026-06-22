import { createFileRoute } from '@tanstack/react-router'

import { PageHero } from '@/components/PageHero'

export const Route = createFileRoute('/locations')({ component: LocationsPage })

const locations = [
  { city: 'Portland, OR', status: 'Active' },
  { city: 'Seattle, WA', status: 'Active' },
  { city: 'San Francisco, CA', status: 'Coming soon' },
  { city: 'Denver, CO', status: 'Coming soon' },
  { city: 'Austin, TX', status: 'Coming soon' },
]

function LocationsPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="Locations"
        title="Growing thoughtfully, city by city"
        description="SenoShare launches in communities where we can offer full verification, advocate support, and legal resources."
      />

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map(({ city, status }) => (
          <article key={city} className="demo-list-item flex items-center justify-between">
            <span className="font-semibold text-[var(--sea-ink)]">{city}</span>
            <span
              className={
                status === 'Active'
                  ? 'text-sm font-semibold text-[var(--lagoon-deep)]'
                  : 'text-sm text-[var(--sea-ink-soft)]'
              }
            >
              {status}
            </span>
          </article>
        ))}
      </div>
    </main>
  )
}
