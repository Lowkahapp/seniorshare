import { createFileRoute } from '@tanstack/react-router'

import { LocationCard } from '@/components/LocationCard'
import { WaitlistForm } from '@/components/WaitlistForm'
import { activeLocations } from '@/data/locationsContent'

export const Route = createFileRoute('/locations')({ component: LocationsPage })

function LocationsPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="mx-auto mb-12 max-w-3xl text-center">
        <p className="island-kicker mb-3">Locations</p>
        <h1 className="display-title mb-5 text-4xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-5xl">
          Find your match, close to home.
        </h1>
        <p className="text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-lg">
          Senoshare is growing city by city. See where we&apos;re active — and
          join the waitlist if we&apos;re not in your area yet.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activeLocations.map((location, index) => (
          <div
            key={location.id}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <LocationCard location={location} />
          </div>
        ))}
      </section>

      <section className="island-shell mx-auto mt-16 max-w-2xl rounded-[2rem] px-6 py-10 sm:px-10">
        <h2 className="display-title mb-3 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
          Don&apos;t see your city?
        </h2>
        <p className="mb-8 text-base text-[var(--sea-ink-soft)]">
          We&apos;re expanding monthly. Drop your zip code and we&apos;ll notify
          you the moment Senoshare launches near you.
        </p>
        <WaitlistForm />
      </section>
    </main>
  )
}
