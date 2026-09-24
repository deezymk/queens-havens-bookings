import { Link } from 'react-router-dom'
import CrownMark from '../CrownMark'

export default function TermsOfService() {
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
          <h1 className="mt-5 font-display text-4xl sm:text-5xl text-cream">Terms of Service</h1>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold-dim">
            Queens Haven — Last updated {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="mt-10 space-y-8 text-muted text-sm sm:text-base leading-relaxed">
          <p>
            By booking an appointment through this website, you agree to the terms below.
            Queens Haven is a nail and lash studio located in Dawhenya, Tema 25.
          </p>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Booking &amp; Deposit</h2>
            <p>
              Every booking requires a fixed ₵50 deposit, paid at the time of booking via card
              or Mobile Money through Paystack. This deposit is non-refundable and goes toward
              the total cost of your service — see our{' '}
              <Link to="/refund-policy" className="text-gold-light underline">
                Refund Policy
              </Link>{' '}
              for details. The remaining balance is settled on the day of your appointment via
              Mobile Money, bank transfer, or cash.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Cancellations &amp; Rescheduling</h2>
            <p>
              Please give at least 48 hours' notice to cancel or reschedule. Cancellations made
              with less than 48 hours' notice, and no-shows, are charged 50% of the service
              price.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Lateness</h2>
            <p>
              Please arrive on time. Arrivals more than 15 minutes late may need to be
              shortened or rescheduled to avoid affecting other clients' appointments.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Walk-Ins</h2>
            <p>
              Walk-ins are welcome but must be arranged in advance by phone, including sending
              through an inspo picture, before a time slot is given.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Lash Refills</h2>
            <p>
              Refills are only available for lash sets originally done at Queens Haven. Lash
              work from another artist will require a full removal and new set.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Service Results</h2>
            <p>
              Nail and lash designs are styled around your inspo picture and consultation on
              the day, but exact replication of a reference image cannot be guaranteed — every
              set is adapted to your natural nails, lashes, and eye shape.
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