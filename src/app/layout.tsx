import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageMotion } from "@/components/motion";
import { site } from "@/lib/site";
import "./globals.css";
import "./ai-redesign.css";

const display = localFont({
  src: "../fonts/syne-latin-wght-normal.woff2",
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: [
    { path: "../fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zavino | AI Automation Agency & SaaS Development",
    template: "%s | Zavino",
  },
  description:
    "Zavino builds connected AI automation, custom SaaS products, and web platforms for complex business workflows.",
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Zavino",
    title: "Zavino | AI Automation Agency & SaaS Development",
    description:
      "Connected AI automation, SaaS products, and web platforms built around real business workflows.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Zavino. AI automation, SaaS, and web development.",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
};
export const viewport: Viewport = {
  themeColor: "#0d1713",
  colorScheme: "dark",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${body.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <PageMotion />
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
