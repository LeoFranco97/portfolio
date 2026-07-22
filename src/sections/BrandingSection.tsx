import { Maximize2 } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { useLightbox } from '../components/Lightbox'
import { asset, brands } from '../data/site'
import type { Brand } from '../data/site'

function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  const { open } = useLightbox()
  const view = () => open([brand.hero, ...brand.apps], brand.name)
  return (
    <FadeIn delay={index * 0.08} y={40}>
      <article
        onClick={view}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            view()
          }
        }}
        aria-label={`View ${brand.name} identity`}
        className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.02] transition-colors duration-500 hover:border-[#D7E2EA]/25"
      >
        {/* Brand-coloured wash that lifts in on hover. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 80px -24px ${brand.accent}` }}
        />

        {/* Identity hero. */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={asset(brand.hero)}
            alt={`${brand.name} brand identity`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-[#0C0C0C]/0 opacity-0 transition-all duration-300 group-hover:bg-[#0C0C0C]/40 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full border border-[#D7E2EA]/50 bg-[#0C0C0C]/60 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-widest text-[#D7E2EA] backdrop-blur-sm">
              <Maximize2 size={14} strokeWidth={2} />
              View
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 px-5 pt-5 sm:px-6">
          <div>
            <h3 className="text-lg font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-xl">
              {brand.name}
            </h3>
            <p className="mt-1 text-[0.7rem] font-light uppercase tracking-[0.2em] text-[#D7E2EA]/45 sm:text-xs">
              {brand.sector}
            </p>
          </div>
          <span
            aria-hidden
            className="h-7 w-7 shrink-0 rounded-full ring-1 ring-inset ring-white/25 sm:h-8 sm:w-8"
            style={{ background: brand.accent }}
          />
        </div>

        {/* Applications. */}
        <div className="mt-4 grid grid-cols-2 gap-2.5 px-3 pb-3 sm:gap-3 sm:px-4 sm:pb-4">
          {brand.apps.map((a, i) => (
            <div key={i} className="aspect-[3/2] overflow-hidden rounded-xl bg-white/[0.02]">
              <img
                src={asset(a)}
                alt={`${brand.name} application`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </article>
    </FadeIn>
  )
}

export default function BrandingSection() {
  return (
    <section id="branding" className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0} y={24}>
          <p className="mb-4 text-center text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[#D7E2EA]/50 sm:mb-6 sm:text-sm">
            Selected identities · Logo &amp; brand systems
          </p>
        </FadeIn>

        <FadeIn delay={0.05} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.75rem, 11vw, 150px)' }}
          >
            Brand Identity
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={24}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-light leading-relaxed text-[#D7E2EA]/70 sm:mt-8 sm:text-base">
            Complete visual identities built from the mark up: logo systems, colour,
            typography and the applications that carry each brand into the real world.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-7 lg:gap-8">
          {brands.map((b, i) => (
            <BrandCard key={b.name} brand={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
