import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen  bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}
