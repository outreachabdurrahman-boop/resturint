import React from 'react';
import { Phone, MessageCircle, Sparkles, Clock, MapPin, Share2 } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2E8DC] text-[#8C3A1E] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#241A16] tracking-tight">
            Contact & Orders
          </h2>
          <p className="mt-2 text-base text-[#615147] max-w-xl">
            For fresh takeaway, table reservations, or menu inquiries, reach out via direct phone or WhatsApp.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Primary Phone */}
          <div className="bg-white rounded-2xl p-6 border border-[#E9DFC8] shadow-sm hover:shadow-md transition-all flex flex-col items-start justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF0E6] flex items-center justify-center text-[#9C3111] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#241A16]">Direct Phone</h3>
              <p className="text-xs text-[#7A695E] mt-1 mb-4">Immediate order line</p>
              
              <div className="flex flex-col gap-1.5">
                <a
                  href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
                  className="text-base font-bold text-[#9C3111] hover:underline"
                >
                  {restaurantInfo.phones[0]}
                </a>
                <a
                  href={`tel:${restaurantInfo.phones[1].replace(/\s+/g, '')}`}
                  className="text-sm font-semibold text-[#4A3C34] hover:text-[#9C3111] transition-colors"
                >
                  {restaurantInfo.phones[1]}
                </a>
              </div>
            </div>

            <a
              href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#9C3111] text-white text-xs font-bold text-center hover:bg-[#83280D] transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* WhatsApp Direct */}
          <div className="bg-white rounded-2xl p-6 border border-[#E9DFC8] shadow-sm hover:shadow-md transition-all flex flex-col items-start justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E8F8EE] flex items-center justify-center text-[#25D366] mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#241A16]">WhatsApp</h3>
              <p className="text-xs text-[#7A695E] mt-1 mb-4">Chat & instant pre-orders</p>
              
              <p className="text-base font-bold text-[#128C7E]">
                {restaurantInfo.whatsapp}
              </p>
              <p className="text-xs text-[#6B5A4E] mt-1">Available during operational hours</p>
            </div>

            <a
              href={restaurantInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold text-center hover:bg-[#1EBE5D] transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Facebook */}
          <div className="bg-white rounded-2xl p-6 border border-[#E9DFC8] shadow-sm hover:shadow-md transition-all flex flex-col items-start justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EBF3FF] flex items-center justify-center text-[#1877F2] mb-4">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#241A16]">Facebook</h3>
              <p className="text-xs text-[#7A695E] mt-1 mb-4">Updates & customer reviews</p>
              
              <p className="text-sm font-semibold text-[#304B78]">
                Butt Karahi Waseem Blue Area
              </p>
              <p className="text-xs text-[#6B5A4E] mt-1">Official Facebook Page</p>
            </div>

            <a
              href={restaurantInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#1877F2] text-white text-xs font-bold text-center hover:bg-[#1264CE] transition-colors"
            >
              Visit Facebook
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-2xl p-6 border border-[#E9DFC8] shadow-sm hover:shadow-md transition-all flex flex-col items-start justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FDF0F5] flex items-center justify-center text-[#E4405F] mb-4">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#241A16]">Instagram</h3>
              <p className="text-xs text-[#7A695E] mt-1 mb-4">Visual stories & food posts</p>
              
              <p className="text-sm font-semibold text-[#8C2C5E]">
                @HarikaButtKarahi
              </p>
              <p className="text-xs text-[#6B5A4E] mt-1">Follow our latest dishes</p>
            </div>

            <a
              href={restaurantInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#E4405F] to-[#C13584] text-white text-xs font-bold text-center hover:opacity-90 transition-opacity"
            >
              Visit Instagram
            </a>
          </div>

        </div>

        {/* Quick Help Summary Card */}
        <div className="bg-[#FAF0E6] rounded-2xl p-6 border border-[#EADAC8] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#9C3111] text-white flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#241A16]">Need to check live seating availability?</h4>
              <p className="text-xs text-[#6B5A4E] mt-0.5">
                Call our direct line ({restaurantInfo.phones[0]}) for instantaneous assistance.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${restaurantInfo.phones[0].replace(/\s+/g, '')}`}
              className="px-5 py-2.5 rounded-xl bg-[#9C3111] text-white font-bold text-xs shadow-xs hover:bg-[#83280D] transition-colors"
            >
              Call {restaurantInfo.phones[0]}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
