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
import { heroGallery, heroImages } from '@/data/heroContent'
import { sampleMatch, sampleMembers } from '@/data/senoshareContent'

const trustStats = [
  {
    icon: Wallet,
    value: '$800–$2k',
    label: 'Avg. monthly savings',
  },
  {
    icon: ShieldCheck,
    value: '6 layers',
    label: 'Of safety vetting',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Advocate support',
  },
] as const

export function HeroSection() {
  return (
    <>
      <section className="hero-shell hero-shell-pro overflow-hidden rounded-xl border border-[var(--line)] bg-white px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-10 xl:grid-cols-2 xl:gap-12">
          <div className="flex max-w-xl flex-col">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <VerifiedBadge />
              <span className="island-kicker m-0">Verified members only</span>
            </div>

            <h1 className="display-title mb-5 text-[clamp(2.1rem,4.5vw,3.25rem)] leading-[1.1] font-bold tracking-tight text-[var(--sea-ink)]">
              Your home has extra space. Your life has room for new connections.
            </h1>

            <p className="mb-4 text-lg font-semibold leading-snug text-[var(--sea-ink)]">
              Don&apos;t downsize your lifestyle. Share your space.
            </p>
            <p className="body-readable mb-6 text-base text-[var(--sea-ink-soft)]">
              SenoShare is a secure, high-trust matching ecosystem that connects
              active older adults to pool resources, share beautiful homes, and
              build built-in companionship — protected by rigorous vetting and
              legal guardrails.
            </p>

            <div className="mb-6">
              <FamilyLink />
            </div>

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

            <div className="mt-8 grid gap-3 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
              {trustStats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="hero-stat-card flex items-center gap-3 rounded-lg p-3 sm:flex-col sm:items-start sm:p-4 lg:flex-row lg:items-center"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                    <Icon className="h-4 w-4 text-[var(--lagoon-deep)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg font-bold tracking-tight whitespace-nowrap text-[var(--sea-ink)]">
                      {value}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-[var(--sea-ink-soft)] sm:text-sm">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual-panel rounded-xl border border-[var(--line)] bg-[var(--lagoon-light)] p-3 sm:p-4 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-lg border border-[var(--line)]">
              <img
                src={heroImages.home}
                alt="A welcoming home with space to share"
                className="aspect-[16/11] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="mt-3 space-y-3">
              {sampleMembers.map((member) => (
                <MemberCard key={member.id} {...member} compact />
              ))}
              <MatchCard
                title={sampleMatch.title}
                description={sampleMatch.description}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {heroGallery.map((item) => (
          <figure
            key={item.caption}
            className="overflow-hidden rounded-xl border border-[var(--line)] bg-white"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="border-t border-[var(--line)] px-4 py-3 text-sm font-semibold text-[var(--sea-ink)]">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  )
}
