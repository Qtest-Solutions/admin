import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - QTest Solutions",
  description: "Learn about QTest Solutions, a leading software testing and QA automation company in India. Our mission, vision, team expertise, and commitment to quality assurance excellence.",
  keywords: [
    "about QTest Solutions",
    "software testing company India",
    "QA team",
    "testing experts",
    "quality assurance company profile"
  ],
  alternates: {
    canonical: "https://www.qtestsolutions.com/about",
  },
  openGraph: {
    title: "About QTest Solutions - Software Testing Company",
    description: "Meet the QTest Solutions team - experts in software testing, QA automation, and quality assurance.",
    url: "https://www.qtestsolutions.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}
