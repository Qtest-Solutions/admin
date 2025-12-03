"use client";

import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  submit?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // ------------------ Validation ------------------
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    else if (!/^[A-Za-z\s]{2,}$/.test(formData.name))
      newErrors.name = "Enter a valid name";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit number";

    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ------------------ Handlers ------------------
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/hisham@qtestsolutions.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(e.target as HTMLFormElement),
        }
      );

      if (response.ok) {
        setShowSuccessMessage(true);
        setFormData({ name: "", email: "", phone: "", message: "" });

        setTimeout(() => setShowSuccessMessage(false), 3000);
      } else {
        setErrors({ submit: "Failed to send message. Please try again." });
      }
    } catch (err) {
      setErrors({ submit: "An error occurred. Try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 bg-transparent overflow-hidden">

      {/* ------------------ FLOATING BLOBS (Same as Training Page) ------------------ */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-brand-lavender-200/20 rounded-full blur-3xl animate-gentle-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-brand-sage-200/20 rounded-full blur-3xl animate-gentle-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-brand-coral-200/15 rounded-full blur-3xl animate-gentle-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ------------------ HEADER (Matches Training Page EXACTLY) ------------------ */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-professional px-4 py-2 rounded-full text-xs text-brand-sage-700 mb-4 font-medium glow-sage">
            <Send className="w-3 h-3" />
            Contact Us
            <div className="w-1.5 h-1.5 bg-brand-sage-500 rounded-full animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Get In Touch With Us
          </h2>

          <p className="text-sm md:text-base text-brand-neutral-600 max-w-2xl mx-auto mt-3 font-medium">
            We're here to help you with{" "}
            <span className="text-brand-sage-600 font-semibold">
              QA training & software testing services.
            </span>
          </p>

          <div className="mt-4 flex justify-center">
            <div className="w-20 h-0.5 bg-gradient-to-r from-brand-sage-500 via-brand-lavender-500 to-brand-coral-500 rounded-full" />
          </div>
        </div>

        {/* ------------------ GRID ------------------ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ------------------ CONTACT INFO CARD ------------------ */}
          <div
            className="glass-professional p-6 rounded-2xl shadow-soft hover:shadow-soft-lg border border-brand-sage-200/40 hover:border-brand-sage-300/60 animate-fade-in-up"
          >
            <h3 className="text-xl font-bold text-brand-neutral-800 mb-6 flex items-center gap-2">
              Contact Information
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-sage-100/50 border border-white/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-sage-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-neutral-800">
                    Email
                  </p>
                  <p className="text-sm text-brand-neutral-600">
                    info@qtestsolutions.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-lavender-100/50 border border-white/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-lavender-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-neutral-800">
                    Phone
                  </p>
                  <p className="text-sm text-brand-neutral-600">
                    +91 9961544424
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-coral-100/50 border border-white/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-coral-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-neutral-800">
                    Address
                  </p>
                  <p className="text-sm text-brand-neutral-600">
                    4th Floor, Emerald Mall, Mavoor Road, Kozhikode
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------ CONTACT FORM (TRAINING TEAL-PURPLE THEME) ------------------ */}
          <div
            className="glass-professional rounded-2xl p-6 shadow-soft hover:shadow-soft-lg border border-brand-sage-200/40 hover:border-brand-sage-300/60 animate-fade-in-up"
          >
            <h3 className="text-lg font-bold text-brand-neutral-800 mb-4">
              Send Us a Message
            </h3>

            <form noValidate onSubmit={handleSubmit} className="space-y-4">
              {/* Config */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Contact Submission from QTest Website"
              />
              <input type="hidden" name="_template" value="table" />

              {/* Name */}
              <div>
                <label className="text-xs font-semibold text-brand-neutral-700">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-3 py-2 rounded-lg border text-sm font-medium placeholder-brand-neutral-400 
                    ${
                      errors.name
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                        : "border-brand-neutral-200 focus:border-brand-sage-500 focus:ring-brand-sage-200/50"
                    }
                    transition-all focus:ring-2`}
                />
                {errors.name && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-semibold text-brand-neutral-700">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-3 py-2 rounded-lg border text-sm font-medium placeholder-brand-neutral-400 
                    ${
                      errors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                        : "border-brand-neutral-200 focus:border-brand-sage-500 focus:ring-brand-sage-200/50"
                    }
                    transition-all focus:ring-2`}
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-semibold text-brand-neutral-700">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className={`w-full px-3 py-2 rounded-lg border text-sm font-medium placeholder-brand-neutral-400 
                    ${
                      errors.phone
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                        : "border-brand-neutral-200 focus:border-brand-sage-500 focus:ring-brand-sage-200/50"
                    }
                    transition-all focus:ring-2`}
                />
                {errors.phone && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-semibold text-brand-neutral-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="How can we help you?"
                  className={`w-full px-3 py-2 rounded-lg border text-sm font-medium resize-none placeholder-brand-neutral-400 
                    ${
                      errors.message
                        ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                        : "border-brand-neutral-200 focus:border-brand-sage-500 focus:ring-brand-sage-200/50"
                    }
                    transition-all focus:ring-2`}
                />
                {errors.message && (
                  <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800 text-sm">{errors.submit}</p>
                </div>
              )}

              {/* Submit Button (MATCHES TRAINING THEME) */}
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-sm 
                  bg-gradient-to-r from-brand-sage-500 to-brand-lavender-600 
                  text-white shadow-soft hover:shadow-soft-lg hover:scale-[1.02] 
                  transition-all duration-300 disabled:opacity-50 
                  flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Success Message */}
              {showSuccessMessage && (
                <div className="pt-4 animate-fade-in-up">
                  <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800 text-sm">
                        Message sent successfully!
                      </p>
                      <p className="text-green-700 text-xs">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
