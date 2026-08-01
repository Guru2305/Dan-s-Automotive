import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, CreditCard, Accessibility, Send, CheckCircle2 } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-[#E5E3DC] text-[#111111] border-t-2 border-[#111111] relative newsprint-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-[#111111] pb-6">
          <div>
            <div className="font-mono-spec text-xs text-[#E53925] tracking-widest uppercase font-bold mb-2 flex items-center gap-2">
              <span>[ 06 // LOCATION, HOURS & DIRECT CONTACT ]</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl text-[#111111] uppercase tracking-tight">
              FIND US IN <span className="text-[#E53925]">SITTINGBOURNE</span>
            </h2>
          </div>
          
          {/* Live Open / Closed Pill */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <div className={`px-4 py-2 border-2 font-mono-spec text-xs uppercase font-bold flex items-center gap-2 ${
              isOpenNow 
                ? 'bg-emerald-500/10 border-emerald-600 text-emerald-700'
                : 'bg-[#E53925]/10 border-[#E53925] text-[#E53925]'
            }`}>
              <span className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-emerald-600 animate-pulse' : 'bg-[#E53925]'}`}></span>
              <span>WORKSHOP STATUS: {isOpenNow ? 'OPEN NOW' : 'CLOSED NOW'}</span>
            </div>
            <span className="font-mono-spec text-xs text-[#555550] font-bold hidden xl:inline">{ukTimeStr}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Opening Hours Engine Plate + Location Spec */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Opening Hours Spec Table Frame */}
            <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#DEDBD3] border-2 border-[#111111] p-5 shadow-xl">
              
              <div className="flex justify-between items-center pb-3 mb-4 border-b border-[#111111] font-mono-spec text-xs font-bold">
                <span className="text-[#E53925] flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> OPERATING HOURS SPEC PLATE
                </span>
                <span className="text-[#555550]">NEWINGTON WORKSHOP</span>
              </div>

              <div className="divide-y divide-[#111111]/10 font-mono-spec text-xs">
                {scheduleHours.map((sh, idx) => (
                  <div key={idx} className="py-2.5 flex justify-between items-center hover:bg-[#111111]/5 px-2 transition-colors">
                    <span className="text-[#111111] font-bold">{sh.day}</span>
                    <div className="flex items-center gap-4">
                      <span className={sh.hours === 'CLOSED' ? 'text-[#E53925] font-bold' : 'text-[#111111] font-medium'}>
                        {sh.hours}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 font-bold ${
                        sh.status === 'OPEN' ? 'bg-emerald-600/20 text-emerald-800 border border-emerald-700' :
                        sh.status === 'HALF DAY' ? 'bg-amber-500/20 text-amber-900 border border-amber-700' :
                        'bg-red-500/20 text-red-800 border border-red-700'
                      }`}>
                        {sh.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#111111]/20 flex justify-between items-center font-mono-spec text-[11px] text-[#555550] font-bold">
                <span>ON-SITE EMERGENCY DROP-OFF AVAILABLE</span>
                <span className="text-[#111111]">SAT APPOINTMENTS RECOMMENDED</span>
              </div>

            </div>

            {/* Address & Practicalities Box */}
            <div className="p-6 bg-[#DEDBD3] border-2 border-[#111111] space-y-4 font-mono-spec text-xs">
              <div className="text-xs text-[#E53925] font-bold uppercase">// ADDRESS & DIRECTION SPEC</div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E53925] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#111111] font-bold block text-sm">DAN'S AUTOMOTIVE SERVICES</span>
                  <span className="text-[#111111] block font-medium">Unit 1, 172a New Farm, High Street</span>
                  <span className="text-[#111111] block font-medium">Newington, Sittingbourne, Kent ME9 7JH, UK</span>
                  <span className="text-[#555550] text-[11px] mt-1 block font-bold">Easy access off A2 High Street in Newington</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#111111]/10">
                <Phone className="w-5 h-5 text-[#E53925] shrink-0" />
                <div>
                  <span className="text-[#555550] block text-[10px] font-bold">DIRECT PHONE / WHATSAPP:</span>
                  <a href="tel:+447487575483" className="text-[#111111] font-bold text-base hover:text-[#E53925] transition-colors">
                    +44 7487 575483 <span className="text-xs text-[#555550]">(07487 575483)</span>
                  </a>
                </div>
              </div>

              {/* Payment & Accessibility Tags */}
              <div className="pt-4 border-t border-[#111111]/10 grid grid-cols-2 gap-3 text-[11px] text-[#555550] font-bold">
                <div className="flex items-center gap-2">
                  <Accessibility className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Wheelchair Park & Step-Free Entrance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#E53925] shrink-0" />
                  <span>Cards, Apple Pay & Contactless NFC</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Workshop Message Form */}
          <div className="lg:col-span-6">
            <div className="crop-bracket-container crop-marks-top crop-marks-bottom bg-[#DEDBD3] border-2 border-[#111111] p-6 sm:p-8 shadow-xl h-full flex flex-col justify-between">
              
              <div>
                <div className="flex justify-between items-center pb-3 mb-6 border-b border-[#111111] font-mono-spec text-xs font-bold">
                  <span className="text-[#E53925] uppercase">// DIRECT WORKSHOP INQUIRY</span>
                  <span className="text-[#555550]">FAST RESPONSE</span>
                </div>

                {formSubmitted ? (
                  <div className="p-8 bg-emerald-600/10 border-2 border-emerald-700 text-center space-y-4 my-8">
                    <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                    <h4 className="font-display text-2xl text-[#111111] uppercase">INQUIRY RECEIVED</h4>
                    <p className="font-mono-spec text-xs text-[#111111] font-bold">
                      Thank you! Dan or Jenna will review your vehicle details and call you back shortly on the phone number provided.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4 font-mono-spec text-xs">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#555550] uppercase mb-1 font-bold">YOUR NAME *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Marcus Vance"
                          className="w-full bg-[#E5E3DC] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] focus:outline-none font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-[#555550] uppercase mb-1 font-bold">PHONE NUMBER *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07700 900123"
                          className="w-full bg-[#E5E3DC] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] focus:outline-none font-bold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#555550] uppercase mb-1 font-bold">VEHICLE REGISTRATION</label>
                        <input
                          type="text"
                          value={formData.vehicleReg}
                          onChange={e => setFormData({ ...formData, vehicleReg: e.target.value.toUpperCase() })}
                          placeholder="e.g. GK70 ABC"
                          className="w-full bg-[#F7D117] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] font-extrabold uppercase tracking-wider focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[#555550] uppercase mb-1 font-bold">SERVICE TYPE</label>
                        <select
                          value={formData.service}
                          onChange={e => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#E5E3DC] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] focus:outline-none font-bold"
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
                      <label className="block text-[#555550] uppercase mb-1 font-bold">YOUR MESSAGE / SYMPTOMS</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe any warning lights, noises, or services required..."
                        className="w-full bg-[#E5E3DC] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] focus:outline-none font-medium"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-editorial w-full py-3.5 bg-[#E53925] hover:bg-[#CC2D1B] text-white font-mono-spec text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>SEND INQUIRY TO DAN & JENNA</span>
                    </button>

                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#111111]/20 flex justify-between items-center font-mono-spec text-[10px] text-[#555550] font-bold">
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
