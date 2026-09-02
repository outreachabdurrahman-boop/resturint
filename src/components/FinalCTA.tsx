import React from 'react';
import { Phone, MapPin, MessageCircle, Flame } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4EEE8] border-t border-[#EAE0D3] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Flame Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE0D3] text-[#8C3A1E] text-xs font-bold uppercase tracking-wider mb-5">
          <Flame className="w-4 h-4 text-[#C2410C]" />
          <span>Fresh & Sizzling Daily</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#241A16] tracking-tight mb-4">
          Craving Real Karahi?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#5A4B42] max-w-2xl mx-auto mb-8 leading-relaxed">
          Come enjoy rich Pakistani flavors, freshly prepared and served hot at Potohar Plaza, Fazal e Haq Road, Blue Area Islamabad.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#9C3111] hover:bg-[#83280D] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now ({restaurantInfo.phones[0]})</span>
          </a>

          <a
            href={restaurantInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF4ED] text-[#2C211B] font-bold text-sm border border-[#DACDC0] shadow-xs hover:shadow transition-all"
          >
            <MapPin className="w-4 h-4 text-[#9C3111]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* WhatsApp fast alternative */}
        <div className="mt-6">
          <a
            href={restaurantInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#128C7E] hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Or message us on WhatsApp: {restaurantInfo.whatsapp}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
