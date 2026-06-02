"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
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
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-[20px] md:px-[40px]">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-extrabold text-[#f5f5f5] text-base uppercase tracking-wide">
              NEXT FITNESS <span className="text-[#FF6B00]">STUDIO</span>
            </h4>
            <span className="text-[10px] text-[#999] font-medium uppercase tracking-wider mt-2">
              Build. Transform. Dominate.
            </span>
            <p className="text-xs text-[#999] mt-4 leading-relaxed max-w-xs">
              Jaipur&apos;s premium fitness destination located in Murlipura.
            </p>
          </div>

          {/* Column 2: Pages */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="font-extrabold text-xs text-[#f5f5f5] uppercase tracking-widest mb-4 border-b border-[#FF6B00]/40 pb-1">
              Pages
            </h5>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Programs", href: "#programs" },
                { name: "Membership", href: "#membership" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-xs text-[#999] hover:text-[#FF6B00] transition-colors uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="font-extrabold text-xs text-[#f5f5f5] uppercase tracking-widest mb-4 border-b border-[#FF6B00]/40 pb-1">
              Contact Us
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:09602220884"
                  className="flex items-center justify-center md:justify-start gap-2 text-xs text-[#999] hover:text-[#FF6B00] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +91 96022 20884
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919602220884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-xs text-[#999] hover:text-[#FF6B00] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-xs text-[#999]">
                <MapPin className="w-3.5 h-3.5" />
                Murlipura, Jaipur
              </li>
            </ul>
          </div>

          {/* Column 4: Other */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="font-extrabold text-xs text-[#f5f5f5] uppercase tracking-widest mb-4 border-b border-[#FF6B00]/40 pb-1">
              Other
            </h5>
            <ul className="space-y-2">
              {[
                { name: "Why Us", href: "#why-us" },
                { name: "Sports Complex", href: "#sports" },
                { name: "Transformations", href: "#transformations" },
                { name: "Reviews", href: "#reviews" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-xs text-[#999] hover:text-[#FF6B00] transition-colors uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#999] uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Next Fitness Studio. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
