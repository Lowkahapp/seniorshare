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
      <section className="page-section--flush pb-12 pt-2 sm:pb-16 sm:pt-4">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-14 xl:grid-cols-2">
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
              <Button variant="ghost" size="lg" asChild>
                <Link to="/how-it-works">
                  See how it works
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/pricing">View pricing</Link>
              </Button>
            </div>

            <div className="hero-stats-grid mt-10 border-t border-[var(--line)] pt-8">
              {trustStats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--lagoon-deep)]" />
                  <div>
                    <p className="text-base font-bold leading-tight text-[var(--sea-ink)] sm:text-lg">
                      {value}
                    </p>
                    <p className="mt-0.5 text-sm leading-snug text-[var(--sea-ink-soft)]">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual-panel lg:sticky lg:top-24 lg:self-start">
            <img
              src={heroImages.home}
              alt="A welcoming home with space to share"
              className="mb-6 aspect-[16/11] w-full rounded-2xl object-cover"
              loading="eager"
              decoding="async"
            />

            <div className="flat-divider">
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

      <section className="border-t border-[var(--line)] py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {heroGallery.map((item) => (
            <figure key={item.caption}>
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mt-3 text-sm font-medium text-[var(--sea-ink-soft)]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
