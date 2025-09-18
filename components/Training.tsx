"use client";
import { useState } from "react";
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
} from "lucide-react";

const Training = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    place: "",
    course: "",
  });

  const features = [
    { icon: BookOpen, title: "Hands-on practical training" },
    { icon: Users, title: "Industry-experienced instructors" },
    { icon: Briefcase, title: "Job placement assistance" },
    { icon: Clock, title: "Flexible scheduling options" },
    { icon: CheckCircle, title: "Real-world project experience" },
    { icon: Award, title: "Certification upon completion" },
  ];

  const courses = [
    {
      name: "Manual Testing Fundamentals",
      duration: "6 weeks",
      level: "Beginner Level",
      icon: CheckCircle,
      color: "emerald",
    },
    {
      name: "Automation Testing",
      duration: "8 weeks",
      level: "Intermediate Level",
      icon: BarChart,
      color: "blue",
    },
    {
      name: "Performance Testing",
      duration: "4 weeks",
      level: "Advanced Level",
      icon: Clock,
      color: "purple",
    },
    {
      name: "Complete QA Bootcamp",
      duration: "12 weeks",
      level: "All Levels",
      icon: GraduationCap,
      color: "amber",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: "bg-emerald-50 border-emerald-200",
      blue: "bg-blue-50 border-blue-200",
      purple: "bg-purple-50 border-purple-200",
      amber: "bg-amber-50 border-amber-200",
    };
    return colors[color] || colors.blue;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", place: "", course: "" });
  };

  return (
    <section
      id="training"
      className="py-20 relative bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Training Programs
            </h2>
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Launch Your QA Career
            </h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 mb-6"
            >
              Enroll Now
              <ArrowRight className="inline-block ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive training programs are designed to take you from
              beginner to job-ready QA professional. With hands-on projects and
              industry-relevant curriculum.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 text-left font-medium">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>

          {/* Courses Section */}
          <div className="mb-12 text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Our Courses
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a range of specialised QA training programs designed
              to match your career goals and skill level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`group relative p-6 border rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 ${getColorClasses(
                  course.color
                )}`}
              >
                <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-white">
                  <course.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h4 className="mt-8 text-xl font-semibold text-gray-800 mb-2">
                  {course.name}
                </h4>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium">Duration:</span>{" "}
                  {course.duration}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Level:</span> {course.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Enroll in Training
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {["name", "email", "phone", "place"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                        ? "tel"
                        : "text"
                    }
                    placeholder={`Enter your ${field}`}
                    value={formData[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    required
                  />
                </div>
              ))}

              {/* Course Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Course
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => handleInputChange("course", e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  required
                >
                  <option value="">Choose a course</option>
                  {courses.map((course, idx) => (
                    <option key={idx} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-white py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Training;
