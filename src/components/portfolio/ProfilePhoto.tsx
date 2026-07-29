import { motion } from 'framer-motion'
import { useState } from 'react'
import { portfolio } from '../../lib/portfolio'

export default function ProfilePhoto() {
  const { profile, personal } = portfolio
  const [hasError, setHasError] = useState(false)

  const initials = personal.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <motion.div
      className="profile-photo-shell mx-auto shrink-0 lg:mx-0"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="profile-photo-frame">
        {!hasError ? (
          <img
            src={profile.image}
            alt={profile.alt}
            className="profile-photo-image"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="profile-photo-fallback" aria-label={profile.alt}>
            {initials}
          </div>
        )}
      </div>
      {hasError && (
        <p className="profile-photo-caption">
          Add your photo at <code>{profile.image.replace(/^\//, '')}</code>
        </p>
      )}
    </motion.div>
  )
}
