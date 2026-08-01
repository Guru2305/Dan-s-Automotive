import React from 'react';
import { ShieldCheck, HeartHandshake, Award, Users, Compass } from 'lucide-react';

export default function About() {
  const values = [
    {
      code: 'VAL // 01',
      title: 'Radical Honesty & Zero Upselling',
      desc: 'We tell you exactly what your car needs and what can wait. If a part still has life, we leave it. No false urgency, no hidden charges, no unnecessary replacements.',
      icon: ShieldCheck,
    },
    {
      code: 'VAL // 02',
      title: 'Personal Hands-On Service',
      desc: 'Dan, Jenna, and Matt personally oversee every job. From road testing alongside you to explaining diagnostics in plain English, you deal directly with the mechanics working on your car.',
      icon: HeartHandshake,
    },
    {
      code: 'VAL // 03',
      title: 'Regional Trust & Distance Travelled',
      desc: 'Regulars travel from across Kent and surrounding counties because true mechanical integrity is hard to find. We remember your vehicle history and your preferences.',
      icon: Compass,
    },
    {
      code: 'VAL // 04',
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
    <section id="about" className="py-20 bg-[#EAE6DF] border-t-2 border-[#1A1A18] relative grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Spec Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#1A1A18]/30 pb-6">
          <div>
            <div className="font-mono-spec text-xs text-[#C83723] tracking-widest uppercase font-semibold mb-2">
              [ 01 // THE MANIFESTO OF DAN'S AUTOMOTIVE SERVICES ]
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-[#1A1A18] uppercase tracking-tight">
              BUILT ON TRUST. <span className="text-[#C83723]">RUN BY FAMILY.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs font-mono-spec text-[#6E6D68] max-w-md">
            LOCATED AT NEW FARM, NEWINGTON, SITTINGBOURNE. SERVING DRIVERS WHO VALUE REAL MECHANICAL INTEGRITY.
          </p>
        </div>

        {/* Story Grid: Editorial Paragraphs + Workshop Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 bg-[#1A1A18] text-[#EAE6DF] font-mono-spec text-xs uppercase">
              // THE STORY BEHIND THE GARAGE
            </div>
            
            <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#1A1A18] italic leading-snug">
              "We built Dan's Automotive to be the garage we'd want to bring our own family vehicles to."
            </h3>

            <div className="space-y-4 text-[#1A1A18]/90 font-serif-editorial leading-relaxed text-lg">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:text-[#C83723] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Founded by <strong className="font-bold text-[#1A1A18]">Dan and Jenna</strong> in Sittingbourne, Kent, Dan's Automotive Services started with a simple belief: car repair shouldn't involve stress, confusing jargon, or inflated bills.
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
              <div className="p-3 bg-[#F4F0E8] border border-[#1A1A18] border-l-4 border-l-[#C83723]">
                <span className="text-[#1A1A18] font-bold block mb-1">PROVEN GOOGLE RATING</span>
                <span className="text-[#6E6D68]">4.8 Stars out of 165+ independent reviews</span>
              </div>
              <div className="p-3 bg-[#F4F0E8] border border-[#1A1A18] border-l-4 border-l-[#C83723]">
                <span className="text-[#1A1A18] font-bold block mb-1">100% IN-HOUSE REPAIRS</span>
                <span className="text-[#6E6D68]">All work carried out on our workshop lifts</span>
              </div>
            </div>

          </div>

          {/* Right Image Frame with Crop-Mark Corner Brackets */}
          <div className="lg:col-span-6">
            <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#F4F0E8] border-2 border-[#1A1A18] p-3 shadow-md relative">
              
              <div className="flex justify-between items-center px-3 py-1.5 bg-[#1A1A18] text-white font-mono-spec text-[11px] mb-2">
                <span>WORKSHOP FLOOR // NEWINGTON ME9</span>
                <span className="text-[#C83723] font-bold">CREW: DAN, JENNA, MATT</span>
              </div>

              <div className="relative overflow-hidden aspect-[4/3] border border-[#1A1A18]">
                <img
                  src="/images/garage_workshop.png"
                  alt="Dan's Automotive Garage Workshop in Sittingbourne"
                  className="w-full h-full object-cover filter contrast-110 saturate-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#EAE6DF]/95 backdrop-blur-xs border border-[#1A1A18] font-mono-spec text-xs">
                  <span className="text-[#C83723] font-bold block uppercase">EQUIPPED FOR ALL MAKES & MODELS</span>
                  <span className="text-[#6E6D68] text-[11px]">From everyday economical hatchbacks to high-performance engines</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Team Members Spec Bar */}
        <div className="mb-16">
          <div className="font-mono-spec text-xs text-[#6E6D68] uppercase tracking-widest mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-[#C83723]" />
            <span>MEET THE CREW AT DAN'S AUTOMOTIVE SERVICES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 hairline-grid border-2 border-[#1A1A18] bg-[#F4F0E8]">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-[#F4F0E8] p-6 hover:bg-[#EAE6DF] transition-colors relative">
                <div className="font-mono-spec text-[10px] text-[#C83723] mb-2">// CREW Nº 0{idx + 1}</div>
                <h4 className="font-display text-2xl text-[#1A1A18] tracking-wide uppercase mb-1">{member.name}</h4>
                <div className="font-mono-spec text-xs text-[#C83723] font-semibold mb-3">{member.role}</div>
                <p className="text-xs text-[#6E6D68] font-serif-editorial leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Spec Grid */}
        <div>
          <div className="font-mono-spec text-xs text-[#C83723] tracking-widest uppercase font-semibold mb-4">
            [ OUR WORKSHOP CODE & PROMISE ]
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 hairline-grid border-2 border-[#1A1A18] bg-[#F4F0E8]">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-[#F4F0E8] p-6 hover:bg-[#EAE6DF] transition-colors flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-mono-spec text-xs text-[#C83723] font-bold">{v.code}</span>
                      <Icon className="w-5 h-5 text-[#6E6D68] group-hover:text-[#C83723] transition-colors" />
                    </div>
                    <h4 className="font-display text-xl text-[#1A1A18] uppercase mb-2 tracking-wide">{v.title}</h4>
                    <p className="text-xs text-[#6E6D68] font-serif-editorial leading-relaxed">{v.desc}</p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#1A1A18]/20 font-mono-spec text-[10px] text-[#1A1A18]/50 group-hover:text-[#C83723] transition-colors">
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
