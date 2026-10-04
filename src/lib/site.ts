export const site = {
  name: "Zavino",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://thezavino.com").replace(
    /\/$/,
    "",
  ),
  email: "info@thezavino.com",
  phone: "+880 1844 293698",
  phoneLink: "tel:+8801844293698",
  whatsapp:
    "https://wa.me/8801844293698?text=Hello%20Zavino%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  auditBooking: "https://cal.com/zavino/audit",
  address: "Bashundhara R/A, Dhaka, Bangladesh",
  socials: [
    { name: "Instagram", url: "https://www.instagram.com/thezavino/" },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61568448537867",
    },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/thezavino/" },
  ],
};

export const clients = [
  "Rancon",
  "Halda Valley",
  "Ventro",
  "Steak & Marrow",
  "Borsalle",
  "Saus Taus",
  "Nawabi Delight",
  "Popsicles",
  "Thanda Garam",
  "Chair Line",
  "MK Electronics",
  "British Bangla Travel",
];

export const projects = [
  {
    id: "jeep",
    title: "Jeep Bangladesh",
    category: "Automotive / Campaign creative",
    image: "jeep",
    alt: "Jeep Bangladesh Built for Adventure campaign featuring a Jeep in a forest",
    description:
      "A bold visual world built around the spirit of adventure. Campaign creative for Jeep Bangladesh.",
  },
  {
    id: "halda",
    title: "Halda Valley",
    category: "Lifestyle / Product storytelling",
    image: "halda",
    alt: "Halda Valley tea campaign with a tea set and flowers",
    description:
      "A richly detailed product story that brings the ritual of tea to life. Visual content for Halda Valley.",
  },
  {
    id: "proton",
    title: "Proton Bangladesh",
    category: "Automotive / Visual content",
    image: "proton",
    alt: "Red Proton SUV photographed against a dramatic mountain backdrop",
    description:
      "Product-focused creative with a confident presence. Automotive campaign visuals for Proton Bangladesh.",
  },
  {
    id: "ventro",
    title: "Ventro",
    category: "Product / Creative direction",
    image: "ventro",
    alt: "Ventro leather wallet on a warm amber surface",
    description:
      "Material, light, and detail come together in considered product imagery. Creative content for Ventro.",
  },
];

export const services = [
  {
    name: "AI automation",
    short: "Connected decisions. Useful action.",
    description:
      "Design and build workflows that connect customer and operational data to the actions your teams need to take.",
    items: [
      "Customer data and CRM integration",
      "Offer, lifecycle, and service workflows",
      "AI agents with human approval",
      "Measurement and iteration",
    ],
    example: "A customer event triggers a relevant offer, checks eligibility and approval, then reaches the right channel.",
    href: "ai-automation",
  },
  {
    name: "SaaS development",
    short: "Products built around real work.",
    description:
      "Take a product from a defined problem to a usable first release, or make an existing prototype ready for sustained use.",
    items: [
      "Product discovery and UX",
      "Custom SaaS and web applications",
      "User roles, access, and billing",
      "Integrations, testing, and handoff",
    ],
    example: "An internal workflow becomes a secure multi-user platform with clear roles and reporting.",
    href: "saas-development",
  },
  {
    name: "Web development",
    short: "The full digital foundation.",
    description:
      "Build websites, stores, and custom web experiences that perform well and connect to the systems behind the business.",
    items: [
      "Business and corporate websites",
      "Ecommerce and customer portals",
      "Custom frontend and backend development",
      "Performance, technical SEO, and maintenance",
    ],
    example: "A web platform connects a public experience, internal operations, and customer data.",
    href: "web-development",
  },
];

export const additionalServices = [
  {
    name: "Custom AI",
    description: "Private knowledge tools, intelligent assistants, and AI features shaped around your data and workflow.",
  },
  {
    name: "AI UGC creative",
    description: "AI-assisted creator-style concepts and campaign assets with human creative direction and review.",
  },
  {
    name: "Brand, content & marketing",
    description: "Identity, films, photography, digital campaigns, and offline activations when the wider brand needs to move with the product.",
  },
];

export const policyLinks = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms-and-conditions", label: "Terms & conditions" },
  { href: "/cancellation-refund-policy", label: "Cancellation & refunds" },
];
