import { AuthProvider } from "../contexts/AuthContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qtestsolutions.com"),

  title: {
    default: "QTest Solutions | Software Testing, QA Automation & Performance Engineering",
    template: "%s | QTest Solutions"
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
    "QTest Solutions",
    "selenium automation",
    "ISTQB training",
    "agile testing"
  ],

  authors: [{ name: "QTest Solutions" }],
  creator: "QTest Solutions",
  publisher: "QTest Solutions",
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
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
    description: "Leading software testing and QA automation company in India. AI-powered testing, performance engineering, security testing, and comprehensive training programs.",
    images: [
      {
        url: "https://www.qtestsolutions.com/image.png",
        width: 1200,
        height: 630,
        alt: "QTest Solutions - Software Testing & QA Automation Services",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "QTest Solutions | Software Testing & QA Automation",
    description: "AI-powered software testing services: automation, performance, security, API & mobile QA.",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.qtestsolutions.com",
  },

  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   bing: "your-bing-verification-code",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Organization Schema - Critical for brand recognition in search
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QTest Solutions",
    "legalName": "QTest Software Solutions LLP",
    "url": "https://www.qtestsolutions.com",
    "logo": "https://www.qtestsolutions.com/image.png",
    "foundingDate": "2020",
    "description": "Leading software testing and QA automation company in India providing AI-powered testing, performance engineering, security testing, and comprehensive training programs.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@qtestsolutions.com",
      "url": "https://www.qtestsolutions.com/contact"
    },
    "sameAs": [
      // Uncomment and add your actual social media URLs
      // "https://www.linkedin.com/company/qtestsolutions",
      // "https://twitter.com/qtestsolutions",
      // "https://www.facebook.com/qtestsolutions",
      // "https://www.youtube.com/@qtestsolutions"
    ]
  };

  // WebSite Schema - Enables sitelinks searchbox in Google
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "QTest Solutions",
    "url": "https://www.qtestsolutions.com",
    "description": "Software Testing and QA Automation Services",
    "publisher": {
      "@type": "Organization",
      "name": "QTest Solutions"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.qtestsolutions.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // ProfessionalService Schema - For service-based business
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "QTest Solutions",
    "image": "https://www.qtestsolutions.com/image.png",
    "url": "https://www.qtestsolutions.com",
    "telephone": "+91-XXXXXXXXXX", // Add your actual phone number
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 0, // Add your actual coordinates
      "longitude": 0
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "serviceType": [
      "Software Testing",
      "QA Automation",
      "Performance Testing",
      "Security Testing",
      "API Testing",
      "Mobile App Testing"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data - Critical for Rich Results */}
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
        <body className="min-h-screen bg-gradient-professional font-sans overflow-x-hidden antialiased">
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
