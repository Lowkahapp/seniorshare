import { createFileRoute, Link } from '@tanstack/react-router'
import { PenLine } from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { StoryCard } from '@/components/StoryCard'
import { Button } from '@/components/ui/button'
import { sampleStories } from '@/data/sampleContent'
import { useAuth } from '@/hooks/useAuth'

export const Route = createFileRoute('/stories/')({ component: StoriesPage })

function StoriesPage() {
  const { user } = useAuth()

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="Stories"
        title="Real lives, real lessons"
        description="Read thoughtful stories from seniors sharing memories, wisdom, and the moments that shaped their lives."
      >
        <Button asChild>
          <Link to={user ? '/stories/new' : '/auth/sign-up'}>
            <PenLine className="h-4 w-4" />
            Share your story
          </Link>
        </Button>
      </PageHero>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {sampleStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </main>
  )
}
