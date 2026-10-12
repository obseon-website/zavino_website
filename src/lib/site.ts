export const site = {
  name: "Zavino",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://thezavino.com").replace(
    /\/$/,
    "",
  ),
  email: "leads@thezavino.com",
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
    id: "proton",
    title: "Proton Bangladesh",
    category: "Automotive / Visual content",
    image: "proton",
    alt: "Red Proton SUV photographed against a dramatic mountain backdrop",
    description:
      "Product-focused creative with a confident presence. Automotive campaign visuals for Proton Bangladesh.",
  },
];

export const policyLinks = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms-and-conditions", label: "Terms & conditions" },
  { href: "/cancellation-refund-policy", label: "Cancellation & refunds" },
];
