import React from 'react';
import { Wrench, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#DEDBD3] text-[#111111] border-t-2 border-[#111111] pt-16 pb-12 font-mono-spec text-xs font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b-2 border-[#111111]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#111111] btn-editorial flex items-center justify-center text-white">
                <Wrench className="w-5 h-5 text-[#E53925]" />
              </div>
              <div>
                <div className="font-display text-2xl text-[#111111] uppercase tracking-wider">
                  DAN'S <span className="text-[#E53925]">AUTOMOTIVE</span>
                </div>
                <div className="text-[10px] text-[#555550] tracking-widest uppercase font-bold">
                  SERVICES // SITTINGBOURNE, KENT
                </div>
              </div>
            </div>

            <p className="text-xs text-[#555550] font-sans-body max-w-sm leading-relaxed font-medium">
              Independent UK auto repair workshop based in Newington, Sittingbourne. Run by Dan and Jenna with radical honesty, deep diagnostic skills, and no unnecessary repairs.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-[#111111]">
              <a href="tel:+447487575483" className="hover:text-[#E53925] flex items-center gap-1.5 transition-colors font-bold">
                <Phone className="w-4 h-4 text-[#E53925]" />
                <span>+44 7487 575483</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs text-[#E53925] font-bold uppercase tracking-wider">// NAVIGATION ANCHORS</div>
            <div className="grid grid-cols-1 gap-2 text-xs font-bold">
              <a href="#home" className="hover:text-[#E53925] transition-colors">01 — HOME & HERO</a>
              <a href="#about" className="hover:text-[#E53925] transition-colors">02 — ABOUT DAN & JENNA</a>
              <a href="#services" className="hover:text-[#E53925] transition-colors">03 — TECHNICAL SERVICES</a>
              <a href="#whyus" className="hover:text-[#E53925] transition-colors">04 — WHY CHOOSE US</a>
              <a href="#reviews" className="hover:text-[#E53925] transition-colors">05 — CUSTOMER REVIEWS</a>
              <a href="#contact" className="hover:text-[#E53925] transition-colors">06 — CONTACT & HOURS</a>
            </div>
          </div>

          {/* Location Spec Plate */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs text-[#E53925] font-bold uppercase tracking-wider">// WORKSHOP LOCATION</div>
            <div className="p-4 bg-[#E5E3DC] border border-[#111111] text-xs space-y-2 text-[#111111]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E53925] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#111111] block">Unit 1, 172a New Farm</span>
                  <span>High Street, Newington</span>
                  <span className="block text-[#555550] font-bold">Sittingbourne, ME9 7JH, UK</span>
                </div>
              </div>
              <div className="pt-2 border-t border-[#111111]/10 text-[11px] text-[#555550] font-bold">
                <span>HOURS: MON–FRI 9:00–17:30 | SAT 9:00–12:30</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Spec Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#555550] font-bold">
          <div>
            © {new Date().getFullYear()} DAN'S AUTOMOTIVE SERVICES. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>SITTINGBOURNE ME9 7JH</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#111111] hover:bg-[#E53925] text-white transition-colors cursor-pointer flex items-center gap-1 font-bold"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
