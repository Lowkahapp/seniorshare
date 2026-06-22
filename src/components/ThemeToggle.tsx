import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'

import { cn } from '@/lib/utils'

type ThemeMode = 'light' | 'dark' | 'auto'

function getInitialMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'auto'
  }

  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark' || stored === 'auto') {
    return stored
  }

  return 'auto'
}

function applyThemeMode(mode: ThemeMode) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const resolved = mode === 'auto' ? (prefersDark ? 'dark' : 'light') : mode

  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(resolved)

  if (mode === 'auto') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', mode)
  }

  document.documentElement.style.colorScheme = resolved
}

const modeLabels: Record<ThemeMode, string> = {
  auto: 'Theme: match system. Click to switch to light mode.',
  light: 'Theme: light mode. Click to switch to dark mode.',
  dark: 'Theme: dark mode. Click to switch to system mode.',
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('auto')

  useEffect(() => {
    const initialMode = getInitialMode()
    setMode(initialMode)
    applyThemeMode(initialMode)
  }, [])

  useEffect(() => {
    if (mode !== 'auto') {
      return
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyThemeMode('auto')

    media.addEventListener('change', onChange)
    return () => {
      media.removeEventListener('change', onChange)
    }
  }, [mode])

  function toggleMode() {
    const nextMode: ThemeMode =
      mode === 'light' ? 'dark' : mode === 'dark' ? 'auto' : 'light'
    setMode(nextMode)
    applyThemeMode(nextMode)
    window.localStorage.setItem('theme', nextMode)
  }

  const Icon = mode === 'light' ? Sun : mode === 'dark' ? Moon : Monitor

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={modeLabels[mode]}
      title={modeLabels[mode]}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--chip-line)]',
        'bg-[var(--chip-bg)] text-[var(--sea-ink-soft)] transition-colors',
        'hover:border-[var(--lagoon)] hover:bg-[var(--lagoon-light)] hover:text-[var(--lagoon-deep)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lagoon)] focus-visible:ring-offset-2',
      )}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  )
}
