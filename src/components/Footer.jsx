import React from 'react';
import { Wrench, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0C] text-[#E2E4E9] border-t border-white/10 pt-16 pb-12 font-mono-spec text-xs font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#DC2626] btn-hallmark flex items-center justify-center text-white">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display text-2xl text-white uppercase tracking-wider">
                  DAN'S <span className="text-[#DC2626]">AUTOMOTIVE</span>
                </div>
                <div className="text-[10px] text-[#8A8F9E] tracking-widest uppercase font-bold">
                  HALLMARK GARAGE // SITTINGBOURNE, KENT
                </div>
              </div>
            </div>

            <p className="text-xs text-[#8A8F9E] font-sans-body max-w-sm leading-relaxed font-normal">
              Independent UK auto repair workshop based in Newington, Sittingbourne. Run by Dan and Jenna with radical honesty, deep diagnostic skills, and no unnecessary repairs.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-white">
              <a href="tel:+447487575483" className="hover:text-[#DC2626] flex items-center gap-1.5 transition-colors font-bold">
                <Phone className="w-4 h-4 text-[#DC2626]" />
                <span>+44 7487 575483</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs text-[#DC2626] font-bold uppercase tracking-wider">// NAVIGATION ANCHORS</div>
            <div className="grid grid-cols-1 gap-2 text-xs font-semibold">
              <a href="#home" className="hover:text-[#DC2626] transition-colors">01 — HOME & HERO</a>
              <a href="#about" className="hover:text-[#DC2626] transition-colors">02 — ABOUT DAN & JENNA</a>
              <a href="#services" className="hover:text-[#DC2626] transition-colors">03 — TECHNICAL SERVICES</a>
              <a href="#whyus" className="hover:text-[#DC2626] transition-colors">04 — WHY CHOOSE US</a>
              <a href="#reviews" className="hover:text-[#DC2626] transition-colors">05 — CUSTOMER REVIEWS</a>
              <a href="#contact" className="hover:text-[#DC2626] transition-colors">06 — CONTACT & HOURS</a>
            </div>
          </div>

          {/* Location Spec Plate */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs text-[#DC2626] font-bold uppercase tracking-wider">// WORKSHOP LOCATION</div>
            <div className="p-4 bg-[#141417] border border-white/10 text-xs space-y-2 text-[#E2E4E9]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Unit 1, 172a New Farm</span>
                  <span>High Street, Newington</span>
                  <span className="block text-[#8A8F9E] font-semibold">Sittingbourne, ME9 7JH, UK</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 text-[11px] text-[#8A8F9E] font-semibold">
                <span>HOURS: MON–FRI 9:00–17:30 | SAT 9:00–12:30</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Spec Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8A8F9E] font-semibold">
          <div>
            © {new Date().getFullYear()} DAN'S AUTOMOTIVE SERVICES. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>SITTINGBOURNE ME9 7JH</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#141417] hover:bg-[#DC2626] border border-white/10 text-white transition-colors cursor-pointer flex items-center gap-1 font-bold"
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
