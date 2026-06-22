import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ component: AboutPage })

function AboutPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell rise-in rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
        <p className="island-kicker mb-3">About SeniorShare</p>
        <h1 className="display-title mb-5 text-4xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-5xl">
          A platform built with seniors in mind
        </h1>
        <div className="max-w-2xl space-y-4 text-base text-[var(--sea-ink-soft)] sm:text-lg">
          <p>
            SeniorShare was created to give older adults a dedicated space to
            share their life experiences, connect with peers, and stay engaged
            with family and community.
          </p>
          <p>
            We believe every generation has wisdom worth preserving. Whether
            it&apos;s family recipes, career lessons, or stories from decades
            past, SeniorShare makes it easy to capture and share what matters
            most.
          </p>
          <p>
            Built on modern web technology with accessibility at its core,
            SeniorShare offers a clean, readable interface that respects your
            time and attention.
          </p>
        </div>
      </section>
    </main>
  )
}
