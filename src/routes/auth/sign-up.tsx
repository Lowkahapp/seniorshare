import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { isSupabaseConfigured } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'

type SignUpSearch = {
  redirect?: string
}

export const Route = createFileRoute('/auth/sign-up')({
  validateSearch: (search: Record<string, unknown>): SignUpSearch => ({
    redirect: typeof search.redirect === 'string' ? search.redirect : undefined,
  }),
  component: SignUpPage,
})

function SignUpPage() {
  const { signUp } = useAuth()
  const { redirect: redirectTo } = Route.useSearch()
  const navigate = Route.useNavigate()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)
    setError(null)
    const message = await signUp(email, password, displayName)
    setLoading(false)
    if (message) {
      setError(message)
      return
    }
    setSuccess(true)
    setTimeout(() => {
      navigate({ to: redirectTo ?? '/profile' })
    }, 1500)
  }

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <div className="mx-auto max-w-md">
        <PageHero
          kicker="Join free"
          title="Create your SeniorShare account"
          description="A simple account unlocks story sharing, community groups, and private messages."
        />

        <form
          onSubmit={handleSubmit}
          className="island-shell mt-8 space-y-5 rounded-[2rem] p-6 sm:p-8"
        >
          {!isSupabaseConfigured ? (
            <p className="demo-alert text-sm">
              Supabase is not configured. Add your credentials to <code>.env</code>{' '}
              to enable sign up.
            </p>
          ) : null}

          {error ? <p className="demo-alert-danger text-sm">{error}</p> : null}
          {success ? (
            <p className="demo-alert text-sm">
              Account created! Check your email if confirmation is required.
            </p>
          ) : null}

          <div>
            <Label htmlFor="displayName">Your name</Label>
            <Input
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="How should we greet you?"
              required
            />
          </div>

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
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? 'Creating account...' : 'Create account'}
          </Button>

          <p className="text-center text-sm text-[var(--sea-ink-soft)]">
            Already have an account?{' '}
            <Link
              to="/auth/sign-in"
              search={redirectTo ? { redirect: redirectTo } : {}}
              className="font-semibold text-[var(--lagoon-deep)]"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </main>
  )
}
