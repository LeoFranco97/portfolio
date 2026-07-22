import { BadgeCheck } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { asset, results } from '../data/site'

export default function ResultsSection() {
  return (
    <section id="results" className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0} y={40}>
          <p className="mb-4 text-center text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[#D7E2EA]/50 sm:mb-6 sm:text-sm">
            {results.eyebrow}
          </p>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Results
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={24}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm font-light leading-relaxed text-[#D7E2EA]/70 sm:mt-8 sm:text-base md:text-lg">
            {results.lead}
          </p>
        </FadeIn>

        {/* Headline numbers for skimmers, before the image loads. */}
        <FadeIn delay={0.15} y={24}>
          <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6">
            {results.kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-2xl border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.03] px-3 py-5 text-center sm:px-5 sm:py-6"
              >
                <dt className="mb-1 text-[0.55rem] font-medium uppercase tracking-widest text-[#D7E2EA]/45 sm:text-xs">
                  {k.label}
                </dt>
                <dd
                  className="font-black leading-none text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1.35rem, 4vw, 2.5rem)' }}
                >
                  {k.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        {/* The polished dashboard, the centrepiece. */}
        <FadeIn delay={0.2} y={30}>
          <div className="mt-12 overflow-hidden rounded-[24px] border border-[#D7E2EA]/15 shadow-2xl sm:mt-16 sm:rounded-[32px]">
            <img
              src={asset(results.dashboard)}
              alt={`Paid media performance dashboard, ${results.period}, ${results.channels}`}
              loading="lazy"
              decoding="async"
              className="w-full"
            />
          </div>
        </FadeIn>

        {/* Raw platform exports that authenticate the summary above. */}
        <FadeIn delay={0.1} y={24}>
          <div className="mt-14 flex items-center justify-center gap-2 sm:mt-20">
            <BadgeCheck size={18} strokeWidth={1.75} className="text-[#D7E2EA]/60" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#D7E2EA]/60 sm:text-sm">
              Verified in-platform
            </span>
          </div>
          <p className="mx-auto mt-3 max-w-xl text-center text-xs font-light leading-relaxed text-[#D7E2EA]/40 sm:text-sm">
            Raw exports from Google Ads and Meta Ads Manager. Client and campaign
            names are redacted.
          </p>
        </FadeIn>

        {/* Screenshots are genuinely different shapes; let each card take its
            image's natural height, top-aligned, like exhibits pinned to a board. */}
        <div className="mt-10 grid items-start gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {results.proof.map((p, i) => (
            <FadeIn key={p.src} delay={i * 0.1} y={30}>
              <figure className="flex flex-col overflow-hidden rounded-2xl border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.02]">
                <div className="bg-white/[0.02] p-2">
                  <img
                    src={asset(p.src)}
                    alt={p.caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-lg"
                  />
                </div>
                <figcaption className="mt-auto border-t border-[#D7E2EA]/10 px-4 py-3 text-center text-[0.7rem] font-light uppercase tracking-wider text-[#D7E2EA]/50 sm:text-xs">
                  {p.caption}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
