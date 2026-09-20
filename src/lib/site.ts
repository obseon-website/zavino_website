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
    name: "Content production",
    short: "Made to be felt.",
    description:
      "From the first storyboard to the final frame. Cinematic content that gives your brand a distinct presence.",
    items: [
      "Cinematic reels & brand films",
      "Product & food photography",
      "Motion graphics & CGI",
      "Scripting, shooting & editing",
    ],
    image: "reels/03-poster",
    href: "content-production",
  },
  {
    name: "Digital marketing",
    short: "Creative with a destination.",
    description:
      "The right creative, in front of the right people. Campaigns planned around your audience and business goals.",
    items: [
      "Meta & Google advertising",
      "Campaign strategy",
      "Audience research",
      "Performance reporting",
    ],
    image: "proton-960",
    href: "digital-marketing",
  },
  {
    name: "Branding & creative",
    short: "Distinct from the start.",
    description:
      "A recognizable identity, with every detail working together. Built to look like you, wherever people find you.",
    items: [
      "Brand identity",
      "Social media design",
      "Packaging design",
      "Visual direction",
    ],
    image: "ventro-960",
    href: "branding-creative",
  },
  {
    name: "Offline marketing",
    short: "Beyond the screen.",
    description:
      "Bring the same creative ambition into the real world. Tangible brand experiences, carefully planned and produced.",
    items: [
      "Events & brand activations",
      "Stall production",
      "Print & outdoor creative",
      "Production coordination",
    ],
    image: "halda-960",
    href: "offline-marketing",
  },
];

export const policyLinks = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms-and-conditions", label: "Terms & conditions" },
  { href: "/cancellation-refund-policy", label: "Cancellation & refunds" },
];
