import { Link } from '@tanstack/react-router'
import { Home } from 'lucide-react'

import ThemeToggle from './ThemeToggle'
import { Button } from '@/components/ui/button'
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
      <nav
        className="page-wrap grid h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 sm:gap-4"
        aria-label="Main navigation"
      >
        <div className="flex shrink-0 items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--sea-ink)] no-underline"
          >
            <Home className="h-4 w-4 text-[var(--lagoon-deep)]" aria-hidden="true" />
            <span className="hidden sm:inline">SenoShare</span>
          </Link>
        </div>

        <div className="flex min-w-0 items-center justify-center gap-4 overflow-visible px-1 sm:flex-wrap sm:gap-x-5 lg:gap-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="nav-link shrink-0 whitespace-nowrap text-sm font-semibold no-underline"
              activeProps={{ className: 'nav-link is-active' }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {!loading && user ? (
            <Button variant="secondary" size="sm" asChild>
              <Link to="/profile">{getDisplayName(user)}</Link>
            </Button>
          ) : !loading ? (
            <>
              <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
                <Link to="/auth/sign-in">Log in</Link>
              </Button>
              <Button variant="primary" size="sm" asChild className="min-w-[7.5rem] shrink-0">
                <Link to="/onboarding">Get Started</Link>
              </Button>
            </>
          ) : null}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
