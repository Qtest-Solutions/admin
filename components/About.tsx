"use client";

import {
  Users,
  Award,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  Globe,
  X,
  CheckCircle,
  Calendar as CalendarIcon,
  Clock9,
  AlertCircle,
} from "lucide-react";

import dynamic from "next/dynamic";
import { useState } from "react";

// 📌 Dynamic Import (Fixes Vercel Build Error)
const Calendar = dynamic(() => import("react-calendar"), {
  ssr: false,
});

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  // Allowed time slots
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

  // Disable Sundays
  const isTileDisabled = ({ date }: { date: Date }) => {
    return date.getDay() === 0; // Sunday
  };

  // When a date is selected
  const handleDateSelect = (value: any) => {
    setSelectedDate(value);
    setShowForm(true);
  };

  // Form input change handler
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim() || formData.phone.length < 10)
      newErrors.phone = "Valid phone number is required";
    if (!formData.time) newErrors.time = "Please select a time slot";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const formattedDate = selectedDate
      ? selectedDate.toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

    const payload = new FormData();
    payload.append("Date", formattedDate);
    payload.append("Name", formData.name);
    payload.append("Email", formData.email);
    payload.append("Phone", formData.phone);
    payload.append("Time Slot", formData.time);
    payload.append("Message", formData.message);

    try {
      const response = await fetch("https://formsubmit.co/hisham@qtestsolutions.com", {
        method: "POST",
        body: payload,
      });

      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setIsModalOpen(false);
          setShowForm(false);
          setSelectedDate(null);
        }, 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative bg-transparent overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-lavender-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-coral-200/15 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-professional px-4 py-2 rounded-full text-xs font-semibold text-brand-sage-700 border border-brand-sage-200 shadow-sm">
            <Users className="w-4 h-4" />
            About QTest Solutions
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Transforming Quality Assurance  
            <span className="block text-brand-sage-600 mt-2">One Test at a Time</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide modern, reliable software testing services with a commitment to quality and precision.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-brand-sage-900 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Schedule a Consultation</h3>
            <p className="text-lg text-brand-sage-100 mb-8 max-w-2xl mx-auto">
              Book a session with our QA experts to discuss your project requirements.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-white text-brand-sage-700 rounded-xl font-semibold hover:bg-brand-sage-100 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <CalendarIcon className="w-5 h-5" /> Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      {/* ------------------ MODAL ------------------ */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => {
            setIsModalOpen(false);
            setShowForm(false);
            setSelectedDate(null);
          }}
        >
          <div
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 w-full max-w-lg border border-brand-sage-200 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="absolute top-4 right-4" onClick={() => setIsModalOpen(false)}>
              <X className="w-6 h-6 text-gray-500 hover:text-black" />
            </button>

            {/* SUCCESS SCREEN */}
            {showSuccess ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Booking Confirmed!</h3>
                <p className="text-gray-600 mt-2">We will contact you shortly.</p>
              </div>
            ) : (
              <>
                {/* STEP 1 — Select Date */}
                {!showForm && (
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-brand-sage-600" />
                      Select a Date
                    </h3>

                    <Calendar
                      onChange={handleDateSelect}
                      value={selectedDate}
                      tileDisabled={isTileDisabled}
                      className="rounded-xl shadow-md p-4 bg-white"
                    />

                    <p className="text-xs text-gray-500 mt-3">
                      * Available: Monday to Saturday, 9:30 AM – 6:30 PM
                    </p>
                  </div>
                )}

                {/* STEP 2 – Form */}
                {showForm && (
                  <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <h3 className="text-xl font-bold text-gray-800 text-center">
                      Complete Your Details
                    </h3>

                    {/* Name */}
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-sm font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-sm font-medium">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Time Slot */}
                    <div>
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Clock9 className="w-4 h-4" /> Choose Time Slot
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300"
                      >
                        <option value="">Select a time</option>
                        {timeSlots.map((slot, i) => (
                          <option key={i} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-sm font-medium">Message (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300"
                        rows={3}
                        placeholder="Any additional details..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-brand-sage-600 text-white font-semibold rounded-lg hover:bg-brand-sage-700 transition-all"
                    >
                      {isSubmitting ? "Submitting..." : "Confirm Booking"}
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
