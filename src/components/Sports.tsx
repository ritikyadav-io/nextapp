"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check } from "lucide-react";

interface SportsTiltCardProps {
  children: React.ReactNode;
  isStar?: boolean;
  className?: string;
}

function SportsTiltCard({ 
  children, 
  className, 
  isStar = false
}: SportsTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 22 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: isStar ? 1.03 : 1.01 }}
      className={className}
    >
      <div style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}

export default function Sports() {
  return (
    <section id="sports" className="relative py-16 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[40px] relative z-10">
        
        {/* Section Header */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
            Sports & Amenities
          </p>
          <h2 className="font-extrabold text-[#f5f5f5] uppercase tracking-tight mb-4">
            Elite Sports Complex
          </h2>
          <p className="text-[#999] text-sm leading-relaxed">
            Premium secondary activities included with our membership packages. Access turf grounds, pool, fitness tracking, and rooftop pickleball.
          </p>
        </div>

        {/* 2x2 Grid of Sports Complex Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* 1. CRICKET TURF */}
          <SportsTiltCard className="bg-[#1a1a1a] border border-white/5 p-6 md:p-8 flex flex-col justify-between rounded-2xl relative transition-all duration-300 group hover:border-[#FF6B00]/30">
            <div className="absolute top-6 right-6 bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/25 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
              2X / MONTH
            </div>

            <div>
              {/* Bat & Ball Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] mb-6">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.5 2c-.8 0-1.5.7-1.5 1.5v.7l-9.8 9.8c-.4-.1-.8-.1-1.2.2l-3.8 3.8c-.3.3-.3.8 0 1.1l3.2 3.2c.3.3.8.3 1.1 0l3.8-3.8c.3-.4.3-.8.2-1.2l9.8-9.8h.7c.8 0 1.5-.7 1.5-1.5V2h-4zm-.5 1.5c0-.3.2-.5.5-.5h2v1h-2c-.3 0-.5-.2-.5-.5zm-6.2 9.8l1.4 1.4-9.1 9.1-1.4-1.4 9.1-9.1z" />
                  <circle cx="16.5" cy="16.5" r="2.5" />
                </svg>
              </div>

              <h3 className="font-bold text-lg text-[#f5f5f5] uppercase tracking-tight mb-4">
                Cricket Turf
              </h3>

              <ul className="space-y-3 mb-8">
                {["2x Monthly Access included with plans", "Premium covered synthetic turf ground", "Pre-book slots via Booking Widget", "Professional nets & high-intensity lighting"].map((benefit, i) => (
                  <li key={i} className="flex gap-2.5 items-center">
                    <Check className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-sm text-[#999]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/919602220884?text=Hi!+I'm+a+member+and+want+to+book+my+Cricket+Turf+session+at+Next+Fitness+Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-transparent border border-[#FF6B00] text-[#FF6B00] font-bold text-xs uppercase tracking-wider text-center hover:bg-[#FF6B00] hover:text-black transition-all rounded-lg"
            >
              Book Turf Slot
            </a>
          </SportsTiltCard>

          {/* 2. SWIMMING POOL */}
          <SportsTiltCard className="bg-[#1a1a1a] border border-white/5 p-6 md:p-8 flex flex-col justify-between rounded-2xl relative transition-all duration-300 group hover:border-[#FF6B00]/30">
            <div className="absolute top-6 right-6 bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/25 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
              1X / MONTH
            </div>

            <div>
              {/* Swimming waves Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] mb-6">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M2 11c1.5 0 2.5-1 3.5-2s2-2 3.5-2 2.5 1 3.5 2 2 2 3.5 2 2.5-1 3.5-2l-1.4-1.4c-.6.6-1.3 1.4-2.1 1.4s-1.5-1-2.5-2-2-2-3.5-2-2.5 1-3.5 2-2 2-3.5 2-1.8-.8-2.5-1.4L.6 9.4C1 9.8 1.4 11 2 11zm20 4c-1.5 0-2.5 1-3.5 2s-2 2-3.5 2-2.5-1-3.5-2-2-2-3.5-2-2.5 1-3.5 2l1.4 1.4c.6-.6 1.3-1.4 2.1-1.4s1.5 1 2.5 2 2 2 3.5 2 2.5-1 3.5-2 1.8.8 2.5 1.4l1.4-1.4c-.4-.4-.8-1.6-1.4-1.6z" />
                </svg>
              </div>

              <h3 className="font-bold text-lg text-[#f5f5f5] uppercase tracking-tight mb-4">
                Swimming Pool
              </h3>

              <ul className="space-y-3 mb-8">
                {["1x Monthly Access included with plans", "Hygienic, temperature-controlled water", "Dedicated hours for ladies & families", "Great for active rest & physical recovery"].map((benefit, i) => (
                  <li key={i} className="flex gap-2.5 items-center">
                    <Check className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-sm text-[#999]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/919602220884?text=Hi!+I'm+a+member+and+want+to+book+my+Swimming+Pool+session+at+Next+Fitness+Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-transparent border border-[#FF6B00] text-[#FF6B00] font-bold text-xs uppercase tracking-wider text-center hover:bg-[#FF6B00] hover:text-black transition-all rounded-lg"
            >
              Book Pool Slot
            </a>
          </SportsTiltCard>

          {/* 3. FITNESS TRACKING */}
          <SportsTiltCard className="bg-[#1a1a1a] border border-white/5 p-6 md:p-8 flex flex-col justify-between rounded-2xl relative transition-all duration-300 group hover:border-[#FF6B00]/30">
            <div className="absolute top-6 right-6 bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/25 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
              1X / MONTH
            </div>

            <div>
              {/* Scale / Tracking Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] mb-6">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </div>

              <h3 className="font-bold text-lg text-[#f5f5f5] uppercase tracking-tight mb-4">
                Fitness Tracking
              </h3>

              <ul className="space-y-3 mb-8">
                {["1x Monthly body composition metrics check", "Analyze body fat & visceral fat indices", "Check muscle density progress roadmap", "Customized workout plan recalibration"].map((benefit, i) => (
                  <li key={i} className="flex gap-2.5 items-center">
                    <Check className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-sm text-[#999]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/919602220884?text=Hi!+I'd+like+to+book+my+monthly+Fitness+Tracking+and+body+fat+analysis+session"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-transparent border border-[#FF6B00] text-[#FF6B00] font-bold text-xs uppercase tracking-wider text-center hover:bg-[#FF6B00] hover:text-black transition-all rounded-lg"
            >
              Book Assessment Slot
            </a>
          </SportsTiltCard>

          {/* 4. ROOFTOP PICKLE BALL COURT */}
          <SportsTiltCard className="bg-[#1a1a1a] border-2 border-[#FF6B00] p-6 md:p-8 flex flex-col justify-between rounded-2xl relative transition-all duration-300 group hover:shadow-lg hover:shadow-[#FF6B00]/5">
            <div className="absolute top-4 right-[-10px] bg-[#FF3E55] text-white font-bold text-[9px] tracking-widest px-3 py-1 uppercase rotate-[15deg] shadow-lg shadow-[#FF3E55]/20">
              YEARLY EXCLUSIVE!
            </div>

            <div>
              {/* Paddle & Ball Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] mb-6">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.4 12.3c-.6-.6-1.5-.6-2.1 0l-5.6 5.6c-.6.6-.6 1.5 0 2.1l1.4 1.4c.6.6 1.5.6 2.1 0l5.6-5.6c.6-.6.6-1.5 0-2.1l-1.4-1.4zM7.5 13.5c1.9-1.9 5.1-1.9 7 0s1.9 5.1 0 7-5.1 1.9-7 0-1.9-5.1 0-7z" />
                  <circle cx="16.5" cy="7.5" r="2.5" />
                </svg>
              </div>

              <h3 className="font-bold text-lg text-[#f5f5f5] uppercase tracking-tight mb-4">
                Pickleball Court
              </h3>

              <ul className="space-y-3 mb-8">
                {["Open air rooftop playing courts", "2x FREE monthly passes with Yearly plan", "Rackets & play balls provided at desk", "Book sessions instantly via Booking Widget"].map((benefit, i) => (
                  <li key={i} className="flex gap-2.5 items-center">
                    <Check className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="text-sm text-[#999]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/919602220884?text=Hi!+I+want+to+know+more+about+the+Rooftop+Pickle+Ball+pass+included+with+the+Yearly+membership"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#FF6B00] text-black font-bold text-xs uppercase tracking-wider text-center hover:brightness-110 transition-all rounded-lg"
            >
              Inquire for Yearly Pass
            </a>
          </SportsTiltCard>

        </div>

      </div>
    </section>
  );
}
