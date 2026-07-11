import { useEffect, useRef, useState, type FormEvent } from 'react'
import CrownMark from './CrownMark'
import { supabase, INSPO_BUCKET } from '../lib/supabase'

const SERVICES = [
  'Gel Polish (Stick-on)',
  'Acrylic Nails',
  'Acrylic Toes',
  'Lash Extensions',
  'Pedicure',
]

const PAYMENT_METHODS = [
  { value: 'momo', label: 'Mobile Money (MTN / Telecel / AirtelTigo)' },
  { value: 'bank', label: 'Bank Transfer' },
  { value: 'cash', label: 'Cash on the Day' },
]


const DEPOSIT_AMOUNT_PESEWAS = 5000
const DEPOSIT_AMOUNT_LABEL = 'GH₵50'

type BookingModalProps = {
  isOpen: boolean
  onClose: () => void
  initialService?: string
}

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  paymentMethod: string
  momoNumber: string
  bankName: string
  accountNumber: string
  notes: string
}

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  paymentMethod: '',
  momoNumber: '',
  bankName: '',
  accountNumber: '',
  notes: '',
}

export default function BookingModal({ isOpen, onClose, initialService }: BookingModalProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [inspoPreview, setInspoPreview] = useState<string | null>(null)
  const [inspoFile, setInspoFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({ ...prev, service: initialService ?? prev.service }))
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, initialService])

  if (!isOpen) return null

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleInspoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setInspoFile(file)
    const reader = new FileReader()
    reader.onload = () => setInspoPreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  const removeInspo = () => {
    setInspoFile(null)
    setInspoPreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const finalizeBooking = async (depositReference: string) => {
    let inspoUrl: string | null = null

    if (inspoFile) {
      const fileExt = inspoFile.name.split('.').pop()
      const filePath = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from(INSPO_BUCKET)
        .upload(filePath, inspoFile)

      if (uploadError) throw uploadError

      const { data: publicUrlData } = supabase.storage
        .from(INSPO_BUCKET)
        .getPublicUrl(filePath)

      inspoUrl = publicUrlData.publicUrl
    }

    const bookingRecord = {
      name: form.name,
      email: form.email || null,
      phone: form.phone,
      service: form.service,
      preferred_date: form.date,
      preferred_time: form.time,
      payment_method: form.paymentMethod,
      momo_number: form.paymentMethod === 'momo' ? form.momoNumber : null,
      bank_name: form.paymentMethod === 'bank' ? form.bankName : null,
      account_number: form.paymentMethod === 'bank' ? form.accountNumber : null,
      notes: form.notes || null,
      inspo_url: inspoUrl,
      deposit_paid: true,
      deposit_reference: depositReference,
    }

    const { error: insertError } = await supabase.from('bookings').insert(bookingRecord)

    if (insertError) throw insertError

    
    supabase.functions
      .invoke('swift-action', { body: { record: bookingRecord } })
      .catch((err) => console.error('notify-booking call failed:', err))

    setSubmitted(true)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)
    setSubmitting(true)

    
    const paystackEmail =
      form.email || `${form.phone.replace(/\D/g, '') || 'guest'}@guest.queenshaven.app`

    const reference = `QH-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

    const paystackKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY

    if (!paystackKey) {
      console.error('VITE_PAYSTACK_PUBLIC_KEY is not set.')
      setErrorMsg('Payments are currently unavailable. Please try again shortly.')
      setSubmitting(false)
      return
    }

    const handler = PaystackPop.setup({
      key: paystackKey,
      email: paystackEmail,
      amount: DEPOSIT_AMOUNT_PESEWAS,
      currency: 'GHS',
      ref: reference,
      metadata: {
        custom_fields: [
          { display_name: 'Client Name', variable_name: 'client_name', value: form.name },
          { display_name: 'Service', variable_name: 'service', value: form.service },
        ],
      },
      callback: (response) => {
        finalizeBooking(response.reference)
          .catch((err) => {
            console.error('Booking submission failed after payment:', err)
            setErrorMsg(
              'Your deposit went through, but saving your booking failed. Please contact us directly on Instagram/TikTok with your payment reference: ' +
                response.reference,
            )
          })
          .finally(() => setSubmitting(false))
      },
      onClose: () => {
        setSubmitting(false)
      },
    })

    handler.openIframe()
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setErrorMsg(null)
      setForm(EMPTY_FORM)
      removeInspo()
    }, 300)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Booking form"
    >
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-[1.75rem] border border-gold/30 bg-ink-soft shadow-2xl animate-fadeUp">
        <button
          onClick={handleClose}
          aria-label="Close booking form"
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold-light hover:bg-gold/10 transition-colors z-10"
        >
          ×
        </button>

        <div className="px-7 sm:px-9 pt-9 pb-2 flex flex-col items-center text-center">
          <CrownMark className="w-9 h-8 text-gold" />
          <h3 className="mt-4 font-display text-3xl text-cream">
            {submitted ? 'Booking Received' : 'Reserve Your Appointment'}
          </h3>
          {!submitted && (
            <p className="mt-2 text-sm text-muted max-w-sm">
              Fill in your details below. Have an inspo picture? Attach it and
              we'll confirm your price along with your slot.
            </p>
          )}
        </div>

        {submitted ? (
          <div className="px-7 sm:px-9 pb-9 pt-4 flex flex-col items-center text-center gap-6">
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              Thank you, <span className="text-gold-light">{form.name || 'queen'}</span>. Your{' '}
              {DEPOSIT_AMOUNT_LABEL} deposit has been received and your request for{' '}
              <span className="text-cream">{form.service || 'a service'}</span> on{' '}
              <span className="text-cream">{form.date || 'your chosen date'}</span> at{' '}
              <span className="text-cream">{form.time || 'your chosen time'}</span> is booked. We'll
              reach out on <span className="text-gold-light">{form.phone || 'your number'}</span> to
              confirm details and, on the day, settle the rest via{' '}
              {form.paymentMethod === 'bank'
                ? 'bank transfer'
                : form.paymentMethod === 'momo'
                  ? 'Mobile Money'
                  : 'cash'}
              .
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3.5 rounded-full bg-gold-foil text-ink text-sm font-semibold uppercase tracking-[0.16em]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 sm:px-9 pb-9 pt-5 flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" required>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Ama Serwaa"
                  className="input"
                />
              </Field>
              <Field label="Mobile Number" required>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="024 000 0000"
                  className="input"
                />
              </Field>
            </div>

            <Field label="Email Address (optional)">
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="you@email.com"
                className="input"
              />
            </Field>

            <Field label="Service" required>
              <select
                required
                value={form.service}
                onChange={(e) => update('service', e.target.value)}
                className="input"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Preferred Date" required>
                <input
                  required
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  className="input"
                />
              </Field>
              <Field label="Preferred Time" required>
                <input
                  required
                  type="time"
                  value={form.time}
                  onChange={(e) => update('time', e.target.value)}
                  className="input"
                />
              </Field>
            </div>

            <Field label="Inspo Picture (optional)">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleInspoChange}
                className="hidden"
                id="inspo-upload"
              />
              {inspoPreview ? (
                <div className="flex items-center gap-4">
                  <img
                    src={inspoPreview}
                    alt="Inspo preview"
                    className="w-16 h-16 rounded-lg object-cover ring-1 ring-gold/40"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted truncate max-w-[180px]">
                      {inspoFile?.name}
                    </span>
                    <button
                      type="button"
                      onClick={removeInspo}
                      className="text-xs uppercase tracking-wider text-wine-light text-left"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <label
                  htmlFor="inspo-upload"
                  className="flex items-center gap-3 border border-dashed border-gold/40 rounded-xl px-4 py-4 cursor-pointer hover:border-gold/70 transition-colors w-fit"
                >
                  <span className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center text-gold-light text-lg leading-none">
                    +
                  </span>
                  <span className="text-sm text-muted">Add an inspo picture</span>
                </label>
              )}
            </Field>

            <Field label="Remaining Balance — Payment Method" required>
              <div className="flex flex-col gap-2.5">
                {PAYMENT_METHODS.map((method) => (
                  <label
                    key={method.value}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors ${
                      form.paymentMethod === method.value
                        ? 'border-gold bg-gold/10'
                        : 'border-ink-line hover:border-gold/40'
                    }`}
                  >
                    <input
                      required
                      type="radio"
                      name="paymentMethod"
                      value={method.value}
                      checked={form.paymentMethod === method.value}
                      onChange={(e) => update('paymentMethod', e.target.value)}
                      className="accent-[#C9A24B]"
                    />
                    <span className="text-sm text-cream">{method.label}</span>
                  </label>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted">
                This is how you'll settle the rest of the cost on the day. Full
                bank details are shared once your booking is confirmed.
              </p>
            </Field>

            {form.paymentMethod === 'momo' && (
              <Field label="Your Mobile Money Number" required>
                <input
                  required
                  type="tel"
                  value={form.momoNumber}
                  onChange={(e) => update('momoNumber', e.target.value)}
                  placeholder="024 000 0000"
                  className="input"
                />
              </Field>
            )}

            {form.paymentMethod === 'bank' && (
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your Bank Name" required>
                  <input
                    required
                    type="text"
                    value={form.bankName}
                    onChange={(e) => update('bankName', e.target.value)}
                    placeholder="e.g. GCB Bank"
                    className="input"
                  />
                </Field>
                <Field label="Your Account Number" required>
                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    value={form.accountNumber}
                    onChange={(e) => update('accountNumber', e.target.value)}
                    placeholder="0000000000"
                    className="input"
                  />
                </Field>
              </div>
            )}

            <div className="rounded-xl border border-gold/40 bg-gold/10 px-4 py-3.5">
              <p className="text-sm text-cream">
                <span className="font-semibold text-gold-light">{DEPOSIT_AMOUNT_LABEL} booking deposit</span> is
                required now to secure your slot — this is non-refundable and
                goes toward your total cost. You'll pay it next via card or
                Mobile Money.
              </p>
            </div>

            <Field label="Notes (optional)">
              <textarea
                value={form.notes}
                onChange={(e) => update('notes', e.target.value)}
                placeholder="Anything else we should know?"
                rows={3}
                className="input resize-none"
              />
            </Field>

            {errorMsg && (
              <p className="text-sm text-wine-light bg-wine/10 border border-wine/30 rounded-lg px-4 py-3">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full py-4 rounded-full bg-gold-foil text-ink text-sm font-semibold uppercase tracking-[0.16em] hover:shadow-[0_0_28px_rgba(201,162,75,0.35)] transition-shadow disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
            >
              {submitting ? 'Opening secure payment…' : `Pay ${DEPOSIT_AMOUNT_LABEL} Deposit & Book`}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

type FieldProps = {
  label: string
  required?: boolean
  children: React.ReactNode
}

function Field({ label, required, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.14em] text-gold-dim">
        {label} {required && <span className="text-wine-light">*</span>}
      </span>
      {children}
    </label>
  )
}