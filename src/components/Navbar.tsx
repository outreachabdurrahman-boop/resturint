import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu as MenuIcon, X, MessageCircle, UtensilsCrossed } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Signature', href: '#signature' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Quick Information Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="bg-[#241A16] text-[#F3EBE1] text-xs py-2 px-4 border-b border-[#3A2B24] hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-[#E6D7C8]">
                <MapPin className="w-3.5 h-3.5 text-[#E06D3B]" />
                {restaurantInfo.address.building}, {restaurantInfo.address.area}, Islamabad
              </span>
              <span className="flex items-center gap-1.5 text-[#E6D7C8]">
                <Clock className="w-3.5 h-3.5 text-[#E06D3B]" />
                Daily {restaurantInfo.timings.hours}
              </span>
            </div>
            <div className="flex items-center gap-5">
              <a
                href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 text-[#F3EBE1] hover:text-[#E06D3B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E06D3B]" />
                <span>{restaurantInfo.phones[0]}</span>
              </a>
              <span className="text-[#5A453A]">|</span>
              <a
                href={`tel:${restaurantInfo.phones[1].replace(/\s+/g, '')}`}
                className="hover:text-[#E06D3B] transition-colors text-[#F3EBE1]"
              >
                {restaurantInfo.phones[1]}
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav
          className={`transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
            isScrolled
              ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFC8] py-3.5'
              : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#E8DFC8]/60 py-4.5'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9C3111] to-[#7B240B] flex items-center justify-center text-[#FFF8F0] shadow-sm shadow-[#9C3111]/20 group-hover:scale-105 transition-transform">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#231A16] font-['Outfit'] group-hover:text-[#9C3111] transition-colors">
                  Harika Butt Karahi
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A05C3A]">
                  Blue Area • Islamabad
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name.toLowerCase();
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors relative py-1.5 ${
                      isActive ? 'text-[#9C3111]' : 'text-[#4A3D35] hover:text-[#9C3111]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9C3111] rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={restaurantInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 font-semibold text-xs sm:text-sm transition-all border border-[#25D366]/30"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-lg bg-[#9C3111] hover:bg-[#80250B] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2.5 rounded-lg text-[#231A16] bg-[#EFE8DF] hover:bg-[#E4D9CE] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer / Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E3D9CC] shadow-xl px-5 py-6 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-[#EAE1D5] flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#231A16]">Harika Butt Karahi</p>
                  <p className="text-xs text-[#825A45]">Potohar Plaza, Blue Area, Islamabad</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-base font-medium text-[#3A2D25] hover:bg-[#EFE8DE] hover:text-[#9C3111] transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-[#B49A88]">→</span>
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-[#EAE1D5] flex flex-col gap-2.5">
                <a
                  href={restaurantInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] text-white font-semibold text-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order via WhatsApp ({restaurantInfo.phones[0]})</span>
                </a>

                <a
                  href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#9C3111] text-white font-semibold text-sm shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Order ({restaurantInfo.phones[0]})</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
