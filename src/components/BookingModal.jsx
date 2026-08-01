import React, { useState, useEffect } from 'react';
import { X, Wrench, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleReg: '',
    makeModel: '',
    serviceType: initialService || 'Annual Servicing & MOT Prep',
    preferredDate: '',
    preferredTime: 'Morning (09:00 - 12:00)',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-xl bg-[#141417] text-[#E2E4E9] border border-white/10 shadow-2xl p-6 sm:p-8 rounded-sm">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#0B0B0C] text-[#8A8F9E] hover:text-white hover:bg-[#DC2626] border border-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
          <div className="p-2.5 bg-[#DC2626] text-white btn-hallmark">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono-spec text-[10px] text-[#DC2626] font-bold uppercase tracking-wider">
              DAN'S AUTOMOTIVE // ONLINE BOOKING SYSTEM
            </div>
            <h3 className="font-display text-2xl text-white uppercase tracking-wide">
              {step === 1 ? 'BOOK A SERVICE OR DIAGNOSTIC' : 'BOOKING CONFIRMED'}
            </h3>
          </div>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono-spec text-xs">
            
            {/* UK Registration Plate Style Input */}
            <div>
              <label className="block text-[#8A8F9E] uppercase mb-1 font-bold">
                VEHICLE REGISTRATION * <span className="text-white/50">(FOR EXACT PARTS SPEC)</span>
              </label>
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-blue-700 flex items-center justify-center text-white text-[9px] font-bold">
                  GB
                </div>
                <input
                  type="text"
                  required
                  placeholder="e.g. GK70 ABC"
                  value={formData.vehicleReg}
                  onChange={e => setFormData({ ...formData, vehicleReg: e.target.value.toUpperCase() })}
                  className="w-full pl-11 pr-3 py-3 bg-[#F7D117] text-black font-extrabold text-base tracking-widest uppercase border-2 border-black focus:outline-none placeholder-gray-700 font-mono-spec"
                />
              </div>
            </div>

            {/* Service Selection & Make/Model */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#8A8F9E] uppercase mb-1 font-bold">SERVICE REQUIRED *</label>
                <select
                  value={formData.serviceType}
                  onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-[#0B0B0C] border border-white/10 focus:border-[#DC2626] p-3 text-white focus:outline-none font-bold"
                >
                  <option value="Annual Servicing & MOT Prep">Annual Servicing & MOT Prep</option>
                  <option value="Engine Diagnostics & Electrical">Engine Diagnostics & Electrical</option>
                  <option value="DPF Cleaning & Regeneration">DPF Cleaning & Regeneration</option>
                  <option value="Cambelt & Wet Belt Replacement">Cambelt & Wet Belt Replacement</option>
                  <option value="Aircon Re-gas & Sanitisation">Aircon Re-gas & Sanitisation</option>
                  <option value="Clutch & Brakes Service">Clutch & Brakes Service</option>
                  <option value="General Inspection / Repair">General Inspection / Repair</option>
                </select>
              </div>
              <div>
                <label className="block text-[#8A8F9E] uppercase mb-1 font-bold">MAKE & MODEL</label>
                <input
                  type="text"
                  placeholder="e.g. Ford Focus / BMW 3 Series"
                  value={formData.makeModel}
                  onChange={e => setFormData({ ...formData, makeModel: e.target.value })}
                  className="w-full bg-[#0B0B0C] border border-white/10 focus:border-[#DC2626] p-3 text-white focus:outline-none font-bold"
                />
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#8A8F9E] uppercase mb-1 font-bold">PREFERRED DATE *</label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#0B0B0C] border border-white/10 focus:border-[#DC2626] p-3 text-white focus:outline-none font-bold"
                />
              </div>
              <div>
                <label className="block text-[#8A8F9E] uppercase mb-1 font-bold">TIME SLOT</label>
                <select
                  value={formData.preferredTime}
                  onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-[#0B0B0C] border border-white/10 focus:border-[#DC2626] p-3 text-white focus:outline-none font-bold"
                >
                  <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                  <option value="Afternoon (12:00 - 15:30)">Afternoon (12:00 - 15:30)</option>
                  <option value="Late Afternoon (15:30 - 17:30)">Late Afternoon (15:30 - 17:30)</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#8A8F9E] uppercase mb-1 font-bold">YOUR FULL NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jenna Smith"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#0B0B0C] border border-white/10 focus:border-[#DC2626] p-3 text-white focus:outline-none font-bold"
                />
              </div>
              <div>
                <label className="block text-[#8A8F9E] uppercase mb-1 font-bold">PHONE NUMBER *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 07487 575483"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0B0B0C] border border-white/10 focus:border-[#DC2626] p-3 text-white focus:outline-none font-bold"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#8A8F9E] uppercase mb-1 font-bold">NOTES / SYMPTOMS</label>
              <textarea
                rows={2}
                placeholder="Mention any specific noises, warning lights, or prior history..."
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#0B0B0C] border border-white/10 focus:border-[#DC2626] p-3 text-white focus:outline-none font-normal"
              ></textarea>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex gap-3">
              <button
                type="submit"
                className="btn-hallmark w-full py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-mono-spec text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#DC2626]/20"
              >
                <Wrench className="w-4 h-4" />
                <span>CONFIRM WORKSHOP RESERVATION</span>
              </button>
            </div>

          </form>
        ) : (
          <div className="text-center py-6 space-y-6 font-mono-spec">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="font-display text-3xl text-white uppercase">RESERVATION PROCESSED</h4>
              <p className="text-xs text-[#8A8F9E] mt-1 font-semibold">
                Ref ID: <span className="text-[#DC2626] font-bold">DAN-BK-{Math.floor(1000 + Math.random() * 9000)}</span>
              </p>
            </div>

            <div className="p-4 bg-[#0B0B0C] border border-white/10 text-left text-xs space-y-2 text-[#E2E4E9] font-medium">
              <div className="flex justify-between">
                <span className="text-[#8A8F9E] font-semibold">VEHICLE REG:</span>
                <span className="font-extrabold text-white">{formData.vehicleReg || 'NOT PROVIDED'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A8F9E] font-semibold">SERVICE TYPE:</span>
                <span className="font-bold text-white">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A8F9E] font-semibold">PREFERRED DATE:</span>
                <span className="font-bold text-white">{formData.preferredDate || 'SOONEST AVAILABLE'} ({formData.preferredTime})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A8F9E] font-semibold">CONTACT NAME:</span>
                <span className="font-bold text-white">{formData.fullName}</span>
              </div>
            </div>

            <p className="text-xs text-[#8A8F9E] font-semibold">
              Dan or Jenna will call <strong className="text-white">{formData.phone}</strong> shortly to confirm exact timing and parts availability.
            </p>

            <button
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="btn-hallmark px-8 py-3 bg-[#0B0B0C] border border-white/10 text-white text-xs font-bold uppercase cursor-pointer"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
