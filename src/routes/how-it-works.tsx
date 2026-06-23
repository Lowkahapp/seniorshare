import { createFileRoute, Link } from '@tanstack/react-router'

import { StepCard } from '@/components/senoshare/SenoshareCards'
import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { howItWorksSteps, trustPillars } from '@/data/senoshareContent'

export const Route = createFileRoute('/how-it-works')({ component: HowItWorksPage })

function HowItWorksPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="How it works"
        title="Matching built for trust, not speed"
        description="SenoShare guides every step—from your first profile question to co-living agreements and ongoing support after move-in."
      >
        <Button asChild size="lg">
          <Link to="/onboarding">Begin onboarding</Link>
        </Button>
      </PageHero>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {howItWorksSteps.map((step) => (
          <StepCard
            key={step.step}
            step={step.step}
            title={step.title}
            description={step.description}
            learnMoreHref={'learnMoreHref' in step ? step.learnMoreHref : undefined}
          />
        ))}
      </section>

      <section className="mt-12" id="after-match">
        <h2 className="display-title mb-6 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
          After your match
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Welcome call with your SenoShare advocate',
            'Draft a written co-living agreement together',
            'Plan a gradual introduction timeline',
            'Ongoing check-ins for the first 90 days',
          ].map((item) => (
            <div key={item} className="demo-list-item text-base text-[var(--sea-ink-soft)]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="display-title mb-6 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
          Safety at every layer
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {trustPillars.map((pillar) => (
            <article key={pillar.title} className="island-shell rounded-2xl p-5">
              <h3 className="mb-2 font-semibold text-[var(--sea-ink)]">{pillar.title}</h3>
              <p className="m-0 text-sm text-[var(--sea-ink-soft)]">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
