import { createFileRoute, Link } from '@tanstack/react-router'
import { BookOpen, Heart, MessageCircle, PenLine, Users } from 'lucide-react'

import { CommunityCard } from '@/components/CommunityCard'
import { PageHero } from '@/components/PageHero'
import { StoryCard } from '@/components/StoryCard'
import { Button } from '@/components/ui/button'
import { sampleGroups, sampleStories } from '@/data/sampleContent'
import { useAuth } from '@/hooks/useAuth'

export const Route = createFileRoute('/')({ component: HomePage })

const features = [
  {
    icon: BookOpen,
    title: 'Share Your Stories',
    description:
      'Pass down life lessons, family history, and cherished memories.',
    href: '/stories',
  },
  {
    icon: Users,
    title: 'Connect with Community',
    description: 'Join welcoming groups built around shared interests.',
    href: '/community',
  },
  {
    icon: MessageCircle,
    title: 'Stay in Touch',
    description: 'Keep conversations going with family and friends.',
    href: '/messages',
  },
  {
    icon: Heart,
    title: 'Designed for You',
    description: 'Large text, clear navigation, and a calm, readable layout.',
    href: '/about',
  },
] as const

function HomePage() {
  const { user } = useAuth()
  const featuredStories = sampleStories.slice(0, 3)

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="Welcome to SeniorShare"
        title="Your stories matter. Share them with the world."
        description="A warm, welcoming place for seniors to share wisdom, connect with community, and stay close to family — all in one simple, accessible home."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/stories">Read Stories</Link>
          </Button>
          <Button variant="secondary" asChild size="lg">
            <Link to={user ? '/stories/new' : '/auth/sign-up'}>
              <PenLine className="h-4 w-4" />
              Share Your Story
            </Link>
          </Button>
        </div>
      </PageHero>

      <section id="features" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description, href }, index) => (
          <Link
            key={title}
            to={href}
            className="island-shell feature-card rise-in block rounded-2xl p-5 no-underline"
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.14)]">
              <Icon className="h-5 w-5 text-[var(--lagoon-deep)]" />
            </div>
            <h2 className="mb-2 text-base font-semibold text-[var(--sea-ink)]">
              {title}
            </h2>
            <p className="m-0 text-sm text-[var(--sea-ink-soft)]">{description}</p>
          </Link>
        ))}
      </section>

      <section className="mt-10">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="island-kicker mb-2">Featured Stories</p>
            <h2 className="display-title text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
              Wisdom from our community
            </h2>
          </div>
          <Button variant="secondary" asChild>
            <Link to="/stories">View all stories</Link>
          </Button>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="island-kicker mb-2">Community</p>
            <h2 className="display-title text-2xl font-bold text-[var(--sea-ink)] sm:text-3xl">
              Find your people
            </h2>
          </div>
          <Button variant="secondary" asChild>
            <Link to="/community">Browse groups</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sampleGroups.slice(0, 3).map((group) => (
            <CommunityCard key={group.id} group={group} />
          ))}
        </div>
      </section>

      <section className="island-shell mt-10 rounded-[2rem] px-6 py-10 text-center sm:px-10">
        <p className="island-kicker mb-3">Ready to begin?</p>
        <h2 className="display-title mb-4 text-3xl font-bold text-[var(--sea-ink)]">
          Join SeniorShare today
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-base text-[var(--sea-ink-soft)]">
          Create a free account to share your stories, join community groups, and
          stay connected with the people who matter most.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/auth/sign-up">Create free account</Link>
          </Button>
          <Button variant="secondary" asChild size="lg">
            <Link to="/auth/sign-in">Sign in</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
