import { createFileRoute, Link } from '@tanstack/react-router'
import { Accessibility, Heart, Shield, Sparkles } from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/about')({ component: AboutPage })

const values = [
  {
    icon: Heart,
    title: 'Warmth first',
    description:
      'Every screen is designed to feel welcoming — never rushed, never overwhelming.',
  },
  {
    icon: Accessibility,
    title: 'Accessible by design',
    description:
      'Readable text, clear buttons, and simple navigation for every comfort level.',
  },
  {
    icon: Shield,
    title: 'Private when you need it',
    description:
      'Share publicly with the community or keep conversations within your family circle.',
  },
  {
    icon: Sparkles,
    title: 'Stories that last',
    description:
      'Preserve memories, recipes, and lessons for grandchildren and generations ahead.',
  },
]

function AboutPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="About SeniorShare"
        title="A platform built with seniors in mind"
        description="SeniorShare was created to give older adults a dedicated space to share life experiences, connect with peers, and stay engaged with family and community."
      />

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {values.map(({ icon: Icon, title, description }) => (
          <article key={title} className="island-shell feature-card rounded-2xl p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.14)]">
              <Icon className="h-5 w-5 text-[var(--lagoon-deep)]" />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
              {title}
            </h2>
            <p className="m-0 text-base text-[var(--sea-ink-soft)]">{description}</p>
          </article>
        ))}
      </section>

      <section className="island-shell mt-8 rounded-[2rem] px-6 py-10 sm:px-10">
        <p className="island-kicker mb-3">How it works</p>
        <ol className="m-0 max-w-2xl space-y-4 pl-5 text-base text-[var(--sea-ink-soft)]">
          <li>Create a free account in under a minute.</li>
          <li>Read inspiring stories or share one of your own.</li>
          <li>Join community groups that match your interests.</li>
          <li>Stay in touch with family and friends through messages.</li>
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/auth/sign-up">Get started free</Link>
          </Button>
          <Button variant="secondary" asChild size="lg">
            <Link to="/stories">Read stories</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
