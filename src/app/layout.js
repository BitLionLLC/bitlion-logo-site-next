import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_URL,
  OG_IMAGE,
  absoluteUrl,
} from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — App, Web, and Browser Extension Developers`,
    template: `%s | ${SITE_SHORT_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_SHORT_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: absoluteUrl("/"),
    title: `${SITE_NAME} — App, Web, and Browser Extension Developers`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — App, Web, and Browser Extension Developers`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  legalName: SITE_NAME,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/opengraph-image"),
  description: SITE_DESCRIPTION,
  email: CONTACT_EMAIL,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT_EMAIL,
      url: absoluteUrl("/support"),
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          // Serialized from a literal we control, so there is no untrusted
          // input to escape here.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
