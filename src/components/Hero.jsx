import React from 'react';
import { Wrench, ArrowRight, Phone, CheckCircle2, Cpu, ShieldCheck, Award, Star } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[#0B0B0C] text-[#E2E4E9] overflow-hidden carbon-grain">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Editorial Spec Line */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-3 mb-10 font-mono-spec text-xs gap-2">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#DC2626]">// HALLMARK GARAGE SPEC</span>
            <span className="font-bold text-white">DAN'S AUTOMOTIVE SERVICES</span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-[#8A8F9E] hidden sm:inline">SITTINGBOURNE, KENT ME9 7JH</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C5A059]" />
            <span className="font-bold text-[#C5A059] uppercase tracking-wider">4.8★ GOOGLE RATED (165+ REVIEWS)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hallmark Display Headline Stack */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141417] border border-white/10 font-mono-spec text-xs text-[#E2E4E9]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider">CERTIFIED INDEPENDENT REPAIR CENTRE</span>
              <span className="text-white/20">|</span>
              <span className="text-[#C5A059] font-bold">EST. SITTINGBOURNE</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-none uppercase text-white tracking-tight">
                PRECISION <span className="text-[#DC2626]">CAR REPAIR.</span>
              </h1>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-none uppercase text-[#8A8F9E] tracking-tight">
                EXPERT DIAGNOSTICS. RADICAL HONESTY.
              </h2>
            </div>

            {/* Hallmark Body Copy */}
            <p className="text-base sm:text-lg text-[#8A8F9E] font-sans-body max-w-xl leading-relaxed font-normal">
              Run by <strong className="text-white font-bold">Dan & Jenna</strong> in Sittingbourne, Kent — Dan's Automotive Services delivers dealership-grade vehicle repairs, wet belt timing overhauls, and DPF regeneration without the inflated main dealer prices.
            </p>

            {/* Dual Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              <button
                onClick={onOpenBooking}
                className="btn-hallmark px-8 py-4 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-mono-spec text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#DC2626]/20 cursor-pointer group"
              >
                <Wrench className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                <span>BOOK A SERVICE / MOT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="btn-hallmark-reverse px-8 py-4 bg-[#141417] hover:bg-[#1A1A1E] border border-white/10 text-white font-mono-spec text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all cursor-pointer group"
              >
                <Cpu className="w-4 h-4 text-[#DC2626]" />
                <span>EXPLORE WORKSHOP RANGE</span>
              </a>

            </div>

            {/* Micro Guarantees */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-spec text-xs text-[#8A8F9E]">
              <div className="flex items-center gap-2 border-l-2 border-[#DC2626] pl-3 py-1">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span className="font-semibold text-white">Zero Unnecessary Work</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 border-[#DC2626] pl-3 py-1">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span className="font-semibold text-white">DPF & Wet Belt Spec</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 border-[#DC2626] pl-3 py-1 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                <span className="font-semibold text-white">Step-Free Access</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hallmark Dark Workshop Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#141417] border border-white/10 p-4 shadow-2xl rounded-sm">
              
              {/* Header Bar */}
              <div className="flex justify-between items-center px-3 py-2 bg-[#0B0B0C] border border-white/10 font-mono-spec text-xs font-bold mb-3">
                <span className="text-[#DC2626] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> WORKSHOP BAY 01
                </span>
                <span className="text-[#C5A059]">SITTINGBOURNE, KENT</span>
              </div>

              {/* Poster Artwork Image */}
              <div className="relative overflow-hidden aspect-[4/3] border border-white/10 bg-black">
                <img
                  src="/images/garage_workshop.png"
                  alt="Dan's Automotive Workshop Floor"
                  className="w-full h-full object-cover filter contrast-125 hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                {/* Overlaid HUD Spec Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 bg-[#0B0B0C]/90 backdrop-blur-md border border-white/10 font-mono-spec text-xs text-white">
                  <div className="flex justify-between items-center border-b border-white/10 pb-1.5 mb-1.5">
                    <span className="font-bold uppercase tracking-wider text-white">DAN'S WORKSHOP TELEMETRY</span>
                    <span className="text-[#C5A059] font-bold">4.8★ GOOGLE</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#8A8F9E]">
                    <div>
                      <span className="text-white/50 block font-semibold">LOCATION:</span>
                      <span className="text-white font-semibold">Newington, ME9 7JH</span>
                    </div>
                    <div>
                      <span className="text-white/50 block font-semibold">REPUTATION:</span>
                      <span className="text-white font-semibold">9,000+ FB Likes</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#DC2626] text-white text-[10px] font-mono-spec px-2 py-0.5 font-bold uppercase tracking-wider border border-black shadow-md">
                  DAN & JENNA // IN-HOUSE REPAIRS
                </div>

              </div>

              {/* Bottom Spec Footer */}
              <div className="flex justify-between items-center px-3 py-2 bg-[#0B0B0C] border border-white/10 font-mono-spec text-[10px] font-bold text-[#8A8F9E] mt-3">
                <span>LAT: 51.3418° N, 0.6974° E</span>
                <span className="text-white">REF: NEW FARM GARAGE</span>
              </div>

            </div>
          </div>

        </div>

        {/* Paper Ticker Tape Strip */}
        <div className="mt-14 bg-[#141417] border border-white/10 py-3.5 px-4 font-mono-spec text-xs text-white flex flex-wrap items-center justify-around gap-4 font-bold tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <span className="text-[#DC2626] font-black">/</span>
            <span>4.8★ GOOGLE RATED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#DC2626] font-black">/</span>
            <span className="text-[#DC2626]">165+ VERIFIED REVIEWS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#DC2626] font-black">/</span>
            <span>9,000+ FB COMMUNITY</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#DC2626] font-black">/</span>
            <span className="text-[#DC2626]">100% IN-HOUSE GARAGE REPAIRS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#DC2626] font-black">/</span>
            <span>ECOBOOST & PURETECH WET BELT SPEC</span>
          </div>
        </div>

      </div>
    </section>
  );
}
