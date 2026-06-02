import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f5f5f5",
        'luxury-black': "#0a0a0a",
        'luxury-charcoal': "#111111",
        'luxury-surface': "#1a1a1a",
        'luxury-gold': "#FF6B00",
        'luxury-ivory': "#f5f5f5",
        'cyber-cyan': "#FF3E55",
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        bebas: ['var(--font-manrope)', 'sans-serif'],
        barlow: ['var(--font-manrope)', 'sans-serif'],
        dmsans: ['var(--font-manrope)', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(180deg, #111111 0%, #0a0a0a 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
