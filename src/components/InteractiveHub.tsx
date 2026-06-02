"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Percent,
  Sliders,
  Compass,
  Flame,
  Calendar,
  TrendingUp,
  Gift,
  ChevronRight,
  Trophy,
  Zap
} from "lucide-react";

// Types for components
type TabId = "bmi" | "savings" | "quiz" | "calorie" | "booking" | "pr" | "timeline" | "wheel";

interface TabItem {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
}

const TABS: TabItem[] = [
  { id: "bmi", label: "BMI & Body Fat", icon: Percent, desc: "Calculate your body composition index" },
  { id: "savings", label: "Savings Calculator", icon: Sliders, desc: "Compare package pricing & discounts" },
  { id: "quiz", label: "Goal Quiz", icon: Compass, desc: "Find your ideal workout & investment roadmap" },
  { id: "calorie", label: "Calorie Burner", icon: Flame, desc: "Estimate workout burn in local food equivalents" },
  { id: "booking", label: "Slot Booking", icon: Calendar, desc: "Pre-book Turf, Pool, or Gym sessions" },
  { id: "pr", label: "PR Board", icon: Trophy, desc: "Submit and view gym personal records" },
  { id: "timeline", label: "Transformation", icon: TrendingUp, desc: "Visual milestone checklist" },
  { id: "wheel", label: "Spin to Win", icon: Gift, desc: "Gamified wheel of fortune for exclusive prizes" }
];

