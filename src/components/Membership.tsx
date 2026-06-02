"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

export default function Membership() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = {
    monthly: [
      {
        name: "Starter Program",
        period: "1 Month Access",
        price: "₹1,500",
        billed: "/ month",
        desc: "Best for short-term fitness goals.",
        features: [
          "Full gym floor access",
          "AC climate controlled room",
          "RO drinking water facility",
          "Locker & restroom access",
        ],
        ctaText: "Choose Starter",
        ctaLink: "https://wa.me/919602220884?text=Hi%20Next%20Fitness%20Studio%2C%20I%20want%20to%20enroll%20in%20the%20Monthly%20Starter%20Program%20(1500/mo)!",
        recommended: false,
      },
      {
        name: "Grinder Program",
        period: "6 Months Access",
        price: "₹1,000",
        billed: "/ month (Paid ₹6,000)",
        desc: "Our most popular training choice.",
        features: [
          "Everything in Starter plan",
          "Body assessment roadmap",
          "Diet plan consultation",
          "Dedicated trainer check-ins",
          "Free gym t-shirt included",
        ],
        ctaText: "Get Grinder Deal",
        ctaLink: "https://wa.me/919602220884?text=Hi%20Next%20Fitness%20Studio%2C%20I%20want%20to%20enroll%20in%20the%206-Month%20Grinder%20Program%20(6000)!",
        recommended: false,
      },
      {
        name: "Champion Program",
        period: "12 Months Access",
        price: "₹9,000",
        billed: "/ year",
        desc: "The ultimate long-term transformation.",
        features: [
          "Everything in Grinder plan",
          "VIP locker assignment",
          "Rooftop Pickleball (2x/month)",
          "Free premium bag & bottle",
          "2 free guest passes",
        ],
        ctaText: "Go Champion",
        ctaLink: "https://wa.me/919602220884?text=Hi%20Next%20Fitness%20Studio%2C%20I%20want%20to%20enroll%20in%20the%2012-Month%20Champion%20Program%20(9000/yr)!",
        recommended: true,
      },
    ],
    yearly: [
      {
        name: "Grinder Program",
        period: "6 Months Access",
        price: "₹1,000",
        billed: "/ month (Paid ₹6,000)",
        desc: "Ideal mid-term commitment plan.",
        features: [
          "Full gym floor access",
          "Body assessment roadmap",
          "Diet plan consultation",
          "Dedicated trainer check-ins",
          "Free gym t-shirt included",
        ],
        ctaText: "Choose Grinder",
        ctaLink: "https://wa.me/919602220884?text=Hi%20Next%20Fitness%20Studio%2C%20I%20want%20to%20enroll%20in%20the%206-Month%20Grinder%20Program%20(6000)!",
        recommended: false,
      },
      {
        name: "Champion Program",
        period: "12 Months Access",
        price: "₹9,000",
        billed: "/ year",
        desc: "The ultimate long-term transformation.",
        features: [
          "Everything in Grinder plan",
          "VIP locker assignment",
          "Rooftop Pickleball (2x/month)",
          "Free premium bag & bottle",
          "2 free guest passes",
        ],
        ctaText: "Go Champion",
        ctaLink: "https://wa.me/919602220884?text=Hi%20Next%20Fitness%20Studio%2C%20I%20want%20to%20enroll%20in%20the%2012-Month%20Champion%20Program%20(9000/yr)!",
        recommended: true,
      },
    ],
  };

  const activePlans = billingCycle === "monthly" ? plans.monthly : plans.yearly;

  return (
    <section id="membership" className="py-16 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[40px]">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-md">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00] mb-3">
              Membership Plans
            </p>
            <h2 className="font-extrabold text-[#f5f5f5] uppercase tracking-tight mb-2">
              Unbeatable Offers
            </h2>
            <p className="text-[#999] text-sm">
              Invest in your body. Pick a cycle and join Murlipura&apos;s best.
            </p>
          </div>

          {/* Billing Toggle Switch */}
          <div className="flex bg-[#1a1a1a] p-1 border border-white/5 rounded-lg w-full sm:w-auto self-stretch sm:self-auto">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`flex-1 sm:flex-none px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#FF6B00] text-black"
                  : "text-[#999] hover:text-[#f5f5f5]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`flex-1 sm:flex-none px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                billingCycle === "yearly"
                  ? "bg-[#FF6B00] text-black"
                  : "text-[#999] hover:text-[#f5f5f5]"
              }`}
            >
              Yearly / Long-term
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className={`grid grid-cols-1 gap-6 lg:gap-8 items-stretch justify-center mx-auto ${
          activePlans.length === 3
            ? "lg:grid-cols-3 max-w-7xl"
            : "md:grid-cols-2 max-w-4xl"
        }`}>
          {activePlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-[#1a1a1a] rounded-2xl p-6 border flex flex-col justify-between relative transition-all duration-300 ${
                plan.recommended
                  ? "border-[#FF6B00] shadow-lg shadow-[#FF6B00]/5 scale-[1.01]"
                  : "border-white/5 hover:border-white/15"
              }`}
            >
              {plan.recommended && (
                <span className="absolute top-0 right-6 -translate-y-1/2 bg-[#FF6B00] text-black text-[0.65rem] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                  Recommended
                </span>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <span className="text-[0.65rem] font-bold text-[#FF6B00] uppercase tracking-widest block mb-1">
                    {plan.period}
                  </span>
                  <h3 className="font-extrabold text-xl text-[#f5f5f5] uppercase tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#999] mt-1">{plan.desc}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 border-b border-white/5 pb-6 mb-6">
                  <span className="font-extrabold text-3xl text-[#f5f5f5] tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#999] font-bold uppercase tracking-wider">
                    {plan.billed}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#999] leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button (Min 44px height tap target, reachable) */}
              <a
                href={plan.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4.5 min-h-[48px] flex items-center justify-center font-bold text-center text-xs uppercase tracking-wider transition-all duration-200 rounded-lg ${
                  plan.recommended
                    ? "bg-[#FF6B00] text-black hover:brightness-110"
                    : "bg-transparent border border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-black"
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* 💎 PERSONAL TRAINING CARD - Full width horizontal block */}
        <div className="relative w-full bg-[#1a1a1a] border-2 border-[#FF6B00]/25 hover:border-[#FF6B00]/70 p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row gap-6 lg:gap-12 justify-between items-stretch rounded-2xl shadow-lg transition-all duration-300 overflow-hidden mt-12">
          {/* Shimmer Border Sweep overlay effect */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent" />

          {/* Left Info */}
          <div className="lg:w-[40%] flex flex-col justify-between items-start">
            <div>
              <span className="text-[0.65rem] font-bold text-[#FF6B00] uppercase tracking-widest bg-[#FF6B00]/10 px-3 py-1.5 border border-[#FF6B00]/20 inline-block mb-4 rounded-full">
                💎 ELITE PERSONAL TRAINING
              </span>
              <h3 className="font-extrabold text-2xl md:text-3xl text-[#f5f5f5] uppercase tracking-tight mb-3">
                1-ON-1 PT COACHING
              </h3>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-extrabold text-3xl text-[#FF6B00] tracking-tight">
                  ₹6,000
                </span>
                <span className="text-xs font-bold text-[#999] uppercase tracking-wider">
                  / MONTHLY INVESTMENT
                </span>
              </div>

              <p className="text-sm font-semibold text-[#f5f5f5] italic tracking-tight mb-8 leading-snug">
                &ldquo;Your trainer. Your plan. Your transformation.&rdquo;
              </p>
            </div>

            <a
              href="https://wa.me/919602220884?text=Hi!+I'm+interested+in+Personal+Training+at+Next+Fitness+Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#FF6B00] text-black hover:brightness-110 font-bold text-xs uppercase tracking-wider transition-all duration-200 w-full sm:w-auto text-center rounded-lg shadow-md shadow-[#FF6B00]/15"
            >
              💬 BOOK FREE CONSULTATION
            </a>
          </div>

          {/* Right Benefits List */}
          <div className="lg:w-[55%] flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5 pt-6 lg:pt-0 lg:pl-12">
            <h4 className="font-bold text-xs text-[#FF6B00] uppercase tracking-wider mb-6">
              THE ULTIMATE RESULT ASSURANCES
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                { title: "🎯 1-ON-1 SESSIONS", desc: "100% focused on you. No distraction, just pure target results." },
                { title: "📋 WORKOUT PLAN", desc: "Customized for your body type, goals, schedule, and capacity." },
                { title: "🥗 NUTRITION BLUEPRINT", desc: "Meal-by-meal plans crafted to accelerate fat loss and muscle gain." },
                { title: "📊 WEEKLY TRACKING", desc: "Measurements, weight, and strength metrics reviewed every week." },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="p-1 bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20 rounded-md shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-[#f5f5f5] uppercase tracking-wider">
                      {benefit.title}
                    </h5>
                    <p className="text-xs text-[#999] leading-snug mt-1">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-[10px] text-[#999]/50 tracking-wider uppercase leading-relaxed border-t border-white/5 pt-4">
              * Note: Slots are highly limited to guarantee premium custom biomechanical support. Booking deposits are fully refundable until first consult assessment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
