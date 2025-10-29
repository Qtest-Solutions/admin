"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 ${isScrolled && "pt-4"}`}
    >
      <div
        className={`mx-auto max-w-7xl transition-all duration-700 ease-in-out ${
          isScrolled
            ? "bg-white/30 backdrop-blur-2xl rounded-full shadow-[0_20px_60px_0_rgba(0,0,0,0.18)] border border-white/30"
            : "bg-white/10 backdrop-blur-lg rounded-full border border-white/10"
        } relative`}
      >
        {/* Enhanced Glass Layers for More Glassmorphism */}
        {isScrolled && (
          <>
            {/* Inner glow layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/10 rounded-full pointer-events-none" />
            {/* Outer glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-200/30 via-white/10 to-purple-200/30 rounded-full blur-2xl opacity-70 -z-10 pointer-events-none" />
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full opacity-60 pointer-events-none" />
            {/* Extra shadow for glass pop */}
            <div className="absolute inset-0 rounded-full shadow-2xl shadow-teal-200/10 pointer-events-none" />
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
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 overflow-hidden ${
                      isScrolled ? "rounded-full" : ""
                    } ${active ? "text-green-700" : "text-gray-800"}`}
                  >
                    {/* Active Background - When scrolled */}
                    {isScrolled && active && (
                      <span className="absolute inset-0 bg-green-100/90 backdrop-blur-md rounded-full shadow-inner shadow-green-200/50" />
                    )}

                    {/* Text */}
                    <span className="relative z-10 drop-shadow-sm">
                      <span className="text-base font-medium">{item.name}</span>
                    </span>

                    {/* Underline when not scrolled */}
                    {!isScrolled && (
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 ${
                          active &&
                          "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 "
                        }`}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center relative z-10">
              <Link
                href="/contact"
                className="group relative px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-sm font-medium rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl"
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
                {navItems.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`relative px-5 py-3.5 text-sm font-medium rounded-2xl transition-all duration-300 overflow-hidden ${
                        active ? "text-sky-700" : "text-gray-800"
                      }`}
                      style={{
                        animation: `slide-in 0.3s ease-out ${
                          index * 0.05
                        }s both`,
                      }}
                    >
                      {/* Active Background */}
                      {active && (
                        <span className="absolute inset-0 bg-sky-100/90 backdrop-blur-md rounded-2xl shadow-inner shadow-sky-200/50" />
                      )}

                      {/* Text */}
                      <span className="relative z-10 drop-shadow-sm font-medium">
                        {item.name}
                      </span>
                    </Link>
                  );
                })}

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
