import { createFileRoute, Link } from '@tanstack/react-router'
import { BookOpen, LogOut, MessageCircle, PenLine, Users } from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { getDisplayName, getInitials, useAuth } from '@/hooks/useAuth'
import { requireAuth } from '@/lib/auth'

export const Route = createFileRoute('/profile')({
  beforeLoad: () => requireAuth('/profile'),
  component: ProfilePage,
})

function ProfilePage() {
  const { user, signOut } = useAuth()
  const displayName = getDisplayName(user)

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero kicker="Your profile" title={displayName}>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 text-lg">
            <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base text-[var(--sea-ink-soft)]">{user?.email}</p>
            <Button
              variant="ghost"
              className="mt-2 px-0"
              onClick={() => signOut()}
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
      </PageHero>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { icon: PenLine, label: 'Share a story', to: '/stories/new' },
          { icon: Users, label: 'Browse groups', to: '/community' },
          { icon: MessageCircle, label: 'Open messages', to: '/messages' },
        ].map(({ icon: Icon, label, to }) => (
          <Link
            key={to}
            to={to}
            className="island-shell feature-card flex items-center gap-3 rounded-2xl p-5 no-underline"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.14)]">
              <Icon className="h-5 w-5 text-[var(--lagoon-deep)]" />
            </div>
            <span className="font-semibold text-[var(--sea-ink)]">{label}</span>
          </Link>
        ))}
      </section>

      <section className="island-shell mt-8 rounded-[2rem] p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-[var(--lagoon-deep)]" />
          <h2 className="text-lg font-semibold text-[var(--sea-ink)]">Your activity</h2>
        </div>
        <p className="text-base text-[var(--sea-ink-soft)]">
          Your shared stories and group memberships will appear here as you begin
          using SeniorShare. Start by writing your first story or joining a
          community group.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/stories/new">Write a story</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/community">Explore community</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
