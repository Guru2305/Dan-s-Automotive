import React, { useState } from 'react';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactAndHours from './components/ContactAndHours';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDEA] selection:bg-[#C21F2E] selection:text-white font-sans antialiased relative">
      
      {/* SVG Noise Grain Overlay */}
      <GrainOverlay />

      {/* Sleek Sticky Header */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
        />

        <About />

        <Services 
          onSelectService={(serviceName) => handleOpenBooking(serviceName)} 
        />

        <WhyChooseUs />

        <Testimonials />

        <ContactAndHours 
          onOpenBooking={() => handleOpenBooking()} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Service Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialService={selectedService} 
      />

    </div>
  );
}
