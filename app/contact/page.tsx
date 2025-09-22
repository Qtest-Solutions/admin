import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-sage">
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
