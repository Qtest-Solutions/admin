import Footer from "../../components/Footer";
import Header from "../../components/Header";;
import InternshipPage from "../../components/Internship";



export default function ServicesPage() {
  return (
    <div className="relative min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <main className="pt-5">
        <InternshipPage />
      </main>
      <Footer />
    </div>
  );
}
