/** Homepage summaries point to the complete service and work records. */
export const homeServices = [
  {
    name: "AI automation",
    outcome: "Give your team its time back.",
    description:
      "Connect your tools, reduce repetitive tasks, and keep people in control of the decisions that matter.",
    scope: "Workflows, integrations & AI agents",
    href: "/services/ai-automation",
  },
  {
    name: "SaaS development",
    outcome: "Build the product you have in mind.",
    description:
      "Turn a clear problem into useful software, from the first prototype to a product people use every day.",
    scope: "Product design, engineering & launch",
    href: "/services/saas-development",
  },
  {
    name: "Web development",
    outcome: "Make a better first impression.",
    description:
      "Thoughtful websites, stores, and portals that work beautifully for your customers and your business.",
    scope: "Websites, commerce & custom platforms",
    href: "/services/web-development",
  },
] as const;

export const homeProcess = [
  {
    title: "Find the useful problem.",
    description:
      "We listen, look at the way things work, and agree on what needs to change.",
    deliverable: "A clear brief and a shared goal",
  },
  {
    title: "Make it real, together.",
    description:
      "Review a prototype, settle the scope, and see the build take shape through working progress.",
    deliverable: "A prototype, then a working build",
  },
  {
    title: "Leave you ready to run.",
    description:
      "Test the details, prepare your team, and agree on ownership and support before launch.",
    deliverable: "A considered launch and handoff",
  },
] as const;
