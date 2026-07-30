import React from 'react';
import { Star, MapPin, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      code: 'REV // 001',
      name: 'MARCUS V.',
      location: 'Traveled 45 miles from Maidstone',
      service: 'Wet Belt Replacement & Diagnostic',
      stars: 5,
      date: 'Verified Google Review',
      quote: 'Dan saved me over £900 compared to main dealer quotes for a wet belt replacement on my Ford. He explained every step, showed me the worn parts, and had the car back to me early. Absolute integrity.',
    },
    {
      code: 'REV // 002',
      name: 'SARAH K.',
      location: 'Local Regular, Sittingbourne',
      service: 'DPF Cleaning & Aircon Re-Gas',
      stars: 5,
      date: 'Verified Google Review',
      quote: 'Jenna was brilliant on the phone and Dan personally took me out on a test drive to hear the DPF error. Cleared the fault completely and the aircon is ice cold. I wouldn’t trust any other garage in Kent.',
    },
    {
      code: 'REV // 003',
      name: 'DAVID P.',
      location: 'Traveled from Rochester',
      service: 'Clutch & Flywheel Overhaul',
      stars: 5,
      date: 'Verified Google Review',
      quote: 'Replaced the dual-mass flywheel and clutch on my Audi A4. Dan had it up on the lift, diagnosed the vibration immediately, and charged a very fair price. No pushy upselling whatsoever.',
    },
    {
      code: 'REV // 004',
      name: 'ELLEN & TOM',
      location: 'Newington Resident',
      service: 'Annual Servicing & MOT Prep',
      stars: 5,
      date: 'Verified Facebook Review',
      quote: 'It’s so rare to find a garage that tells you "this part doesn’t need replacing yet". Dan & Jenna run a first-class business. The step-free access and parking right outside make visits so easy for my mother too.',
    },
    {
      code: 'REV // 005',
      name: 'GARY B.',
      location: 'Traveled 60+ miles',
      service: 'ECU Electrical & Diagnostics',
      stars: 5,
      date: 'Verified Google Review',
      quote: 'I drive past at least ten garages to get to Dan’s Automotive. Their technical diagnostic skills are top tier. They remember my car’s history every single time. Worth every mile driven.',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-[#0A0A0A] border-t border-white/10 relative grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono-spec text-xs text-[#C21F2E] tracking-widest uppercase font-semibold mb-2">
              [ 05 // VERIFIED CUSTOMER REPUTATION & REVIEWS ]
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              4.8 ★ <span className="text-[#C21F2E]">REAL CUSTOMER TRUST</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-right font-mono-spec text-xs text-[#9A9A95]">
            <span className="text-white font-bold block">165+ VERIFIED GOOGLE REVIEWS</span>
            <span>9,000+ FACEBOOK COMMUNITY MEMBERS</span>
          </div>
        </div>

        {/* Reviews Hairline Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hairline-grid border border-white/10 bg-[#121212] mb-12">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className={`bg-[#121212] p-6 hover:bg-[#161616] transition-colors flex flex-col justify-between group border-b md:border-b-0 border-white/5 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono-spec text-xs text-[#C21F2E] font-bold">{r.code}</span>
                  <div className="flex items-center gap-1 text-[#C21F2E]">
                    {[...Array(r.stars)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#C21F2E]" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-2.5 py-0.5 bg-[#0A0A0A] border border-white/10 font-mono-spec text-[10px] text-[#EDEDEA] uppercase mb-4">
                  // {r.service}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#EDEDEA]/90 font-sans-body leading-relaxed mb-6 italic">
                  "{r.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-white/10 font-mono-spec text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white uppercase">{r.name}</span>
                  <span className="text-[10px] text-emerald-400 font-semibold">{r.date}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#9A9A95] mt-1">
                  <MapPin className="w-3 h-3 text-[#C21F2E]" />
                  <span>{r.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Review Footer Bar */}
        <div className="p-4 bg-[#121212] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-spec text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C21F2E]" />
            <span className="text-[#9A9A95]">READ ALL 165+ VERIFIED GOOGLE REVIEWS ONLINE ON GOOGLE MAPS</span>
          </div>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clipped px-4 py-2 bg-[#C21F2E] hover:bg-[#E61C24] text-white font-bold uppercase transition-colors"
          >
            VIEW GOOGLE MAPS REVIEWS
          </a>
        </div>

      </div>
    </section>
  );
}
