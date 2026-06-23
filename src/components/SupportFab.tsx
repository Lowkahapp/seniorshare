import { Link } from '@tanstack/react-router'
import { Headphones } from 'lucide-react'

export function SupportFab() {
  return (
    <Link
      to="/support"
      className="support-fab fixed z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--lagoon-deep)] bg-[var(--lagoon-deep)] text-white no-underline shadow-[0_8px_24px_rgba(29,78,216,0.28)] transition-[transform,box-shadow,background-color] hover:bg-[#1e40af] hover:shadow-[0_12px_28px_rgba(29,78,216,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lagoon)] focus-visible:ring-offset-2"
      aria-label="24/7 member support"
      title="24/7 member support"
    >
      <Headphones className="h-5 w-5" aria-hidden="true" />
    </Link>
  )
}
