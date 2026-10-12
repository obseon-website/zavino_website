export const serviceCatalog = [
  {
    slug: "ai-revenue-systems",
    name: "AI Revenue",
    line: "Turn inquiries into sales conversations.",
    description:
      "Capture leads, follow up, and keep your sales tools in sync. Your team stays in charge of the conversations that matter.",
    items: [
      "Lead capture",
      "Sales follow-up",
      "CRM connections",
      "Customer messages",
    ],
  },
  {
    slug: "ai-operations-agents",
    name: "AI Operations & Agents",
    line: "Less repetitive work. More time for your team.",
    description:
      "Build AI assistants that answer questions, handle routine tasks, and connect your tools. Your team reviews important decisions.",
    items: [
      "Routine tasks & reports",
      "Support assistants",
      "Answers from company knowledge",
      "Tool connections",
    ],
  },
  {
    slug: "saas-development",
    name: "SaaS Products",
    line: "Turn your idea into a product.",
    description:
      "Design, build, and launch software your customers can use and pay for. Start with the features they need most.",
    items: [
      "Product design",
      "Accounts, roles & billing",
      "Build & launch",
      "Improvements after launch",
    ],
  },
  {
    slug: "ai-content-flows",
    name: "AI Content",
    line: "Create content with less effort.",
    description:
      "Plan, draft, and reuse content across channels. We connect the steps, and your team approves what goes out.",
    items: [
      "Research & planning",
      "Drafts & approval",
      "Content for each channel",
      "Asset organization",
    ],
  },
] as const;

export const additionalServices = [
  {
    slug: "web-apps-platforms",
    name: "Websites & Web Apps",
    description:
      "Websites, client portals, dashboards, and custom tools for your business.",
    href: "/services/web-development",
  },
  {
    slug: "enterprise-ai-training",
    name: "Enterprise AI Training",
    description:
      "Practical workshops that help your team use AI in their daily work. For enterprise teams in Bangladesh.",
    href: "/contact?focus=enterprise-ai-training&source=/services",
  },
] as const;

export const supportItems = [
  "Maintenance & monitoring",
  "New features & improvements",
  "Team support & training",
] as const;

export const supportCopy =
  "We keep your product running and help it improve as your business grows.";
export const supportingCopy =
  "Need a website, launch content, or help getting your team started with AI? We can help with that too.";
export const auditCopy =
  "Tell us what you want to build or improve. We’ll help you find a clear first step.";
