import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { asset } from '../data/site'

type State = { images: string[]; title: string; index: number } | null

type Api = { open: (images: string[], title: string, index?: number) => void }

const LightboxContext = createContext<Api>({ open: () => {} })

/** Call `open(images, title)` to show a set of images in an in-site gallery. */
export const useLightbox = () => useContext(LightboxContext)

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<State>(null)

  const open = useCallback((images: string[], title: string, index = 0) => {
    if (images.length) setState({ images, title, index })
  }, [])
  const close = useCallback(() => setState(null), [])
  const go = useCallback(
    (delta: number) =>
      setState((s) =>
        s ? { ...s, index: (s.index + delta + s.images.length) % s.images.length } : s,
      ),
    [],
  )

  // Lock scroll and wire up keyboard control while open.
  useEffect(() => {
    if (!state) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [state, close, go])

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {state &&
        createPortal(
          <View state={state} close={close} go={go} />,
          document.body,
        )}
    </LightboxContext.Provider>
  )
}

function View({
  state,
  close,
  go,
}: {
  state: NonNullable<State>
  close: () => void
  go: (d: number) => void
}) {
  const many = state.images.length > 1
  // Tall presentations (full brand decks) scroll at readable width instead of
  // shrinking to fit; normal images (deck pages, ad creatives) fit to screen.
  const [tall, setTall] = useState(false)
  useEffect(() => setTall(false), [state.index])
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={state.title}
      onClick={close}
      className="fixed inset-0 z-[100] flex flex-col bg-[#0C0C0C]/95 backdrop-blur-sm"
      style={{ animation: 'lb-fade 0.2s ease-out' }}
    >
      <style>{`@keyframes lb-fade{from{opacity:0}to{opacity:1}}`}</style>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA] sm:text-base">
            {state.title}
          </span>
          {many && (
            <span className="text-xs font-light tracking-wider text-[#D7E2EA]/50">
              {state.index + 1} / {state.images.length}
            </span>
          )}
        </div>
        <button
          onClick={close}
          aria-label="Close"
          className="rounded-full border border-[#D7E2EA]/25 p-2 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
        >
          <X size={18} strokeWidth={1.75} />
        </button>
      </div>

      {/* Stage */}
      <div
        className={`relative flex flex-1 justify-center px-4 pb-6 sm:px-16 ${
          tall ? 'items-start overflow-y-auto overflow-x-hidden' : 'items-center overflow-hidden'
        }`}
      >
        {many && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            aria-label="Previous"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#D7E2EA]/25 bg-[#0C0C0C]/60 p-2.5 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:left-5"
          >
            <ChevronLeft size={22} strokeWidth={1.75} />
          </button>
        )}

        {/* Tall decks sit on a white page so dark presentations (e.g. Vico)
            are clearly framed instead of blending into the dark backdrop. */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            tall
              ? 'mx-auto w-full max-w-[880px] rounded-xl bg-white p-2 shadow-2xl'
              : 'flex max-h-full max-w-full items-center'
          }
        >
          <img
            key={state.index}
            src={asset(state.images[state.index])}
            alt={`${state.title} ${state.index + 1}`}
            onLoad={(e) => {
              const t = e.currentTarget
              setTall(t.naturalHeight / t.naturalWidth > 1.8)
            }}
            className={
              tall
                ? 'h-auto w-full rounded-md'
                : 'max-h-full max-w-full rounded-xl object-contain shadow-2xl'
            }
            style={{ animation: 'lb-fade 0.2s ease-out' }}
          />
        </div>

        {many && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            aria-label="Next"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[#D7E2EA]/25 bg-[#0C0C0C]/60 p-2.5 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:right-5"
          >
            <ChevronRight size={22} strokeWidth={1.75} />
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {many && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex justify-center gap-2 overflow-x-auto px-4 pb-5"
        >
          {state.images.map((src, i) => (
            <button
              key={src}
              onClick={() => go(i - state.index)}
              aria-label={`Image ${i + 1}`}
              className={`h-12 w-16 shrink-0 overflow-hidden rounded-md border transition-opacity sm:h-14 sm:w-20 ${
                i === state.index
                  ? 'border-[#D7E2EA] opacity-100'
                  : 'border-transparent opacity-40 hover:opacity-80'
              }`}
            >
              <img
                src={asset(src)}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
