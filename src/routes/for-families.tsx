import { createFileRoute, Link } from '@tanstack/react-router'
import { Heart, Users } from 'lucide-react'

import { EmailSignupForm } from '@/components/EmailSignupForm'
import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/for-families')({ component: ForFamiliesPage })

function ForFamiliesPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="For families"
        title="Helping a parent explore home sharing?"
        description="SenoShare is built for active older adults who want companionship and shared living—not assisted care. Here's how to support someone you love without taking over the process."
      />

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {[
          {
            icon: Heart,
            title: 'Start the conversation gently',
            text: 'Ask about their routines, social life, and whether extra space at home feels lonely or wasteful. SenoShare is about choice—not pressure.',
          },
          {
            icon: Users,
            title: 'Stay involved, stay respectful',
            text: 'Family members can join informational calls, but the member always controls their profile, matches, and decisions.',
          },
        ].map(({ icon: Icon, title, text }) => (
          <article key={title} className="island-shell feature-card rounded-2xl p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.14)]">
              <Icon className="h-5 w-5 text-[var(--lagoon-deep)]" />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">{title}</h2>
            <p className="m-0 text-base text-[var(--sea-ink-soft)]">{text}</p>
          </article>
        ))}
      </section>

      <section className="island-shell mt-8 rounded-[2rem] p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-semibold text-[var(--sea-ink)]">
          What families should know
        </h2>
        <ul className="m-0 space-y-3 pl-5 text-base text-[var(--sea-ink-soft)]">
          <li>Every member passes identity verification and background screening.</li>
          <li>Introductions are mediated by a SenoShare advocate before anyone meets in person.</li>
          <li>Co-living agreements are written with legal guardrails before move-in.</li>
          <li>24/7 support is available for safety concerns at any stage.</li>
        </ul>
        <div className="mt-8">
          <EmailSignupForm buttonLabel="Get started for your parent" />
        </div>
        <div className="mt-6">
          <Button variant="secondary" asChild>
            <Link to="/how-it-works">See how matching works</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
