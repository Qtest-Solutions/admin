"use client";

import { useState, FormEvent } from "react";
import {
  Users,
  Award,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  Globe,
  AlertCircle,
  Calendar as CalendarIcon,
  CheckCircle,
  X,
} from "lucide-react";
import Calendar from "react-calendar";

type CalendarValue = Date | null;

interface ConsultFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  timeSlot?: string;
  message?: string;
  submit?: string;
}

export default function About() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedDate, setSelectedDate] = useState<CalendarValue>(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ConsultFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const stats = [
    { number: "100%", label: "Client Satisfaction", icon: Award },
    { number: "24/7", label: "Support Availability", icon: Clock },
    { number: "Expert", label: "QA Team", icon: Users },
    { number: "Rapid", label: "Turnaround Time", icon: TrendingUp },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Quality First Approach",
      description:
        "We ensure your product meets the highest standards of stability, performance, and reliability.",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description:
        "Accelerated testing cycles with uncompromised quality for faster releases.",
    },
    {
      icon: Globe,
      title: "Industry Expertise",
      description:
        "Experience across fintech, healthcare, e-commerce, SaaS, and enterprise products.",
    },
    {
      icon: Target,
      title: "Tailored QA Strategy",
      description:
        "Custom QA solutions aligned to your product, team, and business goals.",
    },
  ];

  const timeSlots = [
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
  ];

  const formatSelectedDate = (date: CalendarValue) => {
    if (!date) return "";
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const resetConsult = () => {
    setStep(1);
    setSelectedDate(null);
    setTimeSlot("");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors({});
    setShowSuccess(false);
    setIsSubmitting(false);
  };

  const validateStep2 = (): boolean => {
    const newErrors: ConsultFormErrors = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    } else if (!/^[A-Za-z\s]{2,}$/.test(name.trim())) {
      newErrors.name = "Enter a valid name";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.trim())
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit number";
    }

    if (!timeSlot) {
      newErrors.timeSlot = "Please select a time slot";
    }

    if (message && message.length < 5) {
      newErrors.message = "Message should be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConsultSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDate) {
      setStep(1);
      return;
    }

    if (!validateStep2()) return;

    setIsSubmitting(true);
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/hisham@qtestsolutions.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (res.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          setIsConsultOpen(false);
          resetConsult();
        }, 2500);
      } else {
        setErrors({
          submit: "Failed to schedule. Please try again.",
        });
      }
    } catch (err) {
      setErrors({
        submit: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative bg-transparent overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-brand-lavender-200/20 rounded-full blur-3xl animate-gentle-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-brand-sage-200/20 rounded-full blur-3xl animate-gentle-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-coral-200/15 rounded-full blur-3xl animate-gentle-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-professional px-4 py-2 rounded-full text-xs text-brand-sage-700 mb-4 font-medium glow-sage">
            <Users className="w-3 h-3" />
            About QTest Solutions
            <div className="w-1.5 h-1.5 bg-brand-sage-500 rounded-full animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Crafting Excellence in Software Quality
          </h2>

          <p className="text-sm md:text-base text-brand-neutral-600 max-w-2xl mx-auto mt-3 font-medium">
            We help businesses build reliable, high-performance, user-trusted
            software through modern, efficient and intelligent QA solutions.
          </p>

          <div className="mt-4 flex justify-center">
            <div className="w-20 h-0.5 bg-gradient-to-r from-brand-sage-500 via-brand-lavender-500 to-brand-coral-500 rounded-full" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in-up">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-professional border border-brand-sage-200/40 rounded-2xl p-5 text-center shadow-soft hover:shadow-soft-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white/60 border border-white/40 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-brand-sage-600" />
              </div>
              <div className="text-xl font-bold text-brand-neutral-800">
                {stat.number}
              </div>
              <div className="text-xs text-brand-neutral-600 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Who We Are */}
        <div className="glass-professional p-8 rounded-3xl shadow-soft border border-brand-sage-200/40 hover:border-brand-sage-300/60 mb-16 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-brand-neutral-800 mb-4">
                Who We Are
              </h3>
              <p className="text-sm text-brand-neutral-700 leading-relaxed mb-4 font-medium">
                <span className="font-semibold text-brand-sage-600">
                  QTest Solutions
                </span>{" "}
                is a dedicated software testing and QA automation company
                focused on delivering reliable, scalable, and efficient quality
                assurance solutions for businesses worldwide.
              </p>

              <p className="text-sm text-brand-neutral-700 leading-relaxed mb-4 font-medium">
                Our team consists of{" "}
                <span className="font-semibold text-brand-lavender-600">
                  certified QA engineers
                </span>{" "}
                with deep expertise in functional testing, automation
                engineering, security testing, performance validation, and
                end-to-end QA strategy.
              </p>

              <p className="text-sm text-brand-neutral-700 leading-relaxed font-medium">
                We serve as your QA partner—not just identifying issues, but
                ensuring your software delivers exceptional{" "}
                <span className="font-semibold">quality, consistency,</span> and{" "}
                <span className="font-semibold">performance.</span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass-professional p-6 rounded-2xl border border-brand-sage-200/40">
                <h4 className="text-lg font-bold text-brand-sage-700 mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Our Mission
                </h4>
                <p className="text-sm text-brand-neutral-600 leading-relaxed font-medium">
                  Empower businesses worldwide with world-class QA solutions
                  that enhance reliability, performance, and user trust.
                </p>
              </div>

              <div className="glass-professional p-6 rounded-2xl border border-brand-lavender-200/40">
                <h4 className="text-lg font-bold text-brand-lavender-700 mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Our Vision
                </h4>
                <p className="text-sm text-brand-neutral-600 leading-relaxed font-medium">
                  To be recognized as a global leader in software testing by
                  consistently delivering excellence, innovation, and trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20 animate-fade-in-up">
          <h3 className="text-center text-2xl font-bold mb-10 text-brand-neutral-800">
            Why Choose QTest Solutions
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="glass-professional p-6 rounded-2xl shadow-soft border border-brand-sage-200/40 hover:border-brand-sage-300/60 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-sage-100/40 border border-white/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-sage-600" />
                </div>

                <h4 className="text-lg font-bold text-brand-neutral-800 mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-brand-neutral-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA – Schedule Consultation only */}
        <div className="text-center animate-fade-in-up">
          <div className="glass-professional bg-white/30 backdrop-blur-xl p-10 rounded-3xl border border-brand-sage-200/40 shadow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-neutral-800 mb-3">
              Ready to Elevate Your Software Quality?
            </h3>
            <p className="text-sm text-brand-neutral-600 mb-6 font-medium">
              Schedule a consultation and let's discuss how our QA team can
              support your product journey.
            </p>

            <p className="text-xs text-brand-neutral-500 mb-4">
              Available: <span className="font-semibold">Monday – Saturday</span>,{" "}
              <span className="font-semibold">09:30 AM – 06:30 PM</span>
            </p>

            <button
              onClick={() => {
                resetConsult();
                setIsConsultOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-brand-sage-500 to-brand-sage-600 text-white font-semibold shadow-soft hover:shadow-soft-lg hover:scale-[1.03] transition-all duration-300"
            >
              <CalendarIcon className="w-4 h-4" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      {isConsultOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
          <div className="glass-professional rounded-2xl shadow-xl w-full max-w-lg p-6 sm:p-8 border border-brand-sage-200/40 max-h-[90vh] overflow-y-auto relative">
            {/* Close */}
            <button
              onClick={() => {
                setIsConsultOpen(false);
                resetConsult();
              }}
              className="absolute top-3 right-3 text-brand-neutral-400 hover:text-brand-neutral-600"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {showSuccess ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-brand-neutral-800 mb-2">
                  Consultation Request Sent!
                </h3>
                <p className="text-sm text-brand-neutral-600">
                  We’ll contact you shortly to confirm your slot.
                </p>
              </div>
            ) : (
              <>
                {/* STEP 1 – Date selection */}
                {step === 1 && (
                  <div className="space-y-5">
                    <div className="text-center mb-2">
                      <div className="inline-flex items-center gap-2 glass-professional px-3 py-1 rounded-full text-xs text-brand-sage-700 mb-3 font-medium">
                        <CalendarIcon className="w-3 h-3" />
                        Choose a Date
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-brand-neutral-800">
                        Select a consultation date
                      </h3>
                      <p className="text-xs text-brand-neutral-500 mt-1">
                        Available Monday – Saturday, 09:30 AM – 06:30 PM
                      </p>
                    </div>

                    <div className="glass-professional rounded-2xl border border-brand-sage-200/50 p-3">
                      <Calendar
                        onChange={(value) => {
                          const v = Array.isArray(value) ? value[0] : value;
                          setSelectedDate(v);
                        }}
                        value={selectedDate}
                        minDate={new Date()}
                        tileDisabled={({ date }) => date.getDay() === 0} // disable Sundays
                        className="w-full !bg-transparent !border-0 !shadow-none text-xs"
                      />
                    </div>

                    <button
                      type="button"
                      disabled={!selectedDate}
                      onClick={() => {
                        if (selectedDate) {
                          setStep(2);
                        }
                      }}
                      className={`w-full py-3 rounded-lg font-semibold text-sm 
                        bg-gradient-to-r from-brand-sage-500 to-brand-sage-600 
                        text-white shadow-soft hover:shadow-soft-lg hover:scale-[1.02] 
                        transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100`}
                    >
                      Continue
                    </button>
                  </div>
                )}

                {/* STEP 2 – Details form */}
                {step === 2 && (
                  <form onSubmit={handleConsultSubmit} noValidate className="space-y-4">
                    {/* FormSubmit config */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_subject"
                      value="New Consultation Request from QTest Website"
                    />
                    <input type="hidden" name="_template" value="table" />

                    {/* Hidden fields for date and time */}
                    <input
                      type="hidden"
                      name="Preferred Date"
                      value={formatSelectedDate(selectedDate)}
                    />
                    <input type="hidden" name="Preferred Time" value={timeSlot} />

                    <div className="text-center mb-3">
                      <div className="inline-flex items-center gap-2 glass-professional px-3 py-1 rounded-full text-xs text-brand-sage-700 mb-2 font-medium">
                        <CalendarIcon className="w-3 h-3" />
                        Selected: {formatSelectedDate(selectedDate)}
                      </div>
                      <p
                        className="text-xs text-brand-sage-600 cursor-pointer underline"
                        onClick={() => setStep(1)}
                      >
                        Change date
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-neutral-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        name="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm font-medium placeholder-brand-neutral-400 ${
                          errors.name
                            ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                            : "border-brand-neutral-200 focus:border-brand-sage-500 focus:ring-brand-sage-200/50"
                        } focus:ring-2 transition-all`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        name="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm font-medium placeholder-brand-neutral-400 ${
                          errors.email
                            ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                            : "border-brand-neutral-200 focus:border-brand-sage-500 focus:ring-brand-sage-200/50"
                        } focus:ring-2 transition-all`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-neutral-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        name="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm font-medium placeholder-brand-neutral-400 ${
                          errors.phone
                            ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                            : "border-brand-neutral-200 focus:border-brand-sage-500 focus:ring-brand-sage-200/50"
                        } focus:ring-2 transition-all`}
                        placeholder="10-digit mobile number"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Time slot */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-neutral-700 mb-1">
                        Preferred Time Slot *
                      </label>
                      <select
                        name="Time Slot"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm font-medium ${
                          errors.timeSlot
                            ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                            : "border-brand-neutral-200 focus:border-brand-sage-500 focus:ring-brand-sage-200/50"
                        } focus:ring-2 transition-all bg-white`}
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.timeSlot && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.timeSlot}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-neutral-700 mb-1">
                        Additional Details (optional)
                      </label>
                      <textarea
                        name="Message"
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border text-sm font-medium resize-none placeholder-brand-neutral-400 ${
                          errors.message
                            ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                            : "border-brand-neutral-200 focus:border-brand-sage-500 focus:ring-brand-sage-200/50"
                        } focus:ring-2 transition-all`}
                        placeholder="Share anything specific you'd like to discuss…"
                      />
                      {errors.message && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit error */}
                    {errors.submit && (
                      <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-800 text-sm">{errors.submit}</p>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-lg font-semibold text-sm 
                        bg-gradient-to-r from-brand-sage-500 to-brand-sage-600 
                        text-white shadow-soft hover:shadow-soft-lg hover:scale-[1.02] 
                        transition-all duration-300 disabled:opacity-50 
                        flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Confirm Consultation
                          <CalendarIcon className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
