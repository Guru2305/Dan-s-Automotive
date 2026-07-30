import React from 'react';
import { ShieldCheck, CreditCard, Accessibility, Wrench, Smartphone, Video, Compass, Sparkles, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const practicalities = [
    {
      code: 'PRAC // 01',
      title: 'ZERO UNNECESSARY WORK',
      desc: 'We never upsell or perform unneeded parts replacements. We show you the old part and explain why it failed.',
      icon: ShieldCheck,
    },
    {
      code: 'PRAC // 02',
      title: 'WHEELCHAIR ACCESSIBLE',
      desc: 'Step-free entrance and designated accessible parking bay right outside our workshop reception.',
      icon: Accessibility,
    },
    {
      code: 'PRAC // 03',
      title: '100% ON-SITE REPAIRS',
      desc: 'No outsourcing to third parties. All diagnostics, engine overhauls, and repairs happen directly in our Sittingbourne unit.',
      icon: Wrench,
    },
    {
      code: 'PRAC // 04',
      title: 'CONTACTLESS & CARD PAYMENTS',
      desc: 'We accept major credit cards, debit cards, Apple Pay, Google Pay, and contactless NFC mobile payments.',
      icon: CreditCard,
    },
    {
      code: 'PRAC // 05',
      title: 'CUSTOM TEST DRIVES WITH DAN',
      desc: 'Have a weird noise or vibration? Dan will join you in the car to diagnose it in real driving conditions.',
      icon: Compass,
    },
    {
      code: 'PRAC // 06',
      title: 'ACTIVE TIKTOK & FACEBOOK SOCIALS',
      desc: 'Watch real workshop breakdowns, DPF cleans, and wet belt overhauls on our social channels before you visit.',
      icon: Video,
    },
  ];

  return (
    <section id="whyus" className="py-20 bg-[#0A0A0A] border-t border-white/10 relative grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono-spec text-xs text-[#C21F2E] tracking-widest uppercase font-semibold mb-2">
              [ 04 // PRACTICALITIES & GARAGE STANDARDS ]
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              WHY DRIVERS <span className="text-[#C21F2E]">CHOOSE DAN'S</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-mono-spec text-[#9A9A95] max-w-md">
            EVERY DETAIL DESIGNED FOR DRIVER CONVENIENCE, ACCESSIBILITY & ABSOLUTE PEACE OF MIND.
          </p>
        </div>

        {/* 6 Panel Hairline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hairline-grid border border-white/10 bg-[#121212] mb-16">
          {practicalities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="bg-[#121212] p-6 hover:bg-[#161616] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono-spec text-xs text-[#C21F2E] font-bold">{item.code}</span>
                    <div className="p-2 bg-[#1A1A1A] border border-white/10 group-hover:border-[#C21F2E] transition-colors">
                      <Icon className="w-5 h-5 text-[#C21F2E]" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9A9A95] font-sans-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/5 font-mono-spec text-[10px] text-white/30 group-hover:text-emerald-400 transition-colors">
                  VERIFIED STANDARDS // 100%
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Credibility Highlight Slab */}
        <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#121212] border border-white/10 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-[#C21F2E]/10 border border-[#C21F2E]/30 text-[#C21F2E] font-mono-spec text-xs uppercase font-bold">
              <Video className="w-3.5 h-3.5" />
              <span>TIKTOK & FACEBOOK COMMUNITY</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide">
              SEE US IN ACTION BEFORE YOU VISIT
            </h3>
            <p className="text-sm text-[#9A9A95] font-sans-body max-w-2xl leading-relaxed">
              We post unedited footage of diagnostic challenges, wet belt overhauls, and DPF cleaning results. Join over 9,000+ followers who trust Dan's Automotive before even stepping foot in our Sittingbourne garage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-clipped px-6 py-3 bg-[#1A1A1A] hover:bg-[#C21F2E] border border-white/20 text-white font-mono-spec text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>FACEBOOK (9,000+ LIKES)</span>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-clipped-reverse px-6 py-3 bg-[#C21F2E] hover:bg-[#E61C24] text-white font-mono-spec text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>WATCH TIKTOK VIDEOS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
