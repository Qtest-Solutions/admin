"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Only use white text on home page when not scrolled
  const isHomePage = pathname === "/";
  const useWhiteText = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Training", href: "/training" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 ${isScrolled && "pt-4"}`}
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-700 ease-in-out ${
          isScrolled
            ? "bg-white/20 backdrop-blur-3xl rounded-full  shadow-[0_20px_60px_0_rgba(0,0,0,0.12)]"
            : "bg-transparent"
        }`}
      >
        {/* Multiple Glass Layers for Enhanced Effect */}
        {isScrolled && (
          <>
            {/* Inner glow layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/10 rounded-full" />

            {/* Outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/30 via-white/10 to-white/30 rounded-full blur-2xl opacity-60 -z-10" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full opacity-50" />
          </>
        )}

        <nav className="relative px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Qtest Software Solution LLP Home"
              className="flex items-center transition-all duration-300 hover:scale-105 relative z-10"
            >
              <img
                src="/image.png"
                alt="Qtest Software Solution LLP logo"
                className={`transition-all duration-700 ease-in-out ${
                  isScrolled ? "h-[50px]" : "h-[120px]"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 relative z-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative px-5 py-2.5 text-sm font-medium transition-all duration-300 overflow-hidden ${
                    isScrolled
                      ? "text-gray-800 hover:text-gray-900 rounded-full"
                      : useWhiteText
                      ? "text-white hover:text-white/90"
                      : "text-gray-800 hover:text-gray-900"
                  }`}
                >
                  {/* Hover Background - Only when scrolled */}
                  {isScrolled && (
                    <span className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 shadow-inner" />
                  )}

                  {/* Text */}
                  <span
                    className={`relative z-10 ${
                      useWhiteText ? "drop-shadow-lg" : "drop-shadow-sm"
                    }`}
                  >
                    <text className="text-base">{item.name}</text>
                  </span>

                  {/* Underline when not scrolled */}
                  {!isScrolled && (
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                        useWhiteText ? "bg-white" : "bg-gray-900"
                      }`}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center relative z-10">
              <Link
                href="/contact"
                className={`group relative px-6 py-2.5 text-sm font-medium rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl ${
                  isScrolled
                    ? "bg-gray-900/95 backdrop-blur-sm text-white hover:bg-gray-900"
                    : useWhiteText
                    ? "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
                    : "bg-gray-900/95 backdrop-blur-sm text-white hover:bg-gray-900"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                {/* Shine Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden relative p-2.5 transition-all duration-300 hover:scale-105 z-10 ${
                isScrolled
                  ? "rounded-full bg-white/50 backdrop-blur-md border border-white/30 text-gray-800 hover:bg-white/70 shadow-lg"
                  : useWhiteText
                  ? "text-white hover:bg-white/20 rounded-lg backdrop-blur-sm border border-white/30"
                  : "text-gray-800 hover:bg-gray-100 rounded-lg"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-xl -z-10 lg:hidden animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="lg:hidden mt-4 relative animate-slide-down mx-auto max-w-7xl">
            {/* Multiple Glassmorphism Layers */}
            <div className="absolute inset-0 bg-white/25 backdrop-blur-3xl rounded-3xl border border-white/30 shadow-[0_20px_60px_0_rgba(0,0,0,0.15)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/30 rounded-3xl" />
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-transparent to-white/20 rounded-3xl blur-xl opacity-50 -z-10" />

            <div className="relative px-6 py-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative px-5 py-3.5 text-sm font-medium text-gray-800 hover:text-gray-900 rounded-2xl transition-all duration-300 overflow-hidden"
                    style={{
                      animation: `slide-in 0.3s ease-out ${index * 0.05}s both`,
                    }}
                  >
                    {/* Hover Background */}
                    <span className="absolute inset-0 bg-white/60 backdrop-blur-md rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 shadow-inner" />

                    {/* Text */}
                    <span className="relative z-10 drop-shadow-sm">
                      {item.name}
                    </span>
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 mt-2 border-t border-white/40">
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gray-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-2xl overflow-hidden transition-all duration-300 hover:bg-gray-900 shadow-lg hover:shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Contact Us
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>

                    {/* Shine Effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
