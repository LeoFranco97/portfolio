type ContactProps = {
  href?: string
  label?: string
  className?: string
}

/** Gradient pill, the primary call to action. */
export function ContactButton({ href = '#contact', label = 'Contact Me', className = '' }: ContactProps) {
  return (
    <a
      href={href}
      className={`inline-block shrink-0 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-105 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #fff',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  )
}

type GhostProps = {
  href?: string
  label?: string
  className?: string
}

/** Outline pill used on the project cards. */
export function LiveProjectButton({
  href = '#',
  label = 'Live Project',
  className = '',
}: GhostProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={`inline-block shrink-0 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      {label}
    </a>
  )
}
