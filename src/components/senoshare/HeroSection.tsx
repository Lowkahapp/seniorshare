import { ShieldCheck } from 'lucide-react'

import { EmailSignupForm, FamilyLink } from '@/components/EmailSignupForm'
import { Badge } from '@/components/ui/badge'
import {
  MatchCard,
  MemberCard,
} from '@/components/senoshare/SenoshareCards'
import { sampleMatch, sampleMembers } from '@/data/senoshareContent'

export function HeroSection() {
  return (
    <section className="page-section--flush pb-12 pt-2 sm:pb-16 sm:pt-4">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
        <div className="flex max-w-xl flex-col">
          <div className="mb-5">
            <Badge variant="shield" className="gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified members only
            </Badge>
          </div>

          <h1 className="display-title mb-5 text-[clamp(2.1rem,4.5vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-[var(--sea-ink)]">
            Your home has extra space. Your life has room for new connections.
          </h1>

          <p className="mb-4 text-lg font-bold leading-snug text-[var(--sea-ink)]">
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
        </div>

        <div className="hero-visual-panel hero-preview-panel lg:sticky lg:top-24 lg:self-start">
          {sampleMembers.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              location={member.location}
              role={member.role}
              details={member.details}
            />
          ))}
          <MatchCard
            title={sampleMatch.title}
            description={sampleMatch.description}
          />
        </div>
      </div>
    </section>
  )
}
