import React from 'react';
import { Phone, MapPin, Clock, UtensilsCrossed, ArrowUp, Share2, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#231A16] text-[#E8DDCF] pt-16 pb-12 border-t border-[#3B2C24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3D2E26]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#9C3111] to-[#7B240B] flex items-center justify-center text-white">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-[#FFF8F0] font-['Outfit']">
                {restaurantInfo.name}
              </span>
            </div>

            <p className="text-sm text-[#C4B3A3] leading-relaxed max-w-sm mb-6">
              Authentic Pakistani karahi and traditional favorites cooked fresh upon order in Blue Area, Islamabad.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={restaurantInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-[#382B24] hover:bg-[#1877F2] text-[#F5EDE3] flex items-center justify-center transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>

              <a
                href={restaurantInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#382B24] hover:bg-[#E4405F] text-[#F5EDE3] flex items-center justify-center transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>

              <a
                href={restaurantInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#382B24] hover:bg-[#25D366] text-[#F5EDE3] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-[#FFF8F0] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#C4B3A3]">
              <li>
                <a href="#home" className="hover:text-[#E06D3B] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E06D3B] transition-colors">About Karahi Heritage</a>
              </li>
              <li>
                <a href="#signature" className="hover:text-[#E06D3B] transition-colors">Signature Dishes</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E06D3B] transition-colors">Complete Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#E06D3B] transition-colors">Food Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#E06D3B] transition-colors">Location & Directions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E06D3B] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Location & Timings */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-[#FFF8F0] uppercase tracking-wider mb-4">
              Restaurant Details
            </h4>
            
            <div className="space-y-3.5 text-sm text-[#C4B3A3]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E06D3B] shrink-0 mt-1" />
                <p>
                  {restaurantInfo.address.full}
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E06D3B] shrink-0 mt-1" />
                <div>
                  <a href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`} className="hover:text-white block">
                    {restaurantInfo.phones[0]}
                  </a>
                  <a href={`tel:${restaurantInfo.phones[1].replace(/\s+/g, '')}`} className="hover:text-white block mt-0.5">
                    {restaurantInfo.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E06D3B] shrink-0 mt-1" />
                <p>
                  {restaurantInfo.timings.days}: {restaurantInfo.timings.hours}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8B7C]">
          <p>© {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#E6D7C8] hover:text-[#E06D3B] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
