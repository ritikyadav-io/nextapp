"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Sports from "@/components/Sports";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Transformations from "@/components/Transformations";
import InteractiveHub from "@/components/InteractiveHub";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import PickleballBooking from "@/components/PickleballBooking";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import SeoEngine from "@/components/SeoEngine";

export default function Home() {
  return (
    <>
      {/* Local Business Rich SEO Structured Data */}
      <SchemaMarkup />

      {/* SEO Keyword Vault */}
      <SeoEngine />

      {/* Main Luxury Fitness Website Interface */}
      <div className="relative min-h-screen bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden selection:bg-[#FF6B00] selection:text-black font-sans">
        {/* Sticky Header */}
        <Navbar />

        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. STATS BAR */}
        <StatsBar />

        {/* 3. SERVICES / PROGRAMS */}
        <Programs />

        {/* 4. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* SPORTS COMPLEX (Cricket, Swimming, Tracking, Pickleball) */}
        <Sports />

        {/* ELITE LEADERSHIP (Coaches) */}
        <Trainers />

        {/* 5. MEMBERSHIP PLANS */}
        <Membership />

        {/* 6. TRANSFORMATIONS */}
        <Transformations />

        {/* INTERACTIVE FIT PLAYGROUND */}
        <InteractiveHub />

        {/* 7. TESTIMONIALS */}
        <Reviews />

        {/* ROOFTOP PICKLEBALL BOOKING */}
        <PickleballBooking />

        {/* 8. LOCATION / CONTACT */}
        <Location />

        {/* 9. FOOTER */}
        <Footer />
      </div>
    </>
  );
}
