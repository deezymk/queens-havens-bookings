import heroNails from '../assets/hero-nails.jpeg'
import CrownMark from './CrownMark'

type HeroProps = {
  onBookClick: () => void
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-20">
      {/* ambient glow accents */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[22rem] h-[22rem] rounded-full bg-wine/20 blur-[110px]" />

      <div className="max-w-6xl mx-auto w-full px-6 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center relative z-10">
        <div className="animate-fadeUp">
          <div className="flex items-center gap-3 mb-6">
            <CrownMark className="w-6 h-5 text-gold" />
            <span className="uppercase tracking-[0.3em] text-xs font-semibold text-gold-light">
              Dawhenya · Tema 25
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-cream text-balance">
            Boldly <span className="italic text-gold-light">Beautiful,</span>
           
          </h1>

          <p className="mt-7 max-w-md text-muted text-base sm:text-lg leading-relaxed">
            One-on-one nail and lash sessions, built around your vibe — from
            glossy gel to full glam sets. No rushing, no shortcuts.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <button
              onClick={onBookClick}
              className="px-8 py-4 rounded-full bg-gold-foil text-ink text-sm font-semibold uppercase tracking-[0.16em] hover:shadow-[0_0_28px_rgba(201,162,75,0.4)] transition-shadow"
            >
              Book Your Slot
            </button>
            <a
              href="#work"
              className="text-sm uppercase tracking-[0.16em] text-cream border-b border-gold/50 pb-1 hover:border-gold transition-colors"
            >
              See Recent Work
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 text-muted text-xs uppercase tracking-[0.2em]">
            <span>Gel · Acrylic · Lash · Pedicure</span>
          </div>
        </div>

        <div className="relative animate-fadeUp [animation-delay:150ms]">
          <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-gold/30 shadow-2xl aspect-[4/5]">
            <img
              src={heroNails}
              alt="Fresh Queens Haven set close-up"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-ink border border-gold/40 flex items-center justify-center shadow-xl hidden sm:flex animate-drift">
            <CrownMark className="w-8 h-7 text-gold" />
          </div>
        </div>
      </div>
    </section>
  )
}
