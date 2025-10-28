"use client";
import { useState, FormEvent, useEffect, ChangeEvent } from "react";
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
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
} from "lucide-react";

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

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  place?: string;
  course?: string;
  submit?: string;
}

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  title: string;
  review: string;
  course: string;
  date: string;
}

// -------------------- Component --------------------
const Training: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    place: "",
    course: "",
  });

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Soumya KK",
      rating: 5,
      title: "Best Software Testing Training Center",
      review:
        "The one and only good centre for software testing training. Excellent instructors and perfect learning environment.",
      course: "Software Testing",
      date: "2024-09-15",
    },
    {
      id: 2,
      name: "Neeraja",
      rating: 5,
      title: "Amazing Experience",
      review:
        "Everything was perfect I was totally satisfied with everything. The service and facilities were great. Education system and the tutors were amazing. Words are not enough to define!",
      course: "Manual & Automation Testing",
      date: "2024-08-20",
    },
    {
      id: 3,
      name: "Sreelakshmi",
      rating: 5,
      title: "Perfect Environment for Learning",
      review:
        "Perfect environment to learn technology and implement own ideas as a fresher. Trainers will explain every scenario with real time examples.",
      course: "Automation Testing",
      date: "2024-09-28",
    },
    {
      id: 4,
      name: "Subha",
      rating: 5,
      title: "Great Experience with Placement Support",
      review:
        "It was a great experience. Good place and good atmosphere with placement support that helped me land my first job.",
      course: "Software Testing",
      date: "2024-10-05",
    },
    {
      id: 5,
      name: "Hari Priya V G",
      rating: 5,
      title: "Highly Recommended Training",
      review:
        "Excellent training program with knowledgeable trainers. They provided clear explanations and hands-on practice with industry tools.",
      course: "Selenium Training",
      date: "2024-09-10",
    },
    {
      id: 6,
      name: "Anand Krishna",
      rating: 5,
      title: "Best Investment in My Career",
      review:
        "QTest Solutions helped me transition into software testing. The trainers are patient and the curriculum is up-to-date with industry standards.",
      course: "Manual Testing",
      date: "2024-08-18",
    },
    {
      id: 7,
      name: "Priya Menon",
      rating: 5,
      title: "Comprehensive Training Program",
      review:
        "Very good training center with experienced faculty. They cover both manual and automation testing thoroughly with practical sessions.",
      course: "QA Automation",
      date: "2024-09-22",
    },
    {
      id: 8,
      name: "Rahul Sharma",
      rating: 5,
      title: "Excellent Placement Support",
      review:
        "Got placed within 2 weeks of completing the course. The placement team is very supportive and connected me with good companies.",
      course: "Software Testing",
      date: "2024-10-12",
    },
    {
      id: 9,
      name: "Divya Krishnan",
      rating: 5,
      title: "Real-World Training Approach",
      review:
        "The trainers use real-time project examples which made learning very practical. Highly recommend for anyone serious about software testing.",
      course: "Automation Testing",
      date: "2024-09-05",
    },
    {
      id: 10,
      name: "Arun Kumar",
      rating: 5,
      title: "Professional and Supportive Environment",
      review:
        "Great learning atmosphere with modern infrastructure. The instructors are knowledgeable and always ready to help clarify doubts.",
      course: "Manual & Automation Testing",
      date: "2024-08-30",
    },
    {
      id: 11,
      name: "Sneha Thomas",
      rating: 5,
      title: "Career Transformation",
      review:
        "QTest Solutions changed my career path completely. From being a fresher to getting hired as a Test Engineer, this training made all the difference.",
      course: "Software Testing",
      date: "2024-10-08",
    },
    {
      id: 12,
      name: "Vishnu Prasad",
      rating: 5,
      title: "Best Training Institute in Calicut",
      review:
        "Excellent training with focus on both theoretical knowledge and practical implementation. The tools training is comprehensive.",
      course: "Selenium & Jmeter",
      date: "2024-09-17",
    },
    {
      id: 13,
      name: "Anjali Nair",
      rating: 5,
      title: "Highly Skilled Trainers",
      review:
        "The trainers have extensive industry experience and they share valuable insights about real-world testing scenarios. Very beneficial.",
      course: "QA Testing",
      date: "2024-08-25",
    },
    {
      id: 14,
      name: "Mohammed Riyas",
      rating: 5,
      title: "Perfect for Fresh Graduates",
      review:
        "As a BTech graduate, this course gave me the practical skills needed to start my testing career. Got placed in a good company after training.",
      course: "Manual & Automation Testing",
      date: "2024-10-01",
    },
    {
      id: 15,
      name: "Lakshmi Priya",
      rating: 5,
      title: "Excellent Course Content",
      review:
        "The curriculum is well-structured covering all aspects of software testing from basics to advanced automation tools. Very satisfied.",
      course: "Software Testing",
      date: "2024-09-12",
    },
    {
      id: 16,
      name: "Sreekanth Pillai",
      rating: 5,
      title: "Value for Money",
      review:
        "Best training institute for software testing in Kozhikode. The fees are reasonable and the quality of training is top-notch.",
      course: "Automation Testing",
      date: "2024-08-28",
    },
    {
      id: 17,
      name: "Reshma Abdul",
      rating: 5,
      title: "Supportive Learning Environment",
      review:
        "The calm and comfortable atmosphere makes learning easy. Instructors are patient and provide clear explanations for complex concepts.",
      course: "Manual Testing",
      date: "2024-10-15",
    },
    {
      id: 18,
      name: "Nithin Raj",
      rating: 5,
      title: "Industry-Ready Training",
      review:
        "Training on advanced tools like Selenium, QTP, and Appium with hands-on practice made me job-ready. Successfully working as a Test Engineer now.",
      course: "Automation Testing",
      date: "2024-09-25",
    },
    {
      id: 19,
      name: "Arya Menon",
      rating: 5,
      title: "Great Faculty and Infrastructure",
      review:
        "Modern lab facilities with latest software and tools. The trainers are experienced professionals who provide practical knowledge.",
      course: "Software Testing",
      date: "2024-10-10",
    },
    {
      id: 20,
      name: "Kiran Das",
      rating: 5,
      title: "Best Decision for My Career",
      review:
        "Joining QTest Solutions was the best decision for my career. Comprehensive training, good placement support, and excellent faculty.",
      course: "Manual & Automation Testing",
      date: "2024-09-30",
    },
  ];

  // Auto-play carousel - endless loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => prev + 1);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev - 1);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // -------------------- Validation --------------------
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

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // Place validation
    if (!formData.place.trim()) {
      newErrors.place = "Place is required";
    } else if (formData.place.trim().length < 2) {
      newErrors.place = "Place must be at least 2 characters";
    }

    // Course validation
    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

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
        setShowSuccessMessage(true);

        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          place: "",
          course: "",
        });
        form.reset();

        // Hide success message and close modal after 3 seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
          setIsModalOpen(false);
        }, 3000);
      } else {
        // Handle error response
        setErrors({
          submit: "Failed to submit enrollment. Please try again.",
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

  // -------------------- Render --------------------
  return (
    <section
      id="training"
      className="py-16 bg-transparent relative overflow-hidden"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
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
                    className={`w-14 h-14 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 border border-white/20`}
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
        <div className="mt-20 py-16 animate-fade-in-up">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 glass-professional px-4 py-2 rounded-full text-xs text-brand-coral-700 mb-4 font-medium glow-coral">
                <Star className="w-3 h-3 fill-current" />
                Student Success Stories
                <div className="w-1.5 h-1.5 bg-brand-coral-500 rounded-full animate-pulse" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text-professional">
                What Our Students Say
              </h3>
              <p className="text-sm text-brand-neutral-600 max-w-2xl mx-auto leading-relaxed font-medium">
                Real experiences from our graduates who have successfully
                launched their QA careers
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-brand-coral-500 via-brand-sage-500 to-brand-lavender-500 rounded-full" />
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Overflow Container */}
              <div className="overflow-hidden rounded-3xl">
                {/* Sliding Track - Duplicate for endless loop */}
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{
                    transform: `translateX(-${
                      (currentTestimonial % testimonials.length) * (100 / 5)
                    }%)`,
                  }}
                >
                  {/* Original testimonials + duplicated set for seamless loop */}
                  {[...testimonials, ...testimonials.slice(0, 5)].map(
                    (testimonial, index) => (
                      <div
                        key={`${testimonial.id}-${index}`}
                        className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 sm:px-3"
                      >
                        <div className="glass-professional bg-white/80 backdrop-blur-sm border border-brand-sage-200/40 hover:border-brand-coral-300/60 rounded-2xl p-4 sm:p-5 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 glow-sage flex flex-col h-full min-h-[280px] sm:min-h-[320px]">
                          {/* Decorative Quote Icon */}
                          <div className="absolute top-3 right-3 opacity-5">
                            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-brand-sage-600" />
                          </div>

                          {/* Content */}
                          <div className="relative z-10 flex flex-col h-full">
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-2 sm:mb-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>

                            {/* Title */}
                            <h4 className="text-sm font-bold text-brand-neutral-800 mb-2 line-clamp-2">
                              {testimonial.title}
                            </h4>

                            {/* Review */}
                            <p className="text-brand-neutral-600 text-xs leading-relaxed mb-3 sm:mb-4 font-medium line-clamp-4 flex-1">
                              "{testimonial.review}"
                            </p>

                            {/* Author Info */}
                            <div className="pt-3 border-t border-brand-neutral-200/30 mt-auto">
                              <div className="flex items-center gap-2 mb-2">
                                {/* Avatar */}
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-sage-400 to-brand-lavender-500 flex items-center justify-center text-white font-bold text-xs shadow flex-shrink-0">
                                  {getInitials(testimonial.name)}
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                  <p className="font-bold text-brand-neutral-800 text-xs truncate">
                                    {testimonial.name}
                                  </p>
                                  <p className="text-xs text-brand-neutral-600 truncate">
                                    {testimonial.course}
                                  </p>
                                </div>
                              </div>

                              {/* Date Badge */}
                              <span className="text-xs text-brand-neutral-500 bg-brand-neutral-100 px-2 py-0.5 rounded-full inline-block">
                                {new Date(testimonial.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-4 glass-professional bg-white/90 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-brand-neutral-700 hover:text-brand-sage-600 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-soft-lg border border-brand-sage-200/40 z-10"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-4 glass-professional bg-white/90 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-brand-neutral-700 hover:text-brand-sage-600 transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-soft-lg border border-brand-sage-200/40 z-10"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
                {/* Dots Indicator */}
                <div className="flex gap-1.5 sm:gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`transition-all duration-300 rounded-full ${
                        currentTestimonial % testimonials.length === index
                          ? "w-6 sm:w-8 h-2 bg-brand-sage-600"
                          : "w-2 h-2 bg-brand-neutral-300 hover:bg-brand-sage-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Counter */}
              <div className="text-center mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm text-brand-neutral-500 font-medium">
                  {(currentTestimonial % testimonials.length) + 1} of{" "}
                  {testimonials.length} reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- Modal -------------------- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setIsModalOpen(false);
            setErrors({});
            setShowSuccessMessage(false);
          }}
        >
          <div
            className="glass-professional rounded-2xl shadow-xl w-full max-w-lg p-6 sm:p-8 relative border border-brand-sage-200/40 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                setErrors({});
                setShowSuccessMessage(false);
              }}
              className="absolute top-4 right-4 text-brand-neutral-400 hover:text-brand-neutral-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Success Message */}
            {showSuccessMessage ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-brand-neutral-800 mb-2">
                  Enrollment Successful!
                </h3>
                <p className="text-brand-neutral-600">
                  Thank you for enrolling. We'll contact you shortly with course
                  details.
                </p>
              </div>
            ) : (
              <>
                {/* Title */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 glass-professional px-3 py-1 rounded-full text-xs text-brand-sage-700 mb-3 font-medium">
                    <GraduationCap className="w-3 h-3" />
                    Training Enrollment
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-neutral-800 gradient-text-professional">
                    Start Your Journey
                  </h3>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Training Enrollment from QTest Website"
                  />
                  <input type="hidden" name="_template" value="table" />

                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-brand-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 rounded-lg border transition-all text-sm ${
                        errors.name
                          ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                          : "border-brand-neutral-200 focus:border-brand-sage-500"
                      } focus:ring-2 focus:ring-brand-sage-200/50`}
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
                    <label className="block text-sm font-medium text-brand-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 rounded-lg border transition-all text-sm ${
                        errors.email
                          ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                          : "border-brand-neutral-200 focus:border-brand-sage-500"
                      } focus:ring-2 focus:ring-brand-sage-200/50`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <p className="text-xs">{errors.email}</p>
                      </div>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-brand-neutral-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 rounded-lg border transition-all text-sm ${
                        errors.phone
                          ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                          : "border-brand-neutral-200 focus:border-brand-sage-500"
                      } focus:ring-2 focus:ring-brand-sage-200/50`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && (
                      <div className="flex items-center gap-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <p className="text-xs">{errors.phone}</p>
                      </div>
                    )}
                  </div>

                  {/* Place Field */}
                  <div>
                    <label className="block text-sm font-medium text-brand-neutral-700 mb-1">
                      Place *
                    </label>
                    <input
                      type="text"
                      name="place"
                      value={formData.place}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 rounded-lg border transition-all text-sm ${
                        errors.place
                          ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                          : "border-brand-neutral-200 focus:border-brand-sage-500"
                      } focus:ring-2 focus:ring-brand-sage-200/50`}
                      placeholder="Your city or location"
                    />
                    {errors.place && (
                      <div className="flex items-center gap-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <p className="text-xs">{errors.place}</p>
                      </div>
                    )}
                  </div>

                  {/* Course Field */}
                  <div>
                    <label className="block text-sm font-medium text-brand-neutral-700 mb-1">
                      Select Course *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 rounded-lg border transition-all text-sm ${
                        errors.course
                          ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                          : "border-brand-neutral-200 focus:border-brand-sage-500"
                      } focus:ring-2 focus:ring-brand-sage-200/50`}
                    >
                      <option value="">Choose a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course.name}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <div className="flex items-center gap-1 mt-1 text-red-600">
                        <AlertCircle className="w-3 h-3" />
                        <p className="text-xs">{errors.course}</p>
                      </div>
                    )}
                  </div>

                  {/* Submit Error */}
                  {errors.submit && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-red-800 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-brand-sage-500 to-brand-lavender-600 text-white hover:shadow-lg transform hover:scale-[1.02] text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Training;
