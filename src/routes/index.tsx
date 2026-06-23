import { createFileRoute, Link } from '@tanstack/react-router'
import {
  FileCheck2,
  HeartHandshake,
  Lock,
  Phone,
  ShieldCheck,
  UserCheck,
} from 'lucide-react'

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

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'SenoShare — Secure home sharing for older adults' },
      {
        name: 'description',
        content:
          'SenoShare is a verified matching service that helps active older adults share homes, pool costs, and build companionship — protected by ID checks, background screening, and mediated introductions.',
      },
      {
        property: 'og:title',
        content: 'SenoShare — Secure home sharing for older adults',
      },
      {
        property: 'og:description',
        content:
          'A high-trust matching service for older adults to share homes, pool resources, and build companionship — backed by verification and mediated introductions.',
      },
      { property: 'og:url', content: 'https://try.senoshare.com/' },
      { property: 'og:type', content: 'website' },
    ],
    links: [{ rel: 'canonical', href: 'https://try.senoshare.com/' }],
  }),
  component: HomePage,
})

const trustIcons = [UserCheck, FileCheck2, HeartHandshake, Lock, Phone, ShieldCheck]

function HomePage() {
  return (
    <main className="page-wrap px-4 pb-20 pt-6 sm:pt-8">
      <HeroSection />

      <section className="page-section trust-section" id="trust">
        <div className="mb-12 max-w-2xl">
          <p className="island-kicker mb-3">Trust &amp; Safety Framework</p>
          <h2 className="display-title mb-4 text-3xl font-bold leading-[1.15] text-[var(--sea-ink)] sm:text-4xl">
            Six layers between you and a stranger.
          </h2>
          <p className="body-readable text-base text-[var(--sea-ink-soft)] sm:text-lg">
            We built SenoShare specifically for older adults. Every part of the
            experience is designed to keep you safe, in control, and never
            rushed.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustPillars.map((pillar, index) => (
            <TrustPillar
              key={pillar.title}
              {...pillar}
              icon={trustIcons[index]}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="page-section" id="how-it-works">
        <h2 className="display-title mb-10 text-3xl font-bold leading-[1.15] text-[var(--sea-ink)] sm:text-4xl">
          How SenoShare works
        </h2>
        <div className="steps-grid">
          {howItWorksSteps.map((step) => (
            <StepCard
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              learnMoreHref={'learnMoreHref' in step ? step.learnMoreHref : undefined}
            />
          ))}
        </div>

        <div className="cta-box mt-12">
          <h3 className="display-title mb-3 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
            Ready to find your match?
          </h3>
          <p className="body-readable mx-auto mb-6 max-w-xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
            Take a few minutes to set up your profile. Our onboarding wizard walks
            you through it, one question at a time.
          </p>
          <Button variant="primary" asChild size="lg">
            <Link to="/onboarding">Begin onboarding</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
