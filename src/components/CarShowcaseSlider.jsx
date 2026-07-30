import React, { useState, useEffect, useRef } from 'react';
import { GripHorizontal, Search, Globe, Clock, Share2, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, Wrench } from 'lucide-react';

export default function CarShowcaseSlider({ onOpenBooking }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const slides = [
    {
      id: 'slide-01',
      number: '01',
      focus: 'OVERVIEW',
      title: 'FERRARI ENZO V12',
      year: '2004 SPEC',
      subtitle: 'Legendary Naturally Aspirated Hypercar',
      image: '/images/slider_car_overview.png',
      description: 'Hand-crafted carbon fibre monocoque with F1-derived aerodynamic downforce and raw atmospheric V12 sound.',
      type: 'overview',
      badge: 'FEATURED V12 SHOWCASE',
    },
    {
      id: 'slide-02',
      number: '02',
      focus: 'DESIGN & COCKPIT',
      title: 'CARBON COCKPIT & AERODYNAMICS',
      year: 'F1 INTERIOR SPEC',
      subtitle: 'Minimalist Driver-Centric Ergonomics',
      image: '/images/garage_workshop.png',
      description: 'Stripped-back carbon fibre racing bucket seats, LED shift indicator steering wheel, and active rear spoiler.',
      type: 'design',
      badge: 'AERODYNAMIC SPEC',
    },
    {
      id: 'slide-03',
      number: '03',
      focus: 'V12 ENGINE SPEC',
      title: '6.0L NATURALLY ASPIRATED V12',
      year: 'F140 B ENGINE',
      subtitle: 'Technical Motor Specification',
      image: '/images/djc_cars.png',
      type: 'specs',
      badge: 'TECHNICAL DATA SHEET',
      specs: [
        { label: 'ENGINE ARCHITECTURE', value: '65° V12 DOHC 48-VALVE' },
        { label: 'TOTAL DISPLACEMENT', value: '5998 cc (6.0 LITRES)' },
        { label: 'MAXIMUM POWER', value: '660 HP (485 kW) @ 7800 RPM' },
        { label: 'MAXIMUM TORQUE', value: '657 Nm @ 5500 RPM' },
        { label: 'TOP SPEED', value: '> 350 KM/H (217 MPH)' },
        { label: 'ACCELERATION 0-100 KM/H', value: '3.65 SECONDS' },
      ],
    },
    {
      id: 'slide-04',
      number: '04',
      focus: 'WORKSHOP MAINTENANCE',
      title: 'DAN\'S V12 MECHANICAL CARE',
      year: 'SITTINGBOURNE LAB',
      subtitle: 'Specialist Performance Engine Servicing',
      image: '/images/hero_car.png',
      description: 'From valve clearance adjustments to high-performance clutch replacements and diagnostic road testing.',
      type: 'overview',
      badge: 'SPECIALIST SERVICE',
    },
  ];

  const totalSlides = slides.length;

  // Auto-play timer when user is not dragging or hovering
  useEffect(() => {
    if (isDragging || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(timer);
  }, [isDragging, isHovered, totalSlides]);

  // Touch and Mouse Drag Event Handlers
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const deltaX = clientX - dragStartX;
    setDragOffset(deltaX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 60; // minimum pixels to trigger slide change
    if (dragOffset < -threshold) {
      // Swipe Left -> Next slide
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    } else if (dragOffset > threshold) {
      // Swipe Right -> Previous slide
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
    setDragOffset(0);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section 
      id="car-showcase" 
      className="relative w-full bg-[#0A0A0A] overflow-hidden select-none border-y border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Full-Bleed Container */}
      <div 
        ref={sliderRef}
        className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        
        {/* Background Image Panel with Smooth Transition & Drag Offset */}
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
              }`}
              style={{
                transform: isActive ? `translateX(${dragOffset}px)` : 'none',
                transition: isDragging ? 'none' : 'transform 0.4s ease-out, opacity 0.7s ease-in-out',
              }}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover filter contrast-125 saturate-110"
              />

              {/* Dark Gradient Overlays (Near-black with red vignette bleeding from left edge) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/60"></div>
              <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#C21F2E]/15 to-transparent pointer-events-none"></div>
            </div>
          );
        })}

        {/* Centered Circular Drag-Handle Icon (Grip dots on hover/idle) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className={`p-3 bg-[#0A0A0A]/85 backdrop-blur-md border border-[#C21F2E]/50 rounded-full text-[#C21F2E] transition-all duration-300 transform ${
            isHovered ? 'scale-110 opacity-100 shadow-xl shadow-[#C21F2E]/20' : 'scale-90 opacity-60'
          }`}>
            <GripHorizontal className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        {/* TOP OVERLAY BAR: Top-Left Brand Mark & Top-Right Language & Search */}
        <div className="absolute top-0 left-0 right-0 p-6 sm:p-8 flex justify-between items-center z-30 font-mono-spec text-xs">
          
          {/* Top-Left Brand Mark */}
          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1 bg-[#C21F2E] text-white font-bold tracking-wider text-[11px] btn-clipped uppercase">
              DAN'S AUTOMOTIVE SPEC
            </div>
            <span className="text-[#9A9A95] hidden sm:inline text-[11px]">
              // FEATURED PERFORMANCE SHOWCASE
            </span>
          </div>

          {/* Top-Right Language Selector + Search */}
          <div className="flex items-center gap-4 text-[#EDEDEA]">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0A0A0A]/80 border border-white/15 text-[11px]">
              <Globe className="w-3.5 h-3.5 text-[#C21F2E]" />
              <span>EN / UK</span>
            </div>
            <button className="p-2 bg-[#0A0A0A]/80 border border-white/15 hover:border-[#C21F2E] text-white transition-colors cursor-pointer">
              <Search className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* MAIN SLIDE CONTENT OVERLAY */}
        <div className="absolute inset-0 p-6 sm:p-8 lg:p-12 flex flex-col justify-between z-20 pointer-events-none">
          
          {/* Top Left Title Block */}
          <div className="mt-16 sm:mt-12 max-w-xl pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#C21F2E]/20 border border-[#C21F2E]/40 text-[#C21F2E] font-mono-spec text-[11px] font-bold uppercase mb-2">
              <span>{currentSlide.badge}</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-none drop-shadow-lg">
              {currentSlide.title}
            </h2>

            <div className="font-mono-spec text-sm text-[#C21F2E] font-bold tracking-wider mt-2 flex items-center gap-2">
              <span>{currentSlide.number} // {currentSlide.focus}</span>
              <span className="text-white/30">•</span>
              <span className="text-white/70">{currentSlide.year}</span>
            </div>
          </div>

          {/* BOTTOM ROW CONTENT: Left Description OR Right Spec List */}
          <div className="w-full flex flex-col md:flex-row items-end justify-between gap-6 pointer-events-auto">
            
            {/* Bottom-Left Description OR Technical Specs List */}
            <div className="max-w-lg w-full">
              {currentSlide.type === 'specs' ? (
                /* Data Slide: Right-Aligned Stacked Technical Spec Sheet */
                <div className="p-4 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/15 font-mono-spec text-xs space-y-2 text-[#EDEDEA]">
                  <div className="text-[10px] text-[#C21F2E] font-bold border-b border-white/10 pb-1 mb-2 uppercase">
                    // TECHNICAL ENGINE DATA SHEET
                  </div>
                  {currentSlide.specs.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b border-white/5 text-[11px]">
                      <span className="text-[#9A9A95]">{item.label}:</span>
                      <span className="font-bold text-white text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                /* Overview / Design Slide Description */
                <div className="space-y-3 bg-[#0A0A0A]/80 backdrop-blur-sm p-4 border border-white/10">
                  <p className="text-sm sm:text-base text-[#EDEDEA] font-sans-body leading-relaxed">
                    {currentSlide.description}
                  </p>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 text-xs font-mono-spec font-bold text-[#C21F2E] hover:text-white transition-colors cursor-pointer uppercase tracking-wider group"
                  >
                    <span>DISCOVER MORE & BOOK SERVICE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>

            {/* Bottom-Right: Slide Counter, Thin Red Progress Bar & Action Icons */}
            <div className="flex flex-col items-end gap-3 shrink-0">
              
              <div className="flex items-center gap-4 font-mono-spec text-xs">
                <span className="font-display text-3xl text-white">{currentSlide.number}</span>
                <span className="text-[#9A9A95] text-sm">/ 0{totalSlides}</span>

                <div className="flex items-center gap-2 text-[#9A9A95]">
                  <Clock className="w-4 h-4 text-[#C21F2E]" />
                  <Share2 className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>

              {/* Thin Horizontal Progress Bar */}
              <div className="w-48 sm:w-64 h-1 bg-white/15 relative overflow-hidden">
                <div 
                  className="h-full bg-[#C21F2E] transition-all duration-500 ease-out"
                  style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
                />
              </div>

              {/* Manual Nav Prev/Next Buttons */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)}
                  className="p-2 bg-[#0A0A0A] hover:bg-[#C21F2E] border border-white/15 text-white transition-colors cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % totalSlides)}
                  className="p-2 bg-[#0A0A0A] hover:bg-[#C21F2E] border border-white/15 text-white transition-colors cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
