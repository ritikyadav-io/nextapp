"use client";

import React from "react";
import { Award, Zap, Wind, Shield } from "lucide-react";

const POINTS = [
  {
    icon: Zap,
    title: "Imported Equipment",
    desc: "Biomechanically optimized machines designed to isolate muscle groups precisely.",
  },
  {
    icon: Award,
    title: "Expert Coaches",
    desc: "Personalized tracking plans guided directly by fitness legend Rakesh Sharma.",
  },
  {
    icon: Wind,
    title: "AC Climate Control",
    desc: "Sanitized, fully air-conditioned spaces that let you train at your peak.",
  },
  {
    icon: Shield,
    title: "Lockers & Hygiene",
    desc: "Clean restrooms, personal locker facility, and fresh RO drinking water.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 bg-[#0a0a0a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[40px] relative z-10">
        
        {/* Title Block */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
            Why Choose Us
          </p>
          <h2 className="font-extrabold text-[#f5f5f5] uppercase tracking-tight mb-4">
            Uncompromising Standards
          </h2>
          <p className="text-[#999] text-sm leading-relaxed">
            The elite training environment built for serious athletes.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {POINTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#1a1a1a] p-5 border border-white/5 rounded-xl flex gap-4 items-start hover:border-[#FF6B00]/20 transition-all duration-300"
              >
                <div className="p-3 bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] rounded-lg shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#f5f5f5] uppercase tracking-wide leading-none mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#999] text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
