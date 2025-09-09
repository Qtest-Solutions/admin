import Hero from "../components/Hero";
import Services from "../components/Services";
import Training from "../components/Training";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ClientBackground from "../components/ClientBackground";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <ClientBackground />
      <Header />
      <Hero />
      <Services />
      <Training />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
