"use client";
import { useState, useEffect } from "react";
import { studentService, courseService } from "../../../../services/database";

// Import types from your types file instead of redefining them
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

interface Student extends AppwriteDocument {
  name: string;
  email: string;
  phone?: string;
  courseId?: string; // Make this optional to match your imported type
  feesPaid: number;
  enrollmentDate: string;
  status: "active" | "inactive" | "completed" | "dropped";
}

interface StudentWithCourse extends Student {
  course?: Course;
}

// Create data type for student creation
interface StudentCreateData {
  name: string;
  email: string;
  phone?: string;
  courseId: string;
  feesPaid: number;
  enrollmentDate: string;
  status: "active" | "inactive" | "completed";
}

// Update data type
interface StudentUpdateData extends Partial<StudentCreateData> {}

interface StudentFormData {
  name: string;
  email: string;
  phone: string;
  courseId: string;
  feesPaid: number;
  status: "active" | "inactive" | "completed";
}

interface ToastNotification {
  show: boolean;
  message: string;
  type: "success" | "error";
}

export default function StudentsPage() {
  const [students, setStudents] = useState<StudentWithCourse[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingStudent, setEditingStudent] =
    useState<StudentWithCourse | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastNotification>({
    show: false,
    message: "",
    type: "success",
  });

  const [form, setForm] = useState<StudentFormData>({
    name: "",
    email: "",
    phone: "",
    courseId: "",
    feesPaid: 0,
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
      const [studentsData, coursesData] = await Promise.all([
        studentService.getWithCourses(),
        courseService.getAll(),
      ]);
      setStudents(studentsData);
      setCourses(coursesData);
      if (coursesData.length > 0 && !form.courseId) {
        setForm((prev) => ({ ...prev, courseId: coursesData[0].$id }));
      }
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
      email: "",
      phone: "",
      courseId: courses.length > 0 ? courses[0].$id : "",
      feesPaid: 0,
      status: "active",
    });
    setEditingStudent(null);
  };

  const handleAddStudent = async () => {
    if (!form.name || !form.email || !form.courseId) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    try {
      setSubmitting(true);
      const studentData: StudentCreateData = {
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        courseId: form.courseId,
        feesPaid: form.feesPaid,
        status: form.status,
        enrollmentDate: new Date().toISOString(),
      };

      await studentService.create(studentData as any);
      await loadData(); // Reload data to get updated list
      setShowModal(false);
      resetForm();
      showToast("Student added successfully!", "success");
    } catch (error: any) {
      console.error("Error adding student:", error);
      if (error.message?.includes("email")) {
        showToast("Email already exists", "error");
      } else {
        showToast("Failed to add student", "error");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditStudent = (student: StudentWithCourse) => {
    setEditingStudent(student);
    setForm({
      name: student.name,
      email: student.email,
      phone: student.phone || "",
      courseId: student.courseId || "", // Handle optional courseId
      feesPaid: student.feesPaid,
      status: student.status as "active" | "inactive" | "completed",
    });
    setShowModal(true);
  };

  const handleUpdateStudent = async () => {
    if (!editingStudent || !form.name || !form.email || !form.courseId) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    try {
      setSubmitting(true);
      const updateData: StudentUpdateData = {
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        courseId: form.courseId,
        feesPaid: form.feesPaid,
        status: form.status,
      };

      await studentService.update(editingStudent.$id, updateData as any);
      await loadData(); // Reload data to get updated list
      setShowModal(false);
      resetForm();
      showToast("Student updated successfully!", "success");
    } catch (error: any) {
      console.error("Error updating student:", error);
      if (error.message?.includes("email")) {
        showToast("Email already exists", "error");
      } else {
        showToast("Failed to update student", "error");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteStudent = async (studentId: string) => {
    if (!confirm("Are you sure you want to delete this student?")) {
      return;
    }

    try {
      await studentService.delete(studentId);
      await loadData(); // Reload data to get updated list
      showToast("Student deleted successfully!", "success");
    } catch (error) {
      console.error("Error deleting student:", error);
      showToast("Failed to delete student", "error");
    }
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (student.course?.name || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || student.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPaymentStatus = (paid: number, total: number) => {
    if (!total) return { text: "Unknown", color: "text-gray-600" };
    const percentage = (paid / total) * 100;
    if (percentage >= 100) return { text: "Paid", color: "text-green-600" };
    if (percentage > 0) return { text: "Partial", color: "text-yellow-600" };
    return { text: "Pending", color: "text-red-600" };
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
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {toast.message}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Students</h1>
          <p className="text-sm text-slate-600 mt-0.5">
            Manage your student database
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
          Add Student
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total Students",
            value: students.length,
            icon: "👥",
            color: "from-blue-500 to-indigo-600",
          },
          {
            label: "Active Students",
            value: students.filter((s) => s.status === "active").length,
            icon: "✅",
            color: "from-green-500 to-emerald-600",
          },
          {
            label: "Completed",
            value: students.filter((s) => s.status === "completed").length,
            icon: "🎓",
            color: "from-purple-500 to-pink-600",
          },
          {
            label: "Total Revenue",
            value: `₹${students
              .reduce((sum, s) => sum + s.feesPaid, 0)
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
                placeholder="Search students..."
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
            <option value="completed">Completed</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-white/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Payment
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
              {filteredStudents.map((student) => {
                const paymentStatus = getPaymentStatus(
                  student.feesPaid,
                  student.course?.fee || 0
                );
                return (
                  <tr
                    key={student.$id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {student.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-slate-900">
                            {student.name}
                          </div>
                          <div className="text-xs text-slate-500">
                            ID: {student.$id.slice(-8)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-slate-900">
                        {student.email}
                      </div>
                      <div className="text-xs text-slate-500">
                        {student.phone || "No phone"}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-slate-900">
                        {student.course?.name || "No course assigned"}
                      </div>
                      <div className="text-xs text-slate-500">
                        Enrolled:{" "}
                        {new Date(student.enrollmentDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-slate-900">
                        ₹{student.feesPaid.toLocaleString()} / ₹
                        {(student.course?.fee || 0).toLocaleString()}
                      </div>
                      <div
                        className={`text-xs font-medium ${paymentStatus.color}`}
                      >
                        {paymentStatus.text}
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1.5 rounded-full transition-all duration-300"
                          style={{
                            width: `${
                              student.course?.fee
                                ? Math.min(
                                    (student.feesPaid / student.course.fee) *
                                      100,
                                    100
                                  )
                                : 0
                            }%`,
                          }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          student.status
                        )}`}
                      >
                        {student.status.charAt(0).toUpperCase() +
                          student.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => handleEditStudent(student)}
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
                          onClick={() => handleDeleteStudent(student.$id)}
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
                );
              })}
            </tbody>
          </table>

          {filteredStudents.length === 0 && (
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
              <h3 className="text-lg font-medium text-slate-900 mb-1">
                No students found
              </h3>
              <p className="text-sm text-slate-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 w-full max-w-sm max-h-[90vh] overflow-y-auto">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-800">
                  {editingStudent ? "Edit Student" : "Add New Student"}
                </h2>
                <button
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  editingStudent ? handleUpdateStudent() : handleAddStudent();
                }}
              >
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter student name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    required
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    required
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    disabled={submitting}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Course
                  </label>
                  <select
                    value={form.courseId}
                    onChange={(e) =>
                      setForm({ ...form, courseId: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    required
                    disabled={submitting}
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.$id} value={course.$id}>
                        {course.name} - ₹{course.fee.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Fees Paid
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount paid"
                    value={form.feesPaid}
                    onChange={(e) =>
                      setForm({ ...form, feesPaid: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    min="0"
                    max={courses.find((c) => c.$id === form.courseId)?.fee || 0}
                    required
                    disabled={submitting}
                  />
                  {form.courseId && (
                    <p className="text-xs text-slate-500 mt-1">
                      Course fee: ₹
                      {courses
                        .find((c) => c.$id === form.courseId)
                        ?.fee.toLocaleString()}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Status
                  </label>
                  <select
                    value={form.status}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        status: e.target.value as
                          | "active"
                          | "inactive"
                          | "completed",
                      })
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                    required
                    disabled={submitting}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-2 pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      resetForm();
                    }}
                    className="px-3 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors font-medium"
                    disabled={submitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                        {editingStudent ? "Updating..." : "Adding..."}
                      </div>
                    ) : editingStudent ? (
                      "Update Student"
                    ) : (
                      "Add Student"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
