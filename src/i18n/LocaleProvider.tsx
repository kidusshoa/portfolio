import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { am } from './locales/am'
import { de } from './locales/de'
import { en } from './locales/en'
import { fr } from './locales/fr'
import {
  LOCALE_STORAGE_KEY,
  type Dictionary,
  type Locale,
} from './types'

const dictionaries: Record<Locale, Dictionary> = { en, de, fr, am }

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  if (stored === 'en' || stored === 'de' || stored === 'fr' || stored === 'am')
    return stored
  return 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const next = readStoredLocale()
    setLocaleState(next)
    document.documentElement.lang = next
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
    document.documentElement.lang = next
  }

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale, t: dictionaries[locale] }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}
