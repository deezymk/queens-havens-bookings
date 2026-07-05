import { useEffect, useState } from 'react'
import logo from '../assets/logo.jpeg'

type NavbarProps = {
  onBookClick: () => void
}

const LINKS = [
  { label: 'Service', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-ink-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Queens Haven crest"
            className="w-10 h-10 rounded-full object-cover ring-1 ring-gold/60"
          />
          <span className="font-display text-lg tracking-wide text-cream group-hover:text-gold-light transition-colors">
            Queens Haven
          </span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.18em] text-muted hover:text-gold-light transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={onBookClick}
            className="px-6 py-2.5 rounded-full bg-gold-foil text-ink text-sm font-semibold uppercase tracking-[0.14em] shadow-[0_0_0_1px_rgba(201,162,75,0.4)] hover:shadow-[0_0_24px_rgba(201,162,75,0.35)] transition-shadow"
          >
            Book Now
          </button>
        </div>

        <button
          className="md:hidden text-cream p-2"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-[1.5px] bg-gold-light transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[1.5px] bg-gold-light transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-[1.5px] bg-gold-light transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-ink border-t border-ink-line px-6 py-6 flex flex-col gap-5 animate-fadeUp">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-sm uppercase tracking-[0.18em] text-muted hover:text-gold-light transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              handleLinkClick()
              onBookClick()
            }}
            className="mt-2 px-6 py-3 rounded-full bg-gold-foil text-ink text-sm font-semibold uppercase tracking-[0.14em]"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  )
}
