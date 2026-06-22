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
    <>
      <section className="hero-shell hero-shell-pro relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-12 xl:gap-16">
          <div className="max-w-xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <VerifiedBadge />
              <span className="island-kicker m-0">Verified members only</span>
            </div>

            <h1 className="display-title mb-5 text-[clamp(2.35rem,4.8vw,3.65rem)] leading-[1.06] font-bold tracking-tight text-[var(--sea-ink)]">
              Your home has extra space. Your life has room for new connections.
            </h1>

            <p className="mb-4 text-lg font-semibold leading-snug text-[var(--sea-ink)] sm:text-xl">
              Don&apos;t downsize your lifestyle. Share your space.
            </p>
            <p className="mb-6 text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-[1.05rem]">
              SenoShare is a secure, high-trust matching ecosystem that connects
              active older adults to pool resources, share beautiful homes, and
              build built-in companionship — protected by rigorous vetting and
              legal guardrails.
            </p>

            <div className="mb-6">
              <FamilyLink />
            </div>

            <EmailSignupForm className="max-w-lg" />

            <div className="mt-5 flex flex-wrap items-center gap-3">
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

            <div className="mt-10 grid gap-5 border-t border-[var(--line)] pt-8 sm:grid-cols-3">
              {trustStats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(23,58,64,0.06)]">
                    <Icon className="h-4 w-4 text-[var(--sea-ink)]" />
                  </div>
                  <div>
                    <p className="display-title text-lg font-bold leading-none text-[var(--sea-ink)] sm:text-xl">
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

          <div className="hero-visual-panel rise-in rounded-[1.75rem] border border-[var(--line)] bg-[#f7f9f8] p-3 shadow-[0_24px_48px_rgba(23,58,64,0.08)] sm:p-4">
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <img
                src={heroImages.home}
                alt="A welcoming home with space to share"
                className="aspect-[16/11] w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(23,58,64,0.42)] via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                Real homes. Verified members. Mediated introductions.
              </p>
            </div>

            <div className="mt-3 space-y-3">
              {sampleMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="hero-preview-card"
                  style={{ animationDelay: `${120 + index * 90}ms` }}
                >
                  <MemberCard {...member} compact />
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
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {heroGallery.map((item, index) => (
          <figure
            key={item.caption}
            className="hero-gallery-card rise-in overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_10px_28px_rgba(23,58,64,0.06)]"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="px-4 py-3 text-sm font-semibold text-[var(--sea-ink)]">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  )
}
