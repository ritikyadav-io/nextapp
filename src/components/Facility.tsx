"use client";

import React from "react";
import { motion } from "framer-motion";

const ZONES = [
  {
    tag: "Zone 01",
    name: "STRENGTH ZONE",
    desc: "Equipped with biomechanically optimized imported selectorized machines, plate-loaded plate press arrays, and dynamic cable multi-stations engineered for maximum hypertrophy and force output.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tag: "Zone 02",
    name: "CARDIO SYSTEM",
    desc: "High-spec commercial treadmills, cross-trainers, and magnetic air bikes. Features digital console monitoring for steady-state or high-intensity interval conditioning (HIIT) programs.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tag: "Zone 03",
    name: "FREE WEIGHT AREA",
    desc: "Massive solid rubber dumbbells ranging up to heavy professional metrics, flat/incline multi-adjustable utility benches, solid squat rigs, and competition Olympic barbell platforms.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    tag: "Zone 04",
    name: "FUNCTIONAL & RECOVERY",
    desc: "Dedicated agility floor featuring premium synthetic turf, heavy battle ropes, plyometric foam blocks, medicine balls, and specialized myofascial recovery roller zones.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Facility() {
  return (
    <section id="facilities" className="relative py-16 md:py-20 bg-luxury-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <p className="font-barlow text-sm font-extrabold uppercase tracking-normal text-luxury-gold mb-3">
              Showroom Layout
            </p>
            <h2 className="font-bebas text-2xl md:text-4xl text-luxury-ivory tracking-tight leading-tight">
              OUR WORLD-CLASS TRAINING FACILITY
            </h2>
          </div>
          <p className="font-dmsans text-sm sm:text-base text-luxury-ivory/60 max-w-md">
            Architecturally structured zones engineered for elite performance. No clutter. No queues. Pure, unadulterated focus.
          </p>
        </div>

        {/* Alternating Image-Text Grid */}
        <div className="flex flex-col gap-16 md:gap-20">
          {ZONES.map((zone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={zone.name}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`lg:col-span-7 relative aspect-video md:aspect-[16/10] overflow-hidden border border-luxury-gold/25 group shadow-[0_0_20px_rgba(204,255,0,0.1)] hover:shadow-[0_0_30px_rgba(204,255,0,0.25)] hover:border-luxury-gold/45 transition-all duration-500 cyber-corners ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-103"
                    style={{ backgroundImage: `url('${zone.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/95 via-transparent to-luxury-black/35 opacity-70" />
                </motion.div>

                {/* Text Description Column */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="font-barlow text-xs font-black tracking-normal text-luxury-gold mb-2 block drop-shadow-[0_0_5px_rgba(204,255,0,0.3)]">
                    {"//"} {zone.tag.toUpperCase()}
                  </span>
                  
                  <h3 className="font-bebas text-2xl md:text-4xl text-luxury-ivory tracking-tight mb-4 leading-tight group-hover:text-luxury-gold transition-colors duration-200">
                    {zone.name}
                  </h3>

                  <p className="font-dmsans text-sm sm:text-base text-luxury-ivory/70 leading-relaxed mb-6">
                    {zone.desc}
                  </p>

                  <div className="h-[2px] w-24 bg-luxury-gold shadow-[0_0_8px_#CCFF00]" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
