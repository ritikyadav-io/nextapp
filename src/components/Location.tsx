"use client";

import React from "react";
import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[40px]">
        
        {/* Header Block */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
            Contact & Location
          </p>
          <h2 className="font-extrabold text-[#f5f5f5] uppercase tracking-tight mb-4">
            Find the Studio
          </h2>
          <p className="text-[#999] text-sm leading-relaxed">
            Conveniently located at Lal Dabba Choraha, Murlipura. Ample ground-level parking is available.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex gap-4 items-start bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
                <div className="p-3 bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] rounded-lg shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#f5f5f5] uppercase tracking-wide">
                    Address
                  </h4>
                  <p className="text-[#999] text-xs sm:text-sm mt-1 leading-relaxed">
                    Fine Supermart, Lal Dabba Choraha,<br />
                    Murlipura, Jaipur, Rajasthan 302039
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
                <div className="p-3 bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] rounded-lg shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#f5f5f5] uppercase tracking-wide">
                    Hours
                  </h4>
                  <p className="text-[#999] text-xs sm:text-sm mt-1 leading-relaxed">
                    Monday – Sunday: 5:00 AM – 10:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Direct CTAs Stack (Minimum 44px tap targets) */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <a
                href="tel:09602220884"
                className="py-4 bg-[#1a1a1a] border border-[#FF6B00]/40 text-[#FF6B00] font-bold text-center text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 hover:bg-[#FF6B00] hover:text-black transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919602220884?text=Hi%20Next%20Fitness%20Studio%2C%20I'm%20interested%20in%20visiting%20the%20gym!"
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 bg-[#FF6B00] text-black font-bold text-center text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md shadow-[#FF6B00]/10"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Maps Embed */}
          <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto w-full min-h-[250px] md:min-h-[350px] rounded-xl overflow-hidden border border-white/5 relative">
            <iframe
              src="https://maps.google.com/maps?q=Next%20Fitness%20Studio%20Lal%20Dabba%20Choraha%20Murlipura%20Jaipur&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Next Fitness Studio location on Google Maps"
              className="absolute inset-0"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
