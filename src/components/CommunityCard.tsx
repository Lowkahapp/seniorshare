import { Users } from 'lucide-react'

import type { CommunityGroup } from '@/data/sampleContent'
import { CategoryBadge } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function CommunityCard({ group }: { group: CommunityGroup }) {
  return (
    <Card className="rise-in h-full">
      <CardHeader>
        <CategoryBadge>{group.category}</CategoryBadge>
        <CardTitle className="pt-3 text-lg">{group.name}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {group.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center justify-between gap-3 pt-0">
        <div className="text-sm text-[var(--sea-ink-soft)]">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--sea-ink)]">
            <Users className="h-4 w-4" />
            {group.memberCount.toLocaleString()} members
          </span>
          <p className="mt-1">{group.recentActivity}</p>
        </div>
        <Button size="sm">Join group</Button>
      </CardContent>
    </Card>
  )
}
