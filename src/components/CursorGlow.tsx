"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth springs for high-performance physical tracking
  const springConfig = { damping: 45, stiffness: 220, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of circle size (250px) to center it under cursor
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden glass-card">
      {/* Dynamic ambient spotlight orb */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(80,38,133,0.04)_0%,rgba(227,27,35,0.015)_45%,transparent_70%)] blur-[25px] pointer-events-none"
      />
    </div>
  );
}
