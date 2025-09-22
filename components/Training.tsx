"use client";
import { useState, FormEvent } from "react";
import {
  CheckCircle,
  Users,
  Award,
  Clock,
  Briefcase,
  BookOpen,
  ArrowRight,
  X,
  GraduationCap,
  BarChart,
  Target,
  Zap,
  MessageCircle,
} from "lucide-react";
import GoogleReviewsWidget from "google-reviews-widget"; // ⭐ Import

// -------------------- Types --------------------
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

type CourseColor = "blue" | "emerald" | "purple" | "coral";

interface Course {
  name: string;
  duration: string;
  level: string;
  description: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: CourseColor;
}

interface ColorClasses {
  bg: string;
  border: string;
  icon: string;
  iconBg: string;
  accent: string;
  text: string;
  glow: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  place: string;
  course: string;
}

// -------------------- Component --------------------
const Training: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    place: "",
    course: "",
  });

  // -------------------- WhatsApp Handler --------------------
  const handleWhatsAppClick = () => {
    const phoneNumber = "919961544424";
    const message =
      "Hi! I'm interested in your QA training programs. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // -------------------- Features --------------------
  const features: Feature[] = [
    {
      icon: BookOpen,
      title: "Hands-on Training",
      description:
        "Practical, project-based learning with real-world scenarios",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry veterans with 10+ years experience",
    },
    {
      icon: Briefcase,
      title: "Job Placement",
      description: "Dedicated career support and placement assistance",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Weekend and evening batches available",
    },
    {
      icon: Target,
      title: "Project Portfolio",
      description: "Build a professional portfolio with live projects",
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Globally recognized certification upon completion",
    },
  ];

  // -------------------- Courses --------------------
  const courses: Course[] = [
    {
      name: "Manual Testing Fundamentals",
      duration: "6 weeks",
      level: "Beginner Level",
      description:
        "Master the foundations of software testing with comprehensive manual testing techniques and methodologies.",
      highlights: [
        "Test Case Design",
        "Bug Reporting",
        "Test Documentation",
        "Functional Testing",
      ],
      icon: CheckCircle,
      color: "blue",
    },
    {
      name: "Automation Testing",
      duration: "8 weeks",
      level: "Intermediate Level",
      description:
        "Build expertise in test automation using industry-standard tools and frameworks for efficient testing.",
      highlights: [
        "Selenium WebDriver",
        "Test Frameworks",
        "CI/CD Integration",
        "API Automation",
      ],
      icon: Zap,
      color: "emerald",
    },
    {
      name: "Performance Testing",
      duration: "4 weeks",
      level: "Advanced Level",
      description:
        "Specialize in performance testing to ensure applications deliver optimal speed and reliability.",
      highlights: [
        "Load Testing",
        "Stress Testing",
        "Performance Analysis",
        "Monitoring Tools",
      ],
      icon: BarChart,
      color: "purple",
    },
    {
      name: "Complete QA Bootcamp",
      duration: "12 weeks",
      level: "All Levels",
      description:
        "Comprehensive program covering all aspects of QA testing from basics to advanced automation.",
      highlights: [
        "Full Stack QA",
        "Multiple Tools",
        "Capstone Project",
        "Interview Prep",
      ],
      icon: GraduationCap,
      color: "coral",
    },
  ];

  // -------------------- Color Helpers --------------------
  const getColorClasses = (color: CourseColor): ColorClasses => {
    const colors: Record<CourseColor, ColorClasses> = {
      blue: {
        bg: "from-brand-sage-100/30 to-brand-sage-200/20",
        border: "border-brand-sage-200/40 hover:border-brand-sage-300/60",
        icon: "text-brand-sage-600",
        iconBg: "bg-brand-sage-100/50",
        accent: "bg-gradient-to-r from-brand-sage-500 to-brand-sage-600",
        text: "text-brand-sage-600",
        glow: "group-hover:glow-sage",
      },
      emerald: {
        bg: "from-brand-lavender-100/30 to-brand-lavender-200/20",
        border:
          "border-brand-lavender-200/40 hover:border-brand-lavender-300/60",
        icon: "text-brand-lavender-600",
        iconBg: "bg-brand-lavender-100/50",
        accent:
          "bg-gradient-to-r from-brand-lavender-500 to-brand-lavender-600",
        text: "text-brand-lavender-600",
        glow: "group-hover:glow-lavender",
      },
      purple: {
        bg: "from-brand-coral-100/30 to-brand-coral-200/20",
        border: "border-brand-coral-200/40 hover:border-brand-coral-300/60",
        icon: "text-brand-coral-600",
        iconBg: "bg-brand-coral-100/50",
        accent: "bg-gradient-to-r from-brand-coral-500 to-brand-coral-600",
        text: "text-brand-coral-600",
        glow: "group-hover:glow-coral",
      },
      coral: {
        bg: "from-brand-sage-100/30 to-brand-lavender-100/20",
        border: "border-brand-sage-200/40 hover:border-brand-lavender-300/60",
        icon: "text-brand-coral-600",
        iconBg:
          "bg-gradient-to-r from-brand-sage-100/50 to-brand-lavender-100/50",
        accent:
          "bg-gradient-to-r from-brand-coral-500 via-brand-sage-500 to-brand-lavender-500",
        text: "text-brand-coral-600",
        glow: "group-hover:glow-coral",
      },
    };
    return colors[color];
  };

  // -------------------- Handlers --------------------
  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", place: "", course: "" });
  };

  // -------------------- Render --------------------
  return (
    <section
      id="training"
      className="py-16 bg-gradient-sage relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-brand-lavender-200/20 rounded-full blur-3xl animate-gentle-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-brand-sage-200/20 rounded-full blur-3xl animate-gentle-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-brand-coral-200/15 rounded-full blur-3xl animate-gentle-float"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-brand-lavender-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-professional px-4 py-2 rounded-full text-xs text-brand-sage-700 mb-4 font-medium glow-sage">
            <GraduationCap className="w-3 h-3" />
            Professional Training Programs
            <div className="w-1.5 h-1.5 bg-brand-sage-500 rounded-full animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight">
            Launch Your QA Career
          </h2>

          <p className="text-sm md:text-base text-brand-neutral-600 max-w-2xl mx-auto leading-relaxed font-medium mb-6">
            Comprehensive training programs designed to take you from
            <span className="text-brand-sage-600 font-semibold">
              {" "}
              beginner to job-ready
            </span>{" "}
            QA professional with hands-on projects and industry curriculum
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group glass-professional px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-soft-lg bg-gradient-to-r from-brand-sage-500 to-brand-lavender-600 text-black glow-sage"
            >
              Enroll Now
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="group glass-professional px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-soft-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black"
            >
              <MessageCircle className="inline-block mr-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              WhatsApp Us
            </button>
          </div>

          <div className="mt-4 flex justify-center">
            <div className="w-16 h-0.5 bg-gradient-to-r from-brand-sage-500 via-brand-lavender-500 to-brand-coral-500 rounded-full" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-professional border border-brand-sage-200/40 hover:border-brand-sage-300/60 rounded-2xl p-5 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 shadow-soft hover:shadow-soft-lg glow-sage animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-sage-100/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 border border-white/20">
                  <feature.icon className="w-6 h-6 text-brand-sage-600 transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-brand-neutral-800 mb-1 group-hover:text-brand-neutral-900 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-brand-neutral-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Section */}
        <div className="mb-8 text-center animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-professional">
            Training Courses
          </h3>
          <p className="text-sm text-brand-neutral-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Choose from specialized QA training programs designed to match your
            career goals and skill level
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-12 h-0.5 bg-gradient-to-r from-brand-sage-500 to-brand-lavender-500 rounded-full" />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => {
            const colors = getColorClasses(course.color);
            return (
              <div
                key={index}
                className={`group relative glass-professional border ${colors.border} rounded-2xl p-6 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 shadow-soft hover:shadow-soft-lg ${colors.glow} animate-fade-in-up flex flex-col h-full`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110                     transition-all duration-500 border border-white/20`}
                  >
                    <course.icon
                      className={`w-7 h-7 ${colors.icon} transition-transform duration-500 group-hover:rotate-12`}
                    />
                  </div>

                  {/* Course Info */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-medium ${colors.text} px-2 py-1 rounded-full bg-white/50`}
                      >
                        {course.level}
                      </span>
                      <span className="text-xs font-bold text-brand-neutral-700">
                        {course.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-neutral-800 mb-2 group-hover:text-brand-neutral-900 transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-brand-neutral-600 mb-4 leading-relaxed text-xs font-medium">
                      {course.description}
                    </p>
                  </div>

                  {/* Highlights - flex-1 pushes button down */}
                  <div className="space-y-2 mb-4 flex-1">
                    {course.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center text-brand-neutral-700 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 0.1}s` }}
                      >
                        <CheckCircle
                          className={`w-3 h-3 ${colors.text} mr-2 flex-shrink-0 transition-colors duration-300`}
                        />
                        <span className="font-medium text-xs">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - mt-auto keeps it at bottom */}
                  <div className="pt-3 border-t border-brand-neutral-200/30 group-hover:border-brand-neutral-200/50 transition-colors mt-auto">
                    <button
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          course: course.name,
                        }));
                        setIsModalOpen(true);
                      }}
                      className={`w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 ${colors.accent} text-white hover:shadow-lg transform group-hover:scale-105 text-xs`}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div
                  className={`absolute top-3 right-3 w-2 h-2 ${colors.accent} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse`}
                />
              </div>
            );
          })}
        </div>

        {/* -------------------- Testimonials Section -------------------- */}
        <div className="mt-20 text-center animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-professional">
            Hear From Our Students
          </h3>
          <p className="text-sm text-brand-neutral-600 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
            See what our students have to say about their learning experience
            with us.
          </p>

          {/* Google Reviews Widget with Avatar Styling */}
          <div className="max-w-4xl mx-auto glass-professional border border-brand-sage-200/40 rounded-2xl p-8 shadow-soft glow-sage">
            {/* Custom styling wrapper for Google Reviews Widget */}
            <style jsx>{`
              .google-reviews-widget {
                --review-text-color: #374151;
                --reviewer-name-color: #111827;
                --star-color: #f59e0b;
                --background-color: transparent;
              }
              .google-reviews-widget .reviewer-avatar {
                width: 48px !important;
                height: 48px !important;
                border-radius: 50% !important;
                border: 2px solid #e5e7eb !important;
                background: linear-gradient(
                  135deg,
                  #8b5cf6,
                  #06b6d4
                ) !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                color: white !important;
                font-weight: bold !important;
                font-size: 16px !important;
              }
              .google-reviews-widget .reviewer-avatar img {
                border-radius: 50% !important;
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
              }
              .google-reviews-widget .review-card {
                background: rgba(255, 255, 255, 0.5) !important;
                border: 1px solid rgba(139, 92, 246, 0.2) !important;
                border-radius: 16px !important;
                padding: 24px !important;
                margin-bottom: 16px !important;
                transition: all 0.3s ease !important;
              }
              .google-reviews-widget .review-card:hover {
                transform: translateY(-2px) !important;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
                border-color: rgba(139, 92, 246, 0.3) !important;
              }
            `}</style>

            {/* ⭐ Google Reviews Widget */}
            <GoogleReviewsWidget instanceId="GU7YBHMoAZMDixFb4enI" />
          </div>
        </div>
      </div>

      {/* -------------------- Modal -------------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
          <form
            onSubmit={handleSubmit}
            className="glass-professional rounded-2xl shadow-xl w-full max-w-lg p-8 relative border border-brand-sage-200/40"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-brand-neutral-400 hover:text-brand-neutral-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 glass-professional px-3 py-1 rounded-full text-xs text-brand-sage-700 mb-3 font-medium">
                <GraduationCap className="w-3 h-3" />
                Training Enrollment
              </div>
              <h3 className="text-2xl font-bold text-brand-neutral-800 gradient-text-professional">
                Start Your Journey
              </h3>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {["name", "email", "phone", "place"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-brand-neutral-700 mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={formData[field as keyof FormData]}
                    onChange={(e) =>
                      handleInputChange(field as keyof FormData, e.target.value)
                    }
                    required
                    className="w-full px-4 py-2 rounded-lg border border-brand-neutral-200 focus:ring-2 focus:ring-brand-sage-500 focus:border-transparent transition-all text-sm"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-brand-neutral-700 mb-1">
                  Select Course
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => handleInputChange("course", e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-brand-neutral-200 focus:ring-2 focus:ring-brand-sage-500 focus:border-transparent transition-all text-sm"
                >
                  <option value="">Choose a course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-brand-sage-500 to-brand-lavender-600 text-white hover:shadow-lg transform hover:scale-[1.02] text-sm"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default Training;
