// lucide dropped its brand icons, so AtSign stands in for the social handle.
import { Mail, MessageCircle, AtSign } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { asset, availability, experience, profile } from '../data/site'

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
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#D7E2EA] transition-opacity hover:opacity-70"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                <span className="text-sm font-light sm:text-base">LinkedIn</span>
              </a>
              <a
                href={profile.behance}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#D7E2EA] transition-opacity hover:opacity-70"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                  <path d="M22 7h-7V5h7v2zm1.73 10c-.44 1.3-2.03 3-5.1 3-3.08 0-5.56-1.73-5.56-5.68 0-3.9 2.32-5.92 5.46-5.92 3.08 0 4.96 1.78 5.37 4.43.08.5.11 1.18.1 2.14h-8.03c.13 3.2 3.48 3.3 4.59 2.03h3.17zm-7.69-4h4.97c-.11-1.55-1.14-2.22-2.48-2.22-1.46 0-2.28.77-2.49 2.22zm-9.57 6.99H0V5.02h6.95c5.48.08 5.58 5.44 2.72 6.9 3.46 1.26 3.58 8.07-3.2 8.07zM3 11h3.58c2.51 0 2.91-3-.31-3H3v3zm3.39 3H3v3.02h3.34c3.05 0 2.87-3.02.05-3.02z" />
                </svg>
                <span className="text-sm font-light sm:text-base">Behance</span>
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
          <div className="mt-16 flex flex-col items-center gap-5 border-t border-[#D7E2EA]/15 pt-10">
            <img
              src={asset('portrait.png')}
              alt={profile.fullName}
              loading="lazy"
              decoding="async"
              className="h-20 w-20 rounded-full object-cover object-top ring-1 ring-[#D7E2EA]/20"
              style={{
                background:
                  'radial-gradient(circle at 50% 35%, #2a2352 0%, #0C0C0C 70%)',
              }}
            />
            <p className="text-center text-xs font-light uppercase tracking-widest text-[#D7E2EA]/40">
              {profile.fullName}, {profile.role}, based in {profile.location}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
