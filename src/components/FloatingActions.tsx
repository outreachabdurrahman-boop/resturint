import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
      {/* WhatsApp Quick Order Button */}
      <a
        href={restaurantInfo.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-xl hover:bg-[#1EBE5D] hover:scale-105 transition-all group"
      >
        <MessageCircle className="w-5 h-5 fill-white text-transparent group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline pr-1">WhatsApp Order</span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
        aria-label="Call Restaurant"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#9C3111] text-white font-bold text-xs sm:text-sm shadow-xl hover:bg-[#83280D] hover:scale-105 transition-all group"
      >
        <Phone className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline pr-1">Call {restaurantInfo.phones[0]}</span>
      </a>
    </div>
  );
};
