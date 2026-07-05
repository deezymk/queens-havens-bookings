import CrownMark from './CrownMark'

const SOCIALS = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@queens_haven1?_r=1&_t=ZS-97mo8Unmddf',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M16.6 5.82c-1.02-.88-1.6-2.16-1.6-3.55h-3.13v13.4c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 0 1 0-5.8c.28 0 .55.04.8.11V9.75a6.03 6.03 0 0 0-.8-.05 6.03 6.03 0 1 0 6.03 6.03V8.83a8.2 8.2 0 0 0 4.7 1.48V7.19a4.85 4.85 0 0 1-3.1-1.37Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bhabbie_nailtech?igsh=NHl3azZreHloejhq',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-line px-6 sm:px-8 py-16">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-12 items-start">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <CrownMark className="w-6 h-5 text-gold" />
            <span className="font-display text-2xl tracking-wide text-cream">Queens Haven</span>
          </div>
          <span className="font-display italic text-gold-light">Boldly Beautiful</span>
        </div>

        <div className="flex flex-col items-start sm:items-center gap-2 sm:text-center">
          <span className="uppercase tracking-[0.2em] text-xs text-gold-dim">Working Hours</span>
          <p className="text-muted text-sm">Mon – Sat · 9am – 7pm</p>
          <p className="text-muted text-sm">Sun · Closed</p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-4">
          <span className="uppercase tracking-[0.2em] text-xs text-gold-dim">Follow Along</span>
          <div className="flex items-center gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold-light hover:bg-gold/10 hover:border-gold/60 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-ink-line/60 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-xs text-muted/70">
          © {new Date().getFullYear()} Queens Haven. Dawhenya, Tema 25.
        </p>
        <p className="text-xs text-muted/70">Boldly Beautiful, one appointment at a time.</p>
      </div>
    </footer>
  )
}
