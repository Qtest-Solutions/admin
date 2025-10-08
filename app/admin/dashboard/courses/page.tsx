"use client";
import { useState, useEffect } from "react";
import { courseService, studentService } from "../../../../services/database";
import Modal from "../../../../components/Modal";

// Types
interface AppwriteDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $collectionId: string;
  $databaseId: string;
}

interface Course extends AppwriteDocument {
  name: string;
  description?: string;
  fee: number;
  duration?: string;
  level: "beginner" | "intermediate" | "advanced";
  status: "active" | "inactive" | "draft";
}

// For the actual data we send (without Appwrite fields)
interface CourseFormCreateData {
  name: string;
  description?: string;
  fee: number;
  duration?: string;
  level: "beginner" | "intermediate" | "advanced";
  status: "active" | "inactive" | "draft";
}

// Update data type (partial of form create data)
interface CourseUpdateData extends Partial<CourseFormCreateData> {}

interface CourseWithStats extends Course {
  enrolledStudents: number;
  totalRevenue: number;
}

interface Student extends AppwriteDocument {
  studentId: string;
  name: string;
  email: string;
  phone?: string;
  courseId: string;
  feesPaid: number;
  enrollmentDate: string;
  status: "active" | "inactive" | "completed" | "dropped";
}

interface CourseFormData {
  name: string;
  description: string;
  fee: number;
  duration: string;
  level: "beginner" | "intermediate" | "advanced";
  status: "active" | "inactive" | "draft";
}

interface ToastNotification {
  show: boolean;
  message: string;
  type: "success" | "error";
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<CourseWithStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastNotification>({
    show: false,
    message: "",
    type: "success",
  });

  const [form, setForm] = useState<CourseFormData>({
    name: "",
    description: "",
    fee: 0,
    duration: "",
    level: "beginner",
    status: "active",
  });

