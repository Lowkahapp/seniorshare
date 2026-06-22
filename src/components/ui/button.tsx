import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-[background-color,border-color,box-shadow,transform,color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lagoon)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border border-[var(--line)] bg-[var(--lagoon-light)] text-[var(--lagoon-deep)] hover:border-[#bfdbfe] hover:bg-[#dbeafe]',
        primary:
          'border border-[var(--lagoon-deep)] bg-[var(--lagoon-deep)] text-white shadow-[0_2px_6px_rgba(29,78,216,0.28)] hover:border-[#1e40af] hover:bg-[#1e40af] hover:shadow-[0_4px_10px_rgba(29,78,216,0.32)] active:translate-y-px',
        secondary:
          'border border-[var(--line)] bg-white text-[var(--sea-ink)] hover:border-[#bfdbfe] hover:bg-[var(--lagoon-light)]',
        ghost:
          'text-[var(--sea-ink-soft)] hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]',
      },
      size: {
        default: 'h-10 px-5 py-2.5',
        sm: 'h-9 px-4',
        lg: 'h-11 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
