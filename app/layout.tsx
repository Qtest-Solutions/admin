// app/layout.tsx
import { AuthProvider } from "../contexts/AuthContext";
import "./globals.css";
import type { Metadata } from "next";

const siteUrl = "https://qtestsolutions.com";
const siteTitleDefault = "QTest Solutions | Software Testing, QA Automation & Performance Engineering";
const siteDescription =
  "AI-powered software testing: automation, performance, security, API and mobile QA services. Expert QA consultancy and training in India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitleDefault,
    template: "%s | QTest Solutions",
  },
  description: siteDescription,
  keywords: [
    "software testing company India",
    "QA automation services",
    "performance testing",
    "security testing",
    "API testing",
    "mobile app testing",
    "test automation",
    "quality assurance consultancy",
    "software testing training",
    "AI-powered testing",
    "QTest Solutions",
    "selenium automation",
    "ISTQB training",
    "agile testing",
  ],
  authors: [{ name: "QTest Solutions" }],
  creator: "QTest Solutions",
  publisher: "QTest Solutions",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "QTest Solutions",
    title: siteTitleDefault,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/image.png`,
        width: 1200,
        height: 630,
        alt: "QTest Solutions - Software Testing & QA Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitleDefault,
    description: siteDescription,
    images: [`${siteUrl}/image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QTest Solutions",
    legalName: "QTest Software Solutions LLP",
    url: siteUrl,
    logo: `${siteUrl}/image.png`,
    foundingDate: "2020",
    description:
      "Leading software testing and QA automation company in India providing AI-powered testing, performance engineering, security testing, and comprehensive training programs.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Kerala, India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@qtestsolutions.com",
      telephone: "+91-9999999999", // replace with real phone
      url: `${siteUrl}/contact`,
    },
    sameAs: [
      // add real social links when available
      // "https://www.linkedin.com/company/qtestsolutions",
      // "https://twitter.com/qtestsolutions",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "QTest Solutions",
    url: siteUrl,
    description: "Software Testing and QA Automation Services",
    publisher: { "@type": "Organization", name: "QTest Solutions" },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "QTest Solutions",
    image: `${siteUrl}/image.png`,
    url: siteUrl,
    telephone: "+91-9999999999", // replace or remove
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressCountry: "IN", addressRegion: "Kerala" },
    geo: { "@type": "GeoCoordinates", latitude: 9.931232, longitude: 76.267303 }, // replace if needed
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    serviceType: [
      "Software Testing",
      "QA Automation",
      "Performance Testing",
      "Security Testing",
      "API Testing",
      "Mobile App Testing",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      </head>
      <AuthProvider>
        <body className="min-h-screen bg-gradient-professional font-sans overflow-x-hidden antialiased">
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
