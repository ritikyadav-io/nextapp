"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

const CATEGORIES = ["ALL", "EQUIPMENT", "GYM FLOOR", "TRAINERS", "TRANSFORMATIONS"];

const ITEMS = [
  {
    id: 1,
    category: "EQUIPMENT",
    title: "Imported Selectorized Stations",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "GYM FLOOR",
    title: "Luxury Carbon Strength Arena",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "TRAINERS",
    title: "Personal Guidance Sessions",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "TRANSFORMATIONS",
    title: "Elite Lean Body Overhauls",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "EQUIPMENT",
    title: "Competition Barbell Array",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "GYM FLOOR",
    title: "Functional Battle Ropes Zone",
    image: "https://images.unsplash.com/photo-1526506159807-6887556a31c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "EQUIPMENT",
    title: "Urethane Dumbbell Collection",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    category: "TRANSFORMATIONS",
    title: "Conditioning & Shredding",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    category: "TRAINERS",
    title: "Form Correction & Spotting",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    category: "GYM FLOOR",
    title: "Climate-Controlled Cardio System",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    category: "EQUIPMENT",
    title: "Heavy Duty Racks",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    category: "GYM FLOOR",
    title: "Deadlift Platform Area",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
  }
];

export default function Gallery() {
  const [selectedCat, setSelectedCat] = useState("ALL");
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const filteredItems = selectedCat === "ALL" 
    ? ITEMS 
    : ITEMS.filter(item => item.category === selectedCat);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhoto === null) return;
    const currentIndex = ITEMS.findIndex(i => i.id === activePhoto);
    const nextIndex = (currentIndex + 1) % ITEMS.length;
    setActivePhoto(ITEMS[nextIndex].id);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhoto === null) return;
    const currentIndex = ITEMS.findIndex(i => i.id === activePhoto);
    const prevIndex = (currentIndex - 1 + ITEMS.length) % ITEMS.length;
    setActivePhoto(ITEMS[prevIndex].id);
  };

  const currentPhotoObj = ITEMS.find(i => i.id === activePhoto);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-luxury-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <p className="font-barlow text-sm font-extrabold uppercase tracking-normal text-luxury-gold mb-3">
              Visual Archives
            </p>
            <h2 className="font-bebas text-3xl sm:text-4xl text-luxury-ivory tracking-tight leading-none">
              THE NEXT FITNESS GALLERY
            </h2>
          </div>
          
          {/* Categories Tab list */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2 font-barlow text-xs font-bold uppercase tracking-normal transition-all duration-200 border ${
                  selectedCat === cat 
                    ? "bg-luxury-gold text-black border-luxury-gold shadow-[0_0_15px_rgba(204,255,0,0.35)]" 
                    : "bg-transparent text-luxury-ivory/60 border-luxury-gold/20 hover:text-luxury-gold hover:border-luxury-gold/55"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry / Grid Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                onClick={() => setActivePhoto(item.id)}
                className="relative aspect-square bg-luxury-charcoal/80 border border-luxury-gold/15 group cursor-pointer overflow-hidden cyber-corners hover:border-luxury-gold/45 hover:shadow-[0_0_25px_rgba(204,255,0,0.18)] transition-all duration-300"
              >
                {/* Image background */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />
                
                {/* Subtle dark visual overlay */}
                <div className="absolute inset-0 bg-luxury-black/50 group-hover:bg-luxury-black/75 transition-all duration-300" />

                {/* Info and Zoom Icon overlay */}
                <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="self-end p-1.5 md:p-2 bg-luxury-gold text-black rounded-none shadow-[0_0_10px_rgba(204,255,0,0.4)]">
                    <Eye className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <span className="font-barlow text-[8px] md:text-[10px] font-extrabold tracking-normal text-luxury-gold uppercase block mb-0.5 md:mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-bebas text-sm sm:text-lg md:text-2xl text-luxury-ivory tracking-wide leading-none">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Exquisite Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {activePhoto !== null && currentPhotoObj && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-luxury-black/95 backdrop-blur-md flex items-center justify-center p-6"
          >
            {/* Close trigger button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 p-3 bg-luxury-charcoal text-luxury-ivory border border-luxury-gold/15 hover:text-luxury-gold hover:border-luxury-gold hover:shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-all duration-200 z-50"
              aria-label="Close image lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-6 p-3 bg-luxury-charcoal/80 text-luxury-ivory border border-luxury-gold/15 hover:text-luxury-gold hover:border-luxury-gold hover:shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-all duration-200 z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox Main Container Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[80vh] flex flex-col items-center relative"
            >
              {/* Actual Image */}
              <Image
                src={currentPhotoObj.image}
                alt={currentPhotoObj.title}
                width={800}
                height={600}
                className="max-w-full max-h-[70vh] object-contain border border-luxury-gold/30 shadow-[0_0_30px_rgba(204,255,0,0.15)]"
              />

              {/* Title Overlay Text block */}
              <div className="text-center mt-6">
                <span className="font-barlow text-xs font-black tracking-normal text-luxury-gold uppercase block mb-1">
                  {currentPhotoObj.category}
                </span>
                <h4 className="font-bebas text-3xl text-luxury-ivory tracking-wide leading-none">
                  {currentPhotoObj.title}
                </h4>
              </div>
            </motion.div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-6 p-3 bg-luxury-charcoal/80 text-luxury-ivory border border-luxury-gold/15 hover:text-luxury-gold hover:border-luxury-gold hover:shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-all duration-200 z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
