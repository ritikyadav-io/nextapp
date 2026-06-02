"use client";

import { motion, useInView } from "framer-motion";
import { Zap, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function StatCount({ value, suffix = "", isDecimal = false }: { value: number; suffix?: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      if (isDecimal) {
        let start = 0;
        const end = Math.floor(value * 10);
        const duration = 1800; // 1.8s
        const timer = setInterval(() => {
          start += 1;
          if (start >= end) {
            clearInterval(timer);
            setCount(end);
          } else {
            setCount(start);
          }
        }, duration / end);
        return () => clearInterval(timer);
      } else {
        let start = 0;
        const end = value;
        const step = Math.ceil(end / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= end) {
            clearInterval(timer);
            setCount(end);
          } else {
            setCount(start);
          }
        }, 40);
        return () => clearInterval(timer);
      }
    }
  }, [inView, value, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? (count / 10).toFixed(1) : count}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 500, suffix: "+", label: "Active Members", desc: "Jaipur's serious fitness community" },
  { value: 5, suffix: "+", label: "Expert Coaches", desc: "Led by elite Rakesh Sharma" },
  { value: 100, suffix: "+", label: "Imported Equipment", desc: "Top-tier biomechanically optimized" },
  { value: 4.9, suffix: "", isDecimal: true, label: "Google Rating", desc: "Based on authentic local reviews" },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 bg-background overflow-hidden border-t border-foreground/5">      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-barlow text-sm font-extrabold uppercase tracking-normal text-luxury-gold mb-3">
                Since 2020
              </p>
              
              <h2 className="font-bebas text-2xl sm:text-3xl md:text-4xl leading-none text-foreground tracking-tight mb-8">
                JAIPUR&apos;S DESTINATION FOR <br />
                <span className="text-luxury-gold drop-shadow-[0_2px_10px_rgba(80,38,133,0.15)]">SERIOUS FITNESS</span>
              </h2>

              <p className="font-dmsans text-base sm:text-lg text-foreground/80 leading-relaxed mb-6">
                Next Fitness Studio is not your typical casual wellness center. We are a premier private athletic academy custom-designed for individuals who take their physical limits seriously.
              </p>

              <p className="font-dmsans text-base text-foreground/70 leading-relaxed mb-10">
                Located in the heart of Murlipura, we deliver an uncompromised training environment featuring world-class imported strength arrays, climate-controlled comfort, fully sanitized facilities, and strict direct personal guidance.
              </p>
            </motion.div>

            {/* Core Values Badge Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-4 items-start bg-luxury-black/50 p-6 border border-luxury-gold/15 cyber-corners hover:shadow-[0_0_25px_rgba(204,255,0,0.15)] transition-all duration-300"
              >
                <div className="p-3 bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/30 shadow-[0_0_8px_rgba(204,255,0,0.2)]">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bebas text-lg tracking-tight text-luxury-ivory">ELITE COACHING</h4>
                  <p className="font-barlow text-xs text-luxury-ivory/60 mt-1">Direct instruction and personalized tracking program.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4 items-start bg-luxury-black/50 p-6 border border-luxury-gold/15 cyber-corners hover:shadow-[0_0_25px_rgba(204,255,0,0.15)] transition-all duration-300"
              >
                <div className="p-3 bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/30 shadow-[0_0_8px_rgba(204,255,0,0.2)]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bebas text-lg tracking-tight text-luxury-ivory">PREMIUM HYGIENE</h4>
                  <p className="font-barlow text-xs text-luxury-ivory/60 mt-1">Deep cleaning protocols, organized locker spaces, and fresh airflow.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Image Layout Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] w-full overflow-hidden border-2 border-luxury-gold/30 group shadow-[0_0_25px_rgba(204,255,0,0.1)] hover:shadow-[0_0_35px_rgba(204,255,0,0.25)] transition-all duration-500"
            >
              {/* Premium dark-overlay trainer image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-barlow text-xs font-extrabold uppercase tracking-normal text-luxury-gold bg-luxury-black/90 px-3 py-1.5 border border-luxury-gold/40 shadow-[0_0_10px_rgba(204,255,0,0.25)]">
                  ATHLETIC CODE OF EXCELLENCE
                </span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Massive Stats Display Overlay Container */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 border-t border-luxury-ivory/10 pt-10">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center sm:text-left"
            >
              <p className="font-bebas text-2xl sm:text-3xl md:text-4xl text-luxury-gold tracking-tight leading-none mb-2">
                <StatCount value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
              </p>
              <p className="font-bebas text-lg tracking-tight text-luxury-ivory uppercase">
                {stat.label}
              </p>
              <p className="font-barlow text-xs text-luxury-ivory/50 mt-1 max-w-[200px] mx-auto sm:mx-0">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
