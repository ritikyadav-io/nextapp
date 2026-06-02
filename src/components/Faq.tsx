"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What makes Next Fitness Studio the best gym in Murlipura, Jaipur?",
    answer: "Next Fitness Studio is widely recognized as Murlipura's leading premium fitness center. We feature imported commercial-grade strength and cardio equipment, professional AC climate control, fully sanitized changing areas, and hands-on guidance from certified coaches. Additionally, we provide multi-sport facilities including a Cricket Turf, Swimming Pool, and Rooftop Pickleball court, offering a complete lifestyle fitness ecosystem.",
  },
  {
    question: "Who is Rakesh Sharma, and what is his training philosophy?",
    answer: "Rakesh Sharma is the lead trainer and fitness legend at Next Fitness Studio. Known for his technical biomechanics expertise and motivational style, he has guided hundreds of clients in Jaipur through successful weight loss, muscle building, and athletic transformations. He directly oversees floor training and custom personal training programs.",
  },
  {
    question: "What are the timings and operating hours of Next Fitness Studio?",
    answer: "We are open 7 days a week to accommodate all schedules. Monday through Sunday, our hours are from 5:00 AM to 10:00 PM. Members can train at any time during these operational hours without booking restrictions, except for specific turf, pool, or court slots.",
  },
  {
    question: "Are there dedicated ladies-only batches or trainers available?",
    answer: "Yes, we support a welcoming environment for female fitness enthusiasts. We have dedicated batch timings with certified trainers who specialize in women's strength, flexibility, cardiovascular health, and post-pregnancy recovery programs.",
  },
  {
    question: "Can I get a free trial class before purchasing a membership?",
    answer: "Absolutely! We welcome all local Murlipura and Jaipur residents to experience our elite facility. You can book a free 1-day pass by clicking our WhatsApp link. This allows you to explore the gym floor, test our strength machines, and meet our coaching team.",
  },
  {
    question: "What kind of workout equipment is available at the studio?",
    answer: "Our strength academy is equipped with premium imported bio-mechanically optimized plate-loaded machines, pin-selected selectorized lines, a dedicated dumbbell range up to 50kg, heavy-duty power racks, and a custom functional training turf zone. Our cardio section features commercial treadmills, cross trainers, spin bikes, and rowing machines.",
  },
  {
    question: "How do the Cricket Turf and Swimming Pool access rules work?",
    answer: "All Next Fitness Studio memberships (Starter, Hustler, Grinder, Champion) include access to our Cricket Turf twice (2x) per month and Swimming Pool once (1x) per month. Members can easily pre-book these slots through our interactive Slot Booking Widget or by contacting the front desk on WhatsApp.",
  },
  {
    question: "Who is eligible for the Rooftop Pickleball Court passes?",
    answer: "Rooftop Pickleball Court passes are an exclusive benefit for our Yearly (Champion Plan) members. Yearly members receive two (2) free passes per month, which include court access and playing equipment (rackets and balls) provided at the front desk.",
  },
  {
    question: "Are there any hidden signup fees or registration charges?",
    answer: "No, we believe in complete pricing transparency. The prices listed on our membership plans—₹1,500 for Monthly, ₹4,500 for Quarterly, ₹6,000 for Half-Yearly, and ₹9,000 for Annual—are all-inclusive. There are no additional registration fees, maintenance charges, or taxes.",
  },
  {
    question: "Do you provide dietary support and nutrition plans?",
    answer: "Yes. General diet outlines are included in our 3-Month Hustler package and above. For complete custom daily meal planning, macros breakdown, and supplementation guidance tailored to specific medical conditions or advanced bodybuilding goals, our 6-Month Grinder and Yearly Champion memberships include regular nutritional assessments, while 1-on-1 PT coaching offers daily accountability.",
  },
  {
    question: "Where exactly is the gym located in Murlipura, Jaipur?",
    answer: "Next Fitness Studio is located at Fine Supermart, near Lal Dabba Choraha, Murlipura, Jaipur, Rajasthan 302039. Our location is centrally accessible with ample parking space for vehicles.",
  },
  {
    question: "What is the cost of Personal Training (1-on-1 PT) and what does it include?",
    answer: "Our Elite Personal Training program is priced at ₹6,000 per month. It includes 1-on-1 daily workout coaching, customized exercise sheets, custom diet plans, weekly progress tracking, posture calibration, and maximum results under the direct supervision of Rakesh Sharma or our head coaches.",
  },
  {
    question: "What is the dress code and shoe policy at Next Fitness Studio?",
    answer: "To maintain hygiene and safety, all members are required to wear proper athletic wear (t-shirts, tracks, or gym shorts). For the main gym floor and sports areas, clean, non-marking indoor sports shoes are strictly mandatory. Outdoor shoes are not permitted on the workout floor.",
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-luxury-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title block */}
        <div className="text-center mb-12">
          <p className="font-barlow text-sm font-extrabold uppercase tracking-normal text-luxury-gold mb-3">
            Inquiry Archives
          </p>
          <h2 className="font-bebas text-3xl sm:text-4xl text-luxury-ivory tracking-tight leading-none">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-dmsans text-sm sm:text-base text-luxury-ivory/60 mt-4">
            Answers to key specifications of Next Fitness Studio. For deeper custom concerns, speak to us directly via WhatsApp.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`bg-luxury-charcoal/80 border transition-all duration-300 cyber-corners ${
                  isOpen
                    ? "border-luxury-gold shadow-[0_0_20px_rgba(204,255,0,0.15)]"
                    : "border-luxury-gold/10 hover:border-luxury-gold/30 hover:shadow-[0_0_15px_rgba(204,255,0,0.08)]"
                }`}
              >
                {/* Trigger button header */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 md:p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className={`font-bebas text-lg md:text-2xl tracking-wide transition-colors duration-200 ${isOpen ? "text-luxury-gold drop-shadow-[0_0_5px_rgba(204,255,0,0.3)]" : "text-luxury-ivory hover:text-luxury-gold"}`}>
                    {faq.question}
                  </span>
                  
                  {/* Chevron toggle icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-luxury-gold shrink-0 drop-shadow-[0_0_5px_rgba(204,255,0,0.4)]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Animated disclosure content body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-6 pt-0 border-t border-luxury-gold/10 font-barlow text-sm sm:text-base text-luxury-ivory/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
