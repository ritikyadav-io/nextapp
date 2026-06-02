"use client";

import React from "react";
import { Users, Dumbbell, ShieldAlert, Calendar } from "lucide-react";

const STATS = [
  {
    icon: Users,
    number: "200+",
    label: "Members",
    desc: "Active lifters",
  },
  {
    icon: Dumbbell,
    number: "20+",
    label: "Equipment",
    desc: "Imported strength",
  },
  {
    icon: ShieldAlert,
    number: "3",
    label: "Trainers",
    desc: "Certified experts",
  },
  {
    icon: Calendar,
    number: "2+ Years",
    label: "Legacy",
    desc: "Established 2020",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0a0a0a] py-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[40px]">
        {/* Mobile Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-4 md:gap-8 hide-scrollbar -webkit-overflow-scrolling-touch">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] md:w-auto bg-[#1a1a1a] p-4 border border-white/5 rounded-xl flex items-center gap-4 hover:translate-y-[-2px] transition-transform duration-200"
              >
                {/* Icon Container */}
                <div className="p-3 bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text Block */}
                <div>
                  <h4 className="font-extrabold text-[1.4rem] leading-none text-[#f5f5f5]">
                    {stat.number}
                  </h4>
                  <p className="text-[0.75rem] font-bold text-[#FF6B00] uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[0.7rem] text-[#999] mt-0.5 leading-none">
                    {stat.desc}
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
