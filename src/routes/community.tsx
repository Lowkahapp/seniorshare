import { createFileRoute } from '@tanstack/react-router'

import { CommunityCard } from '@/components/CommunityCard'
import { PageHero } from '@/components/PageHero'
import { sampleGroups } from '@/data/sampleContent'

export const Route = createFileRoute('/community')({ component: CommunityPage })

function CommunityPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="Community"
        title="Groups that feel like home"
        description="Join welcoming circles around gardening, books, family recipes, local history, and more. Every group moves at a comfortable pace."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sampleGroups.map((group) => (
          <CommunityCard key={group.id} group={group} />
        ))}
      </div>
    </main>
  )
}
