"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      {/* Glass morphism overlay - only when scrolled or menu open */}
      {(isScrolled || isMenuOpen) && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/10 to-white/15" />
      )}

      <nav className="container mx-auto px-1 py-1 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo - Increased size */}
          <Link
            href="/"
            aria-label="Qtest Software Solution LLP Home"
            className="flex items-start space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage-300 rounded-lg p-2 -m-2 transition-all duration-300 hover:opacity-90"
          >
            <img
              src="/image.png"
              alt="Qtest Software Solution LLP logo"
              width={160}
              height={160}
              className="transition-transform duration-300 hover:scale-105 drop-shadow-sm"
            />
          </Link>

          {/* Desktop Nav - Using black text */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group px-4 py-2.5 rounded-xl font-medium text-black hover:text-brand-sage-700 transition-all duration-300"
              >
                <span className="relative z-10 drop-shadow-sm">
                  {item.name}
                </span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-sage-500 to-brand-lavender-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                <span className="absolute inset-0 bg-gradient-to-r from-brand-sage-100/0 to-brand-lavender-100/0 group-hover:from-brand-sage-100/40 group-hover:to-brand-lavender-100/40 rounded-xl transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle - Using black text */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl transition-all duration-300 text-black hover:text-brand-sage-600 hover:bg-brand-sage-50/50 focus:ring-2 focus:ring-brand-sage-300"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Using black text with glass effect */}
        {isMenuOpen && (
          <>
            {/* Backdrop overlay for blur effect */}
            <div
              className="md:hidden fixed inset-0 backdrop-blur-md bg-black/10 -z-10"
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="md:hidden mt-6 pb-6 border-t border-white/30 pt-6 bg-white/10 backdrop-blur-xl rounded-xl mx-2">
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-xl font-medium text-black hover:text-brand-sage-700 hover:bg-white/20 transition-all duration-300 transform hover:translate-x-1 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="drop-shadow-sm">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
