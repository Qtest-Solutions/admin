import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-brand-neutral-50 to-brand-sage-50/30 border-t border-brand-sage-200/30 py-10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-16 w-64 h-64 bg-brand-sage-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-brand-lavender-200/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Qtest and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-0 mb-4">
              <span className="text-xl font-bold gradient-text-sage">
                Qtest Software Solution LLP
              </span>
            </div>

            <p className="text-sm text-brand-neutral-600 mb-4 max-w-md leading-relaxed font-medium">
              <span className="text-brand-sage-600 font-semibold">
                Empowering startups
              </span>{" "}
              with professional testing services and training the next
              generation of QA professionals.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-brand-neutral-800 mb-4 flex items-center gap-1.5">
              <div className="w-1.5 h-4 bg-gradient-to-b from-brand-sage-500 to-brand-lavender-500 rounded-full" />
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "Manual Testing",
                "Automation Testing",
                "Performance Testing",
                "API Testing",
                "Mobile Testing",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-brand-neutral-600 hover:text-brand-sage-600 transition-colors duration-300 font-medium flex items-center gap-1.5 group text-sm"
                  >
                    <div className="w-1 h-1 bg-brand-sage-400 rounded-full group-hover:bg-brand-sage-600 transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-base font-bold text-brand-neutral-800 mb-4 flex items-center gap-1.5">
              <div className="w-1.5 h-4 bg-gradient-to-b from-brand-lavender-500 to-brand-coral-500 rounded-full" />
              Training
            </h3>
            <ul className="space-y-2">
              {[
                "Manual Testing Fundamentals",
                "Automation Testing",
                "Performance Testing",
                "Complete QA Bootcamp",
                "Job Placement Support",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#training"
                    className="text-brand-neutral-600 hover:text-brand-lavender-600 transition-colors duration-300 font-medium flex items-center gap-1.5 group text-sm"
                  >
                    <div className="w-1 h-1 bg-brand-lavender-400 rounded-full group-hover:bg-brand-lavender-600 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-bold text-brand-neutral-800 mb-4 flex items-center gap-1.5">
              <div className="w-1.5 h-4 bg-gradient-to-b from-brand-coral-500 to-brand-sage-500 rounded-full" />
              Contact Us
            </h3>

            <div className="space-y-3 mb-6">
              <a
                href="mailto:info@qtestsolutions.com"
                className="flex items-center text-brand-neutral-600 hover:text-brand-sage-600 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-8 h-8 bg-brand-sage-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-brand-sage-200 transition-colors">
                  <Mail className="w-4 h-4 text-brand-sage-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Email</div>
                  <div className="text-xs">info@qtestsolutions.com</div>
                </div>
              </a>

              <a
                href="tel:+919961544424"
                className="flex items-center text-brand-neutral-600 hover:text-brand-lavender-600 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-8 h-8 bg-brand-lavender-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-brand-lavender-200 transition-colors">
                  <Phone className="w-4 h-4 text-brand-lavender-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Phone</div>
                  <div className="text-xs">+91 9961544424</div>
                </div>
              </a>

              <div className="flex items-start text-brand-neutral-600 hover:text-brand-coral-600 transition-colors duration-300 group cursor-pointer">
                <div className="w-8 h-8 bg-brand-coral-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-brand-coral-200 transition-colors mt-0.5">
                  <MapPin className="w-4 h-4 text-brand-coral-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Location</div>
                  <div className="text-xs leading-relaxed">
                    4th floor Emerald mall,
                    <br />
                    Mavoor road, Kozhikode
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <h4 className="text-sm font-semibold text-brand-neutral-700 mb-3">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/company/qtest-software-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>

                <a
                  href="https://facebook.com/qtestsoftwaresolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-600/25"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>

                <a
                  href="https://instagram.com/qtestsoftwaresolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/25"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-brand-sage-200/30 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-brand-neutral-500 text-sm font-medium mb-1">
                © 2025 QTest Software Solutions LLP. All rights reserved.
              </p>
              <p className="text-brand-neutral-400 text-xs">
                Built with excellence • Powered by innovation
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-brand-neutral-500 hover:text-brand-coral-600 font-medium transition-all duration-300 hover:scale-105 text-sm"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
