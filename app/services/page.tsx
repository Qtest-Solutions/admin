import Services from "../../components/Services";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Software Testing Services – QA Automation, Performance & Security",
  description:
    "Comprehensive software testing services including QA automation, performance, API, mobile, and security testing. AI-powered QA solutions from QTest Solutions.",
  keywords: [
    "software testing services",
    "QA automation",
    "mobile app testing",
    "API testing services",
    "performance testing",
    "security testing",
  ],

  alternates: {
    canonical: "https://www.qtestsolutions.com/services",
  },

  openGraph: {
    title: "Software Testing Services – QTest Solutions",
    description:
      "Expert automation testing, performance testing, API testing, and security testing services.",
    url: "https://www.qtestsolutions.com/services",
    type: "website",
  images: [{ url: "/image.png", width: 1200, height: 630 }],

  },
};



export default function ServicesPage() {
  return (
    <div className="relative min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
