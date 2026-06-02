"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const navbarHeight = window.innerWidth >= 1024 ? 64 : 56;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[60vh] h-auto lg:h-[85vh] bg-[#0a0a0a] overflow-hidden flex items-center pt-[110px] pb-12 lg:pt-[64px] lg:pb-0 lg:py-0"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* We crop the image on mobile to show dynamic action, full bleed on desktop */}
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
          alt="Gym member training"
          fill
          priority
          className="object-cover object-center filter brightness-[0.3] contrast-[1.05] md:brightness-[0.4]"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="w-full max-w-7xl mx-auto px-[20px] md:px-[40px] z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
          
          {/* Left / Bottom Content Box */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs lg:text-sm font-extrabold uppercase tracking-[0.25em] text-[#FF6B00] mb-3"
            >
              Murlipura • Jaipur
            </motion.p>

            {/* H1 Heading (max 2 lines) */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-extrabold text-[#f5f5f5] uppercase tracking-tight mb-4 leading-[1.05]"
            >
              Build The Body <br className="hidden sm:inline" />
              You Deserve
            </motion.h1>

            {/* Subheading (max 1 line) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-medium text-[#999] tracking-normal mb-8 max-w-md text-sm lg:text-base"
            >
              Jaipur&apos;s premium fitness destination
            </motion.p>

            {/* CTAs Stacked vertically on mobile, row on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/919602220884?text=Hi%20Next%20Fitness%20Studio%2C%20I%20want%20to%20start%20my%20free%20trial%20today!%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-[14px] bg-[#FF6B00] text-black font-bold text-center text-sm uppercase tracking-wider rounded-md hover:brightness-110 transition-all duration-200 shadow-lg shadow-[#FF6B00]/15"
              >
                Start Free Trial
              </a>
              <button
                onClick={() => handleScrollTo("#membership")}
                className="w-full sm:w-auto px-8 py-[14px] bg-transparent border-[1.5px] border-[#FF6B00] text-[#FF6B00] font-bold text-center text-sm uppercase tracking-wider rounded-md hover:bg-[#FF6B00] hover:text-black transition-all duration-200"
              >
                View Membership
              </button>
            </motion.div>

            {/* Rating Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-6 flex justify-start items-center"
            >
              <div className="flex bg-white/5 border border-white/10 rounded-full px-4 py-1.5 items-center justify-center">
                <span className="text-[#FF6B00] text-xs mr-2">★★★★★</span>
                <span className="text-[#f5f5f5]/85 text-[10px] font-bold">4.9/5 from 1,500+ Google Reviews</span>
              </div>
            </motion.div>
          </div>

          {/* Right side hidden on mobile, decorative accent on desktop */}
          <div className="hidden lg:block h-[50vh] relative">
            {/* Can put a subtle background graphics or second preview */}
          </div>
        </div>
      </div>
    </section>
  );
}
