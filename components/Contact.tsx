import { Send, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: "Email", info: "info@qtestsolutions.com" },
    { icon: Phone, title: "Phone", info: "+91 9876543210" },
    {
      icon: MapPin,
      title: "Address",
      info: "Kozhikode, Kerala, India",
    },
  ];
  return (
    <section id="contact" className="py-20 relative cv-auto bg-violet-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Get In Touch
          </h2>
          <p
            className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Ready to transform your testing process? Let's discuss how we can
            help you achieve exceptional quality.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center group">
                  <div className="relative mr-6">
                    <div
                      className={`bg-white shadow-lg border-2 rounded-2xl p-4 transition-all duration-300 ${
                        idx === 0
                          ? "border-sky-200 text-sky-500"
                          : idx === 1
                          ? "border-emerald-200 text-emerald-500"
                          : "border-violet-200 text-violet-500"
                      }`}
                    >
                      <info.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">
                      {info.title}
                    </h4>
                    <p className="text-slate-600">{info.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white shadow-lg border-2 border-violet-200 rounded-3xl p-8 transition-all duration-300">
              <form className="space-y-6" method="post" action="/api/contact">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">
                      Name
                    </label>
                    <input
                      name="name"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 transition-colors"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">
                    Company
                  </label>
                  <input
                    name="company"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 transition-colors resize-none"
                    placeholder="Tell us about your testing needs..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg bg-violet-600 hover:bg-violet-700"
                >
                  Send Message
                  <Send className="inline-block ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
            <div
              className="absolute -inset-4 rounded-3xl blur-xl -z-10"
              style={{
                background:
                  "linear-gradient(to right, rgba(80,188,183,0.1), rgba(41,159,208,0.1))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
