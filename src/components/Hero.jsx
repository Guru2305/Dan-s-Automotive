import React from 'react';
import { Wrench, ArrowRight, Phone, CheckCircle2, Cpu, ShieldCheck, Star, ThumbsUp } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[#E5E3DC] text-[#111111] overflow-hidden newsprint-grain">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Editorial Spec Line */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-[#111111] pb-3 mb-10 font-mono-spec text-xs gap-2">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#E53925]">// ISSUE NO. 01</span>
            <span className="font-bold text-[#111111]">DAN'S AUTOMOTIVE SERVICES</span>
            <span className="text-[#111111]/30 hidden sm:inline">|</span>
            <span className="text-[#555550] hidden sm:inline">SITTINGBOURNE, KENT ME9 7JH</span>
          </div>
          <div className="font-bold text-[#E53925] uppercase tracking-wider">
            4.8★ GOOGLE RATED (165+ REVIEWS)
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clean Editorial Headline Stack */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DEDBD3] border border-[#111111] font-mono-spec text-xs text-[#111111]">
              <span className="w-2 h-2 rounded-full bg-[#E53925] animate-ping"></span>
              <span className="font-bold uppercase tracking-wider">RADICAL MECHANICAL HONESTY</span>
              <span className="text-[#111111]/30">|</span>
              <span className="text-[#E53925] font-bold">EST. SITTINGBOURNE</span>
            </div>

            {/* Clean Stacked Display Headline */}
            <div className="space-y-1">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-none uppercase text-[#111111] tracking-tight">
                DON'T SCRAP IT.
              </h1>
              <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-none uppercase text-[#E53925] tracking-tight">
                FIX IT.
              </h1>
              <div className="pt-2 border-t-2 border-[#111111] mt-3">
                <h2 className="font-display text-2xl sm:text-4xl text-[#111111] uppercase tracking-wide">
                  HONEST WORK. NO EXCUSES.
                </h2>
              </div>
            </div>

            {/* Editorial Body Copy */}
            <p className="text-base sm:text-lg text-[#555550] font-sans-body max-w-xl leading-relaxed font-medium">
              Throwing away a complex car component is a choice. We choose to diagnose, repair, and rebuild. Run by <strong className="text-[#111111] font-bold">Dan & Jenna</strong> in Sittingbourne, Kent — built on radical mechanical honesty, deep diagnostic skills, and zero unnecessary upselling.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              <button
                onClick={onOpenBooking}
                className="btn-editorial px-8 py-4 bg-[#E53925] hover:bg-[#CC2D1B] text-white font-mono-spec text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all shadow-md cursor-pointer group"
              >
                <Wrench className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                <span>BOOK A SERVICE / MOT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="btn-editorial-reverse px-8 py-4 bg-[#111111] hover:bg-[#222222] text-[#E5E3DC] font-mono-spec text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 transition-all cursor-pointer group"
              >
                <Cpu className="w-4 h-4 text-[#E53925]" />
                <span>EXPLORE WORKSHOP RANGE</span>
              </a>

            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-spec text-xs text-[#555550]">
              <div className="flex items-center gap-2 border-l-2 border-[#E53925] pl-3 py-1">
                <CheckCircle2 className="w-4 h-4 text-[#E53925] shrink-0" />
                <span className="font-bold text-[#111111]">Zero Unnecessary Work</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 border-[#E53925] pl-3 py-1">
                <CheckCircle2 className="w-4 h-4 text-[#E53925] shrink-0" />
                <span className="font-bold text-[#111111]">DPF & Wet Belt Spec</span>
              </div>
              <div className="flex items-center gap-2 border-l-2 border-[#E53925] pl-3 py-1 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#E53925] shrink-0" />
                <span className="font-bold text-[#111111]">Step-Free Access</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Poster Artwork Frame */}
          <div className="lg:col-span-5 relative">
            <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#DEDBD3] border-2 border-[#111111] p-4 shadow-xl">
              
              {/* Header bar */}
              <div className="flex justify-between items-center px-3 py-2 bg-[#E5E3DC] border-b border-[#111111] font-mono-spec text-xs font-bold mb-3">
                <span className="text-[#E53925]">// WORKSHOP FLOOR: 001</span>
                <span>SITTINGBOURNE LAB</span>
              </div>

              {/* Poster Image */}
              <div className="relative overflow-hidden aspect-[4/3] border border-[#111111] bg-black">
                <img
                  src="/images/garage_workshop.png"
                  alt="Dan's Automotive Workshop Floor"
                  className="w-full h-full object-cover filter contrast-125 saturate-110 hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Overlaid HUD Spec Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#E5E3DC]/95 backdrop-blur-md border border-[#111111] font-mono-spec text-xs text-[#111111]">
                  <div className="flex justify-between items-center border-b border-[#111111]/20 pb-1.5 mb-1.5">
                    <span className="font-bold uppercase tracking-wider">DAN'S WORKSHOP SPEC</span>
                    <span className="text-[#E53925] font-bold">4.8★ GOOGLE</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#555550]">
                    <div>
                      <span className="text-[#111111]/60 block font-bold">LOCATION:</span>
                      <span className="text-[#111111] font-semibold">Sittingbourne, Kent</span>
                    </div>
                    <div>
                      <span className="text-[#111111]/60 block font-bold">COMMUNITY TRUST:</span>
                      <span className="text-[#111111] font-semibold">9,000+ FB Likes</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#E53925] text-white text-[10px] font-mono-spec px-2 py-0.5 font-bold uppercase tracking-wider border border-[#111111]">
                  DAN & JENNA // SITTINGBOURNE
                </div>

              </div>

              {/* Bottom Spec Footer */}
              <div className="flex justify-between items-center px-3 py-2 bg-[#E5E3DC] border-t border-[#111111] font-mono-spec text-[10px] font-bold text-[#555550] mt-3">
                <span>LAT: 51.3418° N, 0.6974° E</span>
                <span className="text-[#111111]">REF: NEWINGTON GARAGE</span>
              </div>

            </div>
          </div>

        </div>

        {/* Clean Paper Ticker Ribbon */}
        <div className="mt-14 paper-ticker py-3.5 px-4 font-mono-spec text-xs text-[#111111] flex flex-wrap items-center justify-around gap-4 font-bold tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <span className="text-[#E53925] font-black">/</span>
            <span>4.8★ GOOGLE RATED</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E53925] font-black">/</span>
            <span className="text-[#E53925]">165+ VERIFIED REVIEWS</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E53925] font-black">/</span>
            <span>9,000+ FB LIKES</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E53925] font-black">/</span>
            <span className="text-[#E53925]">100% ON-SITE GARAGE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E53925] font-black">/</span>
            <span>ECOBOOST & PURETECH WET BELT SPEC</span>
          </div>
        </div>

      </div>
    </section>
  );
}
