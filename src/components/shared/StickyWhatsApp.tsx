"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function StickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show toggle shortly after mount to trigger entry animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed right-4 sm:right-6 bottom-6 z-[999] flex flex-col items-center gap-2"
        >
          {/* Subtle label on hover/pulse */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md text-white font-barlow text-[10px] sm:text-xs font-bold uppercase px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 pointer-events-none hidden md:block">
            CHAT WITH US
          </span>

          <a
            href="https://wa.me/919602220884?text=Hi!+I+want+to+join+Next+Fitness+Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 border border-[#25D366]/50"
            aria-label="Contact Next Fitness Studio on WhatsApp"
          >
            {/* Ping animation behind */}
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-30 animate-ping" style={{ animationDuration: "2s" }} />
            
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-md" fill="currentColor" strokeWidth={1.5} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
