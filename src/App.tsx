import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsOfService from './components/pages/TermsOfService'
import RefundPolicy from './components/pages/RefundPolicy'

function HomePage({ onBookClick }: { onBookClick: (service?: string) => void }) {
  return (
    <main>
      <Hero onBookClick={() => onBookClick()} />
      <Services onBookClick={onBookClick} />
      <Work />
      <About />
      <FAQ />
    </main>
  )
}

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined)

  const openBooking = (service?: string) => {
    setPreselectedService(service)
    setIsBookingOpen(true)
  }

  const closeBooking = () => setIsBookingOpen(false)

  return (
    <div className="min-h-screen">
      <Navbar onBookClick={() => openBooking()} />
      <Routes>
        <Route path="/" element={<HomePage onBookClick={openBooking} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        initialService={preselectedService}
      />
    </div>
  )
}