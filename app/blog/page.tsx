import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Blog from "../../components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Software Testing Articles & QA Insights",
  description:
    "Expert insights on QA automation, performance testing, API testing, and quality assurance best practices from QTest Solutions.",
  keywords: [
    "software testing blog",
    "QA tutorials",
    "automation testing guides",
  ],

  alternates: {
    canonical: "https://www.qtestsolutions.com/blog",
  },

  openGraph: {
    title: "Software Testing Blog – QTest Solutions",
    description: "QA automation tutorials and testing insights.",
    url: "https://www.qtestsolutions.com/blog",
    type: "website",
images: [{ url: "/image.png", width: 1200, height: 630 }],
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
