import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold', {
  variants: {
    variant: {
      default: 'bg-[var(--chip-bg)] text-[var(--sea-ink-soft)]',
      accent: 'bg-[var(--verified-green-soft)] text-[var(--verified-green)]',
      match: 'bg-[var(--match-orange-soft)] text-[var(--match-orange)]',
      shield: 'gap-1.5 bg-[var(--lagoon-light)] text-[var(--lagoon-deep)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
