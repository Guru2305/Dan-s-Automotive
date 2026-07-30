import React, { useState } from 'react';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CarSales from './components/CarSales';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactAndHours from './components/ContactAndHours';
import BookingModal from './components/BookingModal';
import CarInquiryModal from './components/CarInquiryModal';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isCarInquiryOpen, setIsCarInquiryOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleOpenCarInquiry = (car = null) => {
    setSelectedCar(car);
    setIsCarInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDEDEA] selection:bg-[#C21F2E] selection:text-white font-sans antialiased relative">
      
      {/* SVG Noise Grain Overlay */}
      <GrainOverlay />

      {/* Sticky Header */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenCarInquiry={() => handleOpenCarInquiry(null)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenCarInquiry={() => handleOpenCarInquiry(null)}
        />

        <About />

        <Services 
          onSelectService={(serviceName) => handleOpenBooking(serviceName)} 
        />

        <CarSales 
          onOpenCarInquiry={(car) => handleOpenCarInquiry(car)}
        />

        <WhyChooseUs />

        <Testimonials />

        <ContactAndHours 
          onOpenBooking={() => handleOpenBooking()} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        initialService={selectedService} 
      />

      <CarInquiryModal 
        isOpen={isCarInquiryOpen} 
        onClose={() => setIsCarInquiryOpen(false)} 
        car={selectedCar} 
      />

    </div>
  );
}
