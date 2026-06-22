import { createFileRoute, Link } from '@tanstack/react-router'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/pricing')({ component: PricingPage })

const plans = [
  {
    name: 'Browse',
    price: 'Free',
    description: 'Explore how SenoShare works and see if home sharing fits your life.',
    features: ['Create a profile', 'Learn about the matching process', 'Talk with our team'],
  },
  {
    name: 'Verified Member',
    price: 'From $29/mo',
    description: 'Full access to matching after identity verification and background screening.',
    features: [
      'Curated matches in your area',
      'Mediated video introductions',
      'Co-living agreement support',
      '24/7 member support',
    ],
    highlighted: true,
  },
]

function PricingPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="Pricing"
        title="Free to browse. Pay when you're ready to match."
        description="Identity verification is required before any match. No hidden fees, no pressure."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={
              plan.highlighted
                ? 'island-shell rounded-[2rem] border-2 border-[rgba(79,184,178,0.35)] p-6 sm:p-8'
                : 'island-shell rounded-[2rem] p-6 sm:p-8'
            }
          >
            <p className="island-kicker mb-2">{plan.name}</p>
            <p className="display-title mb-3 text-3xl font-bold text-[var(--sea-ink)]">
              {plan.price}
            </p>
            <p className="mb-5 text-base text-[var(--sea-ink-soft)]">{plan.description}</p>
            <ul className="mb-6 space-y-2 text-sm text-[var(--sea-ink-soft)]">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <Button asChild className="w-full">
              <Link to="/onboarding">Get started</Link>
            </Button>
          </article>
        ))}
      </div>
    </main>
  )
}
