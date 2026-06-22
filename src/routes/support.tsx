import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone } from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/support')({ component: SupportPage })

function SupportPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="Support"
        title="A real person picks up the phone"
        description="24/7 member support for safety concerns, disputes, or emergencies — day or night."
      />

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <article className="island-shell rounded-2xl p-6">
          <Phone className="mb-3 h-6 w-6 text-[var(--lagoon-deep)]" />
          <h2 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">Call us</h2>
          <p className="mb-4 text-base text-[var(--sea-ink-soft)]">
            Member support line available 24 hours a day, 7 days a week.
          </p>
          <a
            href="tel:+18005551234"
            className="text-xl font-bold text-[var(--lagoon-deep)] no-underline"
          >
            1-800-555-1234
          </a>
        </article>
        <article className="island-shell rounded-2xl p-6">
          <h2 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
            Non-emergency help
          </h2>
          <p className="text-base text-[var(--sea-ink-soft)]">
            Questions about verification, matching, or co-living agreements?
            Email{' '}
            <a href="mailto:support@senoshare.com" className="font-semibold">
              support@senoshare.com
            </a>{' '}
            and a SenoShare advocate will respond within one business day.
          </p>
        </article>
      </section>

      <div className="mt-8">
        <Button variant="secondary" asChild>
          <Link to="/for-families">Resources for families</Link>
        </Button>
      </div>
    </main>
  )
}
