import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Footer from '../components/Footer'
import Header from '../components/Header'
import { AuthProvider } from '../hooks/useAuth'

import { Button } from '@/components/ui/button'

import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

const queryClient = new QueryClient()

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'SeniorShare — Share your stories, connect with community',
      },
      {
        name: 'description',
        content:
          'A welcoming platform for seniors to share wisdom, connect with community, and stay close to family.',
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
})

function NotFoundPage() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell demo-center rounded-[2rem] px-6 py-16 text-center sm:px-10">
        <p className="island-kicker mb-3">Page not found</p>
        <h1 className="display-title mb-4 text-4xl font-bold text-[var(--sea-ink)]">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mb-8 max-w-md text-base text-[var(--sea-ink-soft)]">
          The link may be outdated, or the page may have moved.
        </p>
        <Button asChild size="lg">
          <Link to="/">Return home</Link>
        </Button>
      </section>
    </main>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Header />
            {children}
            <Footer />
          </AuthProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  )
}
