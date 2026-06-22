import { Link } from '@tanstack/react-router'
import { ArrowRight, Headphones, ShieldCheck, Wallet } from 'lucide-react'

import {
  EmailSignupForm,
  FamilyLink,
} from '@/components/EmailSignupForm'
import { Button } from '@/components/ui/button'
import {
  MatchCard,
  MemberCard,
  VerifiedBadge,
} from '@/components/senoshare/SenoshareCards'
import { sampleMatch, sampleMembers } from '@/data/senoshareContent'

const trustStats = [
  {
    icon: Wallet,
    value: '$800–$2k',
    label: 'avg. monthly savings',
  },
  {
    icon: ShieldCheck,
    value: '6 layers',
    label: 'of safety vetting',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'advocate support',
  },
] as const

export function HeroSection() {
  return (
    <section className="hero-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
      <div className="pointer-events-none absolute -left-24 -top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.28),transparent_66%)]" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.16),transparent_66%)]" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <VerifiedBadge />
            <span className="island-kicker m-0">Verified members only</span>
          </div>

          <h1 className="display-title mb-6 max-w-xl text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.08] font-bold tracking-tight text-[var(--sea-ink)]">
            <span className="block">Your home has extra space.</span>
            <span className="mt-1 block text-[var(--lagoon-deep)]">
              Your life has room for new connections.
            </span>
          </h1>

          <p className="mb-4 max-w-lg text-lg font-semibold leading-snug text-[var(--sea-ink)] sm:text-xl">
            Don&apos;t downsize your lifestyle. Share your space.
          </p>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-[1.05rem]">
            SenoShare is a secure, high-trust matching ecosystem that connects
            active older adults to pool resources, share beautiful homes, and
            build built-in companionship — protected by rigorous vetting and
            legal guardrails.
          </p>

          <EmailSignupForm className="max-w-lg" />

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/how-it-works">
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/pricing">View pricing</Link>
            </Button>
          </div>

          <div className="mt-6">
            <FamilyLink />
          </div>

          <div className="mt-10 grid gap-4 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
            {trustStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(79,184,178,0.14)]">
                  <Icon className="h-4 w-4 text-[var(--lagoon-deep)]" />
                </div>
                <div>
                  <p className="display-title text-xl font-bold leading-none text-[var(--sea-ink)]">
                    {value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-[var(--sea-ink-soft)]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-preview relative">
          <div className="hero-preview-panel rounded-[1.5rem] border border-[var(--line)] bg-[rgba(79,184,178,0.06)] p-4 sm:p-5">
            <p className="island-kicker mb-4">Live member previews</p>
            <div className="space-y-3">
              {sampleMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="hero-preview-card"
                  style={{ animationDelay: `${120 + index * 90}ms` }}
                >
                  <MemberCard {...member} />
                </div>
              ))}
              <div
                className="hero-preview-card"
                style={{ animationDelay: '300ms' }}
              >
                <MatchCard
                  title={sampleMatch.title}
                  description={sampleMatch.description}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
