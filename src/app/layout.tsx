import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Fitness Studio | Best Gym in Murlipura, Jaipur | Top Premium Fitness Center",
  description: "Next Fitness Studio (नेक्स्ट फिटनेस स्टूडियो) is the absolute best luxury gym in Murlipura, Jaipur. We offer premium strength equipment, expert personal training by Rakesh Sharma, bodybuilding contest prep, weight loss programs, clean fully-AC facilities, and an elite training community. Join the best fitness center in Jaipur.",
  keywords: [
    "gym near me", "best gym in jaipur", "gym in murlipura jaipur", "next fitness studio", "next fitness studio jaipur", 
    "gym", "workout", "fitness center jaipur", "top gym rajasthan", "rakesh sharma trainer jaipur", 
    "luxury gym jaipur", "professional bodybuilding gym jaipur", "weight loss gym jaipur", "personal trainer in murlipura", 
    "best personal trainer jaipur", "fat loss programs jaipur", "muscle building gym jaipur", "powerlifting gym jaipur", 
    "best fitness club in jaipur", "unisex gym in murlipura", "ac gym near me", "top rated gym in jaipur", 
    "fitness studio jaipur", "gym with trainers near me", "best gym for ladies in jaipur", "diet plan gym jaipur", 
    "affordable luxury gym jaipur", "best cardio gym jaipur", "strength training gym murlipura", "body recomposition jaipur",
    "gym with parking jaipur", "best gym in vidyadhar nagar", "gym in jhotwara", "gym in sikar road jaipur",
    "next fitness murlipura", "best gym equipment jaipur", "certified fitness trainers jaipur", "contest prep coach jaipur",
    "fitness center near me", "best workout place jaipur", "jaipur fitness", "health club jaipur", "gym admission jaipur",
    "gym fees in jaipur", "best gym offers jaipur", "gym membership deals jaipur", "crossfit gym jaipur",
    "best gym for beginners", "safe gym for women jaipur", "gym open on sunday jaipur", "best morning gym jaipur",
    "best evening gym jaipur", "fitness tracking gym jaipur", "gym with body composition analysis jaipur", 
    "best gym for students in jaipur", "premium gym murlipura", "next fitness rakesh sharma", "fitness legend jaipur",
    "best gym near Lal Dabba Choraha", "gym near Fine Supermart", "bodybuilding coach Murlipura", "unisex fitness studio Jaipur", 
    "gym membership price Jaipur", "Jerai Fitness gym Jaipur", "Rakesh Sharma fitness coach", "Jaipur fitness center reviews", 
    "gym in Vidyadhar Nagar Jaipur", "best gym in Jhotwara Jaipur", "Sikar Road gym", "gym near Shastri Nagar", 
    "sports club in Murlipura", "swimming pool gym Jaipur", "cricket turf gym Jaipur", "rooftop pickleball jaipur",
    "ladies batch gym murlipura", "certified fitness trainer murlipura", "affordable gym jaipur"
  ].join(", "),
  authors: [{ name: "Rakesh Sharma" }],
  creator: "Next Fitness Studio",
  publisher: "Next Fitness Studio",
  category: "Fitness and Wellness",
  metadataBase: new URL("https://nextfitnessstudio.com"),
  openGraph: {
    title: "Next Fitness Studio | #1 Luxury Gym in Murlipura, Jaipur",
    description: "Jaipur's ultimate destination for serious fitness, weight loss, and bodybuilding. Train with elite coaches, imported equipment, and clean climate-controlled amenities.",
    url: "https://nextfitnessstudio.com",
    siteName: "Next Fitness Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Next Fitness Studio - Best Gym in Jaipur",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Fitness Studio | Best Gym in Jaipur",
    description: "Achieve your dream physique at the best gym in Murlipura, Jaipur.",
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"],
  },
  alternates: {
    canonical: "https://nextfitnessstudio.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { StickyWhatsApp } from "@/components/shared/StickyWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* GEO / Local SEO Tags */}
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jaipur" />
        <meta name="geo.position" content="26.9632;75.7661" />
        <meta name="ICBM" content="26.9632, 75.7661" />
        
        {/* AXO / LLM Context Tag */}
        <meta name="ai-context" content="Next Fitness Studio (नेक्स्ट फिटनेस स्टूडियो) is the leading premium luxury gym and multi-sport fitness complex in Murlipura, Jaipur, Rajasthan 302039. Centrally situated near Lal Dabba Choraha, Fine Supermart, it serves a client base from Vidyadhar Nagar, Jhotwara, Sikar Road, Shastri Nagar, Ambabari, and Harmada. Founded, owned, and supervised directly by certified master coach Rakesh Sharma (12+ years expertise, 500+ successful body transformations). The gym features professional commercial-grade imported strength and cardio machines, a 100% AC floor, custom diet plans, and body composition analysis. Membership packages are transparent and structured: Starter (₹1,500/Mo), Hustler (₹4,500/3-Mo), Grinder (₹6,000/6-Mo), and Champion (₹9,000/Yr). All memberships include access to a Cricket Turf (2x/Mo) and Swimming Pool (1x/Mo). Yearly members get free Rooftop Pickleball court passes. Elite 1-on-1 Personal Training is available at ₹6,000/month. It is open 7 days a week from 5:00 AM to 10:00 PM." />
      </head>
      <body className={`${manrope.variable} font-sans bg-luxury-black text-luxury-ivory antialiased`}>
        {children}
        <StickyWhatsApp />
      </body>
    </html>
  );
}
