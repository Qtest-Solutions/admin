import Training from "../../components/Training";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ClientBackground from "../../components/ClientBackground";

export default function TrainingPage() {
  return (
    <div className="relative">
      <ClientBackground />
      <Header />
      <main className="pt-20">
        <Training />
      </main>
      <Footer />
    </div>
  );
}
