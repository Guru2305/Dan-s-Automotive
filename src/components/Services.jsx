import React from 'react';
import { Cpu, Wrench, ShieldAlert, Gauge, Wind, Disc, ArrowUpRight, CheckCircle, Activity, Zap } from 'lucide-react';

export default function Services({ onSelectService }) {
  const serviceList = [
    {
      code: 'SPEC // 01',
      id: 'diagnostics',
      name: 'ENGINE DIAGNOSTICS & ELECTRICAL',
      icon: Cpu,
      price: 'From £45.00',
      time: 'Same-day scan & report',
      badge: 'DEEP ECU DIAGNOSIS',
      desc: 'Dealership-grade fault code scanning, live data analysis, oscilloscope electrical tracing, and sensor diagnostics for all makes and models.',
      symptoms: ['Engine light on', 'Limp mode active', 'Intermittent electrical glitches'],
      highlights: ['OEM Diagnostic Tools', 'Live Data Log', 'Clear Root-Cause Report'],
    },
    {
      code: 'SPEC // 02',
      id: 'mot-servicing',
      name: 'SERVICING & MOT PREPARATION',
      icon: Wrench,
      price: 'Inter £99 / Full £175',
      time: '1/2 Day Turnaround',
      badge: 'MANUFACTURER SPEC',
      desc: 'Full mechanical servicing to manufacturer standards using original or OEM-matching parts, premium lubricants, and thorough 50+ point inspection.',
      symptoms: ['Service indicator due', 'Poor fuel economy', 'Sluggish performance'],
      highlights: ['Digital Service Logged', 'Filter & Oil Flush', 'MOT Pre-Check Included'],
    },
    {
      code: 'SPEC // 03',
      id: 'dpf-cleaning',
      name: 'DPF CLEANING & REGENERATION',
      icon: ShieldAlert,
      price: 'From £160.00',
      time: '3–5 Hour Process',
      badge: 'HIGH PRESSURE FLUSH',
      desc: 'Specialist deep chemical flushing and forced active regeneration for clogged Diesel Particulate Filters. Saves thousands over full replacement.',
      symptoms: ['DPF warning light', 'Loss of power & boost', 'High fuel consumption'],
      highlights: ['Chemical Deep Flush', 'Differential Pressure Check', 'Sub-5g Ash Clearance'],
    },
    {
      code: 'SPEC // 04',
      id: 'wetbelt-cambelt',
      name: 'CAMBELT & WET BELT REPLACEMENT',
      icon: Gauge,
      price: 'Quote on Reg',
      time: '1–2 Days (Specialist)',
      badge: 'FORD ECOBOOST & PURETECH',
      desc: 'Specialist timing belt and wet belt (belt-in-oil) replacement service. Critical preventative maintenance for Ford EcoBoost, Peugeot PureTech & VAG engines.',
      symptoms: ['Oil pressure warning', 'Timing belt age > 5 yrs', 'Ticking timing noise'],
      highlights: ['Sump Debris Cleanse', 'New Oil Pump Strainer', 'Precision Locking Tools'],
    },
    {
      code: 'SPEC // 05',
      id: 'aircon',
      name: 'AIRCON RE-GAS & SANITISATION',
      icon: Wind,
      price: 'R134a £65 / R1234yf £110',
      time: '45 Minute Service',
      badge: 'DUAL GAS CAPABLE',
      desc: 'Complete air conditioning evacuation, vacuum leak testing, fresh PAG oil injection, refrigerant re-gas, and anti-bacterial cabin decontam.',
      symptoms: ['Warm air from vents', 'Musty smell in cabin', 'Noisy compressor clutch'],
      highlights: ['R134a & R1234yf Ready', 'UV Dye Leak Trace', 'Temperature Verified'],
    },
    {
      code: 'SPEC // 06',
      id: 'clutch-brakes',
      name: 'CLUTCH, GEARBOX & BRAKES',
      icon: Disc,
      price: 'Custom Spec Quote',
      time: 'Same-day to 1 Day',
      badge: 'PERFORMANCE & OEM',
      desc: 'Heavy-duty clutch replacements, dual-mass flywheel overhauls, vented performance brake discs, pad replacements, and hydraulic fluid flushes.',
      symptoms: ['Slipping clutch pedal', 'Squealing or grinding brakes', 'Soft brake pedal feel'],
      highlights: ['Brembo & OEM Discs', 'Dual-Mass Flywheel Spec', 'Hydraulic Bleed'],
    },
    {
      code: 'SPEC // 07',
      id: 'suspension',
      name: 'SUSPENSION & STEERING ALIGNMENT',
      icon: Activity,
      price: 'From £60.00',
      time: '1–2 Hour Service',
      badge: 'PRECISION GEOMETRY',
      desc: 'Shock absorber replacements, coil spring renewal, wishbone bushes, ball joints, and precision laser wheel alignment for perfect road holding.',
      symptoms: ['Knocking over bumps', 'Car pulling to one side', 'Uneven tyre wear'],
      highlights: ['Laser Geometry Check', 'OEM Coil Springs', 'Poly/OEM Bushes'],
    },
    {
      code: 'SPEC // 08',
      id: 'electrical-battery',
      name: 'BATTERY, ALTERNATOR & STARTER',
      icon: Zap,
      price: 'From £75.00',
      time: 'Express Fitting',
      badge: 'AGM & EFB READY',
      desc: 'High-capacity AGM/EFB battery replacement with BMS ECU coding, alternator charge testing, and heavy-duty starter motor replacements.',
      symptoms: ['Slow engine crank', 'Battery light on dash', 'Start-stop inactive'],
      highlights: ['BMS Battery Coded', 'Bosch / Yuasa AGM', '12v Charging Test'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0A0A0A] border-t border-white/10 relative grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono-spec text-xs text-[#C21F2E] tracking-widest uppercase font-semibold mb-2">
              [ 03 // TECHNICAL WORKSHOP SERVICES & REPAIR SPEC ]
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              PRECISION <span className="text-[#C21F2E]">GARAGE REPAIRS</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-mono-spec text-[#9A9A95] max-w-md">
            TRANSPARENT FIXED PRICING // NO SURPRISE FEES // FULL DPF & WET BELT SPECIALIST CAPABILITY
          </p>
        </div>

        {/* Spec Sheet Grid (1px Hairline Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 hairline-grid border border-white/10 bg-[#121212] mb-12">
          {serviceList.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.id} 
                className="bg-[#121212] p-6 hover:bg-[#161616] transition-all duration-300 flex flex-col justify-between group border-b md:border-b-0 border-white/5 relative"
              >
                {/* Top Spec Header */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono-spec text-xs text-[#C21F2E] font-bold">{s.code}</span>
                    <span className="px-2 py-0.5 bg-[#C21F2E]/10 border border-[#C21F2E]/30 text-[#C21F2E] font-mono-spec text-[9px] font-bold uppercase tracking-wider">
                      {s.badge}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 bg-[#1A1A1A] border border-white/10 group-hover:border-[#C21F2E] transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-[#C21F2E]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-white uppercase tracking-wide leading-tight">
                        {s.name}
                      </h3>
                      <div className="font-mono-spec text-xs text-white/60 mt-1 flex items-center gap-2">
                        <span className="text-[#C21F2E] font-semibold">{s.price}</span>
                        <span>•</span>
                        <span className="text-[11px]">{s.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#9A9A95] font-sans-body leading-relaxed mb-4">
                    {s.desc}
                  </p>

                  {/* Symptoms & Highlights List */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-white/5 font-mono-spec text-[11px]">
                    <div className="text-[10px] text-[#9A9A95] uppercase font-bold tracking-wider mb-1">// COMMON SYMPTOMS FIXED:</div>
                    {s.symptoms.map((sym, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/80">
                        <span className="w-1.5 h-1.5 bg-[#C21F2E] rounded-full"></span>
                        <span>{sym}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-6">
                    {s.highlights.map((h, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#0A0A0A] border border-white/10 text-[9px] font-mono-spec text-[#EDEDEA]/70">
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  onClick={() => onSelectService(s.name)}
                  className="btn-clipped w-full py-2.5 bg-[#1A1A1A] hover:bg-[#C21F2E] border border-white/10 hover:border-[#C21F2E] text-white font-mono-spec text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer group-hover:text-white"
                >
                  <span>REQUEST QUOTE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C21F2E] group-hover:text-white transition-colors" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Custom Spec Consultation Banner */}
        <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#121212] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="font-mono-spec text-xs text-[#C21F2E] font-bold uppercase">// NEED A CUSTOM MECHANICAL DIAGNOSTIC?</div>
            <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide">
              UNSURE WHAT YOUR VEHICLE NEEDS? TEST-DRIVE DIAGNOSTICS WITH DAN.
            </h3>
            <p className="text-sm text-[#9A9A95] font-sans-body max-w-2xl">
              We frequently take customers out on diagnostic road tests to hear and feel the issue together before recommending any work.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Diagnostic Consultation')}
            className="btn-clipped px-6 py-3.5 bg-[#C21F2E] hover:bg-[#E61C24] text-white font-mono-spec text-xs font-bold uppercase tracking-widest flex items-center gap-2 shrink-0 cursor-pointer shadow-lg"
          >
            <span>BOOK DIAGNOSTIC TEST</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
