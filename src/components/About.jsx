import React from 'react';
import { ShieldCheck, HeartHandshake, Award, Users, Compass } from 'lucide-react';

export default function About() {
  const values = [
    {
      code: '01 —',
      title: 'Radical Honesty & Zero Upselling',
      desc: 'We tell you exactly what your car needs and what can wait. If a part still has life, we leave it. No false urgency, no hidden charges, no unnecessary replacements.',
      icon: ShieldCheck,
    },
    {
      code: '02 —',
      title: 'Personal Hands-On Service',
      desc: 'Dan, Jenna, and Matt personally oversee every job. From road testing alongside you to explaining diagnostics in plain English, you deal directly with the mechanics working on your car.',
      icon: HeartHandshake,
    },
    {
      code: '03 —',
      title: 'Regional Trust & Distance Travelled',
      desc: 'Regulars travel from across Kent and surrounding counties because true mechanical integrity is hard to find. We remember your vehicle history and your preferences.',
      icon: Compass,
    },
    {
      code: '04 —',
      title: 'Authentic Workshop Transparency',
      desc: 'Through our active social channels and TikTok, we showcase real workshop diagnoses before and after repairs. What you see online is exactly how we run our workshop floor.',
      icon: Award,
    },
  ];

  const teamMembers = [
    { name: 'DAN', role: 'FOUNDER & LEAD DIAGNOSTIC MASTER', desc: 'Expert in complex electrical troubleshooting, DPF regeneration, wet belt timing & mechanical overhauls.' },
    { name: 'JENNA (JAYNA)', role: 'CO-FOUNDER & CUSTOMER OPERATIONS DIRECTOR', desc: 'Ensures clear communication, transparent quotes, parts sourcing and dedicated customer care.' },
    { name: 'MATT', role: 'SENIOR TECHNICIAN & MOT SPECIALIST', desc: 'Specialises in brakes, clutches, suspension systems and thorough pre-MOT inspections.' },
  ];

  return (
    <section id="about" className="py-20 bg-[#E5E3DC] text-[#111111] border-t-2 border-[#111111] relative newsprint-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Spec Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-[#111111] pb-6">
          <div>
            <div className="font-mono-spec text-xs text-[#E53925] tracking-widest uppercase font-bold mb-2">
              [ 02 // ABOUT DAN'S AUTOMOTIVE SERVICES ]
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-[#111111] uppercase tracking-tight">
              BUILT ON TRUST. <span className="text-[#E53925]">RUN BY FAMILY.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-mono-spec text-[#555550] max-w-md font-bold">
            LOCATED AT NEW FARM, NEWINGTON, SITTINGBOURNE. SERVING DRIVERS WHO VALUE REAL MECHANICAL INTEGRITY.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 bg-[#DEDBD3] border border-[#111111] font-mono-spec text-xs text-[#E53925] uppercase font-bold">
              // THE STORY BEHIND THE GARAGE
            </div>
            
            <h3 className="font-display text-3xl sm:text-4xl text-[#111111] uppercase leading-snug">
              "We built Dan's Automotive to be the garage we'd want to bring our own family vehicles to."
            </h3>

            <div className="space-y-4 text-[#555550] font-sans-body leading-relaxed text-base">
              <p>
                Founded by <strong className="text-[#111111] font-bold">Dan and Jenna</strong> in Sittingbourne, Kent, Dan's Automotive Services started with a simple belief: car repair shouldn't involve stress, confusing jargon, or inflated bills.
              </p>
              <p>
                Over years of dedicated service, our reputation has grown purely through word of mouth and authentic social transparency. Drivers regularly travel long distances across Kent and London because they know Dan, Jenna, Matt, and the team treat every car with precision and respect.
              </p>
              <p>
                Whether you need a complex DPF clean, a delicate wet belt timing replacement, an MOT preparation, or a full brake overhaul, you get 100% upfront pricing and complete mechanical clarity.
              </p>
            </div>

            {/* Quick Highlights */}
            <div className="pt-2 grid grid-cols-2 gap-4 font-mono-spec text-xs">
              <div className="p-3 bg-[#DEDBD3] border border-[#111111] border-l-4 border-l-[#E53925]">
                <span className="text-[#111111] font-bold block mb-1">PROVEN GOOGLE RATING</span>
                <span className="text-[#555550]">4.8 Stars out of 165+ independent reviews</span>
              </div>
              <div className="p-3 bg-[#DEDBD3] border border-[#111111] border-l-4 border-l-[#E53925]">
                <span className="text-[#111111] font-bold block mb-1">100% IN-HOUSE REPAIRS</span>
                <span className="text-[#555550]">All work carried out on our workshop lifts</span>
              </div>
            </div>

          </div>

          {/* Right Image Frame with Crop-Mark Corner Brackets */}
          <div className="lg:col-span-6">
            <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#DEDBD3] border-2 border-[#111111] p-3 shadow-xl relative">
              
              <div className="flex justify-between items-center px-3 py-1.5 bg-[#E5E3DC] border-b border-[#111111] font-mono-spec text-[11px] text-[#555550] font-bold mb-2">
                <span>WORKSHOP FLOOR // NEWINGTON ME9</span>
                <span className="text-[#E53925]">TEAM: DAN, JENNA, MATT</span>
              </div>

              <div className="relative overflow-hidden aspect-[4/3] border border-[#111111]">
                <img
                  src="/images/garage_workshop.png"
                  alt="Dan's Automotive Garage Workshop in Sittingbourne"
                  className="w-full h-full object-cover filter contrast-125 saturate-110 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#E5E3DC]/95 backdrop-blur-md border border-[#111111] font-mono-spec text-xs">
                  <span className="text-[#E53925] font-bold block">EQUIPPED FOR ALL MAKES & MODELS</span>
                  <span className="text-[#555550] text-[11px] font-bold">From everyday economical hatchbacks to high-performance engines</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Team Members Spec Bar */}
        <div className="mb-16">
          <div className="font-mono-spec text-xs text-[#555550] uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
            <Users className="w-4 h-4 text-[#E53925]" />
            <span>MEET THE TEAM AT DAN'S AUTOMOTIVE SERVICES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 hairline-grid-light border-2 border-[#111111] bg-[#DEDBD3]">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-[#E5E3DC] p-6 hover:bg-[#DEDBD3] transition-colors relative">
                <div className="font-mono-spec text-xs text-[#E53925] font-bold mb-2">0{idx + 1} — CREW</div>
                <h4 className="font-display text-2xl text-[#111111] tracking-wide uppercase mb-1">{member.name}</h4>
                <div className="font-mono-spec text-xs text-[#E53925] font-bold mb-3">{member.role}</div>
                <p className="text-xs text-[#555550] font-sans-body leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Spec Grid (Hairline Grid Layout) */}
        <div>
          <div className="font-mono-spec text-xs text-[#E53925] tracking-widest uppercase font-bold mb-4">
            [ OUR WORKSHOP CODE & PROMISE ]
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 hairline-grid-light border-2 border-[#111111] bg-[#DEDBD3]">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-[#E5E3DC] p-6 hover:bg-[#DEDBD3] transition-colors flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono-spec text-base text-[#E53925] font-bold">{v.code}</span>
                      <Icon className="w-5 h-5 text-[#555550] group-hover:text-[#E53925] transition-colors" />
                    </div>
                    <h4 className="font-display text-xl text-[#111111] uppercase mb-2 tracking-wide">{v.title}</h4>
                    <p className="text-xs text-[#555550] font-sans-body leading-relaxed">{v.desc}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#111111]/10 font-mono-spec text-[10px] text-[#111111]/60 font-bold group-hover:text-[#E53925] transition-colors">
                    GUARANTEED // 100%
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
