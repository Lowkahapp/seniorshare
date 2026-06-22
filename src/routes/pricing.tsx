import { createFileRoute, Link } from '@tanstack/react-router'
import { Check } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  pricingFaqs,
  pricingPlans,
  pricingTrustNotes,
} from '@/data/pricingContent'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/pricing')({ component: PricingPage })

function PricingPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="mx-auto mb-12 max-w-3xl text-center">
        <p className="island-kicker mb-3">Pricing</p>
        <h1 className="display-title mb-5 text-4xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-5xl">
          Simple, transparent pricing.
        </h1>
        <p className="text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-lg">
          Free to explore. Pay only when you&apos;re ready to connect.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.id}
            className={cn(
              'relative flex h-full flex-col rounded-[2rem] border p-6 sm:p-8',
              plan.highlighted
                ? 'island-shell border-2 border-[rgba(79,184,178,0.4)] bg-[rgba(79,184,178,0.06)] shadow-[0_18px_40px_rgba(30,90,72,0.1)]'
                : 'island-shell border-[var(--line)]',
            )}
          >
            {plan.badge ? (
              <Badge variant="accent" className="mb-4 w-fit">
                {plan.badge}
              </Badge>
            ) : (
              <div className="mb-4 h-6" />
            )}

            <h2 className="text-xl font-bold text-[var(--sea-ink)]">{plan.name}</h2>
            <p className="mt-2 text-sm text-[var(--sea-ink-soft)]">{plan.tagline}</p>

            <div className="my-6 flex items-baseline gap-2">
              <span className="display-title text-4xl font-bold text-[var(--sea-ink)]">
                {plan.price}
              </span>
              {plan.priceNote ? (
                <span className="text-sm font-medium text-[var(--sea-ink-soft)]">
                  {plan.priceNote}
                </span>
              ) : null}
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--sea-ink-soft)]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lagoon-deep)]"
                    aria-hidden
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.highlighted ? 'default' : 'secondary'}
              className="w-full"
              asChild
            >
              <Link to={plan.ctaTo}>{plan.cta}</Link>
            </Button>
          </article>
        ))}
      </section>

      <section className="mt-10 text-center">
        <Link
          to="/how-it-works"
          hash="after-match"
          className="text-base font-semibold text-[var(--lagoon-deep)] no-underline hover:underline"
        >
          See what happens after your match →
        </Link>
      </section>

      <section className="mt-10 flex flex-col items-center gap-3 text-center">
        {pricingTrustNotes.map((note) => (
          <p key={note} className="m-0 text-sm text-[var(--sea-ink-soft)]">
            {note}
          </p>
        ))}
      </section>

      <section className="mx-auto mt-16 max-w-3xl">
        <h2 className="display-title mb-6 text-center text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
          Frequently asked questions
        </h2>
        <Accordion
          type="single"
          collapsible
          defaultValue="browsing-free"
          className="island-shell rounded-2xl px-5 sm:px-6"
        >
          {pricingFaqs.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  )
}
