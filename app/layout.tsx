import { AuthProvider } from "../contexts/AuthContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "QTest Solutions | Software Testing, QA Automation & Performance Engineering",
  description:
    "AI-powered software testing: automation, performance, security, API and mobile QA services.",
  metadataBase: new URL("https://www.qtestsolutions.com"),
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
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </head>
      <AuthProvider>
        <body className="min-h-screen bg-gradient-professional font-sans overflow-x-hidden antialiased">
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
