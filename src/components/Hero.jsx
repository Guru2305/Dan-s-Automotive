import React from 'react';
import { ShieldCheck, Star, ThumbsUp, Wrench, ArrowRight, Phone, CheckCircle2, Cpu } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#0A0A0A] overflow-hidden grain-overlay">
      
      {/* Background Subtle Red Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C21F2E]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#C21F2E]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Spec Header Marker */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#C21F2E]"></div>
          <span className="font-mono-spec text-xs tracking-widest text-[#C21F2E] uppercase font-semibold">
            [ SPEC // UK GARAGE & DIAGNOSTIC LAB // SITTINGBOURNE, KENT ]
          </span>
          <div className="h-px flex-1 bg-white/10 hidden sm:block"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161616] border border-white/10 text-xs font-mono-spec text-[#EDEDEA]">
              <span className="w-2 h-2 rounded-full bg-[#C21F2E] animate-ping"></span>
              <span className="text-[#9A9A95]">EST. INDEPENDENT GARAGE</span>
              <span className="text-white/30">|</span>
              <span className="text-emerald-400 font-bold">DAN'S AUTOMOTIVE SERVICES</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-white uppercase">
              HONEST WORK. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C21F2E] via-[#E61C24] to-red-600">
                NO EXCUSES.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-[#9A9A95] font-sans-body max-w-2xl leading-relaxed">
              Kent's premier independent performance auto garage. Run by <strong className="text-white font-semibold">Dan & Jenna</strong>, built on radical honesty, deep diagnostic mastery, and long-term customer trust. No unnecessary upselling — ever.
            </p>

            {/* Dual CTAs with Clipped Edges */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              <button
                onClick={onOpenBooking}
                className="btn-clipped px-8 py-4 bg-[#C21F2E] hover:bg-[#E61C24] text-white font-mono-spec text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-[#C21F2E]/30 cursor-pointer group"
              >
                <Wrench className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                <span>BOOK A SERVICE / MOT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="btn-clipped-reverse px-8 py-4 bg-[#161616] hover:bg-[#222222] border border-white/20 hover:border-[#C21F2E]/50 text-white font-mono-spec text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all cursor-pointer group"
              >
                <Cpu className="w-4 h-4 text-[#C21F2E]" />
                <span>EXPLORE SERVICES & PRICING</span>
              </a>

            </div>

            {/* Micro Highlights Grid */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-spec text-xs text-[#9A9A95]">
              <div className="flex items-center gap-2 border-l-2 border-[#C21F2E] pl-3 py-1">
                <CheckCircle2 className="w-4 h-4 text-[#C21F2E] shrink-0" />
                <span>Zero Unnecessary Repairs</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 border-[#C21F2E] pl-3 py-1">
                <CheckCircle2 className="w-4 h-4 text-[#C21F2E] shrink-0" />
                <span>DPF, Cambelt & Aircon Spec</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 border-[#C21F2E] pl-3 py-1 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#C21F2E] shrink-0" />
                <span>Step-Free Access & Parking</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dark Poster Artwork Frame with Crop Marks & Diagonal Slab */}
          <div className="lg:col-span-5 relative">
            
            {/* The Signature Diagonal Red Clip-Path Slab backdrop */}
            <div className="absolute -inset-4 hero-red-slab opacity-80 blur-xs transform -rotate-1 scale-105 pointer-events-none"></div>

            {/* Main Poster Container with Contact Sheet Crop Brackets */}
            <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#121212] border border-white/10 p-3 relative z-10 group shadow-2xl">
              
              {/* Top Monospace Spec Line */}
              <div className="flex justify-between items-center px-3 py-2 bg-[#0A0A0A] border-b border-white/10 font-mono-spec text-[11px] text-[#9A9A95]">
                <span className="text-[#C21F2E] font-bold">// WORKSHOP FRAME: 001</span>
                <span>MOTORSIGHT LAB ME9</span>
                <span className="text-emerald-400">VERIFIED</span>
              </div>

              {/* Main Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] border border-white/10 bg-black">
                <img
                  src="/images/garage_workshop.png"
                  alt="Dan's Automotive Performance Workshop & Tuner Showcase"
                  className="w-full h-full object-cover filter contrast-125 saturate-110 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30"></div>

                {/* Overlaid HUD Spec Sheet Box */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/15 font-mono-spec text-xs text-[#EDEDEA]">
                  <div className="flex justify-between items-center border-b border-white/10 pb-1.5 mb-1.5">
                    <span className="font-bold text-white uppercase tracking-wider">DAN'S WORKSHOP SPEC</span>
                    <span className="text-[#C21F2E] font-bold">4.8★ GOOGLE</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#9A9A95]">
                    <div>
                      <span className="text-white/40 block">LOCATION:</span>
                      <span className="text-white font-medium">Sittingbourne, Kent</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">COMMUNITY TRUST:</span>
                      <span className="text-white font-medium">9,000+ FB Likes</span>
                    </div>
                  </div>
                </div>

                {/* Corner Red Accent Bracket Overlay */}
                <div className="absolute top-3 left-3 bg-[#C21F2E] text-white text-[10px] font-mono-spec px-2 py-0.5 font-bold uppercase tracking-wider">
                  DAN & JENNA // SITTINGBOURNE
                </div>
              </div>

              {/* Bottom Frame Spec Footer */}
              <div className="flex justify-between items-center px-3 py-2 bg-[#0A0A0A] border-t border-white/10 font-mono-spec text-[10px] text-[#9A9A95]">
                <span>LAT: 51.3418° N, 0.6974° E</span>
                <span className="text-white">REF: SITTINGBOURNE GARAGE</span>
              </div>

            </div>

          </div>

        </div>

        {/* Spec-Strip Stats Bar (1px Hairline Grid Layout) */}
        <div className="mt-16 border border-white/10 bg-[#121212] grid grid-cols-2 lg:grid-cols-4 hairline-grid font-mono-spec">
          
          <div className="bg-[#121212] p-6 hover:bg-[#161616] transition-colors relative group">
            <div className="flex items-center justify-between text-[#C21F2E] mb-2">
              <Star className="w-5 h-5 fill-[#C21F2E]" />
              <span className="text-[10px] text-[#9A9A95]">STAT // 01</span>
            </div>
            <div className="font-display text-4xl text-white tracking-wider">4.8 ★</div>
            <div className="text-xs text-[#9A9A95] mt-1 font-sans-body">
              165+ Verified Google Reviews
            </div>
          </div>

          <div className="bg-[#121212] p-6 hover:bg-[#161616] transition-colors relative group">
            <div className="flex items-center justify-between text-[#C21F2E] mb-2">
              <ThumbsUp className="w-5 h-5 text-[#C21F2E]" />
              <span className="text-[10px] text-[#9A9A95]">STAT // 02</span>
            </div>
            <div className="font-display text-4xl text-white tracking-wider">9,000+</div>
            <div className="text-xs text-[#9A9A95] mt-1 font-sans-body">
              Active Facebook & TikTok Followers
            </div>
          </div>

          <div className="bg-[#121212] p-6 hover:bg-[#161616] transition-colors relative group">
            <div className="flex items-center justify-between text-[#C21F2E] mb-2">
              <Wrench className="w-5 h-5 text-[#C21F2E]" />
              <span className="text-[10px] text-[#9A9A95]">STAT // 03</span>
            </div>
            <div className="font-display text-4xl text-white tracking-wider">100%</div>
            <div className="text-xs text-[#9A9A95] mt-1 font-sans-body">
              In-House Diagnostic & Repairs
            </div>
          </div>

          <div className="bg-[#121212] p-6 hover:bg-[#161616] transition-colors relative group">
            <div className="flex items-center justify-between text-[#C21F2E] mb-2">
              <ShieldCheck className="w-5 h-5 text-[#C21F2E]" />
              <span className="text-[10px] text-[#9A9A95]">STAT // 04</span>
            </div>
            <div className="font-display text-4xl text-white tracking-wider">WET BELT</div>
            <div className="text-xs text-[#9A9A95] mt-1 font-sans-body">
              Ford EcoBoost & PureTech Specialists
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
