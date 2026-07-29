import { LOCALES } from '../i18n/types'
import { useLocale } from '../i18n/LocaleProvider'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {LOCALES.map((item) => (
        <button
          key={item.code}
          type="button"
          className={`lang-btn ${locale === item.code ? 'is-active' : ''}`}
          onClick={() => setLocale(item.code)}
          aria-pressed={locale === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
