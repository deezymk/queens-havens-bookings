import SectionHeading from './SectionHeading'

type Service = {
  name: string
  description: string
  note: string
}

const SERVICES: Service[] = [
  {
    name: 'Gel Polish (Stick-On)',
    description: 'Chip-free, glassy colour on your natural nail — quick, clean and low-fuss.',
    note: 'Priced by shade & finish',
  },
  {
    name: 'Acrylic Nails',
    description: 'Sculpted length and shape, finished with your choice of design, from subtle to statement.',
    note: 'Priced by length & design',
  },
  {
    name: 'Acrylic Toes',
    description: 'The same precision acrylic work, tailored for your toes and sandal season.',
    note: 'Priced by design',
  },
  {
    name: 'Lash Extensions',
    description: 'Full sets isolated lash by lash for a natural-to-dramatic finish that actually lasts.',
    note: 'Approx. 2 hours per set',
  },
  {
    name: 'Pedicure',
    description: 'A proper reset — soak, shape, buff and polish for feet that match your hands.',
    note: 'Add-on polish available',
  },
]

type ServicesProps = {
  onBookClick: (service?: string) => void
}

export default function Services({ onBookClick }: ServicesProps) {
  return (
    <section id="services" className="relative py-28 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="The Menu" title="Services" />

        <p className="mt-8 text-center max-w-xl mx-auto text-muted text-sm sm:text-base">
          Have an inspo picture in mind? Upload it at checkout — final pricing is
          confirmed against your design.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.name}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group relative rounded-2xl border border-ink-line bg-ink-soft/60 p-7 flex flex-col justify-between animate-fadeUp hover:border-gold/50 transition-colors"
            >
              <div>
                <h3 className="font-display text-2xl text-cream text-balance">{service.name}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.14em] text-gold-dim">{service.note}</span>
                <button
                  onClick={() => onBookClick(service.name)}
                  className="text-xs uppercase tracking-[0.14em] text-gold-light border-b border-gold/40 pb-0.5 group-hover:border-gold transition-colors"
                >
                  Book
                </button>
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-dashed border-gold/30 p-7 flex flex-col justify-center items-center text-center gap-4 animate-fadeUp">
            <p className="text-sm text-muted">Not sure what you need?</p>
            <button
              onClick={() => onBookClick()}
              className="px-6 py-3 rounded-full bg-gold-foil text-ink text-sm font-semibold uppercase tracking-[0.14em]"
            >
              Start a Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
