"use client";

import React from "react";
import { Star } from "lucide-react";

const TRAINERS = [
  {
    name: "Rakesh Sharma",
    role: "HEAD STRENGTH COACH & OWNER",
    exp: "12+ Years Experience",
    specialty: "Contest Prep, Hypertrophy & Powerlifting",
    bio: "Rakesh Sharma is a Murlipura fitness legend. He has trained over 500+ athletes to successful stage appearances and personal records.",
    image: "/rakesh.jpeg?v=2",
    featured: true,
  },
  {
    name: "Lokesh Sharma",
    role: "ELITE PERSONAL TRAINER",
    exp: "6+ Years Experience",
    specialty: "Body Recomposition & Fat Loss",
    bio: "Lokesh specializes in advanced client transformation templates, nutritional scheduling, and customized biomechanics adjustment.",
    image: "/lokesh.jpeg?v=1",
    featured: false,
  },
  {
    name: "Harsh Saini",
    role: "STRENGTH & FITNESS COACH",
    exp: "4+ Years Experience",
    specialty: "Functional Conditioning & Powerbuilding",
    bio: "Harsh focuses on functional movement patterns, explosive conditioning, and youth athletic conditioning paradigms.",
    image: "/harsh.jpeg?v=1",
    featured: false,
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[40px]">
        
        {/* Title Block */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
            Elite Leadership
          </p>
          <h2 className="font-extrabold text-[#f5f5f5] uppercase tracking-tight mb-4">
            Meet the Coaches
          </h2>
          <p className="text-[#999] text-sm leading-relaxed">
            Our certified coaching ranks are led directly by industry authority figures. No casual instructors, only high-performance physical trainers.
          </p>
        </div>

        {/* Display Grid (Vertical stack on mobile, 3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TRAINERS.map((trainer, idx) => (
            <div
              key={trainer.name}
              className={`bg-[#1a1a1a] rounded-2xl overflow-hidden border flex flex-col justify-between group transition-all duration-300 relative ${
                trainer.featured
                  ? "border-[#FF6B00] shadow-lg shadow-[#FF6B00]/5 scale-[1.01]"
                  : "border-white/5 hover:border-[#FF6B00]/30"
              }`}
            >
              {trainer.featured && (
                <div className="absolute top-4 right-4 z-10 bg-[#FF6B00] text-black font-extrabold text-[9px] tracking-widest px-3 py-1 rounded-full uppercase flex items-center gap-1 shadow-md shadow-[#FF6B00]/25">
                  <Star className="w-3 h-3 fill-current animate-pulse" />
                  HEAD COACH
                </div>
              )}

              {/* Photo top area with high contrast zoom effect */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${trainer.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent" />
              </div>

              {/* Details bottom area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[0.65rem] font-bold tracking-widest text-[#FF6B00] uppercase block mb-1">
                    {trainer.role}
                  </span>
                  
                  <h3 className="font-extrabold text-xl text-[#f5f5f5] uppercase tracking-tight mb-1">
                    {trainer.name}
                  </h3>

                  <p className="text-xs font-bold text-[#999] mb-4 uppercase">
                    {trainer.exp}
                  </p>

                  <p className="text-xs sm:text-sm text-[#999] leading-relaxed mb-6">
                    {trainer.bio}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <h5 className="text-[10px] font-bold text-white/20 mb-1.5 uppercase tracking-wider">FOCUS AREA:</h5>
                  <p className="text-xs font-semibold text-[#f5f5f5] uppercase tracking-wide">{trainer.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
