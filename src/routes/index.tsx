import { createFileRoute, Link } from '@tanstack/react-router'
import {
  FileCheck,
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

export const Route = createFileRoute('/')({ component: HomePage })

const trustIcons = [UserCheck, FileCheck, HeartHandshake, Lock, Phone, ShieldCheck]

function HomePage() {
  return (
    <main className="page-wrap px-4 pb-20 pt-6 sm:pt-8">
      <HeroSection />

      <section className="page-section" id="trust">
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
      </section>

      <section className="cta-section page-section text-center">
        <p className="island-kicker mb-0">Ready to find your match?</p>
        <h2 className="display-title mx-auto mb-4 max-w-2xl text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
          Take a few minutes to set up your profile
        </h2>
        <p className="body-readable mx-auto mb-8 max-w-xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
          Our onboarding wizard walks you through it, one question at a time.
        </p>
        <Button variant="primary" asChild size="lg">
          <Link to="/onboarding">Create Your Profile</Link>
        </Button>
      </section>
    </main>
  )
}
