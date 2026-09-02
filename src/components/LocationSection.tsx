import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Copy, Check, Car, Sparkles } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(restaurantInfo.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 bg-[#F4EEE8] border-y border-[#EAE0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DDD0] text-[#8C3A1E] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
            <span>Visit Our Restaurant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241A16] tracking-tight">
            Location & Directions
          </h2>
          <p className="mt-2 text-base text-[#615147] max-w-xl">
            Conveniently situated in Blue Area, Islamabad for dine-in families and takeaway orders.
          </p>
        </div>

        {/* Card Layout */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#E4D9CC] shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Address Details */}
            <div className="md:col-span-7 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0E6] flex items-center justify-center text-[#9C3111] mb-5">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-[#241A16] mb-1">
                {restaurantInfo.name}
              </h3>

              <div className="mt-2 text-base text-[#4A3C34] leading-relaxed">
                <p className="font-semibold text-[#241A16]">{restaurantInfo.address.building}</p>
                <p>{restaurantInfo.address.street}</p>
                <p className="font-medium text-[#9C3111]">{restaurantInfo.address.area}, {restaurantInfo.address.city}, {restaurantInfo.address.country}</p>
              </div>

              {/* Copy Address Button */}
              <button
                onClick={handleCopyAddress}
                className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FAF4ED] hover:bg-[#F2E8DC] text-[#7A3F28] text-xs font-semibold border border-[#E9DAC8] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span>Address Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>

              <div className="mt-6 pt-6 border-t border-[#F2EAE0] w-full flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#9C3111] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-[#241A16]">Timings</p>
                    <p className="text-xs text-[#6B5A4E]">{restaurantInfo.timings.hours} Daily</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-[#9C3111] shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-[#241A16]">Accessibility</p>
                    <p className="text-xs text-[#6B5A4E]">Blue Area Main Parking</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Callout */}
            <div className="md:col-span-5 bg-[#FAF7F2] rounded-2xl p-6 border border-[#EAE0D3] flex flex-col items-center text-center justify-center">
              <div className="w-14 h-14 rounded-full bg-[#9C3111] text-white flex items-center justify-center mb-4 shadow-md">
                <Navigation className="w-7 h-7" />
              </div>

              <h4 className="text-lg font-bold text-[#241A16]">
                Navigate to Harika Butt Karahi
              </h4>
              <p className="text-xs text-[#6B5A4E] mt-1.5 mb-6">
                Open live route navigation directly on Google Maps.
              </p>

              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#9C3111] hover:bg-[#83280D] text-white font-bold text-sm shadow-sm hover:shadow transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-[#F2E8DC] text-[#4A392F] font-semibold text-xs border border-[#DFD3C4] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#9C3111]" />
                <span>Call Before You Arrive</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
