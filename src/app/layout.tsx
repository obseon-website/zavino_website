import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageMotion } from "@/components/motion";
import { site } from "@/lib/site";
import "./globals.css";

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
    default: "Zavino | Where Vision Takes Flight",
    template: "%s | Zavino",
  },
  description:
    "A creative and marketing agency in Dhaka. Cinematic content, brand identity, digital campaigns, and real-world experiences. One connected crew.",
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Zavino",
    title: "Zavino | Where Vision Takes Flight",
    description:
      "Independent thinking. One connected creative crew. Premium content, branding, and marketing from Dhaka.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Zavino. Where Vision Takes Flight.",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
};
export const viewport: Viewport = {
  themeColor: "#0c1410",
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
