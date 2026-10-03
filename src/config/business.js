/**
 * Noyan Plumbing - Business Configuration
 * Central source of truth for all business details, copy, colors, services, and image assets.
 * Any non-technical owner can update this file to modify the entire website.
 */

export const business = {
  // Identity
  name: "Noyan Plumbing",
  shortName: "Noyan",
  tagline: "Your Trusted Partner for All Plumbing Needs.",
  businessType: "General Local Business",
  brandStyle: "Luxury",
  city: "Norwich",
  fullAddress: "90 The Common, Freethorpe, Norwich NR13 3LT, UK",
  
  // Contact
  phone: "07460690078",
  formattedPhone: "07460 690078",
  email: "infokimberlydwright@gmail.com",
  whatsappNumber: null, // Empty in brief; cleanly omitted
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=90+The+Common,+Freethorpe,+Norwich+NR13+3LT,+UK",

  // Calls to Action
  ctaPrimary: "Get Quote",
  ctaSecondary: "View Services",

  // Brand Palette & Design Tokens
  colors: {
    primary: "#3B1655",       // Deep Royal Plum / Purple
    primaryDark: "#270D3A",   // Shadow Plum
    primaryLight: "#5A237F",  // Vibrant Plum Accent
    accent: "#78359F",        // Eyebrow and highlight accent
    beige: "#F6F3EE",         // Soft Warm Beige
    beigeSurface: "#EFE8DC",  // Structural Neutral
    beigeBorder: "#E2D8C7",   // Card Hairline
    ink: "#1C191E",           // High-contrast near-black
    inkMuted: "#57525E",      // Secondary editorial text
    canvas: "#FAF8F5",        // Soft Off-White Canvas
    sectionAlt: "#F4EFEA",    // Alternating warm background
  },

  // Imagery (High-Resolution local generated assets)
  images: {
    hero: "/src/assets/images/hero_luxury_plumbing_1791027320495.jpg",
    about: "/src/assets/images/about_plumber_workshop_1791027367988.jpg",
    bathroomCraft: "/src/assets/images/service_bathroom_craft_1791027338899.jpg",
    leakDetection: "/src/assets/images/service_leak_detection_1791027352642.jpg",
  },

  // Navigation Links
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Main Services List
  services: [
    {
      id: "leak-detection",
      title: "Leak Detection & Repair",
      description: "Quick detection and repair of leaking pipes, taps, toilets and plumbing connections.",
      category: "Emergency & Diagnostic",
      featured: true,
      image: "/src/assets/images/service_leak_detection_1791027352642.jpg",
    },
    {
      id: "burst-pipe-repair",
      title: "Burst Pipe Repair",
      description: "Fast repair and replacement of damaged or burst water pipes to protect your property.",
      category: "Urgent Repair",
      featured: true,
      image: "/src/assets/images/about_plumber_workshop_1791027367988.jpg",
    },
    {
      id: "bathroom-plumbing",
      title: "Bathroom Plumbing",
      description: "Complete bathroom plumbing, pipe connections and luxury fixture installations.",
      category: "Installation & Remodel",
      featured: true,
      image: "/src/assets/images/service_bathroom_craft_1791027338899.jpg",
    },
    {
      id: "blocked-drains",
      title: "Blocked Drains & Pipes",
      description: "Professional solutions for blocked sinks, drains, toilets and internal pipework.",
      category: "Drainage",
      featured: false,
    },
    {
      id: "toilet-repair",
      title: "Toilet Repair & Installation",
      description: "Toilet repairs, replacements, flushing system repairs and new fixture installations.",
      category: "Fixtures",
      featured: false,
    },
    {
      id: "tap-repair",
      title: "Tap Repair & Installation",
      description: "Repairing dripping taps and installing new kitchen and bathroom taps.",
      category: "Fixtures",
      featured: false,
    },
    {
      id: "hot-water-repair",
      title: "Hot Water System Repair",
      description: "Diagnosis and repair of common hot water system and cylinder problems.",
      category: "Water Systems",
      featured: false,
    },
    {
      id: "shower-repair",
      title: "Shower Repair & Installation",
      description: "Shower repairs, replacements and precision plumbing installations for bathrooms.",
      category: "Bathrooms",
      featured: false,
    },
    {
      id: "radiator-repair",
      title: "Radiator Repair & Installation",
      description: "Radiator repairs, replacements and plumbing connections for heating systems.",
      category: "Heating",
      featured: false,
    },
    {
      id: "kitchen-plumbing",
      title: "Kitchen Plumbing",
      description: "Kitchen sink, pipework, tap and appliance plumbing installations.",
      category: "Kitchens",
      featured: false,
    },
  ],

  // About Copy
  about: {
    eyebrow: "Artisan Plumbing in Norwich",
    title: "Meticulous plumbing with genuine local care.",
    lead: "Based in Freethorpe, Noyan Plumbing delivers exacting standards to homeowners and properties across the Norwich area.",
    paragraphs: [
      "We believe plumbing should be quiet, clean, and built to endure. Whether tracing a concealed water leak or fitting bespoke brassware in a new bathroom, every installation receives the same disciplined attention to detail.",
      "With local roots in Freethorpe, you receive direct communication from an experienced tradesperson who respects your time, your home, and your budget."
    ],
    highlights: [
      { label: "Base of Operations", value: "Freethorpe, Norwich" },
      { label: "Core Service", value: "Repairs & Installations" },
      { label: "Service Response", value: "Direct Owner Dispatch" },
    ]
  },

  // Why Choose Us
  whyChooseUs: {
    eyebrow: "The Noyan Standard",
    title: "Why Norwich residents rely on our service.",
    subtitle: "Dependable, transparent plumbing solutions designed to protect your home.",
    points: [
      {
        number: "01",
        title: "Local Norwich & Freethorpe Focus",
        description: "Operating directly from Freethorpe allows swift response times throughout Norwich and surrounding Norfolk villages."
      },
      {
        number: "02",
        title: "Exacting Finish & Cleanliness",
        description: "Every connection is pressure-tested, joints are cleanly fitted, and your living space is left spotless upon completion."
      },
      {
        number: "03",
        title: "Comprehensive Plumbing Scope",
        description: "From immediate burst pipe intervention to full bathroom and heating installations, one trusted partner handles it all."
      },
      {
        number: "04",
        title: "Transparent & Direct Communication",
        description: "No call center intermediaries. Discuss your plumbing requirements directly with the tradesperson doing the work."
      }
    ]
  },

  // Testimonials (Omitted cleanly since placeholder was empty in prompt)
  testimonials: [],

  // FAQ Section (Genuine, helpful local plumbing guidance)
  faq: {
    eyebrow: "Common Enquiries",
    title: "Frequently asked questions.",
    subtitle: "Clear answers to common questions about our plumbing services in Norwich.",
    items: [
      {
        question: "Which areas in and around Norwich do you cover?",
        answer: "We are based at 90 The Common in Freethorpe, NR13, and provide plumbing services throughout Norwich, Freethorpe, Acle, Brundall, and surrounding East Norfolk communities."
      },
      {
        question: "How quickly can you attend to a burst pipe or leak?",
        answer: "Burst pipes require urgent care. Please call us directly on 07460 690078 so we can advise you how to shut off your water immediately and arrange an urgent callout."
      },
      {
        question: "How can I obtain a quote for my plumbing job?",
        answer: "You can submit the quote form below with a brief summary of the issue, or give us a quick call. For standard repairs or installations, we provide clear, upfront cost indications before starting work."
      },
      {
        question: "Do you supply fixtures and fittings or install client-provided items?",
        answer: "We can both supply high-grade copper fittings, valves, and components, or install luxury designer taps, showers, and sanitaryware provided by you."
      }
    ]
  },

  // Contact Section Details
  contact: {
    eyebrow: "Contact & Estimates",
    title: "Request a quote or book a visit.",
    description: "Tell us about your plumbing requirements. We respond promptly with straightforward advice and transparent pricing.",
  }
};
