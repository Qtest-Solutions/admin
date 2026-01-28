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

interface DemoFormData {
  program: string;
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  place?: string;
  course?: string;
  submit?: string;
}

interface DemoFormErrors {
  program?: string;
  name?: string;
  email?: string;
  phone?: string;
  submit?: string;
}

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  review: string;
  date: string;
}

// -------------------- Component --------------------
const Training: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDemoSubmitting, setIsDemoSubmitting] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showDemoSuccessMessage, setShowDemoSuccessMessage] =
    useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [demoErrors, setDemoErrors] = useState<DemoFormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    place: "",
    course: "",
  });
  const [demoFormData, setDemoFormData] = useState<DemoFormData>({
    program: "",
    name: "",
    email: "",
    phone: "",
  });

  // Program options for demo form
  const programOptions = [
    "Manual Testing",
    "Automation Testing",
    "Manual + Automation Testing",
  ];

  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Akesh Krishna",
      rating: 5,
      review:
        "I had a valuable learning experience as a software test intern at Qtest",
      date: "a week ago",
    },
    {
      id: 2,
      name: "Harikrishna G Nair",
      rating: 5,
      review:
        "Probably the best Software Testing teaching centre I've seen so far in Calicut. Experienced tutors, good environment to study, air conditioned classes, high speed internet connectivity, friendly and supporting staffs.",
      date: "5 years ago",
    },
    {
      id: 3,
      name: "REJULA !!!",
      rating: 5,
      review:
        "Excellent training. Provides placement assistance. With the guidance and support of the Qtest i got placed soon after the course completion.",
      date: "3 years ago",
    },
    {
      id: 4,
      name: "priya narayanan",
      rating: 5,
      review:
        "Qtest Solutions is a great place to start your IT career. Excellent Service, good and experienced faculties. Provides 100% placement. Highly recommended.",
      date: "5 years ago",
    },
    {
      id: 5,
      name: "Priyanka N",
      rating: 5,
      review:
        "Best teaching with affordable price more than HR is very good and friendly. More placement offers. I would suggest this institute for start up your career in software testing.",
      date: "5 years ago",
    },
    {
      id: 6,
      name: "Fathimath Sharmina",
      rating: 5,
      review:
        "Qtest is the best software solutions for whom having dream career in software testing, in Calicut. Having best faculty in online as well as offline.",
      date: "2 years ago",
    },
    {
      id: 7,
      name: "Avinash Avi",
      rating: 5,
      review:
        "I like QTest Solutions, it has taught me many things and I am able to understand the concept more in the subjects. There are good teachers to guide me when I do anything wrong.",
      date: "2 years ago",
    },
    {
      id: 8,
      name: "JISHNU GAMER",
      rating: 5,
      review:
        "This is one place where they actually let students GO LIVE the testing and provide the good testing training by giving an interested friendly atmosphere.",
      date: " 5 years ago",
    },
    {
      id: 9,
      name: "Sreelakshmi Viswanath",
      rating: 5,
      review:
        "I was well trained on manual and automation testing and I attended mock interviews and had given presentations. So I was confident to attend the placement drives.",
      date: "6 years ago",
    },
    {
      id: 10,
      name: "Athulk clt",
      rating: 5,
      review:
        "Best software solution in calicut. Good atmosphere and also tutor is very friendly. Teaching method is more interesting.",
      date: "2 years ago",
    },
    {
      id: 11,
      name: "Chandana pk",
      rating: 5,
      review:
        "Qtest is the best institute for software testing,excellent and well discipline classes,they provide placement assistance",
      date: "3 years ago",
    },
    {
      id: 12,
      name: "Rahul PH",
      rating: 5,
      review:
        "I have studied the software test in Qtest by online,i got good teaching in online. I will recommend this to who needs to learn about the software test",
      date: "2 years ago",
    },
    {
      id: 13,
      name: "Divya Cheeppilatt",
      rating: 5,
      review:
        "Every student get good placement well reputed and renowned institution. curriculum was excellent",
      date: "2 years ago",
    },
    {
      id: 14,
      name: "renjitha c t",
      rating: 5,
      review:
        "Its really a great institute for learning Software Testing covering all advanced topics.",
      date: "6 years ago",
    },
    {
      id: 15,
      name: "sahla parveen",
      rating: 5,
      review:
        "Excellent experience and friendly guiding. Highly recommended for bright software testing future.",
      date: "3 years ago",
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
      .toUpperCase()
      .slice(0, 2);
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

  const validateDemoForm = (): boolean => {
    const newErrors: DemoFormErrors = {};

    // Program validation
    if (!demoFormData.program) {
      newErrors.program = "Please select a program";
    }

    // Name validation
    if (!demoFormData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (demoFormData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(demoFormData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Phone validation
    if (!demoFormData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(demoFormData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setDemoErrors(newErrors);
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
    // {
    //   icon: Users,
    //   title: "Expert Instructors",
    //   description: "Learn from industry veterans with 10+ years experience",
    // },
    {
      icon: Briefcase,
      title: "Job Assistance",
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
    // {
    //   icon: Award,
    //   title: "Course Completion Recognition",
    //   description:
    //     "Proof of training completion backed by practical skills and project work",
    // },
  ];

  // -------------------- Courses --------------------
  const courses: Course[] = [
    {
      name: "Manual Testing",
      duration: "4 weeks",
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
      duration: "6 weeks",
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
      name: "Manual & Automation Testing",
      duration: "12 weeks",
      level: "Comprehensive",
      description:
        "Complete QA training covering both manual and automation testing for a well-rounded skill set.",
      highlights: [
        "Full Stack QA",
        "Multiple Tools",
        "Real Projects",
        "Interview Prep",
      ],
      icon: BarChart,
      color: "purple",
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

  const handleDemoInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setDemoFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (demoErrors[name as keyof DemoFormErrors]) {
      setDemoErrors((prev) => ({
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

  const handleDemoSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    // Validate form before submission
    if (!validateDemoForm()) {
      return;
    }

    setIsDemoSubmitting(true);

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
        setShowDemoSuccessMessage(true);

        // Clear form
        setDemoFormData({
          program: "",
          name: "",
          email: "",
          phone: "",
        });
        form.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowDemoSuccessMessage(false);
        }, 3000);
      } else {
        // Handle error response
        setDemoErrors({
          submit: "Failed to submit. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setDemoErrors({
        submit: "An error occurred. Please try again later.",
      });
    } finally {
      setIsDemoSubmitting(false);
    }
  };

  // -------------------- Render --------------------
  return (
    <section
      id="training"
      className="py-16 mt-5 bg-transparent relative overflow-hidden"
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
        {/* Header Section with Form */}
        <div className="container mx-auto px-6 relative z-10">
          {/* Header Section with Form */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 animate-fade-in-up">
            {/* Left Side - Content (70%) */}
            <div className="lg:w-[70%]">
              <div className="mb-8">
                {/* Centered Badge */}
                <div className="flex justify-center lg:justify-start mb-4">
                  <div className="inline-flex items-center gap-2 glass-professional px-4 py-2 rounded-full text-xs text-brand-sage-700 font-medium glow-sage">
                    <GraduationCap className="w-3 h-3" />
                    Professional Training Programs
                    <div className="w-1.5 h-1.5 bg-brand-sage-500 rounded-full animate-pulse" />
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight text-center lg:text-left">
                  Launch Your QA Career
                </h2>

                <p className="text-sm md:text-base text-brand-neutral-600 max-w-2xl leading-relaxed font-medium mb-6 text-center lg:text-left">
                  Comprehensive training programs designed to take you from
                  <span className="text-brand-sage-600 font-semibold">
                    {" "}
                    beginner to job-ready
                  </span>{" "}
                  QA professional with hands-on projects and industry curriculum
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center lg:justify-start">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group glass-professional px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-soft hover:shadow-soft-lg bg-gradient-to-r from-brand-sage-500 to-brand-lavender-600 text-black glow-sage"
                  >
                    Enquiry Now
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
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group glass-professional border border-brand-sage-200/40 hover:border-brand-sage-300/60 rounded-2xl p-4 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 shadow-soft hover:shadow-soft-lg glow-sage"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-brand-sage-100/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 border border-white/20">
                        <feature.icon className="w-5 h-5 text-brand-sage-600 transition-transform duration-500 group-hover:rotate-12" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-brand-neutral-800 mb-1 group-hover:text-brand-neutral-900 transition-colors">
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
            </div>

            {/* Right Side - Demo Form (30%) */}
            <div className="lg:w-[30%]">
              <div className="glass-professional border border-brand-sage-200/40 rounded-2xl p-6 shadow-soft glow-sage sticky top-24">
                {showDemoSuccessMessage ? (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
                      <CheckCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-neutral-800 mb-2">
                      Demo Booked!
                    </h3>
                    <p className="text-sm text-brand-neutral-600">
                      We'll contact you shortly to schedule your demo session.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-5">
                      <div className="inline-flex items-center gap-2 glass-professional px-3 py-1 rounded-full text-xs text-brand-coral-700 mb-3 font-medium">
                        <Target className="w-3 h-3" />
                        Free Demo Session
                      </div>
                      <h3 className="text-lg font-bold text-brand-neutral-800 gradient-text-professional">
                        Book Your Demo
                      </h3>
                    </div>

                    <form
                      onSubmit={handleDemoSubmit}
                      className="space-y-4"
                      noValidate
                    >
                      {/* FormSubmit Configuration */}
                      <input type="hidden" name="_captcha" value="false" />
                      <input
                        type="hidden"
                        name="_subject"
                        value="New Demo Request from QTest Website"
                      />
                      <input type="hidden" name="_template" value="table" />

                      {/* Program Field */}
                      <div>
                        <label className="block text-xs font-medium text-brand-neutral-700 mb-1">
                          Program Interested *
                        </label>
                        <select
                          name="program"
                          value={demoFormData.program}
                          onChange={handleDemoInputChange}
                          className={`w-full px-3 py-2 rounded-lg border transition-all text-sm ${
                            demoErrors.program
                              ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                              : "border-brand-neutral-200 focus:border-brand-sage-500"
                          } focus:ring-2 focus:ring-brand-sage-200/50`}
                        >
                          <option value="">Select One</option>
                          {programOptions.map((program, index) => (
                            <option key={index} value={program}>
                              {program}
                            </option>
                          ))}
                        </select>
                        {demoErrors.program && (
                          <div className="flex items-center gap-1 mt-1 text-red-600">
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">{demoErrors.program}</p>
                          </div>
                        )}
                      </div>

                      {/* Name Field */}
                      <div>
                        <label className="block text-xs font-medium text-brand-neutral-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={demoFormData.name}
                          onChange={handleDemoInputChange}
                          className={`w-full px-3 py-2 rounded-lg border transition-all text-sm ${
                            demoErrors.name
                              ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                              : "border-brand-neutral-200 focus:border-brand-sage-500"
                          } focus:ring-2 focus:ring-brand-sage-200/50`}
                          placeholder="Your full name"
                        />
                        {demoErrors.name && (
                          <div className="flex items-center gap-1 mt-1 text-red-600">
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">{demoErrors.name}</p>
                          </div>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-xs font-medium text-brand-neutral-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={demoFormData.email}
                          onChange={handleDemoInputChange}
                          className="w-full px-3 py-2 rounded-lg border border-brand-neutral-200 focus:border-brand-sage-500 transition-all text-sm focus:ring-2 focus:ring-brand-sage-200/50"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label className="block text-xs font-medium text-brand-neutral-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={demoFormData.phone}
                          onChange={handleDemoInputChange}
                          className={`w-full px-3 py-2 rounded-lg border transition-all text-sm ${
                            demoErrors.phone
                              ? "border-red-400 focus:border-red-400 focus:ring-red-200/50"
                              : "border-brand-neutral-200 focus:border-brand-sage-500"
                          } focus:ring-2 focus:ring-brand-sage-200/50`}
                          placeholder="10-digit mobile number"
                        />
                        {demoErrors.phone && (
                          <div className="flex items-center gap-1 mt-1 text-red-600">
                            <AlertCircle className="w-3 h-3" />
                            <p className="text-xs">{demoErrors.phone}</p>
                          </div>
                        )}
                      </div>

                      {/* Submit Error */}
                      {demoErrors.submit && (
                        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <p className="text-red-800 text-xs">
                            {demoErrors.submit}
                          </p>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isDemoSubmitting}
                        className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-brand-coral-500 to-brand-coral-600 text-white hover:shadow-lg transform hover:scale-[1.02] text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                      >
                        {isDemoSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Booking...
                          </>
                        ) : (
                          <>
                            Book Your Demo
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Rest of the component remains the same... */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                      (((currentTestimonial % testimonials.length) +
                        testimonials.length) %
                        testimonials.length) *
                      (100 / 4)
                    }%)`,
                  }}
                >
                  {/* Original testimonials + duplicated set for seamless loop */}
                  {[...testimonials, ...testimonials.slice(0, 4)].map(
                    (testimonial, index) => (
                      <div
                        key={`${testimonial.id}-${index}`}
                        className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 sm:px-3"
                      >
                        <div className="glass-professional bg-white/80 backdrop-blur-sm border border-brand-sage-200/40 hover:border-brand-coral-300/60 rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 glow-sage flex flex-col h-[280px]">
                          {/* Decorative Quote Icon */}
                          <div className="absolute top-3 right-3 opacity-5">
                            <Quote className="w-8 h-8 text-brand-sage-600" />
                          </div>

                          {/* Content */}
                          <div className="relative z-10 flex flex-col h-full">
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>

                            {/* Review */}
                            <p className="text-brand-neutral-600 text-sm leading-relaxed mb-4 font-medium line-clamp-4 flex-1">
                              "{testimonial.review}"
                            </p>

                            {/* Author Info */}
                            <div className="pt-4 border-t border-brand-neutral-200/30 mt-auto">
                              <div className="flex items-center gap-3">
                                {/* Avatar */}
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-sage-400 to-brand-lavender-500 flex items-center justify-center text-white font-bold text-sm shadow flex-shrink-0">
                                  {getInitials(testimonial.name)}
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                  <p className="font-bold text-brand-neutral-800 text-sm truncate">
                                    {testimonial.name}
                                  </p>
                                  <p className="text-xs text-brand-neutral-500">
                                    {testimonial.date}
                                  </p>
                                </div>
                              </div>
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
                        ((currentTestimonial % testimonials.length) +
                          testimonials.length) %
                          testimonials.length ===
                        index
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
                  {(((currentTestimonial % testimonials.length) +
                    testimonials.length) %
                    testimonials.length) +
                    1}{" "}
                  of {testimonials.length} reviews
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