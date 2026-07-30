import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, CreditCard, Accessibility, ExternalLink, ShieldCheck, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function ContactAndHours({ onOpenBooking }) {
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [ukTimeStr, setUkTimeStr] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', vehicleReg: '', service: 'General Service / MOT', message: '' });

  useEffect(() => {
    const checkUKHours = () => {
      const options = { timeZone: 'Europe/London', hour12: false, weekday: 'short', hour: '2-digit', minute: '2-digit' };
      const formatter = new Intl.DateTimeFormat([], options);
      const parts = formatter.formatToParts(new Date());

      let weekday = '';
      let hour = 0;
      let minute = 0;

      parts.forEach(p => {
        if (p.type === 'weekday') weekday = p.value;
        if (p.type === 'hour') hour = parseInt(p.value, 10);
        if (p.type === 'minute') minute = parseInt(p.value, 10);
      });

      const currentMinutes = hour * 60 + minute;
      setUkTimeStr(`${weekday} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')} UK TIME`);

      if (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekday)) {
        setIsOpenNow(currentMinutes >= 540 && currentMinutes < 1050);
      } else if (weekday === 'Sat') {
        setIsOpenNow(currentMinutes >= 540 && currentMinutes < 750);
      } else {
        setIsOpenNow(false);
      }
    };

    checkUKHours();
    const interval = setInterval(checkUKHours, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', vehicleReg: '', service: 'General Service / MOT', message: '' });
    }, 5000);
  };

  const scheduleHours = [
    { day: 'MONDAY', hours: '09:00 – 17:30', status: 'OPEN' },
    { day: 'TUESDAY', hours: '09:00 – 17:30', status: 'OPEN' },
    { day: 'WEDNESDAY', hours: '09:00 – 17:30', status: 'OPEN' },
    { day: 'THURSDAY', hours: '09:00 – 17:30', status: 'OPEN' },
    { day: 'FRIDAY', hours: '09:00 – 17:30', status: 'OPEN' },
    { day: 'SATURDAY', hours: '09:00 – 12:30', status: 'HALF DAY' },
    { day: 'SUNDAY', hours: 'CLOSED', status: 'REST DAY' },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A] border-t border-white/10 relative grain-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <div className="font-mono-spec text-xs text-[#C21F2E] tracking-widest uppercase font-semibold mb-2 flex items-center gap-2">
              <span>[ 06 // LOCATION, HOURS & DIRECT CONTACT ]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-white uppercase tracking-tight">
              FIND US IN <span className="text-[#C21F2E]">SITTINGBOURNE</span>
            </h2>
          </div>
          
          {/* Live Open / Closed Pill */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <div className={`px-4 py-2 border font-mono-spec text-xs uppercase font-bold flex items-center gap-2 ${
              isOpenNow 
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                : 'bg-[#C21F2E]/10 border-[#C21F2E]/40 text-[#C21F2E]'
            }`}>
              <span className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-[#C21F2E]'}`}></span>
              <span>WORKSHOP STATUS: {isOpenNow ? 'OPEN NOW' : 'CLOSED NOW'}</span>
            </div>
            <span className="font-mono-spec text-xs text-[#9A9A95] hidden xl:inline">{ukTimeStr}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Opening Hours Engine Plate + Location Spec */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Opening Hours Spec Table Frame */}
            <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#121212] border border-white/10 p-5 shadow-2xl">
              
              <div className="flex justify-between items-center pb-3 mb-4 border-b border-white/10 font-mono-spec text-xs">
                <span className="text-[#C21F2E] font-bold flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> OPERATING HOURS SPEC PLATE
                </span>
                <span className="text-[#9A9A95]">NEWINGTON WORKSHOP</span>
              </div>

              <div className="divide-y divide-white/5 font-mono-spec text-xs">
                {scheduleHours.map((sh, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between items-center hover:bg-white/5 px-2 transition-colors">
                    <span className="text-white font-bold">{sh.day}</span>
                    <div className="flex items-center gap-4">
                      <span className={sh.hours === 'CLOSED' ? 'text-[#C21F2E] font-bold' : 'text-[#EDEDEA]'}>
                        {sh.hours}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 font-bold ${
                        sh.status === 'OPEN' ? 'bg-emerald-500/20 text-emerald-400' :
                        sh.status === 'HALF DAY' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {sh.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center font-mono-spec text-[11px] text-[#9A9A95]">
                <span>ON-SITE EMERGENCY DROP-OFF AVAILABLE</span>
                <span className="text-white">SAT APPOINTMENTS RECOMMENDED</span>
              </div>

            </div>

            {/* Address & Practicalities Box */}
            <div className="p-6 bg-[#121212] border border-white/10 space-y-4 font-mono-spec text-xs">
              <div className="text-xs text-[#C21F2E] font-bold uppercase">// ADDRESS & DIRECTION SPEC</div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C21F2E] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold block text-sm">DAN'S AUTOMOTIVE SERVICES</span>
                  <span className="text-[#EDEDEA] block">Unit 1, 172a New Farm, High Street</span>
                  <span className="text-[#EDEDEA] block">Newington, Sittingbourne, Kent ME9 7JH, UK</span>
                  <span className="text-[#9A9A95] text-[11px] mt-1 block">Easy access off A2 High Street in Newington</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <Phone className="w-5 h-5 text-[#C21F2E] shrink-0" />
                <div>
                  <span className="text-[#9A9A95] block text-[10px]">DIRECT PHONE / WHATSAPP:</span>
                  <a href="tel:+447487575483" className="text-white font-bold text-base hover:text-[#C21F2E] transition-colors">
                    +44 7487 575483 <span className="text-xs text-white/50">(07487 575483)</span>
                  </a>
                </div>
              </div>

              {/* Payment & Accessibility Tags */}
              <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-3 text-[11px] text-[#9A9A95]">
                <div className="flex items-center gap-2">
                  <Accessibility className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Wheelchair Park & Step-Free Entrance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#C21F2E] shrink-0" />
                  <span>Cards, Apple Pay & Contactless NFC</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Workshop Message Form */}
          <div className="lg:col-span-6">
            <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#121212] border border-white/10 p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between">
              
              <div>
                <div className="flex justify-between items-center pb-3 mb-6 border-b border-white/10 font-mono-spec text-xs">
                  <span className="text-[#C21F2E] font-bold uppercase">// DIRECT WORKSHOP INQUIRY</span>
                  <span className="text-[#9A9A95]">FAST RESPONSE</span>
                </div>

                {formSubmitted ? (
                  <div className="p-8 bg-emerald-500/10 border border-emerald-500/40 text-center space-y-4 my-8">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="font-display text-2xl text-white uppercase">INQUIRY RECEIVED</h4>
                    <p className="font-mono-spec text-xs text-[#EDEDEA]">
                      Thank you! Dan or Jenna will review your vehicle details and call you back shortly on the phone number provided.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 font-mono-spec text-xs">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#9A9A95] uppercase mb-1">YOUR NAME *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Marcus Vance"
                          className="w-full bg-[#0A0A0A] border border-white/15 focus:border-[#C21F2E] p-3 text-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[#9A9A95] uppercase mb-1">PHONE NUMBER *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07700 900123"
                          className="w-full bg-[#0A0A0A] border border-white/15 focus:border-[#C21F2E] p-3 text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#9A9A95] uppercase mb-1">VEHICLE REGISTRATION</label>
                        <input
                          type="text"
                          value={formData.vehicleReg}
                          onChange={e => setFormData({ ...formData, vehicleReg: e.target.value.toUpperCase() })}
                          placeholder="e.g. GK70 ABC"
                          className="w-full bg-[#0A0A0A] border border-white/15 focus:border-[#C21F2E] p-3 text-yellow-400 font-bold uppercase tracking-wider focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[#9A9A95] uppercase mb-1">SERVICE TYPE</label>
                        <select
                          value={formData.service}
                          onChange={e => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#0A0A0A] border border-white/15 focus:border-[#C21F2E] p-3 text-white focus:outline-none"
                        >
                          <option value="General Service / MOT">General Service / MOT</option>
                          <option value="Engine Diagnostics">Engine Diagnostics</option>
                          <option value="DPF Cleaning">DPF Cleaning Spec</option>
                          <option value="Wet Belt Replacement">Wet Belt / Cambelt</option>
                          <option value="Aircon Re-gas">Aircon Re-gas</option>
                          <option value="Clutch / Brakes">Clutch / Brakes</option>
                          <option value="Suspension / Steering">Suspension / Steering</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#9A9A95] uppercase mb-1">YOUR MESSAGE / SYMPTOMS</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe any warning lights, noises, or services required..."
                        className="w-full bg-[#0A0A0A] border border-white/15 focus:border-[#C21F2E] p-3 text-white focus:outline-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-clipped w-full py-3.5 bg-[#C21F2E] hover:bg-[#E61C24] text-white font-mono-spec text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>SEND INQUIRY TO DAN & JENNA</span>
                    </button>

                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center font-mono-spec text-[10px] text-[#9A9A95]">
                <span>NO SPAM GUARANTEE</span>
                <span>DIRECT PHONE SUPPORT: 07487 575483</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
