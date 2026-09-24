import { Link } from 'react-router-dom'
import CrownMark from '../CrownMark'

export default function PrivacyPolicy() {
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
          <h1 className="mt-5 font-display text-4xl sm:text-5xl text-cream">Privacy Policy</h1>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gold-dim">
            Queens Haven — Last updated {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="mt-10 space-y-8 text-muted text-sm sm:text-base leading-relaxed">
          <p>
            This policy explains what information Queens Haven collects when you book an
            appointment through this website, and how it's used.
          </p>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Information We Collect</h2>
            <p>When you make a booking, we collect:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5">
              <li>Your name and mobile number</li>
              <li>Your email address, if you choose to provide one</li>
              <li>The service, date and time you request</li>
              <li>An inspiration photo, if you choose to upload one</li>
              <li>
                Your Mobile Money number or bank details, if you select those as your payment
                method for the remaining balance
              </li>
              <li>Basic payment confirmation details from Paystack for your booking deposit</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">How We Use It</h2>
            <p>
              Your information is used only to manage your booking — confirming your
              appointment, contacting you about it, matching your balance payment to your
              booking, and understanding your desired look from any inspo photo you share. We
              do not sell or rent your information to anyone.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Payments</h2>
            <p>
              Your ₵50 booking deposit is processed securely by{' '}
              <a
                href="https://paystack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light underline"
              >
                Paystack
              </a>
              . Queens Haven never sees or stores your card number, Mobile Money PIN, or other
              sensitive payment credentials — that information is handled entirely by Paystack
              in line with their own security standards.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Where Your Data Is Stored</h2>
            <p>
              Booking details and any inspo photo are stored securely using Supabase, our
              database and file storage provider. Booking notifications are sent to Queens
              Haven by email via Resend. Both providers act only as processors of this data on
              our behalf.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-2">Your Rights</h2>
            <p>
              You can ask us to tell you what information we hold about you, or to delete it,
              at any time — just reach out via TikTok or Instagram (linked in the footer) with
              your request.
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