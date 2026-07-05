import CrownMark from './CrownMark'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, align = 'center', light = false }: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'} animate-fadeUp`}>
      <div className={`flex items-center gap-3 ${isCenter ? '' : 'flex-row'}`}>
        <span className={`hairline w-8 ${light ? 'opacity-60' : ''}`} />
        <span className="uppercase tracking-[0.28em] text-xs font-semibold text-gold-light/90">
          {eyebrow}
        </span>
        <span className={`hairline w-8 ${light ? 'opacity-60' : ''}`} />
      </div>
      <h2 className={`mt-5 font-display ${light ? 'text-ink' : 'text-cream'} text-4xl sm:text-5xl leading-[1.05] text-balance`}>
        {title}
      </h2>
      <CrownMark className={`w-8 h-7 mt-5 ${light ? 'text-wine' : 'text-gold'}`} />
    </div>
  )
}
