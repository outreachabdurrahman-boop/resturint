import React from 'react';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { signatureDishes, restaurantInfo } from '../data/restaurantData';

export const SignatureDishes: React.FC = () => {
  return (
    <section id="signature" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E8DC] text-[#8C3A1E] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
            <span>House Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241A16] tracking-tight">
            Our Signature Dishes
          </h2>
          <p className="mt-3 text-base text-[#615147] max-w-2xl">
            Cooked with fresh meat, seasoned with authentic Pakistani spices, and served sizzling hot in traditional woks.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E9DFC8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Container with tag */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F0E9DF]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {dish.tag && (
                  <div className="absolute top-3.5 left-3.5 bg-[#9C3111] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    {dish.tag}
                  </div>
                )}
              </div>

              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#241A16] group-hover:text-[#9C3111] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#8C5A3E] font-medium mt-1">
                    {dish.serving}
                  </p>
                  <p className="text-sm text-[#5C4D44] mt-3 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Quick Action */}
                <div className="mt-6 pt-4 border-t border-[#F2EAE0] flex items-center justify-between">
                  <a
                    href={`https://wa.me/923080929999?text=Hello%20Harika%20Butt%20Karahi%2C%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(dish.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#128C7E] hover:text-[#0B6156] bg-[#25D366]/10 px-3 py-1.5 rounded-lg border border-[#25D366]/30 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Order on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C3A1E] hover:text-[#5F2412]"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call to Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
