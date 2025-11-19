import Services from "../../components/Services";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Services - Software Testing & QA Automation",
  description:
    "Comprehensive software testing services: QA automation, performance testing, security testing, API testing, mobile app testing, and test consultancy. AI-powered quality assurance solutions.",
  keywords: [
    "software testing services",
    "QA automation",
    "performance testing services",
    "security testing",
    "API testing services",
    "mobile app testing",
    "test automation framework",
    "selenium testing",
    "load testing",
    "penetration testing",
  ],
  alternates: {
    canonical: "https://qtestsolutions.com/services",
  },
  openGraph: {
    title: "Software Testing Services - QTest Solutions",
    description:
      "Expert software testing and QA automation services. Performance, security, API, and mobile testing solutions.",
    url: "https://qtestsolutions.com/services",  
    type: "website",
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
