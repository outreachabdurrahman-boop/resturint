import React, { useState, useMemo } from 'react';
import { Search, Flame, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { fullMenuList, menuCategories, restaurantInfo } from '../data/restaurantData';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return fullMenuList.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-[#F5EFE9] border-y border-[#EAE0D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DDD0] text-[#8C3A1E] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
            <span>Kitchen Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241A16] tracking-tight">
            Our Complete Menu
          </h2>
          <p className="mt-2 text-base text-[#615147] max-w-xl">
            Authentic Pakistani karahis, live charcoal barbecue, fresh tandoor breads, and traditional refreshments.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {menuCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#9C3111] text-white shadow-sm'
                      : 'bg-white text-[#52443C] hover:bg-[#EBE2D7] border border-[#E3D8CB]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#8C7A6D] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dish name..."
              className="w-full pl-9 pr-4 py-2 bg-white text-sm rounded-xl border border-[#E3D8CB] focus:outline-none focus:ring-2 focus:ring-[#9C3111]/30 focus:border-[#9C3111] text-[#241A16] placeholder-[#8C7A6D]"
            />
          </div>
        </div>

        {/* Menu Items List / Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#E6DDD0]">
            <p className="text-base text-[#66574D]">No dishes found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#9C3111] underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-5 border border-[#EAE1D3] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#241A16]">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="bg-[#FAF0E6] text-[#9C3111] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#EED7C5]">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#615148] leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F5EDE3] flex items-center justify-between text-xs">
                  <span className="text-[#875F48] font-medium">
                    {item.serving || 'Fresh Order'}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/923080929999?text=Hello%20Harika%20Butt%20Karahi%2C%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(item.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#128C7E] hover:underline font-semibold"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>
                    <span className="text-[#D8C7B8]">•</span>
                    <a
                      href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1 text-[#8C3A1E] hover:underline font-semibold"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Note on Fresh Preparation */}
        <div className="mt-10 bg-[#EAE0D3]/60 rounded-xl p-4 sm:p-5 border border-[#DFD3C4] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#9C3111] text-white shrink-0">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#241A16]">Live Karahi Preparation</p>
              <p className="text-xs text-[#635349]">
                Authentic karahi is made fresh from raw cuts per order. Preparation takes approximately 25-35 minutes.
              </p>
            </div>
          </div>
          <a
            href={restaurantInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-lg bg-[#25D366] text-white font-bold text-xs shadow-sm hover:bg-[#1EBE5D] transition-colors"
          >
            Pre-Order via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
