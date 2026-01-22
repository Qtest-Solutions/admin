import Hero from "../components/Hero";
import Services from "../components/Services";
import Training from "../components/Training";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ClientBackground from "../components/ClientBackground";
import Blog from "../components/Blog";
import { Metadata } from "next";
import HowItWorks from "../components/HowItWorks";
import WhyChooseQTest from "../components/WhyQtest";
import Testimonials from "../components/Testimonials";
import Technologies from "../components/Technologies";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.qtestsolutions.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 ">
      {/* <ClientBackground /> */}
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseQTest />
      {/* <Testimonials/> */}
      <Technologies />
      {/* <Training /> */}
      {/* <About /> */}
      <Blog home={true} />
      <Contact />
      <Footer />
    </div>
  );
}