export default function InteractiveHub() {
  const [activeTab, setActiveTab] = useState<TabId>("bmi");

  return (
    <section id="interactive-hub" className="py-16 md:py-20 bg-luxury-black relative overflow-hidden border-b border-luxury-charcoal">
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,#CCFF0030,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-barlow text-sm font-extrabold uppercase tracking-normal text-luxury-gold mb-3 drop-shadow-[0_0_5px_rgba(204,255,0,0.3)]">
            Elite Performance Hub
          </p>
          <h2 className="font-bebas text-2xl md:text-4xl text-luxury-ivory tracking-tight leading-tight mb-4">
            INTERACTIVE FITNESS PLAYGROUND
          </h2>
          <p className="font-dmsans text-sm sm:text-base text-luxury-ivory/60">
            Interactive, calculated utilities to calibrate your training framework. Compute body metrics, plan budgets, book facility sessions, and claim exclusive member discounts.
          </p>
        </div>

        {/* Dashboard layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start glass-card bg-luxury-charcoal/30 border border-foreground/5 p-4 sm:p-8 cyber-corners">
          
          {/* Left Navigation: Tab list */}
          <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-foreground/10 pb-6 lg:pb-0 lg:pr-6">
            <h3 className="font-bebas text-xl text-foreground/50 tracking-tight mb-4 hidden lg:block uppercase">
              Select Utility
            </h3>
            
            {/* Desktop / Large Screens Menu */}
            <div className="hidden sm:flex lg:flex flex-row lg:flex-col flex-wrap gap-2">
              {TABS.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-4 flex items-center gap-4 transition-all duration-300 relative border ${
                      isActive
                        ? "bg-luxury-gold border-luxury-gold text-black shadow-[0_0_15px_rgba(204,255,0,0.2)]"
                        : "bg-luxury-black/40 border-foreground/5 text-luxury-ivory hover:border-luxury-gold/50"
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 shrink-0 ${isActive ? "text-black" : "text-luxury-gold"}`} />
                    <div>
                      <div className="font-bebas text-lg tracking-tight leading-none">
                        {tab.label}
                      </div>
                      <div className={`font-barlow text-[11px] font-medium leading-none mt-1 ${isActive ? "text-black/75" : "text-foreground/40"}`}>
                        {tab.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Horizontal Selector */}
            <div className="sm:hidden flex overflow-x-auto gap-2 pb-2 scrollbar-thin">
              {TABS.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`whitespace-nowrap px-4 py-2.5 flex items-center gap-2 border text-xs font-barlow font-bold uppercase tracking-tight shrink-0 ${
                      isActive
                        ? "bg-luxury-gold border-luxury-gold text-black"
                        : "bg-luxury-black/40 border-foreground/5 text-foreground/70"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Area: Dynamic Tab Content */}
          <div className="lg:col-span-8 min-h-[480px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="w-full h-full"
              >
                {activeTab === "bmi" && <BmiTool />}
                {activeTab === "savings" && <SavingsTool />}
                {activeTab === "quiz" && <QuizTool />}
                {activeTab === "calorie" && <CalorieTool />}
                {activeTab === "booking" && <BookingTool />}
                {activeTab === "pr" && <PrTool />}
                {activeTab === "timeline" && <TimelineTool />}
                {activeTab === "wheel" && <WheelTool />}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ==========================================
   1. BMI & BODY FAT CALCULATOR
   ========================================== */
function BmiTool() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState<string | number>(175); // cm
  const [weight, setWeight] = useState<string | number>(75); // kg
  const [age, setAge] = useState<string | number>(25);
  const [waist, setWaist] = useState<string | number>(85); // cm
  const [neck, setNeck] = useState<string | number>(38); // cm
  const [hips, setHips] = useState<string | number>(95); // cm (only for female)

  // Calculations
  const numHeight = Number(height) || 0;
  const numWeight = Number(weight) || 0;
  const numAge = Number(age) || 0;
  const numWaist = Number(waist) || 0;
  const numNeck = Number(neck) || 0;
  const numHips = Number(hips) || 0;

  const heightM = numHeight / 100;
  const bmi = heightM > 0 ? numWeight / (heightM * heightM) : 0;

  let bodyFat = 0;
  if (gender === "male") {
    const diff = numWaist - numNeck;
    if (diff > 0 && numHeight > 0) {
      bodyFat = 86.010 * Math.log10(diff) - 70.041 * Math.log10(numHeight) + 36.76;
    } else if (bmi > 0) {
      bodyFat = 1.2 * bmi + 0.23 * numAge - 16.2;
    }
  } else {
    const diff = numWaist + numHips - numNeck;
    if (diff > 0 && numHeight > 0) {
      bodyFat = 163.205 * Math.log10(diff) - 97.684 * Math.log10(numHeight) - 78.387;
    } else if (bmi > 0) {
      bodyFat = 1.2 * bmi + 0.23 * numAge - 5.4;
    }
  }

  // Sanitizing results
  const finalBmi = bmi > 0 ? Number(bmi.toFixed(1)) : 0;
  const finalBf = bodyFat > 2 && bodyFat < 60 ? Number(bodyFat.toFixed(1)) : (bmi > 0 ? Number((1.2 * bmi + 0.23 * numAge - (gender === "male" ? 16.2 : 5.4)).toFixed(1)) : 0);

  // Determine BMI category
  let bmiCategory = "Normal";
  let bmiColor = "text-[#00FF66]";
  if (finalBmi === 0) {
    bmiCategory = "--";
    bmiColor = "text-foreground/40";
  } else if (finalBmi < 18.5) {
    bmiCategory = "Underweight";
    bmiColor = "text-cyber-cyan";
  } else if (finalBmi >= 25 && finalBmi < 29.9) {
    bmiCategory = "Overweight";
    bmiColor = "text-luxury-gold";
  } else if (finalBmi >= 30) {
    bmiCategory = "Obese";
    bmiColor = "text-[#FF3E55]";
  }

  // Determine Body Fat Category
  let bfCategory = "Fitness";
  let bfColor = "text-luxury-gold";
  if (finalBf === 0) {
    bfCategory = "--";
    bfColor = "text-foreground/40";
  } else if (gender === "male") {
    if (finalBf < 6) { bfCategory = "Essential Fat"; bfColor = "text-cyber-cyan"; }
    else if (finalBf >= 6 && finalBf <= 13) { bfCategory = "Athletes"; bfColor = "text-[#00FF66]"; }
    else if (finalBf > 13 && finalBf <= 17) { bfCategory = "Fitness"; bfColor = "text-luxury-gold"; }
    else if (finalBf > 17 && finalBf <= 24) { bfCategory = "Acceptable"; bfColor = "text-foreground/80"; }
    else { bfCategory = "Excess Fat"; bfColor = "text-[#FF3E55]"; }
  } else {
    if (finalBf < 14) { bfCategory = "Essential Fat"; bfColor = "text-cyber-cyan"; }
    else if (finalBf >= 14 && finalBf <= 20) { bfCategory = "Athletes"; bfColor = "text-[#00FF66]"; }
    else if (finalBf > 20 && finalBf <= 24) { bfCategory = "Fitness"; bfColor = "text-luxury-gold"; }
    else if (finalBf > 24 && finalBf <= 31) { bfCategory = "Acceptable"; bfColor = "text-foreground/80"; }
    else { bfCategory = "Excess Fat"; bfColor = "text-[#FF3E55]"; }
  }

  return (
    <div className="space-y-6">
      <div className="border-b border-foreground/10 pb-4 mb-4">
        <h4 className="font-bebas text-3xl text-luxury-gold tracking-wide">
          BMI & Body Fat Calculator
        </h4>
        <p className="font-barlow text-sm text-foreground/50">
          U.S. Navy Method body fat estimation + standard Body Mass Index calibration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Form Inputs */}
        <div className="space-y-4">
          {/* Gender */}
          <div>
            <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-2 uppercase">
              Gender
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(["male", "female"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`py-2 border font-barlow text-xs font-black uppercase tracking-normal transition-all duration-300 ${
                    gender === g
                      ? "bg-luxury-gold border-luxury-gold text-black"
                      : "bg-transparent border-foreground/10 text-foreground/60 hover:border-luxury-gold/50"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Height, Weight, Age Slider */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-1 uppercase">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-2 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
              />
            </div>
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-1 uppercase">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-2 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
              />
            </div>
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-1 uppercase">
                Age
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-2 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
              />
            </div>
          </div>

          {/* Waist, Neck, Hips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-1 uppercase">
                Waist (cm)
              </label>
              <input
                type="number"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-2 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
              />
            </div>
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-1 uppercase">
                Neck (cm)
              </label>
              <input
                type="number"
                value={neck}
                onChange={(e) => setNeck(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-2 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
              />
            </div>
            {gender === "female" ? (
              <div>
                <label className="font-barlow text-xs font-black tracking-normal text-[#00FF66] block mb-1 uppercase">
                  Hips (cm)
                </label>
                <input
                  type="number"
                  value={hips}
                  onChange={(e) => setHips(e.target.value)}
                  className="w-full bg-luxury-black border border-foreground/10 p-2 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
                />
              </div>
            ) : (
              <div className="flex items-end justify-center pb-2">
                <span className="font-barlow text-[10px] text-foreground/20 italic">
                  * Hips only needed for female.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Results Showcase */}
        <div className="bg-luxury-black/60 border border-foreground/5 p-6 flex flex-col justify-center items-center text-center relative h-full">
          {/* Absolute decorative accent */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-luxury-gold" />
          
          <div className="space-y-6">
            {/* BMI Display */}
            <div>
              <div className="font-barlow text-[11px] font-black uppercase tracking-normal text-foreground/40">
                Body Mass Index (BMI)
              </div>
              <div className="font-bebas text-4xl text-foreground mt-1">
                {finalBmi > 0 ? finalBmi : "--"}
              </div>
              <div className={`font-bebas text-xl uppercase tracking-tight ${bmiColor} mt-1`}>
                {bmiCategory}
              </div>
            </div>

            <div className="w-full h-[1px] bg-foreground/10" />

            {/* Body Fat Display */}
            <div>
              <div className="font-barlow text-[11px] font-black uppercase tracking-normal text-foreground/40">
                Estimated Body Fat %
              </div>
              <div className="font-bebas text-4xl text-luxury-gold mt-1 drop-shadow-[0_0_8px_rgba(204,255,0,0.25)]">
                {finalBf > 0 ? `${finalBf}%` : "--"}
              </div>
              <div className={`font-bebas text-xl uppercase tracking-tight ${bfColor} mt-1`}>
                {bfCategory}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   2. MEMBERSHIP SAVINGS CALCULATOR
   ========================================== */
function SavingsTool() {
  const [months, setMonths] = useState<number>(6);

  // Pricing structure:
  // Renewing Monthly cost: months * 1500
  // Package cost calculations:
  // 1 month: 1500
  // 2 months: 3000
  // 3-5 months: 4500 (3-month Hustler is 4500, additional months 1500/mo)
  // 6-11 months: 6000 (6-month Grinder is 6000, additional months 1000/mo)
  // 12 months: 9000 (12-month Champion)
  const getPackageCost = (m: number) => {
    if (m === 1) return 1500;
    if (m === 2) return 3000;
    if (m >= 3 && m < 6) {
      return 4500 + (m - 3) * 1500;
    }
    if (m >= 6 && m < 12) {
      return 6000 + (m - 6) * 1000;
    }
    return 9000; // 12 months
  };

  const packageCost = getPackageCost(months);
  const monthlyCost = Math.round(packageCost / months);
  const standardCost = months * 1500;
  const totalSavings = standardCost - packageCost;
  const savingsPercent = Math.round((totalSavings / standardCost) * 100);

  // Highlight badge based on month selection
  const getPillHighlight = () => {
    if (months === 12) return { text: "👑 ANNUAL MAX SAVINGS (50% OFF)", color: "text-luxury-gold border-luxury-gold/30 bg-luxury-gold/5" };
    if (months >= 6) return { text: "🔥 RECOMMENDED: 33% GENERAL DISCOUNT", color: "text-[#FF3E55] border-[#FF3E55]/30 bg-[#FF3E55]/5" };
    if (months >= 3) return { text: "🎯 COMMITMENT PLAN PROTECTED", color: "text-foreground border-foreground/20 bg-foreground/5" };
    return { text: "⚡ STANDARD MONTHLY RATE", color: "text-foreground/60 border-foreground/10" };
  };

  const pillInfo = getPillHighlight();

  return (
    <div className="space-y-6">
      <div className="border-b border-foreground/10 pb-4 mb-4">
        <h4 className="font-bebas text-2xl md:text-3xl text-luxury-gold tracking-wide">
          Membership Savings Calculator
        </h4>
        <p className="font-barlow text-sm text-foreground/50">
          Drag the slider to compare committed package rates against standard renewing monthly passes.
        </p>
      </div>

      <div className="space-y-6">
        {/* Slider Input */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-barlow text-xs font-black tracking-normal text-foreground/40 uppercase">
              Commitment Period
            </span>
            <span className="font-bebas text-2xl md:text-3xl text-foreground">
              {months} {months === 1 ? "Month" : "Months"}
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="12"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full accent-luxury-gold bg-luxury-black border border-foreground/10 h-2 rounded-none cursor-pointer"
          />

          <div className="flex justify-between font-barlow text-[10px] text-foreground/30 font-bold uppercase mt-2">
            <span>1 Mo</span>
            <span>3 Mo</span>
            <span>6 Mo</span>
            <span>9 Mo</span>
            <span>12 Mo</span>
          </div>
        </div>

        {/* Highlight Banner */}
        <div className={`border p-3 text-center font-barlow text-xs font-black tracking-normal uppercase transition-all duration-300 ${pillInfo.color}`}>
          {pillInfo.text}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Monthly Average */}
          <div className="bg-luxury-black/40 border border-foreground/5 p-5">
            <span className="font-barlow text-[10px] font-black uppercase tracking-normal text-foreground/40 block">
              Average Rate
            </span>
            <span className="font-bebas text-3xl md:text-4xl text-foreground mt-1 block">
              ₹{monthlyCost}
            </span>
            <span className="font-barlow text-[10px] text-foreground/50 block">
              per month
            </span>
          </div>

          {/* Total Investment */}
          <div className="bg-luxury-black/40 border border-foreground/5 p-5">
            <span className="font-barlow text-[10px] font-black uppercase tracking-normal text-foreground/40 block">
              Total Investment
            </span>
            <span className="font-bebas text-4xl text-foreground mt-1 block">
              ₹{packageCost}
            </span>
            <span className="font-barlow text-[10px] text-foreground/50 block">
              one-time billing
            </span>
          </div>

          {/* Total Savings */}
          <div className="bg-luxury-black/40 border border-foreground/5 p-5 relative overflow-hidden">
            <span className="font-barlow text-[10px] font-black uppercase tracking-normal text-foreground/40 block">
              Total Savings
            </span>
            <span className="font-bebas text-4xl text-luxury-gold mt-1 block drop-shadow-[0_0_6px_rgba(204,255,0,0.2)]">
              ₹{totalSavings}
            </span>
            <span className="font-barlow text-[10px] text-luxury-gold/70 block uppercase font-bold">
              {totalSavings > 0 ? `Saved ${savingsPercent}% vs Monthly` : "No commitment savings"}
            </span>
          </div>

        </div>

        {/* Savings visual bar */}
        {totalSavings > 0 && (
          <div className="bg-luxury-black border border-foreground/5 p-4 flex items-center gap-4">
            <span className="font-barlow text-xs font-black text-foreground/40 uppercase shrink-0">
              Savings Growth:
            </span>
            <div className="h-2 bg-foreground/5 flex-grow relative overflow-hidden">
              <div 
                className="h-full bg-luxury-gold" 
                style={{ width: `${Math.min(100, Math.max(0, (totalSavings / 9000) * 100))}%` }} 
              />
            </div>
            <span className="font-bebas text-sm text-luxury-gold tracking-normal shrink-0">
              +₹{totalSavings}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================
   3. GOAL MATCHER QUIZ
   ========================================== */
interface QuizStep {
  question: string;
  options: { label: string; value: string; next?: number }[];
}

const QUIZ_STEPS: QuizStep[] = [
  {
    question: "What is your primary fitness goal?",
    options: [
      { label: "💪 Build Muscle & Heavy Strength", value: "muscle" },
      { label: "🔥 Lose Fat & Calorie Conditioning", value: "fat-loss" },
      { label: "🏊 Endurance, Stamina & Active Recovery", value: "stamina" },
      { label: "👑 Total Lifestyle Body Recomposition", value: "lifestyle" }
    ]
  },
  {
    question: "What is your current training experience level?",
    options: [
      { label: "👶 Complete Beginner (First time in gym)", value: "beginner" },
      { label: "🏃 Intermediate (Familiar with machines & splits)", value: "intermediate" },
      { label: "🏋️ Advanced Athlete (Serious lifting or sport prep)", value: "advanced" }
    ]
  },
  {
    question: "How many days per week can you realistically commit?",
    options: [
      { label: "⚡ 1 - 2 Days / Week (General health maintenance)", value: "1-2" },
      { label: "🔥 3 - 4 Days / Week (Solid development split)", value: "3-4" },
      { label: "👑 5 - 6 Days / Week (Maximum progression dedication)", value: "5-6" }
    ]
  },
  {
    question: "What is your preferred coaching and guidance style?",
    options: [
      { label: "📋 Self-Guided (With general floor trainer tips)", value: "self" },
      { label: "💎 1-on-1 Personal Trainer (Constant coaching & accountability)", value: "pt" },
      { label: "⚽ Specialized Sports Focus (Cricket turf & swimming pool play)", value: "sports" }
    ]
  },
  {
    question: "What is your target budget preference?",
    options: [
      { label: "💰 Low-entry Monthly (Flexible, minimal commitment)", value: "budget" },
      { label: "🔥 Best Value Mid-term (3 to 6 Months commitment)", value: "value" },
      { label: "👑 Long-term Annual VIP (Maximum savings, yearly benefits)", value: "annual" }
    ]
  }
];

function QuizTool() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState<string>("");

  const handleSelect = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    if (step < QUIZ_STEPS.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      setStep(QUIZ_STEPS.length); // Result screen
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
  };

  // Determine matched program
  const getMatchedResults = () => {
    const isPT = answers["3"] === "pt";
    const goal = answers["0"];
    const commitment = answers["4"];
    
    let matchedPlanName = "6 MONTH GRINDER";
    let matchedPrice = "₹6,000";
    let ptAdvice = "";
    
    if (isPT) {
      matchedPlanName = "1-ON-1 ELITE PERSONAL TRAINING";
      matchedPrice = "₹6,000/mo";
      ptAdvice = "Since you selected direct coaching, Rakesh Sharma recommends 1-on-1 PT to target postures, custom diet templates, and hit goals 3x faster.";
    } else if (commitment === "annual" || answers["2"] === "5-6") {
      matchedPlanName = "12 MONTH CHAMPION";
      matchedPrice = "₹9,000/year";
    } else if (commitment === "budget") {
      matchedPlanName = "1 MONTH STARTER";
      matchedPrice = "₹1,500";
    } else {
      matchedPlanName = "3 MONTH HUSTLER";
      matchedPrice = "₹4,500";
    }

    let customTip = "";
    if (goal === "muscle") {
      customTip = "Focus on heavy compound barbell and dumbbell lines. Target 1.6g-2g of protein per kg bodyweight. Floor trainers will set up your hypertrophy progressive overload sheet.";
    } else if (goal === "fat-loss") {
      customTip = "Incorporate functional turf conditioning and swimming sprints on off-days. Maintain a moderate calorie deficit. Tracking body composition monthly is key.";
    } else if (goal === "stamina") {
      customTip = "Utilize our Cricket Turf cardiovascular warm-ups twice a month, and swimming pool recovery sessions. We will set a high-intensity conditioning split.";
    } else {
      customTip = "A hybrid setup of strength splits, targeted cardio recovery, and monthly fitness reviews. Focus on progressive strength increases and lifestyle integration.";
    }

    return { plan: matchedPlanName, price: matchedPrice, ptAdvice, tip: customTip };
  };

  const results = step === QUIZ_STEPS.length ? getMatchedResults() : null;

  // WhatsApp submission URL
  const getWhatsAppQuizLink = () => {
    if (!results) return "";
    const quizSummary = `Hi Rakesh Sharma! I completed the Next Fitness Studio Goal Quiz:
Goal: ${answers["0"]}
Experience: ${answers["1"]}
Frequency: ${answers["2"]}
Coaching Style: ${answers["3"]}
Budget: ${answers["4"]}
Matched Plan: ${results.plan}
Name: ${name || "Visitor"}`;
    return `https://wa.me/919602220884?text=${encodeURIComponent(quizSummary)}`;
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-foreground/10 pb-4 mb-4">
        <h4 className="font-bebas text-3xl text-luxury-gold tracking-wide">
          Goal Matcher Quiz
        </h4>
        <p className="font-barlow text-sm text-foreground/50">
          Find your customized exercise structure and optimum membership index in 5 steps.
        </p>
      </div>

      {step < QUIZ_STEPS.length ? (
        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex justify-between items-center text-xs font-barlow font-bold uppercase tracking-tight text-foreground/40">
            <span>Step {step + 1} of {QUIZ_STEPS.length}</span>
            <div className="h-1.5 w-40 bg-foreground/5 relative overflow-hidden glass-card">
              <div 
                className="h-full bg-luxury-gold transition-all duration-300"
                style={{ width: `${((step + 1) / QUIZ_STEPS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <h5 className="font-bebas text-2xl text-foreground tracking-wide">
            {QUIZ_STEPS[step].question}
          </h5>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3">
            {QUIZ_STEPS[step].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(step.toString(), opt.value)}
                className="glass-card bg-luxury-black/50 border border-foreground/5 hover:border-luxury-gold/50 hover:shadow-[0_4px_30px_rgba(204,255,0,0.08)] p-4 transition-all duration-300 text-sm font-barlow font-semibold uppercase tracking-tight flex justify-between items-center group"
              >
                <span>{opt.label}</span>
                <ChevronRight className="w-4 h-4 text-foreground/40 group-hover:text-luxury-gold group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>

          {step > 0 && (
            <button
              onClick={() => setStep((prev) => prev - 1)}
              className="font-barlow text-xs font-bold text-foreground/40 hover:text-foreground uppercase tracking-tight mt-4"
            >
              ← Go Back
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-luxury-black/60 border border-foreground/5 p-6 cyber-corners relative">
            <span className="absolute top-0 right-0 bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/30 font-barlow text-[10px] font-black tracking-normal px-3 py-1 uppercase">
              QUIZ COMPLETE
            </span>

            <h5 className="font-barlow text-xs font-black tracking-normal text-foreground/40 uppercase mb-2">
              Your Customized Match
            </h5>
            <h6 className="font-bebas text-4xl text-luxury-gold tracking-wide leading-none drop-shadow-[0_0_8px_rgba(204,255,0,0.25)]">
              {results?.plan}
            </h6>
            <p className="font-bebas text-xl text-foreground mt-1">
              Package Cost: {results?.price}
            </p>

            <div className="w-full h-[1px] bg-foreground/10 my-4" />

            {/* Rakesh Sharma's Custom Tip */}
            <div className="space-y-2">
              <h6 className="font-barlow text-xs font-black tracking-normal text-[#00FF66] uppercase flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Rakesh Sharma&apos;S PRO-TIP
              </h6>
              <p className="font-dmsans text-sm text-foreground/70 leading-relaxed">
                {results?.tip}
              </p>
              {results?.ptAdvice && (
                <p className="font-dmsans text-sm text-foreground/70 leading-relaxed border-l-2 border-[#FF3E55] pl-3 italic">
                  {results.ptAdvice}
                </p>
              )}
            </div>
          </div>

          {/* Form to submit result */}
          <div className="space-y-4">
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-2 uppercase">
                Enter Your Name to Lock Results
              </label>
              <input
                type="text"
                placeholder="Rohan Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-3 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={resetQuiz}
                className="py-3.5 border border-foreground/20 text-foreground font-barlow text-xs font-black uppercase tracking-normal text-center hover:bg-foreground hover:text-black hover:border-foreground transition-all duration-300"
              >
                RETAKE QUIZ
              </button>
              <a
                href={getWhatsAppQuizLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 bg-luxury-gold text-black border border-luxury-gold font-barlow text-xs font-black uppercase tracking-normal text-center hover:bg-foreground hover:text-black hover:border-foreground transition-all duration-300 block shadow-[0_0_15px_rgba(204,255,0,0.25)]"
              >
                SUBMIT RESULTS 💬
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ==========================================
   4. CALORIE BURN CALCULATOR
   ========================================== */
const ACTIVITIES = [
  { name: "Heavy Strength Training", met: 6.0, desc: "Compound squats, deadlifts, chest lines" },
  { name: "General Machine Weightlifting", met: 3.5, desc: "General accessory, isolation movements" },
  { name: "Swimming Pool Sprints", met: 7.0, desc: "Active lap swimming & hydro cardio" },
  { name: "Cricket Turf Session", met: 5.0, desc: "Agility batting, bowling, running" },
  { name: "Rooftop Pickleball Game", met: 5.5, desc: "Fast-paced reflex rallies under sky" },
  { name: "High-Intensity HIIT / Treadmill", met: 8.5, desc: "Sprints, conditioning circuits" }
];

function CalorieTool() {
  const [selectedAct, setSelectedAct] = useState<number>(0);
  const [weight, setWeight] = useState<string | number>(75);
  const [duration, setDuration] = useState<string | number>(45);

  const numWeight = Number(weight) || 0;
  const numDuration = Number(duration) || 0;

  const met = ACTIVITIES[selectedAct].met;
  // Calories = duration * (MET * 3.5 * weight / 200)
  const caloriesBurned = Math.round(numDuration * ((met * 3.5 * numWeight) / 200));

  // Localized equivalents
  // Samosa: 260 kcal
  // Chai: 120 kcal
  // Pyaz Kachori: 350 kcal
  const samosaCount = caloriesBurned > 0 ? Number((caloriesBurned / 260).toFixed(1)) : 0;
  const chaiCount = caloriesBurned > 0 ? Number((caloriesBurned / 120).toFixed(1)) : 0;
  const kachoriCount = caloriesBurned > 0 ? Number((caloriesBurned / 350).toFixed(1)) : 0;

  return (
    <div className="space-y-6">
      <div className="border-b border-foreground/10 pb-4 mb-4">
        <h4 className="font-bebas text-3xl text-luxury-gold tracking-wide">
          Calorie Burn Calculator
        </h4>
        <p className="font-barlow text-sm text-foreground/50">
          Compute energy output index and visualize it in terms of local Jaipur snacks equivalents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Form Inputs */}
        <div className="space-y-4">
          {/* Activity Selection */}
          <div>
            <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-2 uppercase">
              Select Activity
            </label>
            <select
              value={selectedAct}
              onChange={(e) => setSelectedAct(Number(e.target.value))}
              className="w-full bg-luxury-black border border-foreground/10 p-3 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
            >
              {ACTIVITIES.map((act, i) => (
                <option key={i} value={i}>
                  {act.name} (MET {act.met})
                </option>
              ))}
            </select>
            <p className="font-barlow text-[11px] text-foreground/40 mt-1 italic">
              {ACTIVITIES[selectedAct].desc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-2 uppercase">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-luxury-black border border-[#FF3E55]/10 p-3 text-foreground font-barlow text-sm focus:border-[#FF3E55] outline-none"
              />
            </div>
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-2 uppercase">
                Duration (mins)
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-luxury-black border border-[#FF3E55]/10 p-3 text-foreground font-barlow text-sm focus:border-[#FF3E55] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Burn Output */}
        <div className="bg-luxury-black/60 border border-foreground/5 p-6 space-y-6 relative h-full">
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#FF3E55]" />
          
          <div className="text-center">
            <span className="font-barlow text-[11px] font-black uppercase tracking-normal text-foreground/40">
              Total Energy Expended
            </span>
            <div className="font-bebas text-4xl text-[#FF3E55] mt-1 drop-shadow-[0_0_8px_rgba(255,62,85,0.25)]">
              {caloriesBurned} kcal
            </div>
          </div>

          <div className="w-full h-[1px] bg-foreground/10" />

          {/* Local Jaipur Equivalents */}
          <div>
            <span className="font-barlow text-xs font-black tracking-normal text-[#00FF66] uppercase block mb-3 text-center">
              🍔 LOCAL SNACK EQUIVALENTS
            </span>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-luxury-black/40 border border-foreground/5 p-3 text-center">
                <span className="text-2xl block mb-1">🫓</span>
                <span className="font-bebas text-xl text-foreground block">{samosaCount}</span>
                <span className="font-barlow text-[9px] text-foreground/40 font-bold uppercase">Samosas</span>
              </div>
              
              <div className="bg-luxury-black/40 border border-foreground/5 p-3 text-center">
                <span className="text-2xl block mb-1">☕</span>
                <span className="font-bebas text-xl text-foreground block">{chaiCount}</span>
                <span className="font-barlow text-[9px] text-foreground/40 font-bold uppercase">Cups of Chai</span>
              </div>

              <div className="bg-luxury-black/40 border border-foreground/5 p-3 text-center">
                <span className="text-2xl block mb-1">🥙</span>
                <span className="font-bebas text-xl text-foreground block">{kachoriCount}</span>
                <span className="font-barlow text-[9px] text-foreground/40 font-bold uppercase">Kachoris</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   5. SLOT BOOKING WIDGET
   ========================================== */
function BookingTool() {
  const [activity, setActivity] = useState<string>("Cricket Turf");
  const [date, setDate] = useState<string>("");
  const [slot, setSlot] = useState<string>("6:00 AM - 7:00 AM");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [membershipStatus, setMembershipStatus] = useState<string>("Non-Member");

  // Get current date string for restriction
  const todayStr = new Date().toISOString().split("T")[0];

  const getWhatsAppBookingLink = () => {
    const bookingSummary = `Hi Next Fitness Studio! I would like to book a slot:
Activity: ${activity}
Date: ${date || "Not Selected"}
Time Slot: ${slot}
Name: ${name || "Visitor"}
Phone: ${phone || "Not Provided"}
Status: ${membershipStatus}`;
    return `https://wa.me/919602220884?text=${encodeURIComponent(bookingSummary)}`;
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-foreground/10 pb-4 mb-4">
        <h4 className="font-bebas text-3xl text-luxury-gold tracking-wide">
          Slot Booking Widget
        </h4>
        <p className="font-barlow text-sm text-foreground/50">
          Book session slots for secondary amenities. General members get monthly allocations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Step 1: Booking Choices */}
        <div className="space-y-4">
          <div>
            <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-1.5 uppercase">
              Choose Activity
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full bg-luxury-black border border-foreground/10 p-3 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
            >
              <option>General Gym Floor</option>
              <option>Cricket Turf (2x/mo with plans)</option>
              <option>Swimming Pool (1x/mo with plans)</option>
              <option>Rooftop Pickleball (Yearly only)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-1.5 uppercase">
                Choose Date
              </label>
              <input
                type="date"
                min={todayStr}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-2.5 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
              />
            </div>
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-1.5 uppercase">
                Time Slot
              </label>
              <select
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-3 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
              >
                <option>6:00 AM - 7:00 AM</option>
                <option>7:00 AM - 8:00 AM</option>
                <option>8:00 AM - 9:00 AM</option>
                <option>4:00 PM - 5:00 PM</option>
                <option>5:00 PM - 6:00 PM</option>
                <option>6:00 PM - 7:00 PM</option>
                <option>7:00 PM - 8:00 PM</option>
                <option>8:00 PM - 9:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 2: Member Details */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-1.5 uppercase">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Rohan Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-2.5 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
              />
            </div>
            <div>
              <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-1.5 uppercase">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="9602220884"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-2.5 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-1.5 uppercase">
              Membership Status
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Non-Member", "Active Plan Member", "Yearly Champion"].map((status) => (
                <button
                  key={status}
                  onClick={() => setMembershipStatus(status)}
                  type="button"
                  className={`py-2 border font-barlow text-[10px] font-black uppercase tracking-normal transition-all duration-300 ${
                    membershipStatus === status
                      ? "bg-luxury-gold border-luxury-gold text-black"
                      : "bg-transparent border-foreground/10 text-foreground/60 hover:border-luxury-gold/50"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <a
            href={getWhatsAppBookingLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-luxury-gold text-black font-barlow text-xs font-black uppercase tracking-normal text-center hover:bg-foreground transition-all duration-300 block shadow-[0_0_15px_rgba(204,255,0,0.25)]"
          >
            CONFIRM SLOT ON WHATSAPP 💬
          </a>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   6. LIVE LEADERBOARD TICKER (PR BOARD)
   ========================================== */
interface RecordItem {
  id: number;
  name: string;
  lift: string;
  plan: string;
  date: string;
  avatar: string;
}

const INITIAL_RECORDS: RecordItem[] = [
  { id: 1, name: "Amit Sharma", lift: "180kg Deadlift PR", plan: "6 Mo Grinder", date: "Today", avatar: "🏋️" },
  { id: 2, name: "Priya Choudhary", lift: "30-day Streak Consistency", plan: "12 Mo Champion", date: "Yesterday", avatar: "🏃‍♀️" },
  { id: 3, name: "Sneha Patel", lift: "Lost 10kg Body Fat", plan: "1-on-1 PT Coaching", date: "Yesterday", avatar: "🏃‍♀️" },
  { id: 4, name: "Ravi Jangid", lift: "100kg Bench Press", plan: "3 Mo Hustler", date: "2 days ago", avatar: "💪" },
  { id: 5, name: "Nisha Meena", lift: "60 Pushups in 1 Min", plan: "1 Mo Starter", date: "3 days ago", avatar: "⚡" }
];

function PrTool() {
  const [records, setRecords] = useState<RecordItem[]>(INITIAL_RECORDS);
  const [name, setName] = useState<string>("");
  const [lift, setLift] = useState<string>("");
  const [plan, setPlan] = useState<string>("3 Mo Hustler");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !lift) return;
    
    const newRecord: RecordItem = {
      id: Date.now(),
      name,
      lift,
      plan,
      date: "Pending Verification",
      avatar: "👑"
    };

    setRecords([newRecord, ...records]);
    
    // Auto redirect to WhatsApp for Rakesh Sharma verification
    const text = `Hi Rakesh Sharma! I would like to submit and verify my PR achievement for the Leaderboard:
Name: ${name}
PR Achievement: ${lift}
My Current Plan: ${plan}`;
    window.open(`https://wa.me/919602220884?text=${encodeURIComponent(text)}`, "_blank");
    
    setName("");
    setLift("");
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-foreground/10 pb-4 mb-4">
        <h4 className="font-bebas text-3xl text-luxury-gold tracking-wide">
          Live Leaderboard (PR Board)
        </h4>
        <p className="font-barlow text-sm text-foreground/50">
          Personal Records achieved by local athletes. Submit your lift to get verified by Rakesh Sharma!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left Side: PR Feed */}
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
          {records.map((rec) => (
            <div
              key={rec.id}
              className="bg-luxury-black/60 border border-foreground/5 p-4 flex items-center justify-between transition-all hover:border-luxury-gold/30 hover:bg-luxury-black"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-luxury-gold/5 border border-luxury-gold/20 flex items-center justify-center text-xl">
                  {rec.avatar}
                </div>
                <div>
                  <div className="font-bebas text-lg tracking-tight text-foreground">
                    {rec.name}
                  </div>
                  <div className="font-barlow text-[11px] font-bold text-luxury-gold uppercase leading-none mt-0.5">
                    {rec.lift}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="font-barlow text-[9px] font-black uppercase text-foreground/40 block">
                  {rec.plan}
                </span>
                <span className={`font-barlow text-[9px] block uppercase mt-0.5 ${
                  rec.date === "Pending Verification" ? "text-amber-500 font-bold" : "text-foreground/30"
                }`}>
                  {rec.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Form submission */}
        <form onSubmit={handleSubmit} className="bg-luxury-black/40 border border-foreground/5 p-5 flex flex-col justify-between cyber-corners">
          <div className="space-y-4">
            <span className="font-barlow text-xs font-black tracking-normal text-[#00FF66] uppercase block">
              🏆 SUBMIT YOUR PERSONAL RECORD
            </span>

            <div>
              <label className="font-barlow text-[10px] font-black tracking-normal text-foreground/40 block mb-1 uppercase">
                Name
              </label>
              <input
                type="text"
                placeholder="Rohan Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-2 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
                required
              />
            </div>

            <div>
              <label className="font-barlow text-[10px] font-black tracking-normal text-foreground/40 block mb-1 uppercase">
                PR Achievement Details
              </label>
              <input
                type="text"
                placeholder="e.g. 150kg Deadlift, or 20 Pullups"
                value={lift}
                onChange={(e) => setLift(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-2 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
                required
              />
            </div>

            <div>
              <label className="font-barlow text-[10px] font-black tracking-normal text-foreground/40 block mb-1 uppercase">
                Membership Plan
              </label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="w-full bg-luxury-black border border-foreground/10 p-2 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
              >
                <option>1 Mo Starter</option>
                <option>3 Mo Hustler</option>
                <option>6 Mo Grinder</option>
                <option>12 Mo Champion</option>
                <option>1-on-1 PT Coaching</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-[#00C853] text-black font-barlow text-xs font-black uppercase tracking-normal text-center hover:bg-foreground transition-all duration-300 shadow-[0_0_10px_rgba(0,200,83,0.25)]"
          >
            SUBMIT & VERIFY PR 🟢
          </button>
        </form>
      </div>
    </div>
  );
}

/* ==========================================
   7. TRANSFORMATION TIMELINE
   ========================================== */
interface Milestone {
  day: string;
  title: string;
  metric: string;
  desc: string;
  diet: string;
}

const MILESTONES: Milestone[] = [
  {
    day: "Day 1",
    title: "Assessment & Baseline Setup",
    metric: "Body composition scale baseline",
    desc: "Baseline calibration of weight, body fat %, muscle density, and posture assessment. Rakesh Sharma sets up your exercise catalog.",
    diet: "Calibration week: Baseline calorie logs, protein target set to 1.2g/kg."
  },
  {
    day: "Day 30",
    title: "Cardio Recovery & Aerobic Boost",
    metric: "V2 Max / Cardio output up by 25%",
    desc: "Habit formation locked. Nervous system adapts, muscle soreness reduces, and lung capacity increases via targeted cardio intervals.",
    diet: "Eliminate refined sugars, introduce consistent pre & post workout macros."
  },
  {
    day: "Day 60",
    title: "Visible Definition & Recomposition",
    metric: "Average body fat down 2-4%",
    desc: "Visible chest/shoulder definition, posture calibration improves, core stability increases, and deadlift/squat weights increase by 20-30%.",
    diet: "Strict calorie control: Target deficit or lean bulk macros, protein at 1.6g/kg."
  },
  {
    day: "Day 90",
    title: "Peak Energy & Metabolic Adaption",
    metric: "Strength indices up by 50%",
    desc: "High metabolic burn. Muscle density increases significantly, fat adaptation completes, sleep quality improves, high energy all day.",
    diet: "Macro cycling, carb timing introduced around intense lifting sessions."
  },
  {
    day: "Day 180+",
    title: "Lifestyle Habit & Peak Physique",
    metric: "Sustainable target physique achieved",
    desc: "Transformation complete. Training becomes automatic, body composition reaches elite fitness standards, maximum physical confidence.",
    diet: "Sustainable maintenance macronutrient roadmap for long-term health."
  }
];

function TimelineTool() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="space-y-6">
      <div className="border-b border-foreground/10 pb-4 mb-4">
        <h4 className="font-bebas text-3xl text-luxury-gold tracking-wide">
          Transformation Timeline Tool
        </h4>
        <p className="font-barlow text-sm text-foreground/50">
          The step-by-step physical progression roadmap. Click milestones to reveal targets.
        </p>
      </div>

      <div className="space-y-6">
        {/* Timeline Stepper */}
        <div className="flex justify-between items-center relative py-4">
          {/* Background Connecting Line */}
          <div className="absolute left-0 right-0 h-0.5 bg-foreground/10 z-0 top-1/2 -translate-y-1/2" />
          
          {/* Active indicator line */}
          <div 
            className="absolute left-0 h-0.5 bg-luxury-gold z-0 top-1/2 -translate-y-1/2 transition-all duration-500"
            style={{ width: `${(activeIndex / (MILESTONES.length - 1)) * 100}%` }}
          />

          {MILESTONES.map((stone, idx) => {
            const isActive = activeIndex === idx;
            const isCompleted = idx < activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="relative z-10 flex flex-col items-center group focus:outline-none"
              >
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bebas text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-luxury-gold border-luxury-gold text-black shadow-[0_0_12px_#CCFF00]"
                    : isCompleted
                    ? "bg-black border-luxury-gold text-luxury-gold"
                    : "bg-black border-foreground/20 text-foreground/40 hover:border-foreground/50"
                }`}>
                  {idx + 1}
                </div>
                <span className={`font-barlow text-[10px] font-black uppercase tracking-tight mt-2 transition-colors ${
                  isActive ? "text-luxury-gold" : "text-foreground/40"
                }`}>
                  {stone.day}
                </span>
              </button>
            );
          })}
        </div>

        {/* Milestone Detail Drawer */}
        <div className="bg-luxury-black/60 border border-foreground/5 p-6 cyber-corners relative">
          <span className="absolute top-0 right-0 bg-luxury-gold/15 text-luxury-gold border border-luxury-gold/30 font-barlow text-[10px] font-black tracking-normal px-3.5 py-1.5 uppercase">
            {MILESTONES[activeIndex].day} TARGET
          </span>

          <h5 className="font-bebas text-2xl text-foreground tracking-wide uppercase">
            {MILESTONES[activeIndex].title}
          </h5>
          
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <span className="font-barlow text-[10px] font-black uppercase tracking-normal text-[#00FF66] block">
                  🎯 PHYSICIAN/COACH METRIC TARGET
                </span>
                <p className="font-barlow text-sm text-foreground/90 font-bold uppercase mt-0.5">
                  {MILESTONES[activeIndex].metric}
                </p>
              </div>

              <div>
                <span className="font-barlow text-[10px] font-black uppercase tracking-normal text-foreground/40 block">
                  📈 PHYSIOLOGICAL MILESTONES
                </span>
                <p className="font-dmsans text-xs sm:text-sm text-foreground/70 leading-relaxed mt-1">
                  {MILESTONES[activeIndex].desc}
                </p>
              </div>
            </div>

            <div className="bg-luxury-black/40 border border-foreground/5 p-4 flex flex-col justify-center">
              <span className="font-barlow text-[10px] font-black uppercase tracking-normal text-[#FF3E55] block">
                🥗 NUTRITION BLUEPRINT RULE
              </span>
              <p className="font-dmsans text-xs sm:text-sm text-foreground/70 leading-relaxed mt-1 italic">
                &ldquo;{MILESTONES[activeIndex].diet}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   8. SPIN THE WHEEL (GAMIFIED)
   ========================================== */
const PRIZES = [
  "5% OFF",
  "10% OFF",
  "15% OFF",
  "20% OFF",
  "10% OFF",
  "15% OFF"
];

function WheelTool() {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [prize, setPrize] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [couponCode, setCouponCode] = useState<string>("");
  const wheelRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState<number>(0);

  const handleSpin = () => {
    if (spinning) return;
    if (!name) {
      alert("Please enter your name to unlock the prize wheel!");
      return;
    }

    setSpinning(true);
    setPrize(null);

    // Dynamic rotation math
    // 360 / 6 segments = 60 degrees per segment
    // Spin 4 to 6 full rotations (1440 to 2160 degrees) + a random offset to select a segment
    const segmentCount = PRIZES.length;
    const randomSegment = Math.floor(Math.random() * segmentCount);
    
    // We want the wheel to align nicely with the top pointer.
    // Segment index calculation: (rotation degrees) determines the output prize.
    const segmentDeg = 360 / segmentCount;
    // Calculate total degrees to spin (align center of segment to top pointer)
    const targetDegrees = rotation + (360 * 5) + (330 - (randomSegment * segmentDeg));
    
    setRotation(targetDegrees);

    setTimeout(() => {
      setSpinning(false);
      const wonPrize = PRIZES[randomSegment];
      setPrize(wonPrize);

      // Generate coupon code
      const randHex = Math.random().toString(36).substring(2, 8).toUpperCase();
      setCouponCode(`NEXT-WHEEL-${randHex}`);
    }, 4500); // match CSS duration
  };

  const getWhatsAppClaimLink = () => {
    if (!prize) return "";
    const claimText = `Hi Rakesh Sharma! I spun the Interactive Wheel of Fortune and won a prize:
Prize: ${prize}
Coupon Code: ${couponCode}
Spun by Name: ${name}`;
    return `https://wa.me/919602220884?text=${encodeURIComponent(claimText)}`;
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-foreground/10 pb-4 mb-4">
        <h4 className="font-bebas text-3xl text-luxury-gold tracking-wide">
          Spin the Wheel (Gamified Offers)
        </h4>
        <p className="font-barlow text-sm text-foreground/50">
          Enter your name and spin to win exclusive local studio vouchers and training sessions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Wheel SVG Area */}
        <div className="flex flex-col items-center justify-center relative py-4">
          {/* Pointer */}
          <div className="absolute top-[18px] z-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-luxury-gold filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />

          {/* Wheel Circle Outer container */}
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-luxury-gold/30 bg-black flex items-center justify-center relative overflow-hidden shadow-[0_0_35px_rgba(204,255,0,0.12)] shrink-0">
            <div
              ref={wheelRef}
              className="w-full h-full rounded-full transition-transform ease-out relative"
              style={{
                transform: `rotate(${rotation}deg)`,
                transitionDuration: "4.5s",
                backgroundImage: `conic-gradient(
                  #FFFFFF 0deg 60deg,
                  #FF6B00 60deg 120deg,
                  #FFFFFF 120deg 180deg,
                  #FF6B00 180deg 240deg,
                  #FFFFFF 240deg 300deg,
                  #FF6B00 300deg 360deg
                )`
              }}
            >
              {/* Prize texts inside segments */}
              {PRIZES.map((pr, idx) => {
                // Base direction of absolute-positioned div is 3 o'clock (90deg).
                // Subtract 90deg to align idx 0 with the 0-60deg segment center (30deg).
                const rotationDeg = idx * 60 - 60;
                return (
                  <div
                    key={idx}
                    className="absolute w-1/2 h-8 top-1/2 left-1/2 origin-left flex items-center justify-end pr-5 font-barlow text-[11px] font-black uppercase tracking-tight"
                    style={{
                      transform: `rotate(${rotationDeg}deg) translateY(-50%)`,
                      color: idx % 2 === 0 ? "#FF6B00" : "#FFFFFF"
                    }}
                  >
                    <span className="inline-block text-right whitespace-nowrap">
                      {pr}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="absolute w-12 h-12 rounded-full bg-white border-4 border-[#FF6B00] z-10 flex items-center justify-center font-bebas text-black font-bold text-xs select-none">
              NEXT
            </div>
          </div>
        </div>

        {/* Control Area */}
        <div className="space-y-4">
          {!prize ? (
            <div className="space-y-4">
              <div>
                <label className="font-barlow text-xs font-black tracking-normal text-foreground/40 block mb-2 uppercase">
                  Enter Your Name to Spin
                </label>
                <input
                  type="text"
                  placeholder="Rohan Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-luxury-black border border-foreground/10 p-3 text-foreground font-barlow text-sm focus:border-luxury-gold outline-none"
                  disabled={spinning}
                />
              </div>

              <button
                type="button"
                onClick={handleSpin}
                disabled={spinning}
                className="w-full py-4 bg-luxury-gold text-black font-barlow text-sm font-black uppercase tracking-normal text-center hover:bg-foreground transition-all duration-300 block shadow-[0_0_20px_rgba(204,255,0,0.3)] disabled:opacity-50"
              >
                {spinning ? "SPINNING WHEEL..." : "SPIN THE WHEEL ⚡"}
              </button>
            </div>
          ) : (
            <div className="bg-luxury-black/60 border border-foreground/5 p-6 cyber-corners relative space-y-4 text-center">
              <span className="absolute top-0 right-0 bg-[#00C853]/10 text-[#00C853] border border-[#00C853]/30 font-barlow text-[10px] font-black tracking-normal px-3 py-1 uppercase">
                CONGRATULATIONS!
              </span>

              <div>
                <span className="font-barlow text-xs font-black tracking-normal text-foreground/40 uppercase block mb-1">
                  You Won
                </span>
                <span className="font-bebas text-3xl text-luxury-gold block leading-none drop-shadow-[0_0_8px_#CCFF0030]">
                  {prize}
                </span>
              </div>

              <div className="bg-luxury-black border border-foreground/5 py-2 px-4 inline-block font-mono text-sm tracking-tight text-foreground">
                CODE: {couponCode}
              </div>

              <div className="w-full h-[1px] bg-foreground/10" />

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPrize(null)}
                  className="py-3 border border-foreground/20 text-foreground font-barlow text-xs font-black uppercase tracking-normal text-center hover:bg-foreground hover:text-black transition-all duration-300"
                >
                  SPIN AGAIN
                </button>
                <a
                  href={getWhatsAppClaimLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-[#00C853] text-black font-barlow text-xs font-black uppercase tracking-normal text-center hover:bg-foreground transition-all duration-300 block shadow-[0_0_15px_rgba(0,200,83,0.35)]"
                >
                  CLAIM PRIZE 💬
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
