import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About QTest Solutions – Software Testing Experts",
  description:
    "QTest Solutions is a leading QA automation and software testing company offering end-to-end quality assurance expertise.",
  alternates: {
    canonical: "https://www.qtestsolutions.com/about",
  },

  openGraph: {
    title: "About Us – QTest Solutions",
    description:
      "Learn about our mission, vision, and expertise in QA automation and testing services.",
    url: "https://www.qtestsolutions.com/about",
    type: "website",
images: [{ url: "/image.png", width: 1200, height: 630 }],
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
