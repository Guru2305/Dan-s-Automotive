import React from 'react';
import { ShieldCheck, CreditCard, Accessibility, Wrench, Video, Compass } from 'lucide-react';

export default function WhyChooseUs() {
  const practicalities = [
    {
      code: '01 —',
      title: 'ZERO UNNECESSARY WORK',
      desc: 'We never upsell or perform unneeded parts replacements. We show you the old part and explain why it failed.',
      icon: ShieldCheck,
    },
    {
      code: '02 —',
      title: 'WHEELCHAIR ACCESSIBLE',
      desc: 'Step-free entrance and designated accessible parking bay right outside our workshop reception.',
      icon: Accessibility,
    },
    {
      code: '03 —',
      title: '100% ON-SITE REPAIRS',
      desc: 'No outsourcing to third parties. All diagnostics, engine overhauls, and repairs happen directly in our Sittingbourne unit.',
      icon: Wrench,
    },
    {
      code: '04 —',
      title: 'CONTACTLESS & CARD PAYMENTS',
      desc: 'We accept major credit cards, debit cards, Apple Pay, Google Pay, and contactless NFC mobile payments.',
      icon: CreditCard,
    },
    {
      code: '05 —',
      title: 'CUSTOM TEST DRIVES WITH DAN',
      desc: 'Have a weird noise or vibration? Dan will join you in the car to diagnose it in real driving conditions.',
      icon: Compass,
    },
    {
      code: '06 —',
      title: 'ACTIVE TIKTOK & FACEBOOK SOCIALS',
      desc: 'Watch real workshop breakdowns, DPF cleans, and wet belt overhauls on our social channels before you visit.',
      icon: Video,
    },
  ];

  return (
    <section id="whyus" className="py-20 bg-[#0B0B0C] text-[#E2E4E9] border-t border-white/10 relative carbon-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono-spec text-xs text-[#DC2626] tracking-widest uppercase font-bold mb-2">
              [ 04 // PRACTICALITIES & GARAGE STANDARDS ]
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              WHY DRIVERS <span className="text-[#DC2626]">CHOOSE DAN'S</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-mono-spec text-[#8A8F9E] max-w-md font-semibold">
            EVERY DETAIL DESIGNED FOR DRIVER CONVENIENCE, ACCESSIBILITY & ABSOLUTE PEACE OF MIND.
          </p>
        </div>

        {/* 6 Panel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hairline-grid-carbon border border-white/10 bg-[#141417] mb-16">
          {practicalities.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="bg-[#141417] p-6 hover:bg-[#1A1A1E] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono-spec text-base text-[#DC2626] font-bold">{item.code}</span>
                    <div className="p-2 bg-[#0B0B0C] border border-white/10 text-white group-hover:bg-[#DC2626] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8A8F9E] font-sans-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 font-mono-spec text-[10px] text-white/40 font-bold group-hover:text-[#DC2626] transition-colors">
                  VERIFIED STANDARDS // 100%
                </div>
              </div>
            );
          })}
        </div>

        {/* Social Highlight Banner */}
        <div className="bg-[#141417] border border-white/10 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-[#DC2626]/10 border border-[#DC2626]/30 text-[#DC2626] font-mono-spec text-xs uppercase font-bold">
              <Video className="w-3.5 h-3.5" />
              <span>TIKTOK & FACEBOOK COMMUNITY</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide">
              SEE US IN ACTION BEFORE YOU VISIT
            </h3>
            <p className="text-sm text-[#8A8F9E] font-sans-body max-w-2xl leading-relaxed font-normal">
              We post unedited footage of diagnostic challenges, wet belt overhauls, and DPF cleaning results. Join over 9,000+ followers who trust Dan's Automotive before even stepping foot in our Sittingbourne garage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hallmark px-6 py-3 bg-[#0B0B0C] hover:bg-[#1A1A1E] border border-white/10 text-white font-mono-spec text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>FACEBOOK (9,000+ LIKES)</span>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hallmark-reverse px-6 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-mono-spec text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>WATCH TIKTOK VIDEOS</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
