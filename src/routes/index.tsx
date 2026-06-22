import { createFileRoute, Link } from '@tanstack/react-router'
import { ShieldCheck } from 'lucide-react'

import {
  EmailSignupForm,
  FamilyLink,
} from '@/components/EmailSignupForm'
import {
  MatchCard,
  MemberCard,
  StepCard,
  TrustPillar,
  VerifiedBadge,
} from '@/components/senoshare/SenoshareCards'
import { Button } from '@/components/ui/button'
import {
  howItWorksSteps,
  sampleMatch,
  sampleMembers,
  trustPillars,
} from '@/data/senoshareContent'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-10 sm:pt-14">
      {/* Hero */}
      <section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />

        <VerifiedBadge className="mb-4" />
        <p className="island-kicker mb-3">Verified members only</p>

        <h1 className="display-title mb-4 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight text-[var(--sea-ink)] sm:text-6xl">
          Your home has extra space. Your life has room for new connections.
        </h1>
        <p className="mb-3 max-w-2xl text-xl font-semibold text-[var(--sea-ink)] sm:text-2xl">
          Don&apos;t downsize your lifestyle. Share your space.
        </p>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-lg">
          SenoShare is a secure, high-trust matching ecosystem that connects
          active older adults to pool resources, share beautiful homes, and
          build built-in companionship—all protected by rigorous vetting and
          legal guardrails.
        </p>

        <div className="mb-8">
          <FamilyLink />
        </div>

        <EmailSignupForm className="max-w-xl" />
      </section>

      {/* Sample members */}
      <section className="mt-10">
        <div className="mb-5 grid gap-4 md:grid-cols-3">
          {sampleMembers.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
          <MatchCard
            title={sampleMatch.title}
            description={sampleMatch.description}
          />
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="mt-16" id="trust">
        <div className="mb-8 max-w-2xl">
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-[var(--lagoon-deep)]" />
            <p className="island-kicker m-0">Trust &amp; Safety Framework</p>
          </div>
          <h2 className="display-title mb-4 text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
            Six layers between you and a stranger.
          </h2>
          <p className="text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-lg">
            We built Senoshare specifically for older adults. Every part of the
            experience is designed to keep you safe, in control, and never
            rushed.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustPillars.map((pillar, index) => (
            <TrustPillar key={pillar.title} {...pillar} index={index} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mt-16" id="how-it-works">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="island-kicker mb-2">How Senoshare works</p>
            <h2 className="display-title text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
              From profile to partnership
            </h2>
          </div>
          <Button variant="secondary" asChild>
            <Link to="/how-it-works">Learn more</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="island-shell mt-16 rounded-[2rem] px-6 py-10 text-center sm:px-10 sm:py-14">
        <p className="island-kicker mb-3">Ready to find your match?</p>
        <h2 className="display-title mx-auto mb-4 max-w-2xl text-3xl font-bold text-[var(--sea-ink)] sm:text-4xl">
          Take a few minutes to set up your profile
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
          Our onboarding wizard walks you through it, one question at a time.
        </p>
        <Button asChild size="lg">
          <Link to="/onboarding">Begin onboarding</Link>
        </Button>
      </section>
    </main>
  )
}
