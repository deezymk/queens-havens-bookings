import SectionHeading from './SectionHeading'
import gallery1 from '../assets/gallery-1.jpeg'
import gallery2 from '../assets/gallery-2.jpeg'
import gallery3 from '../assets/gallery-3.jpeg'
import gallery4 from '../assets/gallery-4.jpeg'
import gallery5 from '../assets/gallery-5.jpeg'
import gallery6 from '../assets/gallery-6.jpeg'
import lashEye from '../assets/lash-eye.jpeg'
import lashFace from '../assets/lash-face.jpeg'
import heroNails from '../assets/hero-nails.jpeg'
import showcase from '../assets/showcase.mp4'

type WorkItem = {
  type: 'image' | 'video'
  src: string
  poster?: string
  label: string
  span: string
}

const WORKS: WorkItem[] = [
  { type: 'video', src: showcase, poster: heroNails, label: 'Studio Session', span: 'row-span-2' },
  { type: 'image', src: gallery1, label: 'Pink & Gold Foil', span: '' },
  { type: 'image', src: lashFace, label: 'Full Lash Set', span: '' },
  { type: 'image', src: gallery5, label: 'Classic Red Stiletto', span: '' },
  { type: 'image', src: gallery4, label: 'Leopard Stiletto', span: 'row-span-2' },
  { type: 'image', src: gallery2, label: 'Nude Flame French', span: '' },
  { type: 'image', src: lashEye, label: 'Wispy Extensions', span: '' },
  { type: 'image', src: gallery3, label: 'Soft French Tips', span: '' },
  { type: 'image', src: gallery6, label: 'Blossom Chrome', span: '' },
]

export default function Work() {
  return (
    <section id="work" className="relative py-28 px-6 sm:px-8 bg-ink-soft/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Portfolio" title="Recent Works" />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] gap-4">
          {WORKS.map((work, i) => (
            <div
              key={work.label}
              style={{ animationDelay: `${i * 60}ms` }}
              className={`group relative rounded-xl overflow-hidden ring-1 ring-ink-line animate-fadeUp ${work.span}`}
            >
              {work.type === 'video' ? (
                <video
                  src={work.src}
                  poster={work.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <img
                  src={work.src}
                  alt={work.label}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-cream text-sm font-display italic">{work.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
