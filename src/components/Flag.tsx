/**
 * Flat SVG flags. Flag emoji (🇧🇷 …) do not render on Windows, so the About
 * strip draws them as SVG instead. Simplified but recognisable.
 */
import type { ReactElement } from 'react'

type Code = 'BR' | 'TR' | 'AE' | 'EG' | 'US'

const flags: Record<Code, ReactElement> = {
  BR: (
    <>
      <rect width="60" height="40" fill="#009B3A" />
      <polygon points="30,5 55,20 30,35 5,20" fill="#FEDF00" />
      <circle cx="30" cy="20" r="8" fill="#002776" />
    </>
  ),
  TR: (
    <>
      <rect width="60" height="40" fill="#E30A17" />
      <circle cx="26" cy="20" r="9" fill="#fff" />
      <circle cx="29.5" cy="20" r="7.2" fill="#E30A17" />
      <path
        d="M38 20 l4.2 1.4 -2.6 3.6 0 -4.4 -2.6 3.6 z"
        fill="#fff"
        transform="rotate(20 39 20)"
      />
      <circle cx="39" cy="20" r="2.6" fill="#fff" />
    </>
  ),
  AE: (
    <>
      <rect width="60" height="40" fill="#fff" />
      <rect width="60" height="13.34" fill="#00732F" />
      <rect y="26.66" width="60" height="13.34" fill="#000" />
      <rect width="16" height="40" fill="#FF0000" />
    </>
  ),
  EG: (
    <>
      <rect width="60" height="13.34" fill="#CE1126" />
      <rect y="13.34" width="60" height="13.32" fill="#fff" />
      <rect y="26.66" width="60" height="13.34" fill="#000" />
      <circle cx="30" cy="20" r="4" fill="#C09300" />
    </>
  ),
  US: (
    <>
      <rect width="60" height="40" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 40) / 13} width="60" height={40 / 13} fill="#B22234" />
      ))}
      <rect width="26" height={(40 / 13) * 7} fill="#3C3B6E" />
      {[...Array(6)].map((_, c) =>
        [...Array(2)].map((_, r) => (
          <circle key={`${c}-${r}`} cx={3 + c * 4} cy={4 + r * 6} r="1.1" fill="#fff" />
        )),
      )}
    </>
  ),
}

export default function Flag({ code, className = '' }: { code: Code; className?: string }) {
  return (
    <span
      className={`inline-block overflow-hidden rounded-[3px] ring-1 ring-white/15 ${className}`}
    >
      <svg viewBox="0 0 60 40" className="block h-full w-full" aria-hidden>
        {flags[code]}
      </svg>
    </span>
  )
}
