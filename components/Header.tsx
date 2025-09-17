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
    { name: "Training", href: "/training" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-white/40 dark:border-gray-700 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Qtest Software Solution LLP Home"
            className="flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
          >
            <img
              src="/image.png"
              alt="Qtest Software Solution LLP logo"
              width={150}
              height={150}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 relative group font-medium ${
                  isScrolled || isMenuOpen
                    ? "text-slate-700 dark:text-slate-200 hover:text-sky-600"
                    : "text-white dark:text-white hover:text-sky-300"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled || isMenuOpen
                ? "text-slate-700 dark:text-slate-200 hover:text-sky-600"
                : "text-white dark:text-white hover:text-sky-300"
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop overlay for blur effect */}
            <div
              className="md:hidden fixed inset-0 backdrop-blur-sm bg-black/10 dark:bg-white/10 -z-10"
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="md:hidden mt-4 pb-4 border-t border-white/40 dark:border-gray-700">
              <div className="flex flex-col space-y-3 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-colors duration-300 py-2 font-medium ${
                      isScrolled || isMenuOpen
                        ? "text-slate-700 dark:text-slate-200 hover:text-sky-600"
                        : "text-white dark:text-white hover:text-sky-300"
                    }`}
                  >
                    {item.name}
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
