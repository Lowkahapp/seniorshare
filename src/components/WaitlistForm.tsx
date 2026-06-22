import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    zip: '',
  })

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="demo-alert text-base">
        You&apos;re on the waitlist. We&apos;ll notify you when SenoShare launches
        near {form.zip || 'your area'}.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            placeholder="Jane"
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="jane@example.com"
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="zip">Zip code</Label>
        <Input
          id="zip"
          value={form.zip}
          onChange={(e) => setForm({ ...form, zip: e.target.value })}
          placeholder="97201"
          inputMode="numeric"
          pattern="[0-9]{5}"
          required
        />
      </div>
      <Button type="submit" size="lg">
        Join the waitlist
      </Button>
      <p className="text-sm leading-relaxed text-[var(--sea-ink-soft)]">
        New cities are added based on member demand. Joining the waitlist helps us
        prioritize your area. Your information is never sold.
      </p>
    </form>
  )
}
