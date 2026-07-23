import { FileText } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { useLightbox } from '../components/Lightbox'
import { asset, presentations } from '../data/site'
import type { Presentation } from '../data/site'

function DeckCard({ deck, index }: { deck: Presentation; index: number }) {
  const { open } = useLightbox()
  const view = () => open(deck.gallery, deck.name)
  const pageCount = deck.gallery.length > 1 ? `${deck.gallery.length} pages` : 'Full deck'
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
        aria-label={`Open ${deck.name} presentation`}
        className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.02] transition-colors duration-500 hover:border-[#D7E2EA]/25"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 80px -24px ${deck.accent}` }}
        />

        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={asset(deck.cover)}
            alt={`${deck.name} presentation cover`}
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
              deck.coverTop ? 'object-top' : 'object-center'
            }`}
          />
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-[#0C0C0C]/0 opacity-0 transition-all duration-300 group-hover:bg-[#0C0C0C]/45 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-full border border-[#D7E2EA]/50 bg-[#0C0C0C]/60 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-widest text-[#D7E2EA] backdrop-blur-sm">
              <FileText size={14} strokeWidth={2} />
              Open presentation
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
          <div>
            <h3 className="text-base font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-lg">
              {deck.name}
            </h3>
            <p className="mt-1 text-[0.7rem] font-light uppercase tracking-[0.2em] text-[#D7E2EA]/45 sm:text-xs">
              {deck.kind}
            </p>
          </div>
          <span className="shrink-0 rounded-full border border-[#D7E2EA]/15 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-widest text-[#D7E2EA]/50">
            {pageCount}
          </span>
        </div>
      </article>
    </FadeIn>
  )
}

export default function PresentationsSection() {
  return (
    <section
      id="presentations"
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0} y={24}>
          <p className="mb-4 text-center text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[#D7E2EA]/50 sm:mb-6 sm:text-sm">
            Decks · Proposals · Portfolios
          </p>
        </FadeIn>

        <FadeIn delay={0.05} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
          >
            Presentations
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={24}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-light leading-relaxed text-[#D7E2EA]/70 sm:mt-8 sm:text-base">
            Full proposal and company decks. Click any one to read the complete
            presentation, page by page.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-7 lg:gap-8">
          {presentations.map((d, i) => (
            <DeckCard key={d.name} deck={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
