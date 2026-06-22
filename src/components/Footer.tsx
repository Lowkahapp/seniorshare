import { Link } from '@tanstack/react-router'

import { footerResources, footerSupport } from '@/data/senoshareContent'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer mt-20 px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
      <div className="page-wrap">
        <div className="mb-8 grid gap-8 sm:grid-cols-3">
          <div>
            <p className="island-kicker mb-2">SenoShare</p>
            <p className="m-0 text-sm leading-relaxed">
              Secure home sharing for active older adults.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-[var(--sea-ink)]">
              Resources
            </p>
            <ul className="m-0 list-none space-y-2 p-0 text-sm">
              {footerResources.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="no-underline hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-[var(--sea-ink)]">
              Support
            </p>
            <ul className="m-0 list-none space-y-2 p-0 text-sm">
              {footerSupport.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="no-underline hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--line)] pt-8 text-center sm:flex-row sm:text-left">
          <p className="m-0 text-sm">
            &copy; {year} SenoShare. Built with care for older adults.
          </p>
        </div>
      </div>
    </footer>
  )
}
