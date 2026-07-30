import React, { useState } from 'react';
import { X, Car, CheckCircle2, Phone, Calendar } from 'lucide-react';

export default function CarInquiryModal({ isOpen, onClose, car }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tradeInReg: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-lg bg-[#121212] border border-[#C21F2E]/40 shadow-2xl p-6 sm:p-8 crop-bracket-container crop-marks-top crop-marks-bottom">
        
        {/* Close Button */}
        <button
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          className="absolute top-4 right-4 p-2 bg-[#0A0A0A] text-[#9A9A95] hover:text-white border border-white/10 hover:border-[#C21F2E] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
          <div className="p-2.5 bg-[#C21F2E] text-white btn-clipped">
            <Car className="w-5 h-5" />
          </div>
          <div>
            <div className="font-mono-spec text-[10px] text-[#C21F2E] font-bold uppercase tracking-wider">
              DJC CARS // TEST DRIVE & INQUIRY SPEC
            </div>
            <h3 className="font-display text-2xl text-white uppercase tracking-wide">
              {car ? car.title : 'VEHICLE INQUIRY'}
            </h3>
          </div>
        </div>

        {car && (
          <div className="mb-6 p-3 bg-[#0A0A0A] border border-white/10 flex items-center justify-between font-mono-spec text-xs">
            <div>
              <span className="text-[#9A9A95] block text-[10px]">VEHICLE PRICE:</span>
              <span className="font-display text-xl text-white">{car.price}</span>
            </div>
            <div className="text-right">
              <span className="text-[#9A9A95] block text-[10px]">IN-HOUSE STATUS:</span>
              <span className="text-emerald-400 font-bold">{car.badge}</span>
            </div>
          </div>
        )}

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono-spec text-xs">
            
            <div>
              <label className="block text-[#9A9A95] uppercase mb-1">YOUR FULL NAME *</label>
              <input
                type="text"
                required
                placeholder="e.g. David Palmer"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-white/15 focus:border-[#C21F2E] p-3 text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#9A9A95] uppercase mb-1">PHONE NUMBER FOR CALLBACK *</label>
              <input
                type="tel"
                required
                placeholder="e.g. 07487 575483"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-white/15 focus:border-[#C21F2E] p-3 text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#9A9A95] uppercase mb-1">PART-EXCHANGE / TRADE-IN REGISTRATION (OPTIONAL)</label>
              <input
                type="text"
                placeholder="e.g. AB12 CDE"
                value={formData.tradeInReg}
                onChange={e => setFormData({ ...formData, tradeInReg: e.target.value.toUpperCase() })}
                className="w-full bg-[#0A0A0A] border border-white/15 focus:border-[#C21F2E] p-3 text-yellow-400 font-bold uppercase focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[#9A9A95] uppercase mb-1">QUESTIONS / PREFERRED TEST DRIVE DAY</label>
              <textarea
                rows={3}
                placeholder="Let us know when you would like to inspect or test drive..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#0A0A0A] border border-white/15 focus:border-[#C21F2E] p-3 text-white focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-clipped w-full py-3.5 bg-[#C21F2E] hover:bg-[#E61C24] text-white font-mono-spec text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Car className="w-4 h-4" />
              <span>SUBMIT TEST DRIVE REQUEST</span>
            </button>

          </form>
        ) : (
          <div className="text-center py-6 space-y-4 font-mono-spec">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="font-display text-2xl text-white uppercase">TEST DRIVE REQUEST RECEIVED</h4>
            
            <p className="text-xs text-[#9A9A95]">
              Dan or Jenna will contact you on <strong className="text-white">{formData.phone}</strong> to confirm keys, test drive appointment, and vehicle availability.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-clipped px-6 py-2.5 bg-[#161616] border border-white/20 text-white text-xs font-bold uppercase cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
