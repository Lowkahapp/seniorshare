import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Send } from 'lucide-react'

import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { sampleMessages } from '@/data/sampleContent'
import { requireAuth } from '@/lib/auth'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/messages')({
  beforeLoad: () => requireAuth('/messages'),
  component: MessagesPage,
})

function MessagesPage() {
  const [activeId, setActiveId] = useState(sampleMessages[0]?.id)
  const [draft, setDraft] = useState('')
  const activeThread = sampleMessages.find((thread) => thread.id === activeId)

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <PageHero
        kicker="Messages"
        title="Stay close to the people you love"
        description="A simple inbox for family updates, group notes, and friendly conversations — without clutter or confusion."
      />

      <div className="island-shell mt-8 grid overflow-hidden rounded-[2rem] lg:grid-cols-[320px_1fr]">
        <aside className="border-b border-[var(--line)] lg:border-b-0 lg:border-r">
          <div className="border-b border-[var(--line)] px-4 py-4">
            <p className="text-sm font-semibold text-[var(--sea-ink)]">Inbox</p>
          </div>
          <ul className="m-0 list-none divide-y divide-[var(--line)] p-0">
            {sampleMessages.map((thread) => (
              <li key={thread.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(thread.id)}
                  className={cn(
                    'flex w-full items-start gap-3 px-4 py-4 text-left transition hover:bg-[var(--link-bg-hover)]',
                    activeId === thread.id && 'bg-[rgba(79,184,178,0.08)]',
                  )}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{thread.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate font-semibold text-[var(--sea-ink)]">
                        {thread.name}
                      </p>
                      <span className="shrink-0 text-xs text-[var(--sea-ink-soft)]">
                        {thread.time}
                      </span>
                    </div>
                    <p
                      className={cn(
                        'truncate text-sm',
                        thread.unread
                          ? 'font-semibold text-[var(--sea-ink)]'
                          : 'text-[var(--sea-ink-soft)]',
                      )}
                    >
                      {thread.preview}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="flex min-h-[420px] flex-col">
          {activeThread ? (
            <>
              <div className="flex items-center gap-3 border-b border-[var(--line)] px-5 py-4">
                <Avatar>
                  <AvatarFallback>{activeThread.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-[var(--sea-ink)]">
                    {activeThread.name}
                  </p>
                  <p className="text-sm text-[var(--sea-ink-soft)]">Active now</p>
                </div>
              </div>

              <div className="flex-1 space-y-4 px-5 py-6">
                <div className="demo-list-item max-w-xl text-[var(--sea-ink-soft)]">
                  {activeThread.preview}
                </div>
                <div className="demo-list-item ml-auto max-w-xl bg-[rgba(79,184,178,0.1)] text-[var(--sea-ink)]">
                  Thank you — that means a lot. I&apos;ll write more soon.
                </div>
              </div>

              <form
                className="flex gap-2 border-t border-[var(--line)] p-4"
                onSubmit={(event) => {
                  event.preventDefault()
                  setDraft('')
                }}
              >
                <Input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Write a message..."
                  className="flex-1"
                />
                <Button type="submit" disabled={!draft.trim()}>
                  <Send className="h-4 w-4" />
                  Send
                </Button>
              </form>
            </>
          ) : null}
        </section>
      </div>
    </main>
  )
}
