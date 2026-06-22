import { Link } from '@tanstack/react-router'
import { Home } from 'lucide-react'

import ThemeToggle from './ThemeToggle'
import { Button } from '@/components/ui/button'
import { VerifiedBadge } from '@/components/senoshare/SenoshareCards'
import { getDisplayName, useAuth } from '@/hooks/useAuth'

const navLinks = [
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/locations', label: 'Locations' },
  { to: '/faq', label: 'FAQ' },
  { to: '/for-families', label: 'Resources' },
] as const

export default function Header() {
  const { user, loading } = useAuth()

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm text-[var(--sea-ink)] no-underline shadow-[0_8px_24px_rgba(30,90,72,0.08)] sm:px-4 sm:py-2"
          >
            <Home className="h-4 w-4 text-[var(--lagoon-deep)]" />
            SenoShare
          </Link>
        </h2>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-none sm:w-auto sm:flex-nowrap sm:pb-0">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="nav-link"
              activeProps={{ className: 'nav-link is-active' }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          {!loading && user ? (
            <Button variant="secondary" size="sm" asChild>
              <Link to="/profile">{getDisplayName(user)}</Link>
            </Button>
          ) : !loading ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth/sign-in">Log in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/onboarding">Get the app</Link>
              </Button>
            </>
          ) : null}
          <ThemeToggle />
        </div>
      </nav>
      <div className="page-wrap pb-2 sm:hidden">
        <VerifiedBadge />
      </div>
    </header>
  )
}
