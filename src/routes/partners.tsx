import { createFileRoute } from '@tanstack/react-router'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/partners')({ component: PartnersPage })

function PartnersPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="Professional Partners"
        title="Work with SenoShare"
        description="We partner with elder law attorneys, financial advisors, real estate professionals, and senior living consultants who share our commitment to safe, dignified home sharing."
      />

      <section className="island-shell mt-8 rounded-[2rem] p-6 sm:p-8">
        <p className="text-base text-[var(--sea-ink-soft)]">
          Interested in becoming a SenoShare partner? We&apos;re building a
          referral network of trusted professionals who can support members
          through verification, co-living agreements, and transitions.
        </p>
        <div className="mt-6">
          <Button asChild>
            <a href="mailto:partners@senoshare.com">Contact partnerships</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
