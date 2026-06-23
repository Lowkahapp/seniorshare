import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'

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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const navigate = useNavigate()

  return (
    <form
      className={className}
      onSubmit={async (event) => {
        event.preventDefault()
        if (!email) return

        setStatus('loading')
        try {
          await navigate({
            to: '/onboarding',
            search: { email },
          })
          setStatus('success')
          setEmail('')
        } catch {
          setStatus('error')
        }
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === 'error' || status === 'success') setStatus('idle')
          }}
          placeholder="Enter your email address"
          required
          disabled={status === 'loading'}
          className="min-h-12 flex-1 text-base placeholder:text-[var(--sea-ink-soft)] placeholder:opacity-100"
          aria-label="Email address"
        />
        <Button
          type="submit"
          variant={buttonVariant}
          size="lg"
          disabled={status === 'loading'}
          className="min-h-12 shrink-0"
        >
          {status === 'loading' ? 'Joining...' : buttonLabel}
        </Button>
      </div>
      {status === 'success' ? (
        <p className="mt-3 text-sm font-medium text-[var(--verified-green)]">
          You&apos;re on the list! We&apos;ll reach out when your match is ready.
        </p>
      ) : status === 'error' ? (
        <p className="mt-3 text-sm font-medium text-[#b42318]">
          Something went wrong. Please try again.
        </p>
      ) : (
        <p className="mt-3 text-sm text-[var(--sea-ink-soft)]">
          Free to browse. Identity verification required before any match.
        </p>
      )}
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
