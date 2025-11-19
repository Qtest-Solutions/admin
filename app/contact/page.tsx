import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with QTest Solutions",
  description: "Contact QTest Solutions for software testing and QA automation services. Reach out to our team for consultation, inquiries, or partnership opportunities.",
  keywords: [
    "contact QTest Solutions",
    "software testing inquiry",
    "QA consultation",
    "testing services contact",
    "get software testing quote"
  ],
  alternates: {
    canonical: "https://qtestsolutions.com/contact",
  },
  openGraph: {
    title: "Contact QTest Solutions - Software Testing Services",
    description: "Get in touch with our software testing and QA automation experts.",
    url: "https://qtestsolutions.com/contact",
    type: "website",
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
