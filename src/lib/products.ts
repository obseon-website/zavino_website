/** Products supplied by Zavino; status and scope match their current previews. */
export const labProducts = [
  {
    id: "outbid",
    name: "Outbid.bd",
    category: "Business discovery",
    status: "Work in progress",
    description:
      "A place to discover businesses in Bangladesh, with categories and a business leaderboard.",
    note: "An early preview with sample data. Payments are not active.",
    href: "https://outbid-preview.obseon-host.workers.dev/",
    action: "Explore the preview",
    work: {
      screenshot: {
        src: "/products/outbid-screenshot.webp",
        width: 1265,
        height: 712,
        alt: "Outbid.bd’s business discovery app with category navigation, a position preview, and its early leaderboard interface",
      },
      capabilities: [
        {
          name: "Business discovery",
          detail: "Category navigation and business search.",
        },
        {
          name: "Ranking interface",
          detail: "All-time and daily leaderboard views.",
        },
        {
          name: "Position preview",
          detail: "Amount controls with an immediate rank preview.",
        },
        {
          name: "Submission flow",
          detail: "Business links and categories submitted for review.",
        },
      ],
    },
  },
  {
    id: "forma",
    name: "Forma",
    category: "Image conversion",
    status: "Available to try",
    description:
      "Convert, resize, and adjust images in your browser. Your files stay on your device.",
    note: "PNG, JPEG, and WebP. No account needed for the current tools.",
    href: "https://forma-file-conv.thezavino.workers.dev/",
    action: "Try Forma",
    work: {
      screenshot: {
        src: "/products/forma-screenshot.webp",
        width: 1280,
        height: 720,
        alt: "Forma’s image workspace showing its original sample image, WebP format selection, and conversion control",
      },
      capabilities: [
        {
          name: "Image conversion",
          detail: "PNG, JPEG, and WebP export in the browser.",
        },
        {
          name: "Resize & quality",
          detail: "Proportional resizing and adjustable output quality.",
        },
        {
          name: "Local file processing",
          detail: "Images stay on the user’s device.",
        },
        {
          name: "File export",
          detail: "Download the converted image without an account.",
        },
      ],
    },
  },
] as const;
