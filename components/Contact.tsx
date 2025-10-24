"use client";

import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/hisham@qtestsolutions.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        // Show success message
        setShowMessage(true);

        // Clear form
        form.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
          setShowMessage(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-16 relative cv-auto bg-gradient-sage">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-16 w-80 h-80 bg-brand-coral-200/15 rounded-full blur-3xl animate-gentle-float" />
        <div
          className="absolute bottom-16 right-20 w-96 h-96 bg-brand-sage-200/10 rounded-full blur-3xl animate-gentle-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-brand-lavender-200/12 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-professional px-4 py-2 rounded-full text-xs text-brand-coral-700 mb-4 font-medium glow-coral animate-fade-in-up">
            <Send className="w-3 h-3" />
            Connect With Excellence
            <div className="w-1.5 h-1.5 bg-brand-coral-500 rounded-full animate-pulse" />
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Get In Touch
          </h2>

          <p
            className="text-sm md:text-base text-brand-neutral-600 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Ready to{" "}
            <span className="text-brand-coral-600 font-semibold">
              transform your testing process
            </span>
            ? Let's discuss how we can help you achieve quality.
          </p>

          <div className="mt-4 flex justify-center">
            <div className="w-20 h-0.5 bg-gradient-to-r from-brand-coral-500 via-brand-sage-500 to-brand-lavender-500 rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="glass-professional p-6 rounded-2xl shadow-professional">
              <h3 className="text-xl font-bold text-brand-neutral-800 mb-6 flex items-center gap-2">
                {/* <div className="w-2 h-6 bg-gradient-to-b from-brand-coral-500 to-brand-sage-500 rounded-full" /> */}
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <div
                    key={idx}
                    className="flex items-start group hover:translate-x-1 transition-transform duration-300"
                  >
                    <div className="relative mr-4 flex-shrink-0">
                      <div
                        className={`glass-professional shadow-professional rounded-lg p-3 transition-all duration-300 group-hover:scale-105 ${
                          idx === 0
                            ? "border border-brand-sage-200/50 text-brand-sage-600"
                            : idx === 1
                            ? "border border-brand-lavender-200/50 text-brand-lavender-600"
                            : "border border-brand-coral-200/50 text-brand-coral-600"
                        }`}
                      >
                        <info.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="pt-1">
                      <h4 className="text-base font-bold text-brand-neutral-800 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-brand-neutral-600 font-medium text-sm">
                        {info.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Hours */}
              {/* <div className="mt-6 pt-4 border-t border-brand-neutral-200/30">
                <h4 className="text-base font-bold text-brand-neutral-800 mb-3">
                  Office Hours
                </h4>
                <div className="space-y-1 text-brand-neutral-600 text-sm">
                  <p>
                    <span className="font-semibold">Mon - Fri:</span> 9:00 AM -
                    6:00 PM IST
                  </p>
                  <p>
                    <span className="font-semibold">Saturday:</span> 10:00 AM -
                    2:00 PM IST
                  </p>
                  <p>
                    <span className="font-semibold">Sunday:</span> Closed
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          {/* Contact Form */}
          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="glass-professional rounded-2xl p-6 shadow-professional glow-coral">
              <h3 className="text-lg font-bold text-brand-neutral-800 mb-4 flex items-center gap-2">
                {/* <div className="w-2 h-5 bg-gradient-to-b from-brand-lavender-500 to-brand-coral-500 rounded-full" /> */}
                Send us a Message
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission from QTest Website"
                />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-2 text-brand-neutral-700">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      className="w-full px-3 py-2 glass-sage border border-brand-sage-200/50 rounded-lg text-brand-neutral-800 focus:border-brand-sage-400 focus:ring-2 focus:ring-brand-sage-200/50 transition-all duration-300 placeholder-brand-neutral-400 font-medium text-sm"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 text-brand-neutral-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 glass-sage border border-brand-sage-200/50 rounded-lg text-brand-neutral-800 focus:border-brand-sage-400 focus:ring-2 focus:ring-brand-sage-200/50 transition-all duration-300 placeholder-brand-neutral-400 font-medium text-sm"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2 text-brand-neutral-700">
                    Company / Organization
                  </label>
                  <input
                    name="company"
                    className="w-full px-3 py-2 glass-sage border border-brand-sage-200/50 rounded-lg text-brand-neutral-800 focus:border-brand-sage-400 focus:ring-2 focus:ring-brand-sage-200/50 transition-all duration-300 placeholder-brand-neutral-400 font-medium text-sm"
                    placeholder="Your company or organization"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2 text-brand-neutral-700">
                    How can we help you? *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 glass-sage border border-brand-sage-200/50 rounded-lg text-brand-neutral-800 focus:border-brand-sage-400 focus:ring-2 focus:ring-brand-sage-200/50 transition-all duration-300 resize-none placeholder-brand-neutral-400 font-medium text-sm"
                    placeholder="Tell us about your testing needs..."
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-accent py-2 px-4 text-sm font-semibold flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Success Message */}
                {showMessage && (
                  <div className="pt-2 animate-fade-in-up">
                    <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-green-800 text-sm">
                          Message Sent Successfully!
                        </p>
                        <p className="text-green-700 text-xs">
                          We'll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-center pt-2 text-xs text-brand-neutral-500">
                  <p>We typically respond within 24 hours</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
