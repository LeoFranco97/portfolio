// lucide dropped its brand icons, so AtSign stands in for the social handle.
import { Mail, MessageCircle, AtSign } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { availability, experience, profile } from '../data/site'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 pb-24 pt-10 sm:px-8 md:px-10 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s work
          </h2>
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Availability answers the questions an agency asks before hiring remote. */}
          <FadeIn delay={0.1} y={30}>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/50">
              Availability
            </h3>
            <dl className="flex flex-col">
              {availability.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-1 border-t border-[#D7E2EA]/15 py-4 sm:flex-row sm:gap-6"
                >
                  <dt className="w-32 shrink-0 text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/60">
                    {row.label}
                  </dt>
                  <dd className="text-sm font-light leading-relaxed text-[#D7E2EA] sm:text-base">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.2} y={30}>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/50">
              Experience
            </h3>
            <ol className="mb-10 flex flex-col">
              {experience.map((e) => (
                <li key={e.years} className="border-t border-[#D7E2EA]/15 py-4">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <span className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA]">
                      {e.role}
                    </span>
                    <span className="text-xs font-light uppercase tracking-wider text-[#D7E2EA]/50">
                      {e.years}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-light text-[#D7E2EA]/60">
                    {e.company}, {e.place}
                  </p>
                </li>
              ))}
            </ol>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 text-[#D7E2EA] transition-opacity hover:opacity-70"
              >
                <Mail size={18} strokeWidth={1.5} />
                <span className="text-sm font-light sm:text-base">{profile.email}</span>
              </a>
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#D7E2EA] transition-opacity hover:opacity-70"
              >
                <MessageCircle size={18} strokeWidth={1.5} />
                <span className="text-sm font-light sm:text-base">{profile.whatsapp}</span>
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#D7E2EA] transition-opacity hover:opacity-70"
              >
                <AtSign size={18} strokeWidth={1.5} />
                <span className="text-sm font-light sm:text-base">Instagram</span>
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} y={20}>
          <p className="mt-16 border-t border-[#D7E2EA]/15 pt-8 text-center text-xs font-light uppercase tracking-widest text-[#D7E2EA]/40">
            {profile.fullName}, {profile.role}, based in {profile.location}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
