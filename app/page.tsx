import Hero from "../components/Hero";
import Services from "../components/Services";
import Training from "../components/Training";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ClientBackground from "../components/ClientBackground";
import Blog from "../components/Blog";

export default function HomePage() {
  return (
    <div className="relative min-h-screen ">
      {/* <ClientBackground /> */}
      <Header />
      <Hero />
      <Services />
      {/* <Training /> */}
      <About />
      <Blog home={true} />
      <Contact />
      <Footer />
    </div>
  );
}
