import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { galleryItems } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E8DC] text-[#8C3A1E] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241A16] tracking-tight">
            Dining & Food Gallery
          </h2>
          <p className="mt-2 text-base text-[#615147] max-w-xl">
            A glimpse into our freshly prepared karahis, live tandoor breads, charcoal grills, and welcoming atmosphere.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-white bg-[#EFE8DF] ${
                index === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#201814]/85 via-[#201814]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E29267] mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-xs text-[#EADCCE] line-clamp-2 mt-1">{item.caption}</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#FFF8F0] font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>

              {/* Subtle category badge always visible */}
              <div className="absolute top-3 left-3 bg-[#231A16]/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full group-hover:opacity-0 transition-opacity">
                {item.category}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#1A120E]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#241A16] rounded-2xl overflow-hidden shadow-2xl border border-[#4A392F]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[70vh] w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Info Footer */}
            <div className="p-5 sm:p-6 bg-[#241A16] text-[#FAF6F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#E29267] uppercase tracking-wider">
                  {activeItem.category}
                </span>
                <h3 className="text-xl font-bold mt-0.5">{activeItem.title}</h3>
                <p className="text-sm text-[#C4B3A3] mt-1">{activeItem.caption}</p>
              </div>

              <a
                href={`https://wa.me/923080929999?text=Hello%20Harika%20Butt%20Karahi%2C%20I%20saw%20the%20${encodeURIComponent(activeItem.title)}%20in%20your%20gallery%20and%20would%20like%20to%20order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold text-center shadow-md transition-colors"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
