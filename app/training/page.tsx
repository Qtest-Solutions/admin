import Training from "../../components/Training";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Testing Training – Manual, Automation & Certification",
  description:
    "Industry-led training programs in manual testing, automation testing, ISTQB preparation, API testing, and performance testing. Hands-on sessions by experts at QTest Solutions.",
  keywords: [
    "software testing training",
    "automation testing course",
    "manual testing certification",
    "ISTQB coaching",
    "selenium training",
  ],

  alternates: {
    canonical: "https://www.qtestsolutions.com/training",
  },

  openGraph: {
    title: "Software Testing Training & Certification – QTest Solutions",
    description:
      "Professional training programs in manual testing, QA automation, and ISTQB certification.",
    url: "https://www.qtestsolutions.com/training",
    type: "website",
 images: [{ url: "/image.png", width: 1200, height: 630 }],

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
