import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-gray-900/80 border-b border-cyan-500/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* <TestTube className="w-8 h-8" style={{ color: "#50bcb7" }} /> */}
              <div
                className="absolute inset-0 blur-sm animate-pulse"
                style={{ backgroundColor: "#50bcb7", opacity: 0.5 }}
              ></div>
            </div>
            <span
              className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, #50bcb7, #299fd0)`,
              }}
            >
              <img
                src="/image.png"
                alt="QTest Solutions"
                width={200}
                height={50}
              />
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 transition-all duration-300 relative group"
                style={{ "--hover-color": "#50bcb7" } as React.CSSProperties}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#50bcb7")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {item.name}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, #50bcb7, #299fd0)`,
                  }}
                ></span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden transition-colors duration-300"
            style={{ color: "#50bcb7" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#299fd0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#50bcb7")}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-3 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 transition-colors duration-300 py-2"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#50bcb7")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
