import React from 'react';
import { Utensils, MapPin, ChevronRight, Sparkles, Flame, Clock } from 'lucide-react';
import { restaurantImages, restaurantInfo } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle organic decorative background accents */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#F3E7DC] rounded-full blur-3xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5ECE3] rounded-full blur-3xl opacity-70 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* Location & Authenticity Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2E8DC] border border-[#E4D5C5] text-[#8C3A1E] text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
              <span>{restaurantInfo.name} • Blue Area Islamabad</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#241A16] leading-[1.15] tracking-tight mb-5">
              Authentic Karahi.{' '}
              <span className="text-[#9C3111] relative inline-block">
                Bold Pakistani
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#E67E48]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>{' '}
              Flavor.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#5A4B42] leading-relaxed max-w-xl mb-8 font-normal">
              Freshly prepared Pakistani karahi and traditional favorites, served with authentic flavor and warmth at Potohar Plaza, Fazal e Haq Road.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#9C3111] hover:bg-[#83280D] text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Menu</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#EFE7DC] hover:bg-[#E5DBCF] text-[#2C211B] font-bold text-sm transition-all border border-[#DFD3C4] text-center"
              >
                <MapPin className="w-4 h-4 text-[#9C3111]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Value Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#E8DFC8] w-full max-w-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#9C3111] font-bold text-xs uppercase mb-0.5">
                  <Flame className="w-3.5 h-3.5 text-[#D94F1A]" />
                  <span>Fresh Cuts</span>
                </div>
                <p className="text-xs text-[#6B5A4E]">Cooked live per order</p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#9C3111] font-bold text-xs uppercase mb-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D94F1A]" />
                  <span>Desi Spices</span>
                </div>
                <p className="text-xs text-[#6B5A4E]">Traditional masala</p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#9C3111] font-bold text-xs uppercase mb-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#D94F1A]" />
                  <span>Late Hours</span>
                </div>
                <p className="text-xs text-[#6B5A4E]">Open until 01:00 AM</p>
              </div>
            </div>
          </div>

          {/* Right Visual Column — Large Photorealistic Karahi Food Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF] bg-[#EFE8DF] aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3] group">
              {/* Main Food Photography (Sharp, Clear, Photorealistic, No Large Cover Cards) */}
              <img
                src={restaurantImages.heroKarahi}
                alt="Sizzling authentic Chicken Karahi and hot tandoori naan at Harika Butt Karahi"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Minimal floating badge on bottom corner */}
              <div className="absolute bottom-4 right-4 bg-[#231A16]/85 backdrop-blur-md text-[#FFF8F0] px-4 py-2 rounded-xl text-xs font-medium border border-white/10 flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#E06D3B] animate-pulse"></span>
                <span>Fresh Sizzling Karahi</span>
              </div>
            </div>

            {/* Subtle floating companion pill */}
            <div className="hidden sm:flex items-center gap-3 absolute -top-4 -left-4 bg-[#FFFFFF] px-4 py-2.5 rounded-2xl shadow-lg border border-[#EADFCF]">
              <div className="w-8 h-8 rounded-full bg-[#FAF2E8] flex items-center justify-center text-[#9C3111]">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#231A16]">Traditional Butt Karahi</p>
                <p className="text-[11px] text-[#786153]">Simmered in pure desi butter</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
