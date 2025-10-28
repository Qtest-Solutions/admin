"use client";

import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  LucideIcon,
} from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";

// Type definitions
interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  submit?: string;
}

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  info: string;
}

const Contact = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // Validation rules
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Company validation (optional but if provided, validate)
    if (formData.company.trim() && formData.company.trim().length < 2) {
      newErrors.company = "Company name must be at least 2 characters";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must not exceed 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const submissionData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/hisham@qtestsolutions.com",
        {
          method: "POST",
          body: submissionData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        // Show success message
        setShowMessage(true);

        // Clear form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
        form.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
          setShowMessage(false);
        }, 5000);
      } else {
        // Handle error response
        setErrors({
          submit: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({
        submit: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfo[] = [
    { icon: Mail, title: "Email", info: "info@qtestsolutions.com" },
    { icon: Phone, title: "Phone", info: "+91 9876543210" },
    {
      icon: MapPin,
      title: "Address",
      info: "4th floor Emerald mall, Mavoor road, Kozhikode",
    },
  ];

  return (
    <section id="contact" className="py-16 relative cv-auto bg-transparent">
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
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info: ContactInfo, idx: number) => (
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
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="relative animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="glass-professional rounded-2xl p-6 shadow-professional glow-coral">
              <h3 className="text-lg font-bold text-brand-neutral-800 mb-4 flex items-center gap-2">
                Send us a Message
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission from QTest Website"
                />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name Field */}
                  <div>
                    <label className="block text-xs font-semibold mb-2 text-brand-neutral-700">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 glass-sage border rounded-lg text-brand-neutral-800 focus:border-brand-sage-400 focus:ring-2 focus:ring-brand-sage-200/50 transition-all duration-300 placeholder-brand-neutral-400 font-medium text-sm ${
                        errors.name
                          ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                          : "border-brand-sage-200/50"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <div className="flex items-center gap-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <p className="text-xs">{errors.name}</p>
                      </div>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-semibold mb-2 text-brand-neutral-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 glass-sage border rounded-lg text-brand-neutral-800 focus:border-brand-sage-400 focus:ring-2 focus:ring-brand-sage-200/50 transition-all duration-300 placeholder-brand-neutral-400 font-medium text-sm ${
                        errors.email
                          ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                          : "border-brand-sage-200/50"
                      }`}
                      placeholder="your.email@company.com"
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <p className="text-xs">{errors.email}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-xs font-semibold mb-2 text-brand-neutral-700">
                    Company / Organization
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 glass-sage border rounded-lg text-brand-neutral-800 focus:border-brand-sage-400 focus:ring-2 focus:ring-brand-sage-200/50 transition-all duration-300 placeholder-brand-neutral-400 font-medium text-sm ${
                      errors.company
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                        : "border-brand-sage-200/50"
                    }`}
                    placeholder="Your company or organization"
                  />
                  {errors.company && (
                    <div className="flex items-center gap-1 mt-1 text-red-600">
                      <AlertCircle className="w-3 h-3" />
                      <p className="text-xs">{errors.company}</p>
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-semibold mb-2 text-brand-neutral-700 flex items-center justify-between">
                    <span>How can we help you? *</span>
                    <span className="text-brand-neutral-500 font-normal">
                      {formData.message.length}/1000
                    </span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={1000}
                    className={`w-full px-3 py-2 glass-sage border rounded-lg text-brand-neutral-800 focus:border-brand-sage-400 focus:ring-2 focus:ring-brand-sage-200/50 transition-all duration-300 resize-none placeholder-brand-neutral-400 font-medium text-sm ${
                      errors.message
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                        : "border-brand-sage-200/50"
                    }`}
                    placeholder="Tell us about your testing needs..."
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 mt-1 text-red-600">
                      <AlertCircle className="w-3 h-3" />
                      <p className="text-xs">{errors.message}</p>
                    </div>
                  )}
                </div>

                {/* Submit Error */}
                {/* Submit Error */}
                {errors.submit && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-800 text-sm">{errors.submit}</p>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-accent py-2 px-4 text-sm font-semibold flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
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
