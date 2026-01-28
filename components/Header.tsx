"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, ChevronRight } from "lucide-react";

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenServices(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 ${
        isScrolled ? "pt-4" : ""
      }`}
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          isScrolled
            ? "bg-white/30 backdrop-blur-2xl rounded-full border border-white/30 shadow-xl"
            : "bg-white/10 backdrop-blur-lg rounded-full border border-white/10"
        }`}
      >
        <nav className="px-4 sm:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <img
                src="/image.png"
                alt="QTest"
                className={`transition-all duration-500 ${
                  isScrolled ? "h-[40px] sm:h-[50px]" : "h-[60px] sm:h-[120px]"
                }`}
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/"
                className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium ${
                  isActive("/")
                    ? "text-teal-700 bg-teal-50"
                    : "text-gray-800 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              {/* SERVICES DROPDOWN */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1 px-5 py-2.5 rounded-full transition-all duration-300 font-medium ${
                    isActive("/services")
                      ? "text-teal-700 bg-teal-50"
                      : "text-gray-800 hover:text-teal-600 hover:bg-gray-50"
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <div className="absolute left-0 top-full mt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl overflow-hidden">
                    {services.map((service, index) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={`flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-all duration-200 group/item ${
                          index !== services.length - 1
                            ? "border-b border-gray-100"
                            : ""
                        }`}
                      >
                        <span className="font-medium">{service.name}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/training"
                className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium ${
                  isActive("/training")
                    ? "text-teal-700 bg-teal-50"
                    : "text-gray-800 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                Training
              </Link>

       

              <Link
                href="/blog"
                className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium ${
                  isActive("/blog")
                    ? "text-teal-700 bg-teal-50"
                    : "text-gray-800 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                Blog
              </Link>

              <Link
                href="/about"
                className={`px-5 py-2.5 rounded-full transition-all duration-300 font-medium ${
                  isActive("/about")
                    ? "text-teal-700 bg-teal-50"
                    : "text-gray-800 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                About Us
              </Link>
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-teal-500/25 transition-all duration-300 font-medium"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <Link href="/" onClick={closeMenu}>
              <img src="/image.png" alt="QTest" className="h-10" />
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="overflow-y-auto h-[calc(100%-80px)] pb-8">
            <div className="p-5 space-y-2">
              {/* Home */}
              <Link
                href="/"
                onClick={closeMenu}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 ${
                  isActive("/")
                    ? "bg-teal-50 text-teal-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">Home</span>
                {isActive("/") && (
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                )}
              </Link>

              {/* SERVICES ACCORDION */}
              <div className="rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenServices(!openServices)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 transition-all duration-200 ${
                    isActive("/services") || openServices
                      ? "bg-teal-50 text-teal-700"
                      : "text-gray-700 hover:bg-gray-50"
                  } ${openServices ? "rounded-t-xl" : "rounded-xl"}`}
                >
                  <span className="font-medium">Services</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openServices ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openServices ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="bg-gray-50 py-2">
                    {services.map((service, index) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={closeMenu}
                        className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:text-teal-600 hover:bg-teal-50/50 transition-all duration-200"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        <span className="text-sm font-medium">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Training */}
              <Link
                href="/training"
                onClick={closeMenu}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 ${
                  isActive("/training")
                    ? "bg-teal-50 text-teal-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">Training</span>
                {isActive("/training") && (
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                )}
              </Link>

              {/* Internship */}
              {/* <Link
                href="/internship"
                onClick={closeMenu}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 ${
                  isActive("/internship")
                    ? "bg-teal-50 text-teal-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">Internship</span>
                {isActive("/internship") && (
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                )}
              </Link> */}

              {/* Blog */}
              <Link
                href="/blog"
                onClick={closeMenu}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 ${
                  isActive("/blog")
                    ? "bg-teal-50 text-teal-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">Blog</span>
                {isActive("/blog") && (
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                )}
              </Link>

              {/* About */}
              <Link
                href="/about"
                onClick={closeMenu}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 ${
                  isActive("/about")
                    ? "bg-teal-50 text-teal-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="font-medium">About Us</span>
                {isActive("/about") && (
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                )}
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="px-5 mt-6">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="group flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Mobile Footer Info */}
            <div className="px-5 mt-8 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Need help?</p>
                <a
                  href="tel:+919961544424"
                  className="text-teal-600 font-semibold text-lg hover:text-teal-700 transition-colors"
                >
                  +91 99615 44424
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}