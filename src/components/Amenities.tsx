"use client";

import React from "react";
import { motion } from "framer-motion";
import { Snowflake, Droplet, UserCheck, ShieldCheck } from "lucide-react";

const AMENITIES = [
  {
    icon: Snowflake,
    title: "AIR-CONDITIONED COMFORT",
    desc: "Fully climate-controlled training floors keeping temperatures optimal even in hot Rajasthan summers.",
  },
  {
    icon: ShieldCheck,
    title: "SANITIZED RESTROOMS",
    desc: "Ultra-hygienic changing areas, premium showers, and personal locker compartments.",
  },
  {
    icon: Droplet,
    title: "HYDRATION STATIONS",
    desc: "Purified fresh drinking water dispensers situated dynamically across the gym zone.",
  },
  {
    icon: UserCheck,
    title: "EXPERT COACH GUIDANCE",
    desc: "Constant access to certified strength instructors for correct posture, forms, and safety.",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 md:py-20 bg-luxury-black border-y border-luxury-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-barlow text-sm font-extrabold uppercase tracking-normal text-luxury-gold mb-3">
            Elite Specifications
          </p>
          <h2 className="font-bebas text-3xl sm:text-4xl text-luxury-ivory tracking-tight">
            WORLD-CLASS COMFORT & HYGIENE
          </h2>
          <p className="font-dmsans text-sm sm:text-base text-luxury-ivory/60 mt-4">
            We provide a refined premium sanctuary where you can concentrate exclusively on pushing your absolute biological limits without distractions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-luxury-charcoal/80 backdrop-blur-sm p-8 border border-luxury-gold/10 relative hover:border-luxury-gold/45 hover:shadow-[0_0_30px_rgba(204,255,0,0.18)] transition-all duration-300 group cyber-corners"
            >
              {/* Gold Top line border on hover */}
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-luxury-gold shadow-[0_0_8px_#CCFF00] transition-all duration-300 group-hover:w-full" />
              
              <div className="inline-flex p-4 bg-luxury-black border border-luxury-gold/25 text-luxury-gold mb-6 group-hover:bg-luxury-gold group-hover:text-black group-hover:shadow-[0_0_15px_rgba(204,255,0,0.4)] transition-all duration-300 shadow-[0_0_8px_rgba(204,255,0,0.1)]">
                <item.icon className="w-6 h-6" />
              </div>

              <h3 className="font-bebas text-xl text-luxury-ivory tracking-tight mb-3 group-hover:text-luxury-gold transition-colors duration-200">
                {item.title}
              </h3>
              
              <p className="font-barlow text-sm text-luxury-ivory/70 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
