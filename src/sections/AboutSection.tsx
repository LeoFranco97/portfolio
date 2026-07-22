import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import { ContactButton } from '../components/Buttons'
import { aboutText, territories } from '../data/site'

/**
 * Soft colour wash in the corners. The original template used stock 3D
 * renders here; those belong to someone else, so this is built in CSS.
 */
function Glow({ className, color }: { className: string; color: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[90px] ${className}`}
      style={{ background: color }}
    />
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      <Glow className="left-[-10%] top-[8%] h-[280px] w-[280px] opacity-40 md:h-[420px] md:w-[420px]" color="#7621B0" />
      <Glow className="right-[-8%] top-[20%] h-[220px] w-[220px] opacity-30 md:h-[340px] md:w-[340px]" color="#B600A8" />
      <Glow className="bottom-[6%] left-[15%] h-[200px] w-[200px] opacity-25 md:h-[300px] md:w-[300px]" color="#BE4C00" />

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={aboutText}
          className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* The differentiator: places the work has actually shipped from. */}
        <FadeIn delay={0.1} y={24} className="w-full">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-10">
            {territories.map((t) => (
              <li key={t.country} className="flex flex-col items-center gap-1 text-center">
                <span className="text-2xl md:text-3xl" aria-hidden>
                  {t.flag}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA] sm:text-sm">
                  {t.country}
                </span>
                <span className="text-[0.65rem] font-light uppercase tracking-wider text-[#D7E2EA]/50 sm:text-xs">
                  {t.note}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      <FadeIn delay={0.15} y={20} className="relative z-10 mt-16 sm:mt-20 md:mt-24">
        <ContactButton />
      </FadeIn>
    </section>
  )
}
