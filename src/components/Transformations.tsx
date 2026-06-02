"use client";

import React from "react";
import Image from "next/image";

const RESULTS = [
  {
    name: "Elite Transformation",
    label: "Fat Loss & Conditioning",
    stats: "Coach: Rakesh Sharma",
    image: "/gym1.png",
  },
  {
    name: "Elite Transformation",
    label: "Muscle Building & Strength",
    stats: "Coach: Rakesh Sharma",
    image: "/gym2.png",
  },
];

export default function Transformations() {
  return (
    <section id="transformations" className="py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[40px]">
        
        {/* Title Block */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
            Real Results
          </p>
          <h2 className="font-extrabold text-[#f5f5f5] uppercase tracking-tight mb-4">
            Transformations
          </h2>
          <p className="text-[#999] text-sm leading-relaxed">
            Witness the real body transformations achieved by our members under direct professional guidance.
          </p>
        </div>

        {/* Static Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESULTS.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/5 select-none bg-[#111]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-[0.95] hover:scale-[1.02] transition-all duration-500"
                  draggable="false"
                />
              </div>
              
              {/* Member details */}
              <div className="flex justify-between items-center px-2">
                <div>
                  <h4 className="font-bold text-[#f5f5f5] text-sm uppercase tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-[#999] text-xs mt-0.5">{item.label}</p>
                </div>
                <span className="bg-[#FF6B00]/15 border border-[#FF6B00]/25 text-[#FF6B00] px-3 py-1 text-xs font-extrabold uppercase rounded-full">
                  {item.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
