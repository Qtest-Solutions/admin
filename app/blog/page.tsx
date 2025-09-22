import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Blog from "../../components/Blog";

export default function BlogPage() {
  return (
    <div className="relative min-h-screen  bg-gradient-sage">
      <Header />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
