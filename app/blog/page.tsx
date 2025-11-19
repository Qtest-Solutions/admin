import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Blog from "../../components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Software Testing Insights & Best Practices",
  description: "Latest articles on software testing, QA automation, performance testing, and quality assurance best practices. Expert insights and tutorials from QTest Solutions.",
  keywords: [
    "software testing blog",
    "QA automation tutorials",
    "testing best practices",
    "quality assurance articles",
    "test automation guides",
    "performance testing tips"
  ],
  alternates: {
    canonical: "https://www.qtestsolutions.com/blog",
  },
  openGraph: {
    title: "Blog - Software Testing & QA Insights",
    description: "Expert articles on software testing, automation, and quality assurance best practices.",
    url: "https://www.qtestsolutions.com/blog",
    type: "website",
  },
};

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
