import { createFileRoute, Link } from '@tanstack/react-router'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { faqCategories } from '@/data/faqContent'

export const Route = createFileRoute('/faq')({ component: FaqPage })

function FaqPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="mx-auto mb-12 max-w-3xl text-center">
        <p className="island-kicker mb-3">FAQ</p>
        <h1 className="display-title mb-5 text-4xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-5xl">
          Your questions, answered honestly.
        </h1>
        <p className="text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-lg">
          No jargon. No runaround. Just straight answers about how SenoShare
          works and what to expect.
        </p>
      </section>

      <div className="mx-auto max-w-3xl space-y-10">
        {faqCategories.map((category) => (
          <section key={category.id}>
            <h2 className="mb-2 text-xl font-bold text-[var(--sea-ink)] sm:text-2xl">
              {category.title}
            </h2>
            <Accordion
              type="single"
              collapsible
              defaultValue={
                category.id === 'getting-started' ? 'what-is-senoshare' : undefined
              }
              className="island-shell rounded-2xl px-5 sm:px-6"
            >
              {category.items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ))}
      </div>

      <section className="island-shell mx-auto mt-16 max-w-3xl rounded-[2rem] px-6 py-10 text-center sm:px-10">
        <h2 className="display-title mb-3 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
          Still have questions?
        </h2>
        <p className="mb-8 text-base text-[var(--sea-ink-soft)]">
          Our advocates are available by phone or email — no bots, no runaround.
        </p>
        <Button asChild size="lg">
          <Link to="/support">Contact an advocate</Link>
        </Button>
      </section>
    </main>
  )
}
