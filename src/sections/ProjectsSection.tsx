import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { Lock, Maximize2 } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { useLightbox } from '../components/Lightbox'
import { asset, projects } from '../data/site'
import type { Project } from '../data/site'

function Card({
  project,
  index,
  total,
  progress,
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const { open } = useLightbox()
  const view = () => open(project.gallery, project.name)

  // Cards further up the stack shrink a little as the next one covers them.
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 px-2 sm:mb-6 md:px-4">
          <div className="flex items-center gap-4 md:gap-6">
            <span
              className="font-black leading-none tracking-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 110px)' }}
            >
              {project.n}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[0.65rem] font-light uppercase tracking-widest text-[#D7E2EA]/50 sm:text-xs">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <p className="hidden max-w-md text-sm font-light leading-relaxed text-[#D7E2EA]/60 lg:block">
                {project.blurb}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            {project.nda && (
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/40 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60 sm:px-6 sm:text-sm">
                <Lock size={15} strokeWidth={1.75} />
                Under NDA
              </span>
            )}
            <button
              onClick={view}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-8"
            >
              <Maximize2 size={15} strokeWidth={2} />
              View
            </button>
          </div>
        </div>

        {/*
          Every image gets a definite height. Sizing against vh as well as vw
          keeps the card inside its 85vh sticky container on any viewport:
          with `h-full` and no resolved parent height, a tall image renders at
          its intrinsic size and the card spills over the next section.
        */}
        <div
          onClick={view}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              view()
            }
          }}
          aria-label={`View ${project.name}`}
          className="group flex cursor-pointer gap-3 md:gap-4"
        >
          <div className="flex w-[40%] flex-col gap-3 md:gap-4">
            <img
              src={asset(project.images.col1a)}
              alt={`${project.name} artwork`}
              loading="lazy"
              decoding="async"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(90px, min(16vw, 15vh), 230px)' }}
            />
            <img
              src={asset(project.images.col1b)}
              alt={`${project.name} artwork`}
              loading="lazy"
              decoding="async"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(124px, min(22vw, 21vh), 340px)' }}
            />
          </div>
          <div className="relative w-[60%]">
            <img
              src={asset(project.images.col2)}
              alt={project.nda ? `${project.name}, redacted for confidentiality` : `${project.name} artwork`}
              loading="lazy"
              decoding="async"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(226px, min(38vw, 37vh), 586px)' }}
            />
            {/* Without this the blur reads as a broken image rather than a choice. */}
            {project.nda && (
              <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center pt-4">
                <span className="flex items-center gap-2 rounded-full bg-[#0C0C0C]/70 px-5 py-2.5 text-[0.6rem] font-medium uppercase tracking-[0.25em] text-[#D7E2EA] backdrop-blur-sm sm:text-xs">
                  <Lock size={13} strokeWidth={2} />
                  Confidential
                </span>
              </div>
            )}
            {/* Hover affordance so it reads as openable. */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[40px] bg-[#0C0C0C]/0 opacity-0 transition-all duration-300 group-hover:bg-[#0C0C0C]/40 group-hover:opacity-100 sm:rounded-[50px] md:rounded-[60px]">
              <span className="flex items-center gap-2 rounded-full border border-[#D7E2EA]/50 bg-[#0C0C0C]/60 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] backdrop-blur-sm">
                <Maximize2 size={15} strokeWidth={2} />
                View gallery
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16 hero-heading"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={ref} className="mx-auto max-w-6xl">
        {projects.map((p, i) => (
          <Card key={p.n} project={p} index={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}
