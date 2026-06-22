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
        className="page-wrap flex h-16 items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        <div className="flex shrink-0 items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-2 text-sm font-semibold text-[var(--sea-ink)] no-underline sm:px-4"
          >
            <Home className="h-4 w-4 text-[var(--lagoon-deep)]" aria-hidden="true" />
            SenoShare
          </Link>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-4 overflow-x-auto px-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:gap-6 [&::-webkit-scrollbar]:hidden">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="nav-link shrink-0 whitespace-nowrap text-sm font-semibold"
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
                <Link to="/onboarding" className="text-white">
                  Get Started
                </Link>
              </Button>
            </>
          ) : null}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
