import React, { useState } from 'react';
import { Car, ShieldCheck, Calendar, Fuel, Gauge, ArrowUpRight, Check, Filter } from 'lucide-react';

export default function CarSales({ onOpenCarInquiry }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const carInventory = [
    {
      id: 'car-1',
      title: '2020 BMW 3 SERIES 2.0 320I M SPORT',
      category: 'PERFORMANCE',
      price: '£18,995',
      mileage: '42,500 miles',
      year: '2020 (70 reg)',
      engine: '2.0L Petrol Auto',
      transmission: 'Automatic',
      mot: '12 Months MOT Included',
      image: '/images/djc_cars.png',
      badge: 'DJC IN-HOUSE APPROVED',
      highlights: ['Full Service History', 'M Sport Pro Pack', 'Shadowline Styling', 'Fresh Service by Dan'],
    },
    {
      id: 'car-2',
      title: '2019 VOLKSWAGEN GOLF 2.0 TSI R 4MOTION',
      category: 'PERFORMANCE',
      price: '£21,490',
      mileage: '38,100 miles',
      year: '2019 (19 reg)',
      engine: '2.0L Turbo 300bhp',
      transmission: 'DSG Automatic',
      mot: '11 Months MOT',
      image: '/images/hero_car.png',
      badge: 'WORKSHOP PREPPED',
      highlights: ['4Motion AWD System', 'Virtual Cockpit', 'Akrapovič Exhaust', 'New Brake Pads & Discs'],
    },
    {
      id: 'car-3',
      title: '2021 AUDI A4 2.0 40 TFSI SPORT EDITION',
      category: 'HATCHBACK',
      price: '£17,750',
      mileage: '34,800 miles',
      year: '2021 (21 reg)',
      engine: '2.0L Mild Hybrid',
      transmission: 'S Tronic Auto',
      mot: '12 Months MOT',
      image: '/images/djc_cars.png',
      badge: 'FULL MECHANICAL CHECK',
      highlights: ['MMI Navigation Plus', 'Leather Sports Seats', 'Low Emissions', 'Full DJC Warranty'],
    },
    {
      id: 'car-4',
      title: '2018 FORD FIESTA 1.0 ECOBOOST ST-LINE',
      category: 'HATCHBACK',
      price: '£9,850',
      mileage: '49,200 miles',
      year: '2018 (68 reg)',
      engine: '1.0L EcoBoost',
      transmission: 'Manual 6-Speed',
      mot: '12 Months MOT',
      image: '/images/garage_workshop.png',
      badge: 'NEW WET BELT FITTED',
      highlights: ['Brand New Wet Belt Fitted by Dan', 'Cheap Insurance', 'Apple CarPlay', 'Fresh Service'],
    },
    {
      id: 'car-5',
      title: '2020 MERCEDES-BENZ GLA 200 AMG LINE',
      category: 'SUV',
      price: '£22,990',
      mileage: '29,400 miles',
      year: '2020 (70 reg)',
      engine: '1.3L Turbo Petrol',
      transmission: '7G-DCT Automatic',
      mot: '12 Months MOT',
      image: '/images/djc_cars.png',
      badge: 'PREMIUM SELECTION',
      highlights: ['Panoramic Glass Roof', 'Reversing Camera', 'Keyless Go', 'Checked on Lift'],
    },
    {
      id: 'car-6',
      title: '2019 SEAT LEON 2.0 TSI CUPRA 290',
      category: 'PERFORMANCE',
      price: '£16,995',
      mileage: '46,100 miles',
      year: '2019 (19 reg)',
      engine: '2.0L TSI 290PS',
      transmission: 'DSG Automatic',
      mot: '10 Months MOT',
      image: '/images/hero_car.png',
      badge: 'CUPRA SPEC CHECKED',
      highlights: ['Dynamic Chassis Control', 'Bucket Seats', 'Full Service Record', 'Unmodified OEM'],
    },
  ];

  const filteredCars = activeFilter === 'ALL'
    ? carInventory
    : carInventory.filter(c => c.category === activeFilter);

  return (
    <section id="carsales" className="py-20 bg-[#0A0A0A] border-t border-white/10 relative grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono-spec text-xs text-[#C21F2E]">
              <span className="px-2 py-0.5 bg-[#C21F2E] text-white font-bold">DJC CARS</span>
              <span>[ 04 // VEHICLE SALES & PRE-CHECKED STOCK ]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              QUALITY CARS <span className="text-[#C21F2E]">CHECKED IN-HOUSE</span>
            </h2>
          </div>
          <div className="mt-4 lg:mt-0 text-right">
            <p className="text-sm font-mono-spec text-[#9A9A95] max-w-md">
              TRADING AS DJC CARS // QUALITY CARS KENT // EVERY CAR INSPECTED ON OUR WORKSHOP LIFTS BEFORE SALE.
            </p>
          </div>
        </div>

        {/* Sales Trust Banner */}
        <div className="mb-10 p-4 bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-spec text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#C21F2E]/20 text-[#C21F2E] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-white font-bold block uppercase">DAN'S MECHANICAL GUARANTEE FOR VEHICLE PURCHASES</span>
              <span className="text-[#9A9A95]">Unlike conventional dealerships, every DJC car is test driven, diagnostic scanned, and prepped by our own mechanics.</span>
            </div>
          </div>
          <a 
            href="tel:+447487575483"
            className="btn-clipped px-4 py-2 bg-[#1A1A1A] hover:bg-[#C21F2E] border border-white/10 text-white font-bold shrink-0 transition-colors uppercase cursor-pointer"
          >
            INQUIRE CAR STOCK: 07487 575483
          </a>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 font-mono-spec text-xs text-[#9A9A95]">
            <Filter className="w-4 h-4 text-[#C21F2E]" />
            <span>FILTER STOCK:</span>
            {['ALL', 'PERFORMANCE', 'HATCHBACK', 'SUV'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1 font-mono-spec text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#C21F2E] text-white font-bold border border-[#C21F2E]'
                    : 'bg-[#121212] text-[#9A9A95] border border-white/10 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="font-mono-spec text-xs text-[#9A9A95]">
            SHOWING <span className="text-white font-bold">{filteredCars.length}</span> VEHICLES IN STOCK
          </div>
        </div>

        {/* Car Inventory Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hairline-grid border border-white/10 bg-[#121212]">
          {filteredCars.map((car) => (
            <div 
              key={car.id} 
              className="bg-[#121212] p-5 hover:bg-[#161616] transition-all duration-300 flex flex-col justify-between group border-b md:border-b-0 border-white/5"
            >
              <div>
                {/* Image Container with Contact Sheet Crop Frame */}
                <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-black mb-4">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#C21F2E] text-white font-mono-spec text-[10px] font-bold uppercase tracking-wider">
                    {car.badge}
                  </div>
                  <div className="absolute bottom-2 right-2 px-3 py-1 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/20 font-display text-xl text-white">
                    {car.price}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2 line-clamp-1">
                  {car.title}
                </h3>

                {/* Specs Pill Grid */}
                <div className="grid grid-cols-2 gap-2 font-mono-spec text-[11px] text-[#9A9A95] mb-4 bg-[#0A0A0A] p-2.5 border border-white/5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C21F2E]" />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-[#C21F2E]" />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Fuel className="w-3.5 h-3.5 text-[#C21F2E]" />
                    <span>{car.engine}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{car.mot}</span>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-6 font-mono-spec text-[11px]">
                  {car.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/80">
                      <Check className="w-3.5 h-3.5 text-[#C21F2E] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenCarInquiry(car)}
                className="btn-clipped w-full py-2.5 bg-[#C21F2E] hover:bg-[#E61C24] text-white font-mono-spec text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <Car className="w-4 h-4" />
                <span>BOOK TEST DRIVE / INQUIRE</span>
              </button>

            </div>
          ))}
        </div>

        {/* Bottom DJC Cars Link */}
        <div className="mt-8 text-center font-mono-spec text-xs text-[#9A9A95]">
          <span>LOOKING FOR FULL CAR LISTINGS? VISIT OUR REFERENCE PORTAL AT </span>
          <a 
            href="http://qualitycarskent.co.uk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white underline decoration-[#C21F2E] hover:text-[#C21F2E] font-bold"
          >
            QUALITYCARSKENT.CO.UK
          </a>
        </div>

      </div>
    </section>
  );
}
