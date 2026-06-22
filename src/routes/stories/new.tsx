import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/hooks/useAuth'
import { requireAuth } from '@/lib/auth'

export const Route = createFileRoute('/stories/new')({
  beforeLoad: () => requireAuth('/stories/new'),
  component: NewStoryPage,
})

const categories = [
  'Life Lessons',
  'Family',
  'Career',
  'Reflection',
  'Hobbies',
  'Travel',
]

function NewStoryPage() {
  const { user } = useAuth()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [content, setContent] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="page-wrap px-4 pb-8 pt-14">
        <section className="island-shell rise-in mx-auto max-w-2xl rounded-[2rem] px-6 py-12 text-center sm:px-10">
          <p className="island-kicker mb-3">Story received</p>
          <h1 className="display-title mb-4 text-3xl font-bold text-[var(--sea-ink)]">
            Thank you for sharing
          </h1>
          <p className="mb-8 text-base text-[var(--sea-ink-soft)]">
            Your story has been saved. Once published, it will appear on the
            Stories page for others to read and enjoy.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link to="/stories">View stories</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/">Back home</Link>
            </Button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="Share a story"
        title="Write what matters to you"
        description="There is no rush. Take your time — your words help keep memories alive for family, friends, and future generations."
      />

      <form
        onSubmit={handleSubmit}
        className="island-shell mx-auto mt-8 max-w-2xl space-y-5 rounded-[2rem] p-6 sm:p-8"
      >
        <p className="text-sm text-[var(--sea-ink-soft)]">
          Posting as <strong className="text-[var(--sea-ink)]">{user?.email}</strong>
        </p>

        <div>
          <Label htmlFor="title">Story title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your story a memorable title"
            required
          />
        </div>

        <div>
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            className="demo-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="content">Your story</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write freely. Short memories and long reflections are both welcome."
            rows={12}
            required
          />
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button type="submit" size="lg">
            Publish story
          </Button>
          <Button variant="secondary" type="button" asChild>
            <Link to="/stories">Cancel</Link>
          </Button>
        </div>
      </form>
    </main>
  )
}
