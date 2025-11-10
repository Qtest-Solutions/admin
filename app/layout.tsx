import { AuthProvider } from "../contexts/AuthContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qtestsolutions.com"),

  title: "QTest Solutions | Software Testing, QA Automation & Performance Engineering",
  description:
    "AI-powered software testing: automation, performance, security, API and mobile QA services.",

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },

  openGraph: {
    title: "QTest Solutions | Software Testing & QA Automation",
    description: "AI-powered quality assurance and test automation services.",
    url: "https://www.qtestsolutions.com",
    siteName: "QTest Solutions",
    images: [
      {
        url: "https://www.qtestsolutions.com/image.png",
        width: 1200,
        height: 630,
        alt: "QTest Solutions",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "QTest Solutions | Software Testing & QA",
    description: "Modern QA & test automation.",
    images: ["https://www.qtestsolutions.com/image.png"],
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
    "name": "QTest Solutions",
    "url": "https://www.qtestsolutions.com",
    "logo": "https://www.qtestsolutions.com/logo.png",
    "description": "AI-powered software testing: automation, performance, security, API and mobile QA services.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://www.qtestsolutions.com/contact"
    },
    "sameAs": [
      // Add your social media URLs here if you have them
      // "https://www.linkedin.com/company/qtestsolutions",
      // "https://twitter.com/qtestsolutions"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
