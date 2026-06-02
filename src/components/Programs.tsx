"use client";

import React from "react";
import { Dumbbell, Flame, TrendingUp, Heart, Activity, Sparkles } from "lucide-react";

const PROGRAMS = [
  {
    icon: Dumbbell,
    name: "Strength Training",
    desc: "Olympic barbells and heavy plate-loaded arrays.",
  },
  {
    icon: Flame,
    name: "Weight Loss",
    desc: "High-intensity metabolic drills to melt fat.",
  },
  {
    icon: TrendingUp,
    name: "Muscle Building",
    desc: "Hypertrophy splits for aesthetic muscular growth.",
  },
  {
    icon: Heart,
    name: "Transformation",
    desc: "Comprehensive 90-day custom fitness roadmap.",
  },
  {
    icon: Activity,
    name: "Functional Fitness",
    desc: "Agility turf workouts and functional stability.",
  },
  {
    icon: Sparkles,
    name: "Personal Training",
    desc: "Private 1-on-1 coaching with Rakesh Sharma.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-16 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[40px] relative z-10">
        
        {/* Title Block */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
            Training Programs
          </p>
          <h2 className="font-extrabold text-[#f5f5f5] uppercase tracking-tight mb-4">
            Engineered Results
          </h2>
          <p className="text-[#999] text-sm leading-relaxed">
            Choose your specialized training pathway. Led by certified coaches.
          </p>
        </div>

        {/* 2 Columns Mobile Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {PROGRAMS.map((prog, index) => {
            const Icon = prog.icon;
            return (
              <a
                key={index}
                href="https://wa.me/919602220884?text=Hi%20Next%20Fitness%20Studio%2C%20I%20want%20to%20learn%20more%20about%20your%20Strength%20%26%20Programs!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] p-4 md:p-6 border border-white/5 rounded-xl hover:border-[#FF6B00]/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-2 md:p-3 bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] rounded-lg w-fit mb-4">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="font-bold text-sm md:text-lg text-[#f5f5f5] group-hover:text-[#FF6B00] transition-colors leading-snug mb-1 uppercase tracking-tight">
                    {prog.name}
                  </h3>
                  <p className="text-[#999] text-[0.7rem] sm:text-xs md:text-sm leading-normal line-clamp-2 md:line-clamp-none mt-2">
                    {prog.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
