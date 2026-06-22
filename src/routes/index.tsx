import { createFileRoute, Link } from '@tanstack/react-router'
import { BookOpen, Heart, Users, MessageCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { isSupabaseConfigured } from '@/integrations/supabase/client'

export const Route = createFileRoute('/')({ component: HomePage })

const features = [
  {
    icon: BookOpen,
    title: 'Share Your Stories',
    description:
      'Pass down life lessons, family history, and cherished memories to loved ones and your community.',
  },
  {
    icon: Users,
    title: 'Connect with Community',
    description:
      'Join groups of peers who share your interests, experiences, and desire to stay engaged.',
  },
  {
    icon: MessageCircle,
    title: 'Stay in Touch',
    description:
      'Exchange messages, photos, and updates with family and friends in a simple, accessible interface.',
  },
  {
    icon: Heart,
    title: 'Designed for You',
    description:
      'Large text, clear navigation, and thoughtful design make SeniorShare easy and comfortable to use.',
  },
] as const

function HomePage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
        <p className="island-kicker mb-3">Welcome to SeniorShare</p>
        <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-[var(--sea-ink)] sm:text-6xl">
          Your stories matter. Share them with the world.
        </h1>
        <p className="mb-8 max-w-2xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
          SeniorShare is a warm, welcoming platform where seniors can share
          wisdom, connect with community, and stay close to family — all in one
          simple place.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/about">Learn More</Link>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#features">Explore Features</a>
          </Button>
        </div>
        {!isSupabaseConfigured && (
          <p className="mt-6 text-sm text-[var(--sea-ink-soft)]">
            Backend not connected yet — add your Supabase credentials to{' '}
            <code>.env</code> to enable accounts and data storage.
          </p>
        )}
      </section>

      <section id="features" className="mt-8 grid gap-4 sm:grid-cols-2">
        {features.map(({ icon: Icon, title, description }, index) => (
          <Card
            key={title}
            className="rise-in"
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.14)]">
                <Icon className="h-5 w-5 text-[var(--lagoon-deep)]" />
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="island-shell mt-8 rounded-2xl p-6">
        <p className="island-kicker mb-2">Getting Started</p>
        <CardContent className="p-0">
          <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-[var(--sea-ink-soft)]">
            <li>
              Run <code>npm run dev</code> to start the development server.
            </li>
            <li>
              Copy <code>.env.example</code> to <code>.env</code> and add your
              Supabase project URL and anon key.
            </li>
            <li>
              Customize routes in <code>src/routes</code> as you build out
              features.
            </li>
          </ul>
        </CardContent>
      </section>
    </main>
  )
}
