"use client";

import React from "react";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Yash Agarwal",
    tag: "Local Guide",
    rating: 5,
    text: "Very good gym and helpful trainer. Well equipped machines. The gold standard for Jaipur.",
  },
  {
    name: "Harsh Saini",
    tag: "Active Member",
    rating: 5,
    text: "The gym is super clean, well-equipped, and never too crowded. The trainers are friendly and highly knowledgeable.",
  },
  {
    name: "Vivek Sharma",
    tag: "Active Member",
    rating: 5,
    text: "This gym is too fantastic. All machines are top quality, and trainer Rakesh Sharma is an absolute legend! 🙌",
  },
  {
    name: "Yogesh Saini",
    tag: "Active Member",
    rating: 5,
    text: "Awesome trainers and gym equipments. Fully air-conditioned and very neat restrooms. Highly recommended 👍",
  },
  {
    name: "Kartik Goyal",
    tag: "Local Guide",
    rating: 5,
    text: "Best gym in Jaipur. Period. The biomechanics of the strength machines is excellent.",
  },
  {
    name: "Ritik Yadav",
    tag: "Active Member",
    rating: 5,
    text: "Best place for fitness! Friendly crowd, positive workout environment, and solid training guidance.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[40px]">
        
        {/* Header Block */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
            Testimonials
          </p>
          <h2 className="font-extrabold text-[#f5f5f5] uppercase tracking-tight mb-4">
            Google Reviews
          </h2>
          <p className="text-[#999] text-sm leading-relaxed">
            Read what our active community in Jaipur has to say about their transformation journeys.
          </p>
        </div>

        {/* Horizontal Scrolling container on mobile, flex-wrap grid on desktop */}
        <div className="flex overflow-x-auto gap-4 md:grid md:grid-cols-3 md:gap-8 hide-scrollbar -webkit-overflow-scrolling-touch pb-6">
          {REVIEWS.map((rev, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-auto bg-[#1a1a1a] p-5 rounded-xl border border-white/5 flex flex-col justify-between"
              style={{ minHeight: "180px" }}
            >
              <div>
                {/* 16px Gold Stars */}
                <div className="flex gap-0.5 text-[#FFBC00] mb-3.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text (max 3 lines, truncated) */}
                <p className="text-[#999] text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Initials Avatar + Details */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-3.5">
                <div className="w-8 h-8 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] text-xs font-black shrink-0">
                  {getInitials(rev.name)}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#f5f5f5] uppercase leading-none">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] text-[#999] font-medium tracking-wide mt-1 block">
                    {rev.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom review link */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps?cid=9602220884"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00] hover:text-[#f5f5f5] transition-colors"
          >
            Read All Google Reviews →
          </a>
        </div>

      </div>
    </section>
  );
}
