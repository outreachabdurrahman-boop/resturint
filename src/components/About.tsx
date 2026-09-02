import React from 'react';
import { Flame, Sparkles, Utensils, HeartHandshake } from 'lucide-react';
import { restaurantImages, restaurantInfo } from '../data/restaurantData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#F4EFEA] border-y border-[#EAE0D3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#EFE8DF] group">
              <img
                src={restaurantImages.restaurantAmbiance}
                alt="Harika Butt Karahi dining atmosphere in Blue Area Islamabad"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#201814]/80 via-transparent to-transparent p-5 text-white">
                <p className="text-sm font-bold">Potohar Plaza, Blue Area</p>
                <p className="text-xs text-[#E3D4C4]">Comfortable dining for families and food lovers</p>
              </div>
            </div>

            {/* Small offset companion card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-md border border-[#E8DFC8] max-w-[210px]">
              <div className="flex items-center gap-2.5 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A]"></span>
                <span className="text-xs font-bold text-[#231A16]">Cooked Fresh</span>
              </div>
              <p className="text-[11px] text-[#69574B] leading-tight">
                Every karahi is prepared live upon your order with fresh meat and tomatoes.
              </p>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0D3] text-[#8C3A1E] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
              <span>Authentic Pakistani Dining</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#241A16] mb-5 tracking-tight">
              Traditional Taste, Freshly Prepared in Islamabad
            </h2>

            <p className="text-base text-[#52443C] leading-relaxed mb-4">
              At <strong className="text-[#241A16] font-semibold">{restaurantInfo.name}</strong>, we celebrate the true heritage of Pakistani karahi cooking. Located at Potohar Plaza in Blue Area, our kitchen is dedicated to hearty, flavorful dishes seared over intense flames in traditional iron woks.
            </p>

            <p className="text-base text-[#52443C] leading-relaxed mb-8">
              From fresh chicken and mutton simmered with crushed tomatoes, ginger, and green chillies to steaming tandoori breads, we offer a warm, casual premium dining experience tailored for family dinners, friends, and late-night gatherings.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-white/80 p-4 rounded-xl border border-[#E6DCce] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAF0E6] text-[#9C3111] shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#241A16]">Live Wok Cooking</h3>
                  <p className="text-xs text-[#6A5A4F] mt-0.5">Seared in traditional iron karahis over high heat.</p>
                </div>
              </div>

              <div className="bg-white/80 p-4 rounded-xl border border-[#E6DCce] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAF0E6] text-[#9C3111] shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#241A16]">Authentic Spices</h3>
                  <p className="text-xs text-[#6A5A4F] mt-0.5">Balanced Pakistani spices without artificial additives.</p>
                </div>
              </div>

              <div className="bg-white/80 p-4 rounded-xl border border-[#E6DCce] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAF0E6] text-[#9C3111] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#241A16]">Hot Clay Tandoor</h3>
                  <p className="text-xs text-[#6A5A4F] mt-0.5">Fluffy Roghni, Garlic, and Kalonji naans baked live.</p>
                </div>
              </div>

              <div className="bg-white/80 p-4 rounded-xl border border-[#E6DCce] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#FAF0E6] text-[#9C3111] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#241A16]">Warm Hospitality</h3>
                  <p className="text-xs text-[#6A5A4F] mt-0.5">Welcoming environment for dine-in and takeaways.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
