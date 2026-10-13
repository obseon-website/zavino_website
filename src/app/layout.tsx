import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { ProgressiveBlur } from "@/components/progressive-blur";
import { site } from "@/lib/site";
import "./globals.css";
import "./demos.css";
import "./homepage.css";
import "./service-pages.css";
import "./experience.css";
import "./service-playground.css";

const display = localFont({
  src: "../fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-display",
  weight: "200 800",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zavino | AI, SaaS & Web | AI Content Workflow",
    template: "%s | Zavino",
  },
  description:
    "Follow up with leads, handle daily tasks, and connect your content workflow with AI. Build SaaS products and websites with our team in Dhaka, working worldwide.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Zavino",
    title: "Zavino | AI, SaaS & Web | AI Content Workflow",
    description:
      "Grow your business. Simplify the work. AI for sales, operations, and content workflows, plus SaaS products, websites, and web apps for your next idea.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Zavino — AI systems and SaaS products.",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
};
export const viewport: Viewport = {
  themeColor: "#eef3ee",
  colorScheme: "light",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={display.variable}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <ProgressiveBlur />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              logo: `${site.url}/brand/symbol.svg`,
              email: site.email,
              telephone: site.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bashundhara R/A",
                addressLocality: "Dhaka",
                addressCountry: "BD",
              },
              sameAs: site.socials.map((s) => s.url),
            }),
          }}
        />
      </body>
    </html>
  );
}
