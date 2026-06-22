import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

import { CategoryBadge } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { getStoryById } from '@/data/sampleContent'

export const Route = createFileRoute('/stories/$storyId')({
  component: StoryDetailPage,
  loader: ({ params }) => {
    const story = getStoryById(params.storyId)
    if (!story) throw notFound()
    return { story }
  },
})

function StoryDetailPage() {
  const { story } = Route.useLoaderData()

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <Button variant="ghost" asChild className="mb-6 -ml-2">
        <Link to="/stories">
          <ArrowLeft className="h-4 w-4" />
          Back to stories
        </Link>
      </Button>

      <article className="island-shell rise-in rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <CategoryBadge>{story.category}</CategoryBadge>
          <span className="text-sm text-[var(--sea-ink-soft)]">
            {story.readMinutes} min read
          </span>
        </div>

        <h1 className="display-title mb-6 text-3xl font-bold tracking-tight text-[var(--sea-ink)] sm:text-5xl">
          {story.title}
        </h1>

        <div className="mb-8 flex items-center gap-3 border-b border-[var(--line)] pb-6">
          <Avatar>
            <AvatarFallback>{story.authorInitials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-[var(--sea-ink)]">{story.authorName}</p>
            <p className="text-sm text-[var(--sea-ink-soft)]">
              {new Date(story.createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>

        <div className="max-w-none space-y-5 text-lg leading-relaxed text-[var(--sea-ink-soft)]">
          {story.content.split('\n\n').map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  )
}
