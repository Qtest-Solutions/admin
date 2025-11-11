import Training from "../../components/Training";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Programs - Software Testing & QA Certification",
  description: "Professional software testing and QA training programs. ISTQB certification, automation testing courses, performance testing training, and hands-on workshops by industry experts.",
  keywords: [
    "software testing training",
    "ISTQB certification",
    "QA automation training",
    "selenium training",
    "performance testing course",
    "API testing training",
    "test automation workshop",
    "quality assurance certification"
  ],
  alternates: {
    canonical: "https://www.qtestsolutions.com/training",
  },
  openGraph: {
    title: "Software Testing Training & Certification - QTest Solutions",
    description: "Professional training programs in software testing, QA automation, and quality assurance certification.",
    url: "https://www.qtestsolutions.com/training",
    type: "website",
  },
};

export default function TrainingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <main className="pt-20">
        <Training />
      </main>
      <Footer />
    </div>
  );
}
