import React from "react";

export default function SchemaMarkup() {
  const businessSchema = {
    "@type": "ExerciseGym",
    "@id": "https://nextfitnessstudio.com/#gym",
    "name": "Next Fitness Studio (नेक्स्ट फिटनेस स्टूडियो)",
    "description": "Premium luxury gym in Murlipura, Jaipur with imported strength machines, expert personal coaches like Rakesh Sharma, and climate-controlled amenities.",
    "image": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200"
    ],
    "url": "https://nextfitnessstudio.com",
    "telephone": "+919602220884",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fine Supermart, Lal Dabba Choraha, Murlipura",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302039",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.965715,
      "longitude": 75.768228
    },
    "areaServed": [
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Murlipura" },
      { "@type": "City", "name": "Vidyadhar Nagar" },
      { "@type": "City", "name": "Jhotwara" },
      { "@type": "City", "name": "Sikar Road" },
      { "@type": "City", "name": "Harmada" },
      { "@type": "City", "name": "Shastri Nagar" },
      { "@type": "City", "name": "Ambabari" }
    ],
    "founder": {
      "@type": "Person",
      "name": "Rakesh Sharma",
      "jobTitle": "Founder & Head Fitness Coach",
      "description": "Fitness legend with 12+ years of professional personal training experience and 500+ successful body transformations in Jaipur.",
      "telephone": "+919602220884"
    },
    "knowsAbout": [
      "Bodybuilding", "Weight Loss", "Personal Training", "Fat Loss", "Strength Training", "Powerlifting", "Fitness Coaching"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "05:00",
        "closes": "22:00"
      }
    ],
    "amenityFeature": [
      {"@type": "LocationFeatureSpecification", "name": "Cricket Turf", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Swimming Pool", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Jogging Track", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Rooftop Pickle Ball Court", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Free Pickle Ball Pass with Membership", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Restroom", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Drinking Water", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Expert Trainers", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Weight Loss Programs", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Bodybuilding Contest Prep", "value": true},
      {"@type": "LocationFeatureSpecification", "name": "Personal Training", "value": true}
    ]
  };

  const offerSchema = {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Gym Membership — Next Fitness Studio Jaipur"
    },
    "offers": [
      {"@type": "Offer", "name": "Monthly Membership", "price": "1500", "priceCurrency": "INR"},
      {"@type": "Offer", "name": "3 Month Membership", "price": "4500", "priceCurrency": "INR"},
      {"@type": "Offer", "name": "6 Month Membership", "price": "6000", "priceCurrency": "INR"},
      {"@type": "Offer", "name": "Annual Membership", "price": "9000", "priceCurrency": "INR"},
      {"@type": "Offer", "name": "Personal Training", "price": "6000", "priceCurrency": "INR"}
    ]
  };

  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Next Fitness Studio the best gym in Murlipura, Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Next Fitness Studio is widely recognized as Murlipura's leading premium fitness center. We feature imported commercial-grade strength and cardio equipment, professional AC climate control, fully sanitized changing areas, and hands-on guidance from certified coaches. Additionally, we provide multi-sport facilities including a Cricket Turf, Swimming Pool, and Rooftop Pickleball court, offering a complete lifestyle fitness ecosystem."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Rakesh Sharma, and what is his training philosophy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rakesh Sharma is the lead trainer and fitness legend at Next Fitness Studio. Known for his technical biomechanics expertise and motivational style, he has guided hundreds of clients in Jaipur through successful weight loss, muscle building, and athletic transformations. He directly oversees floor training and custom personal training programs."
        }
      },
      {
        "@type": "Question",
        "name": "What are the timings and operating hours of Next Fitness Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are open 7 days a week to accommodate all schedules. Monday through Sunday, our hours are from 5:00 AM to 10:00 PM. Members can train at any time during these operational hours without booking restrictions, except for specific turf, pool, or court slots."
        }
      },
      {
        "@type": "Question",
        "name": "Are there dedicated ladies-only batches or trainers available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we support a welcoming environment for female fitness enthusiasts. We have dedicated batch timings with certified trainers who specialize in women's strength, flexibility, cardiovascular health, and post-pregnancy recovery programs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a free trial class before purchasing a membership?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We welcome all local Murlipura and Jaipur residents to experience our elite facility. You can book a free 1-day pass by clicking our WhatsApp link. This allows you to explore the gym floor, test our strength machines, and meet our coaching team."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of workout equipment is available at the studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our strength academy is equipped with premium imported bio-mechanically optimized plate-loaded machines, pin-selected selectorized lines, a dedicated dumbbell range up to 50kg, heavy-duty power racks, and a custom functional training turf zone. Our cardio section features commercial treadmills, cross trainers, spin bikes, and rowing machines."
        }
      },
      {
        "@type": "Question",
        "name": "How do the Cricket Turf and Swimming Pool access rules work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All Next Fitness Studio memberships (Starter, Hustler, Grinder, Champion) include access to our Cricket Turf twice (2x) per month and Swimming Pool once (1x) per month. Members can easily pre-book these slots through our interactive Slot Booking Widget or by contacting the front desk on WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "Who is eligible for the Rooftop Pickleball Court passes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rooftop Pickleball Court passes are an exclusive benefit for our Yearly (Champion Plan) members. Yearly members receive two (2) free passes per month, which include court access and playing equipment (rackets and balls) provided at the front desk."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any hidden signup fees or registration charges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we believe in complete pricing transparency. The prices listed on our membership plans—₹1,500 for Monthly, ₹4,500 for Quarterly, ₹6,000 for Half-Yearly, and ₹9,000 for Annual—are all-inclusive. There are no additional registration fees, maintenance charges, or taxes."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide dietary support and nutrition plans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. General diet outlines are included in our 3-Month Hustler package and above. For complete custom daily meal planning, daily macro splits, and supplementation guidance tailored to bodybuilding or health goals, our 6-Month Grinder and Yearly Champion memberships include regular nutritional assessments, while 1-on-1 PT coaching offers daily accountability."
        }
      },
      {
        "@type": "Question",
        "name": "Where exactly is the gym located in Murlipura, Jaipur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Next Fitness Studio is located at Fine Supermart, near Lal Dabba Choraha, Murlipura, Jaipur, Rajasthan 302039. Our location is centrally accessible with ample parking space for vehicles."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of Personal Training (1-on-1 PT) and what does it include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Elite Personal Training program is priced at ₹6,000 per month. It includes 1-on-1 daily workout coaching, customized exercise sheets, custom diet plans, weekly progress tracking, posture calibration, and maximum results under the direct supervision of Rakesh Sharma or our head coaches."
        }
      },
      {
        "@type": "Question",
        "name": "What is the dress code and shoe policy at Next Fitness Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To maintain hygiene and safety, all members are required to wear proper athletic wear (t-shirts, tracks, or gym shorts). For the main gym floor and sports areas, clean, non-marking indoor sports shoes are strictly mandatory. Outdoor shoes are not permitted on the workout floor."
        }
      }
    ]
  };

  const pickleballSchema = {
    "@type": "SportsActivityLocation",
    "@id": "https://nextfitnessstudio.com/#pickleball",
    "name": "Rooftop Pickleball Court - Next Fitness Studio",
    "description": "Premium open-air rooftop pickleball court in Murlipura, Jaipur. Available for booking by hour or tournaments.",
    "url": "https://nextfitnessstudio.com",
    "telephone": "+919602220884",
    "priceRange": "₹2000 - ₹4000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fine Supermart, Lal Dabba Choraha, Murlipura",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302039",
      "addressCountry": "IN"
    }
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [businessSchema, offerSchema, faqSchema, pickleballSchema]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
    ></script>
  );
}
