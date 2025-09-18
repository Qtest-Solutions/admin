"use client";
import { useState, ChangeEvent, FormEvent } from "react";
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
  LucideIcon,
} from "lucide-react";

// -------------------- Types --------------------
interface Feature {
  icon: LucideIcon;
  title: string;
}

type CourseColor = "emerald" | "blue" | "purple" | "amber";

interface Course {
  name: string;
  duration: string;
  level: string;
  icon: LucideIcon;
  color: CourseColor;
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

  const features: Feature[] = [
    { icon: BookOpen, title: "Hands-on practical training" },
    { icon: Users, title: "Industry-experienced instructors" },
    { icon: Briefcase, title: "Job placement assistance" },
    { icon: Clock, title: "Flexible scheduling options" },
    { icon: CheckCircle, title: "Real-world project experience" },
    { icon: Award, title: "Certification upon completion" },
  ];

  const courses: Course[] = [
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

  const getColorClasses = (color: CourseColor): string => {
    const colors: Record<CourseColor, string> = {
      emerald: "bg-emerald-50 border-emerald-200",
      blue: "bg-blue-50 border-blue-200",
      purple: "bg-purple-50 border-purple-200",
      amber: "bg-amber-50 border-amber-200",
    };
    return colors[color];
  };

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", place: "", course: "" });
  };

  // Fields except "course"
  const inputFields: Array<keyof Omit<FormData, "course">> = [
    "name",
    "email",
    "phone",
    "place",
  ];

  return (
    <section
      id="training"
      className="py-20 relative bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* ... Header, Features, Courses remain unchanged ... */}

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
              {inputFields.map((field) => (
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(field, e.target.value)
                    }
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
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleInputChange("course", e.target.value)
                  }
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
