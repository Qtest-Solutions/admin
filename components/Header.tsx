"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";


export const services = [
  { name: "Manual Testing", slug: "manual-testing" },
  { name: "Automation Testing", slug: "automation-testing" },
  { name: "Regression Testing", slug: "regression-testing" },
  { name: "Performance & Load Testing", slug: "performance-testing" },
  { name: "Security Testing", slug: "security-testing" },
  { name: "API Testing", slug: "api-testing" },
];


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-4 ${isScrolled ? "pt-4" : ""}`}>
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          isScrolled
            ? "bg-white/30 backdrop-blur-2xl rounded-full border border-white/30 shadow-xl"
            : "bg-white/10 backdrop-blur-lg rounded-full border border-white/10"
        }`}
      >
        <nav className="px-8 py-4">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <img
                src="/image.png"
                alt="QTest"
                className={`transition-all duration-500 ${
                  isScrolled ? "h-[50px]" : "h-[120px]"
                }`}
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/"
                className={`px-5 py-2.5 ${
                  isActive("/") ? "text-green-700" : "text-gray-800"
                }`}
              >
                Home
              </Link>

              {/* SERVICES DROPDOWN */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1 px-5 py-2.5 ${
                    isActive("/services") ? "text-green-700" : "text-gray-800"
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute left-0 top-full mt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl overflow-hidden">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-5 py-3 text-sm text-gray-800 hover:bg-teal-50 hover:text-teal-700 transition"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/training"
                className={`px-5 py-2.5 ${
                  isActive("/training") ? "text-green-700" : "text-gray-800"
                }`}
              >
                Training
              </Link>

              <Link
                href="/blog"
                className={`px-5 py-2.5 ${
                  isActive("/blog") ? "text-green-700" : "text-gray-800"
                }`}
              >
                Blog
              </Link>
                 <Link
                href="/about"
                className={`px-5 py-2.5 ${
                  isActive("/about") ? "text-green-700" : "text-gray-800"
                }`}
              >
                About Us
              </Link>
            </div>


            {/* DESKTOP CTA */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-2.5 bg-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-white/50 backdrop-blur border border-white/30"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="lg:hidden mt-4 mx-auto max-w-7xl px-4">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/30 shadow-xl p-6 space-y-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>

              {/* MOBILE SERVICES */}
              <div>
                <button
                  onClick={() => setOpenServices(!openServices)}
                  className="w-full flex justify-between items-center"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition ${
                      openServices ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openServices && (
                  <div className="pl-4 mt-2 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenServices(false);
                        }}
                        className="block py-1 text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/training" onClick={() => setIsMenuOpen(false)}>
                Training
              </Link>

              <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 text-center bg-gray-900 text-white py-3 rounded-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
