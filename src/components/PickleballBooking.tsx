"use client";

import React from "react";
import { Sparkles, MessageCircle } from "lucide-react";

export default function PickleballBooking() {
  return (
    <section id="pickleball-booking" className="py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-[20px] md:px-[40px]">
        <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 text-center relative overflow-hidden shadow-lg hover:border-[#FF6B00]/30 transition-all duration-300">
          {/* Shimmer Border Sweep overlay */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent" />
          
          <div className="flex justify-center mb-4 text-[#FF6B00]">
            <Sparkles className="w-8 h-8" />
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#f5f5f5] uppercase tracking-tight mb-4">
            Rooftop Pickleball Booking
          </h2>
          
          <p className="text-[#999] text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-8">
            Reserve your play slot for our exclusive rooftop pickleball court. Bats, rackets, and balls are provided at the front desk.
          </p>

          <a
            href="https://wa.me/919602220884?text=Hi%20Next%20Fitness%20Studio%2C%20I%20want%20to%20book%20a%20slot%20on%20your%20rooftop%20Pickleball%20court!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B00] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg hover:brightness-110 transition-all duration-200 shadow-md shadow-[#FF6B00]/10"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Book Court Slot
          </a>
        </div>
      </div>
    </section>
  );
}
