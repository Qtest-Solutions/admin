import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact QTest Solutions – Software Testing & QA Automation",
  description:
    "Connect with QTest Solutions for software testing, QA automation services, training programs, and project inquiries.",
  keywords: ["contact software testing company", "QA consultation"],

  alternates: {
    canonical: "https://www.qtestsolutions.com/contact",
  },

  openGraph: {
    title: "Contact QTest Solutions",
    description: "Reach out to our QA and test automation experts.",
    url: "https://www.qtestsolutions.com/contact",
    type: "website",
images: [{ url: "/image.png", width: 1200, height: 630 }],
  },
};


export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
