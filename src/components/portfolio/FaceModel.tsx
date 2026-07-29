import { lazy, Suspense } from 'react'
import { ClientOnly } from '@tanstack/react-router'
import { useLocale } from '../../i18n/LocaleProvider'

const FaceModelCanvas = lazy(() => import('./FaceModelCanvas'))

function FaceFallback() {
  return (
    <div className="face-model-fallback" aria-hidden="true">
      <img
        src="/images/portfolio.png"
        alt=""
        className="face-model-fallback-img"
      />
    </div>
  )
}

export default function FaceModel() {
  const { t } = useLocale()

  return (
    <div className="face-model-shell mx-auto shrink-0 lg:mx-0">
      <div
        className="face-model-frame"
        role="img"
        aria-label={t.hero.dragToRotate}
      >
        <ClientOnly fallback={<FaceFallback />}>
          <Suspense fallback={<FaceFallback />}>
            <FaceModelCanvas />
          </Suspense>
        </ClientOnly>
        <p className="face-model-hint">{t.hero.dragToRotate}</p>
      </div>
    </div>
  )
}
