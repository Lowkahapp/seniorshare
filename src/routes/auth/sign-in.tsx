import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { isSupabaseConfigured } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'

type SignInSearch = {
  redirect?: string
}

export const Route = createFileRoute('/auth/sign-in')({
  validateSearch: (search: Record<string, unknown>): SignInSearch => ({
    redirect: typeof search.redirect === 'string' ? search.redirect : undefined,
  }),
  component: SignInPage,
})

function SignInPage() {
  const { signIn } = useAuth()
  const { redirect: redirectTo } = Route.useSearch()
  const navigate = Route.useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    const message = await signIn(email, password)
    setLoading(false)
    if (message) {
      setError(message)
      return
    }
    navigate({ to: redirectTo ?? '/profile' })
  }

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <div className="mx-auto max-w-md">
        <PageHero
        kicker="Sign in"
        title="Welcome back, member"
        description="Sign in to continue your profile, review matches, and connect with your Senoshare advocate."
        />

        <form
          onSubmit={handleSubmit}
          className="island-shell mt-8 space-y-5 rounded-[2rem] p-6 sm:p-8"
        >
          {!isSupabaseConfigured ? (
            <p className="demo-alert text-sm">
              Supabase is not configured. Add your credentials to <code>.env</code>{' '}
              to enable sign in.
            </p>
          ) : null}

          {error ? <p className="demo-alert-danger text-sm">{error}</p> : null}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>

          <p className="text-center text-sm text-[var(--sea-ink-soft)]">
            New here?{' '}
            <Link
              to="/auth/sign-up"
              search={redirectTo ? { redirect: redirectTo } : {}}
              className="font-semibold text-[var(--lagoon-deep)]"
            >
              Create an account
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}