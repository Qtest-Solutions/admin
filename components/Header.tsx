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
          ? "backdrop-blur-md bg-gray-900/80 border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Qtest Software Solution LLP Home"
            className="flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          >
            <img
              src="/image.png"
              alt="Qtest Software Solution LLP logo"
              width={150}
              height={150}
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-contain flex-shrink-0"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
              >
                {item.name}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #50bcb7, #299fd0)",
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden transition-colors duration-300"
            style={{ color: "#50bcb7" }}
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
              className="md:hidden fixed inset-0 backdrop-blur-sm bg-black/50 -z-10"
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="md:hidden mt-4 pb-4 border-t border-cyan-500/20">
              <div className="flex flex-col space-y-3 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 font-medium"
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
