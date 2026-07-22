import { useState } from 'react'
import { asset } from '../data/site'

/**
 * Hero portrait.
 *
 * Serves /public/portrait.webp with /public/portrait.png as the fallback.
 * If neither file is present, a typographic monogram stands in so the hero
 * never renders a broken image.
 */
export default function Portrait({ className = '' }: { className?: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`relative flex aspect-[4/5] items-center justify-center ${className}`}>
        <div
          aria-hidden
          className="absolute inset-x-[18%] bottom-[14%] top-[14%] rounded-full blur-3xl"
          style={{ background: 'rgba(118, 33, 176, 0.30)' }}
        />
        <div className="relative flex flex-col items-center gap-3">
          <span
            className="hero-heading select-none font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
          >
            LF
          </span>
          <span className="text-[0.6rem] font-light uppercase tracking-[0.3em] text-[#D7E2EA]/35">
            Add portrait.png
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* Soft halo so the cut-out figure does not float on flat black. */}
      <div
        aria-hidden
        className="absolute inset-x-[8%] bottom-[6%] top-[10%] rounded-full blur-3xl"
        style={{ background: 'rgba(126, 34, 206, 0.34)' }}
      />
      <picture>
        <source srcSet={asset('portrait.webp')} type="image/webp" />
        <img
          src={asset('portrait.png')}
          alt="Leonardo Franco"
          onError={() => setFailed(true)}
          className="relative h-auto w-full select-none object-contain"
          draggable={false}
          style={{
            filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.55))',
            // Dissolve the flat bottom edge of the cut-out into the background
            // instead of a hard horizontal line.
            WebkitMaskImage:
              'linear-gradient(to bottom, #000 76%, rgba(0,0,0,0.5) 90%, transparent 100%)',
            maskImage:
              'linear-gradient(to bottom, #000 76%, rgba(0,0,0,0.5) 90%, transparent 100%)',
          }}
        />
      </picture>
    </div>
  )
}
