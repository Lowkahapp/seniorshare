import { createFileRoute, Link } from '@tanstack/react-router'
import { LogOut, ShieldCheck, UserCircle } from 'lucide-react'

import { VerifiedBadge } from '@/components/senoshare/SenoshareCards'
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
      <PageHero kicker="Member profile" title={displayName}>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar className="h-16 w-16 text-lg">
            <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
          </Avatar>
          <div>
            <VerifiedBadge className="mb-2" />
            <p className="text-base text-[var(--sea-ink-soft)]">{user?.email}</p>
            <Button variant="ghost" className="mt-2 px-0" onClick={() => signOut()}>
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
      </PageHero>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: UserCircle,
            label: 'Complete verification',
            text: 'Government ID and background check required before matching.',
            to: '/onboarding',
          },
          {
            icon: ShieldCheck,
            label: 'Review matches',
            text: 'Browse verified home providers and seekers in your area.',
            to: '/how-it-works',
          },
        ].map(({ icon: Icon, label, text, to }) => (
          <Link
            key={to}
            to={to}
            className="island-shell feature-card block rounded-2xl p-5 no-underline"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(79,184,178,0.14)]">
              <Icon className="h-5 w-5 text-[var(--lagoon-deep)]" />
            </div>
            <p className="font-semibold text-[var(--sea-ink)]">{label}</p>
            <p className="mt-1 text-sm text-[var(--sea-ink-soft)]">{text}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}
