"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  texts: string[];
  reverse?: boolean;
  speed?: number;
}

export default function KineticMarquee({ texts, reverse = false, speed = 30 }: MarqueeProps) {
  // Duplicating array elements heavily ensures seamless horizontal wrap loops at any resolution
  const duplicatedTexts = [...texts, ...texts, ...texts, ...texts];

  return (
    <div className="relative w-full overflow-hidden bg-luxury-black/40 border-y border-luxury-gold/15 py-3 md:py-4 select-none my-2 md:my-6 z-10">
      {/* Dynamic scrolling line with custom framer loop */}
      <motion.div
        className="flex whitespace-nowrap gap-12 w-max"
        animate={{
          x: reverse ? [0, -2000] : [-2000, 0],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {duplicatedTexts.map((text, index) => (
          <div
            key={index}
            className="flex items-center gap-8 md:gap-12 font-bebas text-2xl sm:text-2xl md:text-4xl lg:text-7xl leading-none uppercase tracking-tight"
          >
            {index % 2 === 0 ? (
              <span className="text-luxury-gold drop-shadow-[0_0_15px_rgba(204,255,0,0.25)]">
                {text}
              </span>
            ) : (
              <span className="text-stroke-white hover:text-stroke-volt">
                {text}
              </span>
            )}
            <span className="text-white/10 font-light">{"//"}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
