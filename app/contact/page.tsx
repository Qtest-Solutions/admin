import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";

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
