import { Link } from '@tanstack/react-router'
import { Clock } from 'lucide-react'

import type { Story } from '@/data/sampleContent'
import { CategoryBadge } from '@/components/PageHero'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function StoryCard({ story }: { story: Story }) {
  return (
    <Card className="rise-in h-full">
      <CardHeader>
        <div className="mb-3 flex items-center justify-between gap-3">
          <CategoryBadge>{story.category}</CategoryBadge>
          <span className="inline-flex items-center gap-1 text-xs text-[var(--sea-ink-soft)]">
            <Clock className="h-3.5 w-3.5" />
            {story.readMinutes} min read
          </span>
        </div>
        <CardTitle className="text-lg">
          <Link
            to="/stories/$storyId"
            params={{ storyId: story.id }}
            className="text-[var(--sea-ink)] no-underline hover:text-[var(--lagoon-deep)]"
          >
            {story.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3 text-base leading-relaxed">
          {story.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-3 pt-0">
        <Avatar className="h-9 w-9">
          <AvatarFallback className="text-xs">{story.authorInitials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-[var(--sea-ink)]">
            {story.authorName}
          </p>
          <p className="text-xs text-[var(--sea-ink-soft)]">
            {new Date(story.createdAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
