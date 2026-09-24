import { Link } from 'react-router-dom'
import CrownMark from '../CrownMark'

export default function RefundPolicy() {
  return (
    <main className="min-h-screen px-6 sm:px-8 py-28">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.2em] text-gold-light border-b border-gold/40 pb-0.5"
        >
          ← Back to Home
        </Link>

        <div className="mt-8 flex flex-col items-start">
          <CrownMark className="w-8 h-7 text-gold" />
          <h1 className="mt-5 font-display text-4xl sm:text-5xl text-cream">Refund Policy</h1>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold-dim">
            Queens Haven — Last updated {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="mt-10 space-y-8 text-muted text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-cream mb-2">Booking Deposit</h2>
            <p>
              Every booking made through this site requires a fixed{' '}
              <span className="text-gold-light font-semibold">₵50 deposit</span>, paid at the
              time of booking. This deposit is{' '}
              <span className="text-gold-light font-semibold">non-refundable</span>, for any
              service and under any circumstances, and is not returned in cash or reversed to
              your payment method. It goes directly toward the total cost of your service on
              the day of your appointment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Cancellations</h2>
            <p>
              If you cancel with at least 48 hours' notice, no further charge applies beyond
              the deposit already paid. Cancellations made with less than 48 hours' notice, or
              no-shows, forfeit the deposit and are additionally charged 50% of the service
              price.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Rescheduling</h2>
            <p>
              If you need to move your appointment, reach out as early as possible. With
              sufficient notice, your existing deposit can typically be carried over to your
              new date rather than requiring a new payment — this is handled on a case-by-case
              basis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Payment Processing</h2>
            <p>
              Deposits are processed securely through Paystack. Any dispute regarding a card or
              Mobile Money charge itself (rather than the booking) should first be raised with
              your bank or Mobile Money provider, and you're welcome to contact us directly as
              well.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Contact</h2>
            <p>
               Questions about these terms can be sent through our TikTok or Instagram, linked
              in the footer of this site. Phone:0507234032  , Email:janetqueenstar944@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}