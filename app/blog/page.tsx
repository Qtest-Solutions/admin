import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Blog from "../../components/Blog";

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
