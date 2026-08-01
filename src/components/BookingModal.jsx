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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-xl bg-[#E5E3DC] text-[#111111] border-2 border-[#111111] shadow-2xl p-6 sm:p-8 crop-bracket-container crop-marks-top crop-marks-bottom">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#DEDBD3] text-[#111111] hover:text-white hover:bg-[#E53925] border border-[#111111] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 border-b-2 border-[#111111] pb-4">
          <div className="p-2.5 bg-[#E53925] text-white btn-editorial">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono-spec text-[10px] text-[#E53925] font-bold uppercase tracking-wider">
              DAN'S AUTOMOTIVE // ONLINE BOOKING SYSTEM
            </div>
            <h3 className="font-display text-2xl text-[#111111] uppercase tracking-wide">
              {step === 1 ? 'BOOK A SERVICE OR DIAGNOSTIC' : 'BOOKING CONFIRMED'}
            </h3>
          </div>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono-spec text-xs">
            
            {/* UK Registration Plate Style Input */}
            <div>
              <label className="block text-[#555550] uppercase mb-1 font-bold">
                VEHICLE REGISTRATION * <span className="text-[#111111]/60">(FOR EXACT PARTS SPEC)</span>
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
                  className="w-full pl-11 pr-3 py-3 bg-[#F7D117] text-black font-extrabold text-base tracking-widest uppercase border-2 border-[#111111] focus:outline-none placeholder-gray-700 font-mono-spec"
                />
              </div>
            </div>

            {/* Service Selection & Make/Model */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#555550] uppercase mb-1 font-bold">SERVICE REQUIRED *</label>
                <select
                  value={formData.serviceType}
                  onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-[#DEDBD3] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] focus:outline-none font-bold"
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
                <label className="block text-[#555550] uppercase mb-1 font-bold">MAKE & MODEL</label>
                <input
                  type="text"
                  placeholder="e.g. Ford Focus / BMW 3 Series"
                  value={formData.makeModel}
                  onChange={e => setFormData({ ...formData, makeModel: e.target.value })}
                  className="w-full bg-[#DEDBD3] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] focus:outline-none font-bold"
                />
              </div>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#555550] uppercase mb-1 font-bold">PREFERRED DATE *</label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-[#DEDBD3] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] focus:outline-none font-bold"
                />
              </div>
              <div>
                <label className="block text-[#555550] uppercase mb-1 font-bold">TIME SLOT</label>
                <select
                  value={formData.preferredTime}
                  onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-[#DEDBD3] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] focus:outline-none font-bold"
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
                <label className="block text-[#555550] uppercase mb-1 font-bold">YOUR FULL NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jenna Smith"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#DEDBD3] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] focus:outline-none font-bold"
                />
              </div>
              <div>
                <label className="block text-[#555550] uppercase mb-1 font-bold">PHONE NUMBER *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 07487 575483"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#DEDBD3] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] focus:outline-none font-bold"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#555550] uppercase mb-1 font-bold">NOTES / SYMPTOMS</label>
              <textarea
                rows={2}
                placeholder="Mention any specific noises, warning lights, or prior history..."
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#DEDBD3] border border-[#111111] focus:border-[#E53925] p-3 text-[#111111] focus:outline-none font-medium"
              ></textarea>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex gap-3">
              <button
                type="submit"
                className="btn-editorial w-full py-3.5 bg-[#E53925] hover:bg-[#CC2D1B] text-white font-mono-spec text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Wrench className="w-4 h-4" />
                <span>CONFIRM WORKSHOP RESERVATION</span>
              </button>
            </div>

          </form>
        ) : (
          <div className="text-center py-6 space-y-6 font-mono-spec">
            <div className="w-16 h-16 bg-emerald-600/20 text-emerald-800 border-2 border-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="font-display text-3xl text-[#111111] uppercase">RESERVATION PROCESSED</h4>
              <p className="text-xs text-[#555550] mt-1 font-bold">
                Ref ID: <span className="text-[#E53925] font-bold">DAN-BK-{Math.floor(1000 + Math.random() * 9000)}</span>
              </p>
            </div>

            <div className="p-4 bg-[#DEDBD3] border border-[#111111] text-left text-xs space-y-2 text-[#111111] font-medium">
              <div className="flex justify-between">
                <span className="text-[#555550] font-bold">VEHICLE REG:</span>
                <span className="font-extrabold text-[#111111]">{formData.vehicleReg || 'NOT PROVIDED'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#555550] font-bold">SERVICE TYPE:</span>
                <span className="font-bold text-[#111111]">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#555550] font-bold">PREFERRED DATE:</span>
                <span className="font-bold text-[#111111]">{formData.preferredDate || 'SOONEST AVAILABLE'} ({formData.preferredTime})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#555550] font-bold">CONTACT NAME:</span>
                <span className="font-bold text-[#111111]">{formData.fullName}</span>
              </div>
            </div>

            <p className="text-xs text-[#555550] font-bold">
              Dan or Jenna will call <strong className="text-[#111111]">{formData.phone}</strong> shortly to confirm exact timing and parts availability.
            </p>

            <button
              onClick={() => {
                setStep(1);
                onClose();
              }}
              className="btn-editorial px-8 py-3 bg-[#111111] text-white text-xs font-bold uppercase cursor-pointer"
            >
              CLOSE WINDOW
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
