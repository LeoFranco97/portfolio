import { useEffect, useRef, useState } from 'react'
import { asset, marqueeRowOne, marqueeRowTwo } from '../data/site'

function Row({ images, direction, offset }: { images: string[]; direction: 1 | -1; offset: number }) {
  // Tripled so the strip never runs out of content while translating.
  const tripled = [...images, ...images, ...images]

  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${direction * (offset - 200)}px)`,
        willChange: 'transform',
      }}
    >
      {tripled.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="h-[180px] w-[280px] shrink-0 overflow-hidden rounded-2xl bg-white/5 sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px]"
        >
          <img
            src={asset(src)}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let frame = 0

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY
        setOffset((window.scrollY - top + window.innerHeight) * 0.3)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section
      ref={ref}
      aria-label="Selected work"
      className="flex flex-col gap-3 overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <Row images={marqueeRowOne} direction={1} offset={offset} />
      <Row images={marqueeRowTwo} direction={-1} offset={offset} />
    </section>
  )
}
