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
import { useState } from "react";


export default function About() {
  // Modal / booking state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    message: "",
  });

  // ---------- Static content data ----------
  const stats = [
    { number: "100%", label: "Client Satisfaction", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "Expert", label: "QA Team", icon: Users },
    { number: "Rapid", label: "Turnaround Time", icon: TrendingUp },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Quality First Approach",
      description:
        "We don't just test software—we ensure your product meets the highest standards of quality, performance, and reliability.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description:
        "Swift testing cycles without compromising quality, helping you achieve faster time-to-market and stay ahead of competition.",
    },
    {
      icon: Globe,
      title: "Industry Expertise",
      description:
        "Deep domain knowledge across fintech, e-commerce, healthcare, and enterprise applications with proven methodologies.",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description:
        "Custom testing strategies designed specifically for your business needs, whether you're a startup or enterprise.",
    },
  ];

  const values = [
    {
      title: "Excellence",
      subtitle: "Quality First",
      icon: Award,
      color: "blue",
    },
    {
      title: "Transparency",
      subtitle: "Open & Honest",
      icon: Shield,
      color: "purple",
    },
    { title: "Innovation", subtitle: "Future Ready", icon: Zap, color: "pink" },
    {
      title: "Partnership",
      subtitle: "Your Success",
      icon: Users,
      color: "green",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: {
      [key: string]: {
        bg: string;
        border: string;
        icon: string;
        iconBg: string;
        text: string;
      };
    } = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "text-blue-600",
        iconBg: "bg-blue-100",
        text: "text-blue-700",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "text-purple-600",
        iconBg: "bg-purple-100",
        text: "text-purple-700",
      },
      pink: {
        bg: "bg-pink-50",
        border: "border-pink-200",
        icon: "text-pink-600",
        iconBg: "bg-pink-100",
        text: "text-pink-700",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "text-green-600",
        iconBg: "bg-green-100",
        text: "text-green-700",
      },
    };
    return colors[color];
  };



  


  // ---------- Render ----------
  return (
    <section
      id="about"
      className="py-20 relative bg-transparent overflow-hidden"
    >
      {/* Background Blobs (brand theme) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-professional px-4 py-2 rounded-full text-xs font-semibold text-brand-sage-700 mb-6 border border-brand-sage-200 shadow-sm">
            <Users className="w-4 h-4" />
            About QTest Solutions
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Transforming Quality Assurance
            <span className="block text-brand-sage-600 mt-2">
              One Test at a Time
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to quality assurance and software testing
            excellence, combining modern technology with industry best practices
            to deliver exceptional results that drive business success.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-professional bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-brand-sage-200/60"
              >
                <div className="w-14 h-14 bg-brand-sage-100/60 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/60">
                  <Icon className="w-7 h-7 text-brand-sage-600" />
                </div>
                <div className="text-3xl font-bold mb-1 text-brand-sage-700">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Who We Are Section */}
        <div className="glass-professional bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 shadow-xl border border-brand-sage-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base">
                  <span className="font-bold text-brand-sage-600">
                    QTest Solutions
                  </span>{" "}
                  is an independent software testing company dedicated to
                  empowering businesses with comprehensive quality assurance
                  services. We specialize in delivering{" "}
                  <span className="font-semibold">
                    top-tier testing solutions
                  </span>{" "}
                  tailored to your unique business needs.
                </p>
                <p className="text-base">
                  Our team of{" "}
                  <span className="font-semibold text-brand-lavender-600">
                    certified professionals
                  </span>{" "}
                  brings expertise in functional testing, automation testing,
                  performance testing, security testing, and custom software
                  development. We're committed to building{" "}
                  <span className="font-semibold">long-term partnerships</span>{" "}
                  with our clients, ensuring their success through quality and
                  reliability.
                </p>
                <p className="text-base">
                  We don't just find bugs—we partner with you to deliver
                  products that excel in quality, performance, and user
                  experience, helping you stand out in competitive markets.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-brand-sage-50 to-brand-sage-100 p-6 rounded-2xl border border-brand-sage-200">
                <h4 className="text-lg font-bold text-brand-sage-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Our Mission
                </h4>
                <p className="text-sm text-brand-sage-800 leading-relaxed">
                  To empower businesses with world-class quality assurance
                  solutions that ensure their software products deliver
                  exceptional value, reliability, and performance to end users.
                </p>
              </div>

              <div className="bg-gradient-to-br from-brand-lavender-50 to-brand-lavender-100 p-6 rounded-2xl border border-brand-lavender-200">
                <h4 className="text-lg font-bold text-brand-lavender-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Our Vision
                </h4>
                <p className="text-sm text-brand-lavender-800 leading-relaxed">
                  To be the global leader in software testing and quality
                  assurance, recognized for innovation, expertise, and
                  unwavering commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose QTest Solutions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-professional bg-white/90 rounded-2xl p-6 border border-brand-sage-200 hover:border-brand-sage-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-brand-sage-100 rounded-xl flex items-center justify-center mb-4 border border-white/60">
                    <Icon className="w-6 h-6 text-brand-sage-600" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-sage-800 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Values Section */}
        {/* <div className="bg-gradient-to-br from-gray-900 to-brand-sage-900 rounded-3xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colors = getColorClasses(value.color);
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/20"
                >
                  <div
                    className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-sm text-brand-sage-100">
                    {value.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* CTA Section */}
  
      </div>


    </section>
  );
}
