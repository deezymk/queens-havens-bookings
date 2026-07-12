import portrait from '../assets/portrait.jpeg'
import CrownMark from './CrownMark'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
        <div className="relative animate-fadeUp mx-auto lg:mx-0 max-w-sm w-full">
          <div className="rounded-[2rem] overflow-hidden ring-1 ring-gold/30 shadow-2xl aspect-[3/4]">
            <img src={portrait} alt="Founder of Queens Haven" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-ink border border-gold/40 flex items-center justify-center animate-drift">
            <CrownMark className="w-8 h-7 text-gold" />
          </div>
        </div>

        <div className="animate-fadeUp [animation-delay:120ms]">
          <div className="flex items-center gap-3 mb-6">
            <span className="hairline w-8" />
            <span className="uppercase tracking-[0.28em] text-xs font-semibold text-gold-light/90">
              The Artist
            </span>
          </div>

          <blockquote className="font-display text-3xl sm:text-4xl leading-[1.2] text-cream text-balance">
            <span className="text-gold-light italic">Twos years.</span>
            <br />
            One obsession:
            <br />
            <span className="italic">your nails.</span>
          </blockquote>

          <div className="mt-8 space-y-5 text-muted text-base leading-relaxed max-w-xl">
            <p>
              I started Queens Haven because I was tired of cookie-cutter sets.
              Every appointment here is a one-on-one studio session — no
              rushing, no shortcuts.
            </p>
            <p>
              Just sharp technique, premium product, and looks built around
              your vibe.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="hairline w-10" />
            <span className="font-display italic text-gold-light">Boldly Beautiful</span>
          </div>
        </div>
      </div>
    </section>
  )
}
