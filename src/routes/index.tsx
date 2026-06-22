import { createFileRoute, Link } from '@tanstack/react-router'
import { ShieldCheck } from 'lucide-react'

import { HeroSection } from '@/components/senoshare/HeroSection'
import {
  StepCard,
  TrustPillar,
} from '@/components/senoshare/SenoshareCards'
import { Button } from '@/components/ui/button'
import {
  howItWorksSteps,
  trustPillars,
} from '@/data/senoshareContent'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <main className="page-wrap px-4 pb-20 pt-10 sm:pt-14">
      <HeroSection />

      <section className="page-section" id="trust">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-[var(--lagoon-deep)]" />
            <p className="island-kicker m-0">Trust &amp; Safety Framework</p>
          </div>
          <h2 className="display-title mb-4 text-3xl font-bold leading-[1.15] text-[var(--sea-ink)] sm:text-4xl">
            Six layers between you and a stranger.
          </h2>
          <p className="body-readable text-base text-[var(--sea-ink-soft)] sm:text-lg">
            We built Senoshare specifically for older adults. Every part of the
            experience is designed to keep you safe, in control, and never
            rushed.
          </p>
        </div>
        <div className="card-grid gap-4">
          {trustPillars.map((pillar, index) => (
            <TrustPillar key={pillar.title} {...pillar} index={index} />
          ))}
        </div>
      </section>

      <section className="page-section" id="how-it-works">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="island-kicker mb-2">How Senoshare works</p>
            <h2 className="display-title text-3xl font-bold leading-[1.15] text-[var(--sea-ink)] sm:text-4xl">
              From profile to partnership
            </h2>
          </div>
          <Button variant="secondary" asChild>
            <Link to="/how-it-works">Learn more</Link>
          </Button>
        </div>
        <div className="steps-grid">
          {howItWorksSteps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </section>

      <section className="cta-section page-section">
        <div className="island-shell rounded-xl border border-[var(--line)] px-6 py-12 text-center sm:px-10 sm:py-16">
          <p className="island-kicker mb-0">Ready to find your match?</p>
          <h2 className="display-title mx-auto mb-4 max-w-2xl text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
            Take a few minutes to set up your profile
          </h2>
          <p className="body-readable mx-auto mb-8 max-w-xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
            Our onboarding wizard walks you through it, one question at a time.
          </p>
          <Button variant="primary" asChild size="lg">
            <Link to="/onboarding">Begin onboarding</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
