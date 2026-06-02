"use client";

import React, { useState, useEffect } from 'react';
import { Home, CreditCard, Activity, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const TABS = [
  { name: 'Home',       icon: Home,       route: '#home'      },
  { name: 'Plans',      icon: CreditCard, route: '#membership'},
  { name: 'Sports',     icon: Activity,   route: '#sports'    },
  { name: 'Contact',    icon: MapPin,     route: '#contact'   },
];

export function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState('#home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsVisible(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Simple intersection observer or scroll listener could update activeTab
    // For now we'll just handle clicks.
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="bottom-nav fixed bottom-0 left-0 right-0 bg-[#141414] border-t border-[#2A2A2A] z-[1000]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)', height: 'calc(64px + env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center justify-around h-[64px] px-2">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.route;
          const Icon = tab.icon;
          
          return (
            <motion.a
              key={tab.name}
              href={tab.route}
              onClick={() => setActiveTab(tab.route)}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative flex flex-col items-center justify-center w-16 h-full gap-1 no-underline"
            >
              {/* Active Indicator Dot */}
              {isActive && (
                <motion.div 
                  layoutId="activeDot"
                  className="absolute top-1 w-1 h-1 rounded-full bg-[#E8001D]"
                />
              )}
              
              <Icon 
                size={22} 
                className={`transition-colors mt-2 ${isActive ? 'text-[#E8001D]' : 'text-[#888888]'}`} 
              />
              
              <span 
                className={`text-[10px] font-dmsans tracking-wide transition-colors ${
                  isActive ? 'text-[#E8001D]' : 'text-[#888888]'
                }`}
              >
                {tab.name}
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
