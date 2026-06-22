import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type EmailSignupFormProps = {
  buttonLabel?: string
  className?: string
  buttonVariant?: 'default' | 'primary'
}

export function EmailSignupForm({
  buttonLabel = 'Find Your Perfect Match',
  className,
  buttonVariant = 'primary',
}: EmailSignupFormProps) {
  const [email, setEmail] = useState('')

  return (
    <form
      className={className}
      onSubmit={(event) => {
        event.preventDefault()
        window.location.href = `/onboarding?email=${encodeURIComponent(email)}`
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="min-h-12 flex-1 text-base"
          aria-label="Email address"
        />
        <Button type="submit" variant={buttonVariant} size="lg" className="min-h-12 shrink-0">
          {buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
      <p className="mt-3 text-sm text-[var(--sea-ink-soft)]">
        Free to browse. Identity verification required before any match.
      </p>
    </form>
  )
}

export function FamilyLink() {
  return (
    <p className="text-base text-[var(--sea-ink-soft)]">
      Researching this for a parent?{' '}
      <Link
        to="/for-families"
        className="font-semibold text-[var(--lagoon-deep)] no-underline hover:underline"
      >
        Start here →
      </Link>
    </p>
  )
}
