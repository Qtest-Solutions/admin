import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "QTest Solutions | Software Testing, QA Automation & Performance Engineering",
  description:
    "AI-powered software testing: automation, performance, security, API and mobile QA services.",
  metadataBase: new URL("https://www.example.com"),
  openGraph: {
    title: "QTest Solutions | Software Testing & QA Automation",
    description: "AI-powered quality assurance and test automation services.",
    url: "https://www.example.com",
    siteName: "QTest Solutions",
    images: [
      { url: "/image.png", width: 1200, height: 630, alt: "QTest Solutions" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QTest Solutions | Software Testing & QA",
    description: "Modern QA & test automation.",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
