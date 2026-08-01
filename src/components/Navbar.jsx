import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Wrench, MapPin } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'whyus', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'THE MANIFESTO', href: '#about', id: 'about', code: '01' },
    { name: 'THE WORKSHOP', href: '#services', id: 'services', code: '02' },
    { name: 'WHY CHOOSE US', href: '#whyus', id: 'whyus', code: '03' },
    { name: 'TESTIMONIALS', href: '#reviews', id: 'reviews', code: '04' },
    { name: 'DISPATCH & HOURS', href: '#contact', id: 'contact', code: '05' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#EAE6DF]/95 backdrop-blur-md border-b-2 border-[#1A1A18] shadow-md py-2.5' : 'bg-[#EAE6DF]/90 backdrop-blur-sm border-b border-[#1A1A18] py-3'}`}>
      
      {/* Top Broadsheet Registration Header (Desktop Only) */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 pb-2 text-[11px] font-mono-spec text-[#6E6D68] tracking-widest uppercase border-b border-[#1A1A18]/20 mb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[#C83723] font-bold">┌ BROADSHEET SHEET Nº 01</span>
            <span>·</span>
            <span>PRINTED BY HAND IN KENT</span>
            <span>·</span>
            <span>EST. ON A WORKBENCH</span>
          </div>
          <div className="flex items-center gap-3">
            <span>SITTINGBOURNE ME9 7JH</span>
            <span>·</span>
            <span className="text-[#C83723] font-bold">4.8★ GOOGLE RATED (165+ REVIEWS) ┐</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Masthead */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-[#1A1A18] text-white btn-clipped group-hover:bg-[#C83723] transition-colors">
              <Wrench className="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl sm:text-3xl text-[#1A1A18] tracking-wide leading-none uppercase">
                  THE MEND ASSEMBLY <span className="text-[#C83723] text-lg font-mono-spec font-bold ml-1">FIX Nº 01</span>
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono-spec text-[10px] text-[#6E6D68] tracking-widest uppercase">
                  DAN'S AUTOMOTIVE SERVICES <span className="text-[#1A1A18]">·</span> SITTINGBOURNE, KENT
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 font-mono-spec text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 uppercase tracking-wider transition-all duration-200 relative group flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-[#C83723] font-bold bg-[#1A1A1A]/5 border border-[#1A1A18]' 
                      : 'text-[#1A1A18] hover:text-[#C83723] hover:bg-[#1A1A18]/5'
                  }`}
                >
                  <span className="text-[10px] text-[#6E6D68] group-hover:text-[#C83723]">
                    {link.code}
                  </span>
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="btn-clipped px-4 py-2 bg-[#C83723] hover:bg-[#1A1A18] text-white font-mono-spec text-xs tracking-wider uppercase font-bold flex items-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>BOOK A SERVICE</span>
            </button>
            <a
              href="tel:+447487575483"
              className="btn-clipped-reverse px-3 py-2 bg-[#F4F0E8] hover:bg-[#1A1A18] text-[#1A1A18] hover:text-white border border-[#1A1A18] font-mono-spec text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#C83723]" />
              <span className="hidden xl:inline">07487 575483</span>
              <span className="xl:hidden">CALL</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="btn-clipped px-2.5 py-1.5 bg-[#C83723] text-white font-mono-spec text-[11px] font-bold uppercase flex items-center gap-1"
            >
              <Wrench className="w-3 h-3" />
              <span>BOOK</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1A1A18] bg-[#F4F0E8] border border-[#1A1A18] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#C83723]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#EAE6DF] border-b-2 border-[#1A1A18] px-4 pt-4 pb-6 mt-3 space-y-3 font-mono-spec animate-in slide-in-from-top duration-200">
          <div className="text-[10px] text-[#6E6D68] border-b border-[#1A1A18]/20 pb-2 flex justify-between items-center">
            <span>DAN'S AUTOMOTIVE // BROADSHEET MENU</span>
            <span className="text-[#C83723] font-bold">4.8★ (165+ REVIEWS)</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm uppercase tracking-wider text-[#1A1A18] hover:text-[#C83723] hover:bg-[#1A1A18]/5 border-l-2 border-transparent hover:border-[#C83723] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#6E6D68]">{link.code} //</span>
                  <span>{link.name}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1A1A18]/20 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="btn-clipped w-full py-2.5 bg-[#C83723] text-white text-xs font-bold text-center uppercase flex items-center justify-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              BOOK SERVICE
            </button>
            <a
              href="tel:+447487575483"
              className="btn-clipped-reverse w-full py-2.5 bg-[#F4F0E8] border border-[#1A1A18] text-[#1A1A18] text-xs font-bold text-center uppercase flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C83723]" />
              07487 575483
            </a>
          </div>

          <div className="pt-2 text-[10px] text-[#6E6D68] flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#C83723]" />
            <span>Unit 1, 172a New Farm, High St, Newington, Sittingbourne ME9 7JH</span>
          </div>
        </div>
      )}
    </header>
  );
}
