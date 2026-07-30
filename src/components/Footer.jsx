import React from 'react';
import { Wrench, Phone, MapPin, ArrowUp, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-12 font-mono-spec text-xs text-[#9A9A95]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#C21F2E] btn-clipped flex items-center justify-center text-white">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-2xl text-white uppercase tracking-wider">
                  DAN'S <span className="text-[#C21F2E]">AUTOMOTIVE</span>
                </div>
                <div className="text-[10px] text-[#9A9A95] tracking-widest uppercase">
                  SERVICES // SITTINGBOURNE, KENT
                </div>
              </div>
            </div>

            <p className="text-xs text-[#9A9A95] font-sans-body max-w-sm leading-relaxed">
              Independent UK auto repair workshop based in Newington, Sittingbourne. Run by Dan and Jenna with radical honesty, deep diagnostic skills, and no unnecessary repairs.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-[#EDEDEA]">
              <a href="tel:+447487575483" className="hover:text-[#C21F2E] flex items-center gap-1.5 transition-colors">
                <Phone className="w-4 h-4 text-[#C21F2E]" />
                <span>+44 7487 575483</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs text-[#C21F2E] font-bold uppercase tracking-wider">// NAVIGATION ANCHORS</div>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <a href="#home" className="hover:text-white transition-colors">01 // HOME & HERO</a>
              <a href="#about" className="hover:text-white transition-colors">02 // ABOUT DAN & JENNA</a>
              <a href="#services" className="hover:text-white transition-colors">03 // TECHNICAL SERVICES</a>
              <a href="#whyus" className="hover:text-white transition-colors">04 // WHY CHOOSE US</a>
              <a href="#reviews" className="hover:text-white transition-colors">05 // CUSTOMER REVIEWS</a>
              <a href="#contact" className="hover:text-white transition-colors">06 // CONTACT & HOURS</a>
            </div>
          </div>

          {/* Location Spec Plate */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs text-[#C21F2E] font-bold uppercase tracking-wider">// WORKSHOP LOCATION</div>
            <div className="p-4 bg-[#0A0A0A] border border-white/10 text-xs space-y-2 text-[#EDEDEA]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C21F2E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Unit 1, 172a New Farm</span>
                  <span>High Street, Newington</span>
                  <span className="block text-[#9A9A95]">Sittingbourne, ME9 7JH, UK</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/5 text-[11px] text-[#9A9A95]">
                <span>HOURS: MON–FRI 9:00–17:30 | SAT 9:00–12:30</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Spec Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9A9A95]">
          <div>
            © {new Date().getFullYear()} DAN'S AUTOMOTIVE SERVICES. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>SITTINGBOURNE ME9 7JH</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#121212] hover:bg-[#C21F2E] border border-white/10 hover:border-[#C21F2E] text-white transition-colors cursor-pointer flex items-center gap-1"
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
