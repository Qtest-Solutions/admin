import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  LocateIcon,
  MapPinHouse,
  MapPinIcon,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-brand-slate-900 via-brand-slate-800 to-brand-slate-900 text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-900/10 to-brand-accent-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.1)_1px,_transparent_0)] bg-[length:20px_20px]" />

      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand and Contact */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-bold bg-gradient-to-r from-white to-brand-primary-100 bg-clip-text text-transparent">
                  Qtest Software Solution LLP
                </span>
              </div>

              <p className="text-brand-slate-300 leading-relaxed max-w-xs text-sm">
                Empowering startups with professional testing services and
                training the next generation of QA professionals.
              </p>
              <div className="flex space-x-4 mb-6">
                {[
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/company/qtest-solutions/",
                    icon: Linkedin,
                  },
                  {
                    name: "Facebook",
                    href: "https://www.facebook.com/qtestsolutions",
                    icon: Facebook,
                  },
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/qtest_solutions_calicut/",
                    icon: Instagram,
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-brand-slate-800 hover:bg-gradient-to-r from-brand-primary-500 to-brand-accent-500 border border-brand-slate-700 hover:border-transparent rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-professional group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-brand-slate-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-brand-primary-400 to-brand-accent-400 rounded-full mr-3" />
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Manual Testing",
                "Automation Testing",
                "Performance Testing",
                "Security Testing",
                "API Testing",
                "Mobile Testing",
                ,
              ].map((service, index) => (
                <li key={index}>
                  <a className="text-brand-slate-300 hover:text-brand-primary-300 transition-colors duration-300 text-sm flex items-center group">
                    <span className="w-1 h-1 bg-brand-slate-500 rounded-full mr-3 group-hover:bg-brand-primary-400 transition-colors duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-brand-primary-400 to-brand-accent-400 rounded-full mr-3" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Services", href: "/services" },
                { name: "Blog", href: "/blog" },
                { name: "Training", href: "/training" },
                { name: "About Us", href: "/about" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-brand-slate-300 hover:text-brand-primary-300 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-brand-slate-500 rounded-full mr-3 group-hover:bg-brand-primary-400 transition-colors duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-brand-primary-400 to-brand-accent-400 rounded-full mr-3" />
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-brand-slate-300">
                <Mail className="w-4 h-4 text-brand-primary-400" />
                <span className="text-sm">info@qtestsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-slate-300">
                <Phone className="w-4 h-4 text-brand-primary-400" />
                <span className="text-sm">+919961544424</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-slate-300">
                <MapPinIcon className="w-5 h-5 text-brand-primary-400" />
                <span className="text-sm">
                  4th floor Emerald mall, Mavoor road, Kozhikode
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-slate-700/50 my-8 lg:my-12" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-brand-slate-400 text-sm">
            © 2025 QTest Software Solutions LLP. All rights reserved.
          </p>
          {/* <div className="flex space-x-6">
            {[
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" },
              { name: "Cookie Policy", href: "#" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-brand-slate-400 hover:text-brand-primary-300 text-sm transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
