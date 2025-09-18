"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "glass-professional shadow-professional border-b border-brand-sage-200/30"
          : "glass-sage"
      }`}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            aria-label="Qtest Software Solution LLP Home"
            className="flex items-center space-x-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sage-300 rounded-lg p-2 -m-2 transition-all duration-300 hover:bg-brand-sage-50/50"
          >
            <img
              src="/image.png"
              alt="Qtest Software Solution LLP logo"
              width={140}
              height={140}
              className="transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group px-4 py-2.5 rounded-xl font-medium text-brand-neutral-700 hover:text-brand-sage-600 transition-all duration-300 hover:bg-brand-sage-50/70"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-sage-500 to-brand-lavender-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                <span className="absolute inset-0 bg-gradient-to-r from-brand-sage-100/0 to-brand-lavender-100/0 group-hover:from-brand-sage-100/30 group-hover:to-brand-lavender-100/30 rounded-xl transition-all duration-300" />
              </a>
            ))}

            {/* CTA Button */}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl transition-all duration-300 text-brand-neutral-700 hover:text-brand-sage-600 hover:bg-brand-sage-50/50 focus:ring-2 focus:ring-brand-sage-300"
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
              className="md:hidden fixed inset-0 backdrop-blur-sm bg-brand-neutral-900/10 -z-10"
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="md:hidden mt-6 pb-6 border-t border-brand-sage-200/30 animate-fade-in-up">
              <div className="flex flex-col space-y-2 mt-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 rounded-xl font-medium text-brand-neutral-700 hover:text-brand-sage-600 hover:bg-brand-sage-50/50 transition-all duration-300 animate-slide-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 mt-4 border-t border-brand-sage-200/30">
                  <button
                    className="w-full btn-professional text-sm animate-slide-in-right"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
