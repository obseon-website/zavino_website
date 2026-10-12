import { serviceCatalog } from "@/lib/services";

/** One homepage chapter for each of Zavino's four main services. */
export const homeServices = serviceCatalog.map((service, index) => ({
  ...service,
  href: `/services#${service.slug}`,
  kind: (["automation", "operations", "saas", "content"] as const)[index],
}));

export const homeProcess = [
  {
    title: "Understand",
    description: "Tell us what you need and where the work gets stuck.",
  },
  {
    title: "Plan",
    description: "Agree on the first version, timeline, and budget.",
  },
  {
    title: "Build & launch",
    description: "Review progress with us, test it, and put it to work.",
  },
  {
    title: "Improve",
    description: "Keep it running and improve it as your needs grow.",
  },
] as const;
