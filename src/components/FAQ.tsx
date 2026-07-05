import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { FAQ_ITEMS } from '../data/faq'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section id="faq" className="relative py-28 px-6 sm:px-8 bg-ink-soft/40">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="Good to Know" title="Frequently Asked" />

        <div className="mt-14 flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.question}
                className="rounded-xl border border-ink-line bg-ink/40 overflow-hidden animate-fadeUp"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg sm:text-xl text-cream text-balance">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold-light transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-muted text-sm sm:text-base leading-relaxed">
                      {item.answer.length === 1 ? (
                        <p>{item.answer[0]}</p>
                      ) : (
                        <ul className="list-disc pl-5 space-y-1.5">
                          {item.answer.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
