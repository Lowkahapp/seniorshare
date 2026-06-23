import { Link } from '@tanstack/react-router'
import { ChevronDown } from 'lucide-react'

import ThemeToggle from './ThemeToggle'
import { Button } from '@/components/ui/button'
import { getDisplayName, useAuth } from '@/hooks/useAuth'

const navLinks = [
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/locations', label: 'Locations' },
  { to: '/for-families', label: 'Resources', hasChevron: true },
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
            className="brand-logo inline-flex items-center gap-2 text-lg text-[var(--sea-ink)] no-underline"
          >
            <span className="brand-dot" aria-hidden="true" />
            <span>SenoShare</span>
          </Link>
        </div>

        <div className="flex min-w-0 items-center justify-center gap-4 overflow-visible px-1 sm:flex-wrap sm:gap-x-6 lg:gap-8">
          {navLinks.map(({ to, label, ...rest }) => (
            <Link
              key={to}
              to={to}
              className="nav-link inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-semibold no-underline"
              activeProps={{ className: 'nav-link is-active' }}
            >
              {label}
              {'hasChevron' in rest && rest.hasChevron ? (
                <ChevronDown className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
              ) : null}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {!loading && user ? (
            <Button variant="primary" size="sm" asChild>
              <Link to="/profile">{getDisplayName(user)}</Link>
            </Button>
          ) : !loading ? (
            <>
              <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
                <Link to="/onboarding">Get the app</Link>
              </Button>
              <Button variant="primary" size="sm" asChild className="min-w-[5.5rem] shrink-0">
                <Link to="/auth/sign-in">Log in</Link>
              </Button>
            </>
          ) : null}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
