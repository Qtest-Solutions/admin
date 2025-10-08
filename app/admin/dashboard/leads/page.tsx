"use client";
import { useState, useEffect, useMemo } from "react";
import Modal from "../../../../components/Modal";
import { courseService, studentService } from "../../../../services/database";
import { leadService } from "../../../../services/leadService";
import {
  LeadWithCourse,
  LeadCreateData,
  LeadUpdateData,
} from "../../../../types/appwrite";
import { Course } from "../../../../types/appwrite";

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  interestedCourseId: string;
  source:
    | "website"
    | "referral"
    | "social_media"
    | "advertisement"
    | "walk_in"
    | "other";
  status:
    | "new"
    | "contacted"
    | "interested"
    | "not_interested"
    | "converted"
    | "lost";
}

interface ToastNotification {
  show: boolean;
  message: string;
  type: "success" | "error";
}

interface ConvertModalData {
  lead: LeadWithCourse;
  feesPaid: number;
  enrollmentDate: string;
  studentStatus: "active" | "inactive";
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<LeadWithCourse[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showConvertModal, setShowConvertModal] = useState(false);
  const [editingLead, setEditingLead] = useState<LeadWithCourse | null>(null);
  const [convertModalData, setConvertModalData] =
    useState<ConvertModalData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterSource, setFilterSource] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("created");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastNotification>({
    show: false,
    message: "",
    type: "success",
  });

  const [form, setForm] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    interestedCourseId: "",
    source: "website",
    status: "new",
  });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [leadsData, coursesData] = await Promise.all([
        leadService.getWithCourses(),
        courseService.getAll(),
      ]);
      setLeads(leadsData);
      setCourses(coursesData);
      if (coursesData.length > 0) {
        setForm((prev) => ({
          ...prev,
          interestedCourseId: prev.interestedCourseId || coursesData[0].$id,
        }));
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
      interestedCourseId: courses.length > 0 ? courses[0].$id : "",
      source: "website",
      status: "new",
    });
    setEditingLead(null);
  };

  const filteredLeads = useMemo(() => {
    let filtered = leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (lead.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
        (lead.course?.name || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        (lead.phone || "").includes(searchTerm);
      const matchesStatus =
        filterStatus === "all" || lead.status === filterStatus;
      const matchesSource =
        filterSource === "all" || lead.source === filterSource;
      return matchesSearch && matchesStatus && matchesSource;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "created":
        default:
          return (
            new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime()
          );
      }
    });

    return filtered;
  }, [leads, searchTerm, filterStatus, filterSource, sortBy]);

  const handleAddLead = async () => {
    if (!form.name.trim() || !form.email.trim()) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    setShowModal(false);

    try {
      setSubmitting(true);
      const leadData: LeadCreateData = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone?.trim() || undefined,
        interestedCourseId: form.interestedCourseId || undefined,
        source: form.source,
        status: form.status,
      };

      await leadService.create(leadData);
      resetForm();
      showToast("Lead added successfully!", "success");
      await loadData();
    } catch (error: any) {
      console.error("Error adding lead:", error);
      const msg =
        error?.message || error?.response?.message || "Failed to add lead";
      showToast(msg, "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditLead = (lead: LeadWithCourse) => {
    setEditingLead(lead);
    setForm({
      name: lead.name,
      email: lead.email || "",
      phone: lead.phone || "",
      interestedCourseId:
        (lead as any).interestedCourseId || lead.course?.$id || "",
      source: lead.source,
      status: lead.status,
    });
    setShowModal(true);
  };

  const handleUpdateLead = async () => {
    if (!editingLead || !form.name.trim() || !form.email.trim()) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    setShowModal(false);

    try {
      setSubmitting(true);
      const updateData: LeadUpdateData = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone?.trim() || undefined,
        interestedCourseId: form.interestedCourseId || undefined,
        source: form.source,
        status: form.status,
      };

      await leadService.update(editingLead.$id, updateData);
      resetForm();
      showToast("Lead updated successfully!", "success");
      await loadData();
    } catch (error: any) {
      console.error("Error updating lead:", error);
      const msg =
        error?.message || error?.response?.message || "Failed to update lead";
      showToast(msg, "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteLead = async (leadId: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      await leadService.delete(leadId);
      await loadData();
      showToast("Lead deleted successfully!", "success");
    } catch (error) {
      console.error("Error deleting lead:", error);
      showToast("Failed to delete lead", "error");
    }
  };

  const handleConvertToStudent = (lead: LeadWithCourse) => {
    setConvertModalData({
      lead,
      feesPaid: 0,
      enrollmentDate: new Date().toISOString().split("T")[0],
      studentStatus: "active",
    });
    setShowConvertModal(true);
  };

  const confirmConvertToStudent = async () => {
    if (!convertModalData) return;

    try {
      setSubmitting(true);
      const { lead, feesPaid, enrollmentDate, studentStatus } =
        convertModalData;

      const studentData = {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        courseId: (lead as any).interestedCourseId || lead.course?.$id || "",
        feesPaid,
        enrollmentDate: new Date(enrollmentDate).toISOString(),
        status: studentStatus,
      };

      await leadService.convertToStudent(lead.$id, studentData);
      await loadData();
      setShowConvertModal(false);
      setConvertModalData(null);
      showToast("Lead converted to student successfully!", "success");
    } catch (error: any) {
      console.error("Error converting lead:", error);
      showToast("Failed to convert lead to student", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "contacted":
        return "bg-yellow-100 text-yellow-800";
      case "interested":
        return "bg-green-100 text-green-800";
      case "not_interested":
        return "bg-red-100 text-red-800";
      case "converted":
        return "bg-purple-100 text-purple-800";
      case "lost":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case "website":
        return "🌐";
      case "referral":
        return "👥";
      case "social_media":
        return "📱";
      case "advertisement":
        return "📢";
      case "walk_in":
        return "🚶";
      default:
        return "❓";
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
      {toast.show && (
        <div
          className={`fixed top-4 right-4 z-[10000] px-4 py-3 rounded-lg shadow-lg ${
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

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Leads Management
          </h1>
          <p className="text-sm text-slate-600 mt-0.5">
            Track and convert potential students
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
          Add Lead
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-600">Total Leads</p>
              <p className="text-xl font-bold text-slate-800 mt-0.5">
                {leads.length}
              </p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-lg">
              📊
            </div>
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-600">New Leads</p>
              <p className="text-xl font-bold text-slate-800 mt-0.5">
                {leads.filter((l) => l.status === "new").length}
              </p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white text-lg">
              🆕
            </div>
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-600">Interested</p>
              <p className="text-xl font-bold text-slate-800 mt-0.5">
                {leads.filter((l) => l.status === "interested").length}
              </p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white text-lg">
              👍
            </div>
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-600">Converted</p>
              <p className="text-xl font-bold text-slate-800 mt-0.5">
                {leads.filter((l) => l.status === "converted").length}
              </p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-lg">
              ✅
            </div>
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-600">
                Conversion Rate
              </p>
              <p className="text-xl font-bold text-slate-800 mt-0.5">
                {leads.length > 0
                  ? Math.round(
                      (leads.filter((l) => l.status === "converted").length /
                        leads.length) *
                        100
                    )
                  : 0}
                %
              </p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white text-lg">
              📈
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-white/20 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="lg:col-span-2">
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
                placeholder="Search leads..."
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
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="interested">Interested</option>
            <option value="not_interested">Not Interested</option>
            <option value="converted">Converted</option>
            <option value="lost">Lost</option>
          </select>

          <select
            value={filterSource}
            onChange={(e) => setFilterSource(e.target.value)}
            className="px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
          >
            <option value="all">All Sources</option>
            <option value="website">Website</option>
            <option value="referral">Referral</option>
            <option value="social_media">Social Media</option>
            <option value="advertisement">Advertisement</option>
            <option value="walk_in">Walk-in</option>
            <option value="other">Other</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
          >
            <option value="created">Sort by Created</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-md border border-white/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Lead Info
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Course Interest
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Source
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
              {filteredLeads.map((lead) => (
                <tr
                  key={lead.$id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {lead.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-slate-900">
                          {lead.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          ID: {lead.$id.slice(-8)}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="text-sm text-slate-900">{lead.email}</div>
                    <div className="text-xs text-slate-500">
                      {lead.phone || "No phone"}
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-slate-900">
                      {lead.course?.name || "No course selected"}
                    </div>
                    {lead.course && (
                      <div className="text-xs text-slate-500">
                        ₹{lead.course.fee.toLocaleString()}
                      </div>
                    )}
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm text-slate-900">
                      <span className="mr-1">{getSourceIcon(lead.source)}</span>
                      {lead.source.replace("_", " ").toUpperCase()}
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        lead.status
                      )}`}
                    >
                      {lead.status.replace("_", " ").toUpperCase()}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleEditLead(lead)}
                        className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-colors"
                        title="Edit Lead"
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

                      {lead.status === "converted" &&
                        ((lead as any).interestedCourseId || lead.course) && (
                          <button
                            onClick={() => handleConvertToStudent(lead)}
                            className="p-1.5 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors"
                            title="Convert to Student"
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
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                        )}

                      <button
                        onClick={() => handleDeleteLead(lead.$id)}
                        className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Lead"
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

          {filteredLeads.length === 0 && (
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
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h3 className="text-lg font-medium text-slate-900 mb-1">
                No leads found
              </h3>
              <p className="text-sm text-slate-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          resetForm();
        }}
        title={editingLead ? "Edit Lead" : "Add New Lead"}
        maxWidth="max-w-2xl"
      >
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            editingLead ? handleUpdateLead() : handleAddLead();
          }}
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Enter lead name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
              disabled={submitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
              disabled={submitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
              disabled={submitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Interested Course
            </label>
            <select
              value={form.interestedCourseId}
              onChange={(e) =>
                setForm({ ...form, interestedCourseId: e.target.value })
              }
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Source
            </label>
            <select
              value={form.source}
              onChange={(e) =>
                setForm({
                  ...form,
                  source: e.target.value as LeadFormData["source"],
                })
              }
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
              disabled={submitting}
            >
              <option value="website">Website</option>
              <option value="referral">Referral</option>
              <option value="social_media">Social Media</option>
              <option value="advertisement">Advertisement</option>
              <option value="walk_in">Walk-in</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Status
            </label>
            <select
              value={form.status}
              onChange={(e) =>
                setForm({
                  ...form,
                  status: e.target.value as LeadFormData["status"],
                })
              }
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
              required
              disabled={submitting}
            >
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="interested">Interested</option>
              <option value="not_interested">Not Interested</option>
              <option value="converted">Converted</option>
              <option value="lost">Lost</option>
            </select>
          </div>

          <div className="md:col-span-2 flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setShowModal(false);
                resetForm();
              }}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg"
              disabled={submitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 disabled:opacity-50"
              disabled={submitting}
            >
              {submitting
                ? editingLead
                  ? "Updating..."
                  : "Adding..."
                : editingLead
                ? "Update Lead"
                : "Add Lead"}
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={showConvertModal}
        onClose={() => {
          setShowConvertModal(false);
          setConvertModalData(null);
        }}
        title="Convert Lead to Student"
        maxWidth="max-w-md"
      >
        {convertModalData && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              confirmConvertToStudent();
            }}
            className="space-y-4"
          >
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-medium text-slate-800 mb-2">Lead Details</h3>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-medium">Name:</span>{" "}
                  {convertModalData.lead.name}
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {convertModalData.lead.email}
                </p>
                <p>
                  <span className="font-medium">Course:</span>{" "}
                  {convertModalData.lead.course?.name || "N/A"}
                </p>
                <p>
                  <span className="font-medium">Course Fee:</span> ₹
                  {convertModalData.lead.course?.fee?.toLocaleString() || "0"}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Initial Fees Paid
              </label>
              <input
                type="number"
                placeholder="Enter amount paid"
                value={convertModalData.feesPaid}
                onChange={(e) =>
                  setConvertModalData({
                    ...convertModalData,
                    feesPaid: Number(e.target.value),
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
                min={0}
                max={convertModalData.lead.course?.fee || 0}
                required
                disabled={submitting}
              />
              <p className="text-xs text-slate-500 mt-1">
                Maximum: ₹
                {convertModalData.lead.course?.fee?.toLocaleString() || "0"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Enrollment Date
              </label>
              <input
                type="date"
                value={convertModalData.enrollmentDate}
                onChange={(e) =>
                  setConvertModalData({
                    ...convertModalData,
                    enrollmentDate: e.target.value,
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
                disabled={submitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Student Status
              </label>
              <select
                value={convertModalData.studentStatus}
                onChange={(e) =>
                  setConvertModalData({
                    ...convertModalData,
                    studentStatus: e.target.value as "active" | "inactive",
                  })
                }
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
                disabled={submitting}
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setShowConvertModal(false);
                  setConvertModalData(null);
                }}
                className="px-4 py-2 text-sm text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg"
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg text-sm font-medium hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 disabled:opacity-50"
                disabled={submitting}
              >
                {submitting ? "Converting..." : "Convert to Student"}
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
