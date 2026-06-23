import { createFileRoute, Link, useSearch } from '@tanstack/react-router'
import { useState } from 'react'
import { Check } from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

type OnboardingSearch = {
  email?: string
  city?: string
  state?: string
}

export const Route = createFileRoute('/onboarding')({
  validateSearch: (search: Record<string, unknown>): OnboardingSearch => ({
    email: typeof search.email === 'string' ? search.email : undefined,
    city: typeof search.city === 'string' ? search.city : undefined,
    state: typeof search.state === 'string' ? search.state : undefined,
  }),
  component: OnboardingPage,
})

const steps = [
  {
    title: 'Your email',
    fields: ['email'],
  },
  {
    title: 'Your role',
    fields: ['role'],
  },
  {
    title: 'Your location',
    fields: ['city', 'state'],
  },
  {
    title: 'Your preferences',
    fields: ['preferences'],
  },
] as const

function OnboardingPage() {
  const { email: initialEmail, city: initialCity, state: initialState } =
    useSearch({ from: '/onboarding' })
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    email: initialEmail ?? '',
    role: '',
    city: initialCity ?? '',
    state: initialState ?? '',
    preferences: '',
  })

  function next() {
    if (step < steps.length - 1) setStep(step + 1)
    else setDone(true)
  }

  function back() {
    if (step > 0) setStep(step - 1)
  }

  if (done) {
    return (
      <main className="page-wrap px-4 pb-8 pt-14">
        <section className="island-shell mx-auto max-w-xl rounded-[2rem] px-6 py-12 text-center sm:px-10">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(79,184,178,0.14)]">
            <Check className="h-7 w-7 text-[var(--lagoon-deep)]" />
          </div>
          <p className="island-kicker mb-3">Profile started</p>
          <h1 className="display-title mb-4 text-3xl font-bold text-[var(--sea-ink)]">
            You&apos;re on the list
          </h1>
          <p className="mb-8 text-base text-[var(--sea-ink-soft)]">
            Next, you&apos;ll complete identity verification and background
            screening. A SenoShare advocate will reach out within one business
            day to guide you through the rest.
          </p>
          <Button asChild size="lg">
            <Link to="/auth/sign-up">Create your account</Link>
          </Button>
        </section>
      </main>
    )
  }

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="Onboarding"
        title={steps[step].title}
        description="One question at a time. You can pause and come back whenever you like."
      />

      <div className="mx-auto mt-8 max-w-xl">
        <div className="mb-6 flex gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-2 flex-1 rounded-full transition',
                index <= step
                  ? 'bg-[var(--lagoon)]'
                  : 'bg-[var(--line)]',
              )}
            />
          ))}
        </div>

        <div className="island-shell space-y-5 rounded-[2rem] p-6 sm:p-8">
          {step === 0 && (
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          )}

          {step === 1 && (
            <div className="space-y-3">
              <Label>I am a...</Label>
              {['Home Provider — I have space to share', 'Home Seeker — I am looking for a home'].map(
                (option) => (
                  <label
                    key={option}
                    className={cn(
                      'demo-list-item flex cursor-pointer items-center gap-3',
                      form.role === option && 'border-[rgba(79,184,178,0.4)] bg-[rgba(79,184,178,0.08)]',
                    )}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={option}
                      checked={form.role === option}
                      onChange={() => setForm({ ...form, role: option })}
                      className="h-4 w-4"
                    />
                    <span className="text-[var(--sea-ink)]">{option}</span>
                  </label>
                ),
              )}
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Portland"
                  required
                />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  placeholder="OR"
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <Label htmlFor="preferences">
                Tell us about your routines and preferences
              </Label>
              <textarea
                id="preferences"
                className="demo-textarea"
                rows={6}
                value={form.preferences}
                onChange={(e) =>
                  setForm({ ...form, preferences: e.target.value })
                }
                placeholder="Early riser, quiet evenings, loves gardening..."
              />
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            {step > 0 && (
              <Button variant="secondary" type="button" onClick={back}>
                Back
              </Button>
            )}
            <Button
              type="button"
              onClick={next}
              disabled={
                (step === 0 && !form.email) ||
                (step === 1 && !form.role) ||
                (step === 2 && (!form.city || !form.state))
              }
            >
              {step === steps.length - 1 ? 'Finish' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
