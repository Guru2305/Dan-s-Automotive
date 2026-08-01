import React from 'react';
import { Star, ThumbsUp, Wrench, ArrowRight, Phone, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#EAE6DF] grain-overlay overflow-hidden">
      
      {/* Container with Outer Corner Crop Marks & Crosshair Registration Mark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Broadsheet Tagline Header */}
        <div className="flex items-center justify-between border-b border-[#1A1A18]/30 pb-3 mb-8 font-mono-spec text-xs text-[#6E6D68] tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="text-[#C83723] font-bold">┌ A BROADSHEET FOR VEHICLES WORTH KEEPING</span>
            <span className="hidden sm:inline">· EST. ON A SITTINGBOURNE WORKBENCH</span>
          </div>
          <div className="flex items-center gap-2 text-[#1A1A18] font-bold">
            <span>VOL. 2026 // ISSUE Nº 01 ┐</span>
          </div>
        </div>

        {/* Outer Contact Sheet Crop Bracket Outer Box */}
        <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#F4F0E8] border-2 border-[#1A1A18] p-6 sm:p-10 shadow-lg relative">
          
          {/* Target Registration Mark Crosshair Symbol (as seen in reference design) */}
          <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full border border-[#1A1A18] flex items-center justify-center bg-[#EAE6DF] font-mono-spec text-[10px] text-[#C83723] font-bold">
            ⊕
          </div>
          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full border border-[#1A1A18] flex items-center justify-center bg-[#EAE6DF] font-mono-spec text-[10px] text-[#C83723] font-bold">
            ⊕
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Stacked Risograph Layered Headline */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A18] text-[#EAE6DF] font-mono-spec text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#C83723] animate-pulse"></span>
                <span>DAN'S AUTOMOTIVE SERVICES</span>
                <span className="text-[#6E6D68]">|</span>
                <span className="text-[#6B9E9E] font-bold">INDEPENDENT REPAIR LAB</span>
              </div>

              {/* Stacked Risograph Display Headline */}
              <div className="relative pt-2 pb-4">
                
                {/* Layer 1: Offset Cyan Layer */}
                <div className="font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.88] uppercase tracking-tight text-[#6B9E9E] opacity-50 select-none transform -translate-x-2.5 -translate-y-2.5">
                  DON'T BIN IT.<br />
                  FIX IT.
                </div>

                {/* Layer 2: Offset Rust Red Layer */}
                <div className="font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.88] uppercase tracking-tight text-[#C83723] opacity-60 select-none transform translate-x-2 translate-y-2 absolute top-2 left-0 right-0">
                  DON'T BIN IT.<br />
                  FIX IT.
                </div>

                {/* Top Main Solid Black Text Layer */}
                <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.88] uppercase tracking-tight text-[#1A1A18] absolute top-2 left-0 right-0 z-10">
                  DON'T BIN IT.<br />
                  <span className="text-[#C83723]">FIX IT.</span>
                </h1>

                {/* Spacer to push content down cleanly */}
                <div className="invisible font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.88] uppercase">
                  DON'T BIN IT.<br />
                  FIX IT.
                </div>

              </div>

              {/* Subtitle Headline */}
              <div className="border-t-2 border-[#1A1A18] pt-4">
                <h2 className="font-display text-3xl sm:text-5xl text-[#1A1A18] uppercase tracking-wide leading-tight">
                  HONEST WORK. <span className="text-[#C83723]">NO EXCUSES.</span>
                </h2>
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="btn-clipped px-8 py-4 bg-[#C83723] hover:bg-[#1A1A18] text-white font-mono-spec text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all shadow-md cursor-pointer group"
                >
                  <Wrench className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                  <span>BOOK A SERVICE / MOT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#services"
                  className="btn-clipped-reverse px-8 py-4 bg-[#EAE6DF] hover:bg-[#1A1A18] hover:text-white border-2 border-[#1A1A18] text-[#1A1A18] font-mono-spec text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all cursor-pointer group"
                >
                  <Cpu className="w-4 h-4 text-[#C83723]" />
                  <span>WORKSHOP RANGE</span>
                </a>
              </div>

              {/* Micro Highlights */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-spec text-xs text-[#6E6D68]">
                <div className="flex items-center gap-2 border-l-2 border-[#C83723] pl-2.5 py-1">
                  <CheckCircle2 className="w-4 h-4 text-[#C83723] shrink-0" />
                  <span className="text-[#1A1A18]">Zero Unnecessary Repairs</span>
                </div>
                <div className="flex items-center gap-2 border-l-2 border-[#C83723] pl-2.5 py-1">
                  <CheckCircle2 className="w-4 h-4 text-[#C83723] shrink-0" />
                  <span className="text-[#1A1A18]">DPF & Wet Belt Spec</span>
                </div>
                <div className="flex items-center gap-2 border-l-2 border-[#C83723] pl-2.5 py-1 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#C83723] shrink-0" />
                  <span className="text-[#1A1A18]">Step-Free Access</span>
                </div>
              </div>

            </div>

            {/* Right Column: Editorial Serif Column + Workshop Photograph */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Editorial Manifesto Quote Box (Styled like reference editorial column) */}
              <div className="p-6 bg-[#EAE6DF] border-l-4 border-[#1A1A18] space-y-4 shadow-sm">
                <div className="font-mono-spec text-[10px] text-[#C83723] font-bold uppercase tracking-widest">
                  // THE WORKSHOP MANIFESTO
                </div>
                <p className="font-serif-editorial text-lg sm:text-xl text-[#1A1A18] leading-relaxed italic">
                  "A broken engine or warning light is not rubbish. It is a vehicle with <strong className="not-italic text-[#1A1A18] font-bold underline decoration-[#C83723] decoration-2">one bad part</strong> and a story you're not done with. Dan & Jenna set out the tools to mend it with honesty — not replacement upselling."
                </p>
                <div className="font-mono-spec text-xs text-[#6E6D68] pt-2 border-t border-[#1A1A18]/20 flex justify-between">
                  <span>DAN & JENNA // FOUNDERS</span>
                  <span className="text-[#1A1A18] font-bold">SITTINGBOURNE, ME9</span>
                </div>
              </div>

              {/* Main Photo Frame with Contact Sheet Crop Mark Corners */}
              <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#EAE6DF] border border-[#1A1A18] p-2.5 shadow-md">
                <div className="flex justify-between items-center px-2 py-1 bg-[#1A1A1A] text-white font-mono-spec text-[10px] mb-2">
                  <span>WORKSHOP FLOOR // NEWINGTON</span>
                  <span className="text-[#6B9E9E] font-bold">SPEC: 100% IN-HOUSE</span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden border border-[#1A1A18] bg-black">
                  <img
                    src="/images/garage_workshop.png"
                    alt="Dan's Automotive Garage Workshop"
                    className="w-full h-full object-cover filter contrast-110 saturate-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 p-2 bg-[#EAE6DF]/95 backdrop-blur-xs border border-[#1A1A18] font-mono-spec text-[11px] text-[#1A1A18]">
                    <div className="flex justify-between font-bold">
                      <span>DAN'S REPAIR SHOP</span>
                      <span className="text-[#C83723]">4.8★ GOOGLE</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Spec-Strip Stats Bar (Hairline Broadsheet Grid Layout) */}
        <div className="mt-12 border-2 border-[#1A1A18] bg-[#F4F0E8] grid grid-cols-2 lg:grid-cols-4 hairline-grid font-mono-spec">
          
          <div className="bg-[#F4F0E8] p-6 hover:bg-[#EAE6DF] transition-colors relative group">
            <div className="flex items-center justify-between text-[#C83723] mb-2">
              <Star className="w-5 h-5 fill-[#C83723]" />
              <span className="text-[10px] text-[#6E6D68]">STAT // 01</span>
            </div>
            <div className="font-display text-4xl text-[#1A1A18] tracking-wider">4.8 ★</div>
            <div className="text-xs text-[#6E6D68] mt-1 font-serif-editorial">
              165+ Verified Google Reviews
            </div>
          </div>

          <div className="bg-[#F4F0E8] p-6 hover:bg-[#EAE6DF] transition-colors relative group">
            <div className="flex items-center justify-between text-[#C83723] mb-2">
              <ThumbsUp className="w-5 h-5 text-[#C83723]" />
              <span className="text-[10px] text-[#6E6D68]">STAT // 02</span>
            </div>
            <div className="font-display text-4xl text-[#1A1A18] tracking-wider">9,000+</div>
            <div className="text-xs text-[#6E6D68] mt-1 font-serif-editorial">
              Active Facebook & TikTok Community
            </div>
          </div>

          <div className="bg-[#F4F0E8] p-6 hover:bg-[#EAE6DF] transition-colors relative group">
            <div className="flex items-center justify-between text-[#C83723] mb-2">
              <Wrench className="w-5 h-5 text-[#C83723]" />
              <span className="text-[10px] text-[#6E6D68]">STAT // 03</span>
            </div>
            <div className="font-display text-4xl text-[#1A1A18] tracking-wider">100%</div>
            <div className="text-xs text-[#6E6D68] mt-1 font-serif-editorial">
              On-Site Mechanical Diagnostics
            </div>
          </div>

          <div className="bg-[#F4F0E8] p-6 hover:bg-[#EAE6DF] transition-colors relative group">
            <div className="flex items-center justify-between text-[#C83723] mb-2">
              <ShieldCheck className="w-5 h-5 text-[#C83723]" />
              <span className="text-[10px] text-[#6E6D68]">STAT // 04</span>
            </div>
            <div className="font-display text-4xl text-[#1A1A18] tracking-wider">WET BELT</div>
            <div className="text-xs text-[#6E6D68] mt-1 font-serif-editorial">
              Ford EcoBoost & PureTech Specialists
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