  // Show toast notification
  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 3000);
  };

  // Load initial data
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [coursesData, studentsData] = await Promise.all([
        courseService.getAll(),
        studentService.getAll(),
      ]);

      // Calculate stats for each course
      const coursesWithStats: CourseWithStats[] = coursesData.map((course) => {
        const courseStudents = studentsData.filter(
          (student) => student.courseId === course.$id
        );
        return {
          ...course,
          enrolledStudents: courseStudents.length,
          totalRevenue: courseStudents.reduce(
            (sum, student) => sum + student.feesPaid,
            0
          ),
        };
      });

      setCourses(coursesWithStats);
    } catch (error) {
      console.error("Error loading data:", error);
      showToast("Failed to load data", "error");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      fee: 0,
      duration: "",
      level: "beginner",
      status: "active",
    });
    setEditingCourse(null);
  };

  const handleAddCourse = async () => {
    if (!form.name || form.fee <= 0) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    try {
      setSubmitting(true);

      // Create the data object that matches what the service expects
      const courseData: CourseFormCreateData = {
        name: form.name,
        description: form.description || undefined,
        fee: form.fee,
        duration: form.duration || undefined,
        level: form.level,
        status: form.status,
      };

      await courseService.create(courseData as any);
      await loadData();
      setShowModal(false);
      resetForm();
      showToast("Course added successfully!", "success");
    } catch (error: any) {
      console.error("Error adding course:", error);
      showToast("Failed to add course", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course);
    setForm({
      name: course.name,
      description: course.description || "",
      fee: course.fee,
      duration: course.duration || "",
      level: course.level,
      status: course.status,
    });
    setShowModal(true);
  };

  const handleUpdateCourse = async () => {
    if (!editingCourse || !form.name || form.fee <= 0) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    try {
      setSubmitting(true);
      const updateData: CourseUpdateData = {
        name: form.name,
        description: form.description || undefined,
        fee: form.fee,
        duration: form.duration || undefined,
        level: form.level,
        status: form.status,
      };

      await courseService.update(editingCourse.$id, updateData);
      await loadData();
      setShowModal(false);
      resetForm();
      showToast("Course updated successfully!", "success");
    } catch (error: any) {
      console.error("Error updating course:", error);
      showToast("Failed to update course", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    if (!confirm("Are you sure you want to delete this course?")) {
      return;
    }

    try {
      await courseService.delete(courseId);
      await loadData();
      showToast("Course deleted successfully!", "success");
    } catch (error) {
      console.error("Error deleting course:", error);
      showToast("Failed to delete course", "error");
    }
  };

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.description || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || course.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-blue-100 text-blue-800";
      case "intermediate":
        return "bg-purple-100 text-purple-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`fixed top-4 right-4 z-[10000] px-4 py-3 rounded-lg shadow-lg transition-all duration-300 ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              {toast.type === "success" ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Courses</h1>
          <p className="text-sm text-slate-600 mt-0.5">
            Manage your course catalog
          </p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add Course
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total Courses",
            value: courses.length,
            icon: "📚",
            color: "from-blue-500 to-indigo-600",
          },
          {
            label: "Active Courses",
            value: courses.filter((c) => c.status === "active").length,
            icon: "✅",
            color: "from-green-500 to-emerald-600",
          },
          {
            label: "Total Students",
            value: courses.reduce((sum, c) => sum + c.enrolledStudents, 0),
            icon: "👥",
            color: "from-purple-500 to-pink-600",
          },
          {
            label: "Total Revenue",
            value: `₹${courses
              .reduce((sum, c) => sum + c.totalRevenue, 0)
              .toLocaleString()}`,
            icon: "💰",
            color: "from-orange-500 to-red-600",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-600">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-slate-800 mt-0.5">
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center text-white text-lg`}
              >
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-4 w-4 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
              />
            </div>
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Courses Table */}
      <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-white/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Details
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Pricing
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Students
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredCourses.map((course) => (
                <tr
                  key={course.$id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-medium">
                        {course.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-slate-900">
                          {course.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          ID: {course.$id.slice(-8)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm text-slate-900">
                      {course.description || "No description"}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${getLevelColor(
                          course.level
                        )}`}
                      >
                        {course.level}
                      </span>
                      <span className="text-xs text-slate-500">
                        {course.duration || "No duration set"}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-slate-900">
                      ₹{course.fee.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500">
                      Revenue: ₹{course.totalRevenue.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-slate-900">
                      {course.enrolledStudents} enrolled
                    </div>
                    <div className="text-xs text-slate-500">
                      Created:{" "}
                      {new Date(course.$createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        course.status
                      )}`}
                    >
                      {course.status.charAt(0).toUpperCase() +
                        course.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleEditCourse(course)}
                        className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteCourse(course.$id)}
                        className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredCourses.length === 0 && (
            <div className="text-center py-8">
              <svg
                className="w-10 h-10 text-slate-400 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3 className="text-lg font-medium text-slate-900 mb-1">
                No courses found
              </h3>
              <p className="text-sm text-slate-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal using the new Modal component */}
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          resetForm();
        }}
        title={editingCourse ? "Edit Course" : "Add New Course"}
        maxWidth="max-w-lg"
      >
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            editingCourse ? handleUpdateCourse() : handleAddCourse();
          }}
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Course Name *
            </label>
            <input
              type="text"
              placeholder="Enter course name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
              required
              disabled={submitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter course description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm resize-none"
              rows={3}
              disabled={submitting}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Course Fee *
              </label>
              <input
                type="number"
                placeholder="Enter fee"
                value={form.fee}
                onChange={(e) =>
                  setForm({ ...form, fee: Number(e.target.value) })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                min="0"
                required
                disabled={submitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                placeholder="e.g., 4 weeks"
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                disabled={submitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Level *
              </label>
              <select
                value={form.level}
                onChange={(e) =>
                  setForm({
                    ...form,
                    level: e.target.value as
                      | "beginner"
                      | "intermediate"
                      | "advanced",
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                required
                disabled={submitting}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Status *
              </label>
              <select
                value={form.status}
                onChange={(e) =>
                  setForm({
                    ...form,
                    status: e.target.value as "active" | "inactive" | "draft",
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                required
                disabled={submitting}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => {
                setShowModal(false);
                resetForm();
              }}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors font-medium"
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={submitting}
            >
              {submitting ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {editingCourse ? "Updating..." : "Adding..."}
                </div>
              ) : editingCourse ? (
                "Update Course"
              ) : (
                "Add Course"
              )}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
