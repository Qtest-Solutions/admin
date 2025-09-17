import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-0 mb-6">
              <span className="text-2xl font-bold text-slate-800">
                Qtest Software Solution LLP
              </span>
            </div>
            <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
              Empowering startups with professional testing services and
              training the next generation of QA professionals.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-slate-600 hover:text-sky-600 transition-colors duration-300 group">
                <Mail className="w-5 h-5 mr-3 text-sky-500" />
                info@qtestsolutions.com
              </div>
              <div className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors duration-300 group">
                <Phone className="w-5 h-5 mr-3 text-emerald-500" />
                +91 9876543210
              </div>
              <div className="flex items-center text-slate-600 hover:text-violet-600 transition-colors duration-300 group">
                <MapPin className="w-5 h-5 mr-3 text-violet-500" />
                Kozhikode, Kerala, India
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Software Testing",
                "Test Automation",
                "Software Development",
                "QA Training",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-slate-600 hover:text-sky-600 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              Training
            </h3>
            <ul className="space-y-3">
              {[
                "Manual Testing",
                "Automation Testing",
                "Performance Testing",
                "QA Bootcamp",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-emerald-600 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              © 2025 QTest Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-slate-500 hover:text-violet-600 text-sm transition-colors duration-300"
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
