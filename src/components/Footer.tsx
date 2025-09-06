import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-b from-gray-900 to-black border-t py-12"
      style={{ borderColor: "rgba(80, 188, 183, 0.2)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-0 mb-6">
              <div className="relative">
                <img
                  src="/image.png"
                  alt="QTest Solutions"
                  width={100}
                  height={50}
                />
              </div>
              <span
                className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, #50bcb7, #299fd0)`,
                }}
              >
                QTest Solutions
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Revolutionizing software testing with AI-powered solutions and
              cutting-edge automation. Your partner in delivering flawless
              software experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" style={{ color: "#50bcb7" }} />
                contact@qtestsolutions.com
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" style={{ color: "#50bcb7" }} />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" style={{ color: "#50bcb7" }} />
                123 Innovation Drive, Tech City, TC 12345
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "AI-Powered Testing",
                "Automated Test Suites",
                "Performance Testing",
                "Mobile Testing",
                "API Testing",
                "Security Testing",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 transition-colors duration-300"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#50bcb7")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Team",
                "Careers",
                "Case Studies",
                "Blog",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors duration-300"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#50bcb7")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 QTest Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 text-sm transition-colors duration-300"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#50bcb7")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 text-sm transition-colors duration-300"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#50bcb7")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
