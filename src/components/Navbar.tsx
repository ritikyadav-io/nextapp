"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "Why Us", href: "#why-us" },
  { name: "Membership", href: "#membership" },
  { name: "Reviews", href: "#reviews" },
  { name: "Location", href: "#location" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for background styling
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide or show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = window.innerWidth >= 1024 ? 64 : 56;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-[#0a0a0ade] backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        } h-[56px] lg:h-[64px] flex items-center`}
      >
        <div className="w-full max-w-7xl mx-auto px-[20px] md:px-[40px] flex justify-between items-center">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex flex-col tracking-tight"
          >
            <span className="font-extrabold uppercase text-[1.1rem] lg:text-[1.3rem] text-[#f5f5f5] tracking-wide leading-none">
              NEXT <span className="text-[#FF6B00]">FITNESS</span>
            </span>
            <span className="hidden sm:block text-[7px] text-[#999] tracking-[0.2em] font-semibold leading-none mt-1 uppercase">
              नेक्स्ट फिटनेस स्टूडियो
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-semibold text-sm text-[#999] hover:text-[#f5f5f5] transition-colors duration-200 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/919602220884?text=Hi%20Next%20Fitness%20Studio%2C%20I%20am%20interested%20in%20joining%20the%20gym%20membership!%20Please%20share%20the%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#FF6B00] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all duration-200 rounded-md"
            >
              JOIN CLUB
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex flex-col justify-center items-end w-11 h-11 bg-transparent border-none cursor-pointer focus:outline-none -mr-3"
            aria-label="Open navigation menu"
          >
            <div className="flex flex-col justify-between w-6 h-3.5">
              <span className="w-6 h-[2px] bg-[#f5f5f5] transition-all rounded-full" />
              <span className="w-6 h-[2px] bg-[#f5f5f5] transition-all rounded-full" />
              <span className="w-6 h-[2px] bg-[#f5f5f5] transition-all rounded-full" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col justify-center px-8 lg:hidden"
          >
            {/* Close Button Top Right */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#f5f5f5] hover:text-[#FF6B00] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Menu Links */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col space-y-6 text-center max-w-sm mx-auto w-full"
            >
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-bold text-[1.8rem] text-[#f5f5f5] hover:text-[#FF6B00] transition-colors duration-200 uppercase tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="pt-8"
              >
                <a
                  href="https://wa.me/919602220884?text=Hi%20Next%20Fitness%20Studio%2C%20I%20am%20interested%20in%20joining%20the%20gym%20membership!%20Please%20share%20the%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-4 bg-[#FF6B00] text-black font-extrabold text-sm uppercase tracking-wider rounded-md hover:brightness-110 transition-all duration-200"
                >
                  JOIN CLUB NOW
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
