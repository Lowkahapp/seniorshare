import { Link } from '@tanstack/react-router'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer mt-20 px-4 pb-14 pt-10 text-[var(--sea-ink-soft)]">
      <div className="page-wrap">
        <div className="mb-8 grid gap-8 sm:grid-cols-3">
          <div>
            <p className="island-kicker mb-2">SeniorShare</p>
            <p className="m-0 text-sm leading-relaxed">
              Connecting generations through shared stories, community, and
              meaningful conversation.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-[var(--sea-ink)]">
              Explore
            </p>
            <ul className="m-0 list-none space-y-2 p-0 text-sm">
              <li>
                <Link to="/stories" className="no-underline hover:underline">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/community" className="no-underline hover:underline">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/messages" className="no-underline hover:underline">
                  Messages
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-[var(--sea-ink)]">
              Account
            </p>
            <ul className="m-0 list-none space-y-2 p-0 text-sm">
              <li>
                <Link to="/auth/sign-up" className="no-underline hover:underline">
                  Create account
                </Link>
              </li>
              <li>
                <Link to="/auth/sign-in" className="no-underline hover:underline">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="/about" className="no-underline hover:underline">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--line)] pt-8 text-center sm:flex-row sm:text-left">
          <p className="m-0 text-sm">
            &copy; {year} SeniorShare. All rights reserved.
          </p>
          <p className="island-kicker m-0">Built with care for seniors</p>
        </div>
      </div>
    </footer>
  )
}
