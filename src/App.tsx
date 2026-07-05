import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

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
      <main>
        <Hero onBookClick={() => openBooking()} />
        <Services onBookClick={openBooking} />
        <Work />
        <About />
        <FAQ />
      </main>
      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        initialService={preselectedService}
      />
    </div>
  )
}
