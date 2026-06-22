import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Users } from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import {
  manifestoCommunityPillars,
  manifestoIsNot,
} from '@/data/manifestoContent'

export const Route = createFileRoute('/manifesto')({ component: ManifestoPage })

function ManifestoPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="The Senoshare Manifesto"
        title="Aging in place should not mean aging in isolation."
      />

      {/* The space is already here */}
      <section className="island-shell mt-10 rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
        <h2 className="display-title mb-6 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
          The space is already here
        </h2>
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-lg">
          <p>
            Across every neighborhood in this country, there are empty bedrooms,
            quiet kitchens, and unused dens — billions of dollars in
            underutilized space sitting inside the homes of the very people who
            built our communities in the first place.
          </p>
          <p>
            At the same time, older adults who want to stay independent are
            being priced out, warehoused into facilities they never chose, or
            left to manage alone in homes that have become too big, too costly,
            or too lonely.
          </p>
          <p className="text-lg font-semibold text-[var(--sea-ink)]">
            Senoshare unlocks the value already sitting within our neighborhoods
            and puts the power back into the hands of the people who earned it.
          </p>
        </div>
      </section>

      {/* Our vision */}
      <section className="mt-12">
        <h2 className="display-title mb-4 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
          Our vision: peer care, peer companionship
        </h2>
        <p className="mb-8 max-w-3xl text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-lg">
          We believe the best care is often peer care. The best companionship is
          often the person across the hall. The best way to age with dignity is
          to age together — on your own terms, in your own community, with your
          own rules.
        </p>

        <p className="island-kicker mb-5">The power of community</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {manifestoCommunityPillars.map(({ title, description }, index) => (
            <article
              key={title}
              className="island-shell feature-card rise-in rounded-2xl p-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.14)]">
                <Users className="h-5 w-5 text-[var(--lagoon-deep)]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--sea-ink)]">
                {title}
              </h3>
              <p className="m-0 text-base text-[var(--sea-ink-soft)]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* What Senoshare is — and isn't */}
      <section className="island-shell mt-12 rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
        <h2 className="display-title mb-6 text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
          What Senoshare is — and isn&apos;t
        </h2>
        <ul className="m-0 max-w-3xl space-y-4 pl-5 text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-lg">
          {manifestoIsNot.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-8 max-w-3xl space-y-4 border-t border-[var(--line)] pt-8 text-base leading-relaxed text-[var(--sea-ink-soft)] sm:text-lg">
          <p>
            If you have an extra room, you have an asset. If you need an
            affordable home, you have options. If you believe our communities are
            stronger when we share them, you belong here.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="island-shell mt-12 rounded-[2rem] px-6 py-10 text-center sm:px-10 sm:py-14">
        <p className="island-kicker mb-3">Join the community</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/onboarding">Get started</Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
