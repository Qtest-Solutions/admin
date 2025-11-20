import "./globals.css";
import { AuthProvider } from "../contexts/AuthContext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qtestsolutions.com"),

  title: {
    default: "QTest Solutions | Software Testing, QA Automation & Performance Engineering",
    template: "%s | QTest Solutions",
  },

  description:
    "AI-powered software testing: automation, performance, security, API and mobile QA services. Expert QA consultancy and training in India.",

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
    "selenium automation",
    "ISTQB training",
    "agile testing",
  ],

  alternates: {
    canonical: "https://www.qtestsolutions.com",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.qtestsolutions.com",
    siteName: "QTest Solutions",
    title: "QTest Solutions | Software Testing & QA Automation Company in India",
    description:
      "Leading software testing and QA automation company in India. AI-powered testing, performance engineering, security testing, and comprehensive training programs.",
    images: [
      {
        url: "https://www.qtestsolutions.com/image.png",
        width: 1200,
        height: 630,
        alt: "QTest Solutions - Software Testing & QA Automation Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "QTest Solutions | Software Testing & QA Automation",
    description:
      "AI-powered software testing services: automation, performance, security, API & mobile QA.",
    images: ["https://www.qtestsolutions.com/image.png"],
    creator: "@qtestsolutions",
    site: "@qtestsolutions",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QTest Solutions",
    legalName: "QTest Software Solutions LLP",
    url: "https://www.qtestsolutions.com",
    logo: "https://www.qtestsolutions.com/image.png",
    description:
      "Leading software testing and QA automation company in India providing AI-powered testing, performance engineering, security testing, and comprehensive training programs.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@qtestsolutions.com",
      url: "https://www.qtestsolutions.com/contact",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "QTest Solutions",
    url: "https://www.qtestsolutions.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.qtestsolutions.com/search?q={search_term}",
      "query-input": "required name=search_term",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "QTest Solutions",
    image: "https://www.qtestsolutions.com/image.png",
    url: "https://www.qtestsolutions.com",
    telephone: "+91-XXXXXXXXXX",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <html lang="en">
      <head>
    
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Web Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>

      <AuthProvider>
        <body className="min-h-screen font-sans antialiased">{children}</body>
      </AuthProvider>
    </html>
  );
}
