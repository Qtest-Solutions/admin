// app/admin/dashboard/page.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { analyticsService } from "../../../services/database";
import { DashboardStats, CourseWithStats } from "../../../types/appwrite";

export default function DashboardHome() {
  const [stats, setStats] = useState<DashboardStats>({
    totalCourses: 0,
    activeCourses: 0,
    totalStudents: 0,
    activeStudents: 0,
    completedStudents: 0,
    totalRevenue: 0,
    inactiveCourses: 0,
    draftCourses: 0,
    inactiveStudents: 0,
    averageRevenue: 0,
    totalEnrollments: 0,
  });
  const [topCourses, setTopCourses] = useState<CourseWithStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [dashboardStats, coursesWithStats] = await Promise.all([
        analyticsService.getDashboardStats(),
        analyticsService.getCoursesWithStats(),
      ]);

      setStats(dashboardStats);

      // Sort courses by revenue and take top 4
      const sortedCourses = coursesWithStats
        .sort((a, b) => b.totalRevenue - a.totalRevenue)
        .slice(0, 4);
      setTopCourses(sortedCourses);
    } catch (error) {
      console.error("Error loading dashboard data:", error);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-red-500 mb-2">⚠️</div>
          <p className="text-slate-600">{error}</p>
          <button
            onClick={loadDashboardData}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="text-indigo-100">
          Here's what's happening with your platform today.
        </p>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Total Students",
            value: stats.totalStudents,
            change: `${stats.activeStudents} active`,
            trend: "up",
            icon: (
              <svg
                className="w-6 h-6"
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
            ),
            color: "from-blue-500 to-indigo-600",
          },
          {
            title: "Total Courses",
            value: stats.totalCourses,
            change: `${stats.activeCourses} active`,
            trend: "up",
            icon: (
              <svg
                className="w-6 h-6"
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
            ),
            color: "from-green-500 to-emerald-600",
          },
          {
            title: "Total Revenue",
            value: `₹${stats.totalRevenue.toLocaleString()}`,
            change: `${stats.completedStudents} completed`,
            trend: "up",
            icon: (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ),
            color: "from-purple-500 to-pink-600",
          },
          {
            title: "Completion Rate",
            value:
              stats.totalStudents > 0
                ? `${Math.round(
                    (stats.completedStudents / stats.totalStudents) * 100
                  )}%`
                : "0%",
            change: `${stats.completedStudents} completed`,
            trend: "up",
            icon: (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            ),
            color: "from-orange-500 to-red-600",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`p-2 bg-gradient-to-r ${stat.color} rounded-lg text-white`}
              >
                {stat.icon}
              </div>
              <div
                className={`flex items-center text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                <svg
                  className={`w-4 h-4 mr-1 ${
                    stat.trend === "up" ? "" : "rotate-180"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17l9.2-9.2M17 17V7H7"
                  />
                </svg>
                {stat.change}
              </div>
            </div>
            <h3 className="text-sm font-medium text-slate-600 mb-1">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Student Status
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Active Students</span>
              <span className="font-semibold text-blue-600">
                {stats.activeStudents}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Completed</span>
              <span className="font-semibold text-green-600">
                {stats.completedStudents}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Inactive</span>
              <span className="font-semibold text-gray-600">
                {stats.inactiveStudents}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Course Status
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Active Courses</span>
              <span className="font-semibold text-green-600">
                {stats.activeCourses}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Draft Courses</span>
              <span className="font-semibold text-yellow-600">
                {stats.draftCourses}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Inactive</span>
              <span className="font-semibold text-gray-600">
                {stats.inactiveCourses}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Revenue Insights
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Total Revenue</span>
              <span className="font-semibold text-green-600">
                ₹{stats.totalRevenue.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Avg per Student</span>
              <span className="font-semibold text-blue-600">
                ₹
                {stats.totalStudents > 0
                  ? Math.round(
                      stats.totalRevenue / stats.totalStudents
                    ).toLocaleString()
                  : "0"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Total Enrollments</span>
              <span className="font-semibold text-purple-600">
                {stats.totalStudents}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Courses */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-800">
            Top Performing Courses
          </h3>
          <Link
            href="/admin/dashboard/courses"
            className="text-sm text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
          >
            View all courses →
          </Link>
        </div>

        {topCourses.length > 0 ? (
          <div className="space-y-4">
            {topCourses.map((course, index) => (
              <div
                key={course.$id}
                className="flex items-center justify-between p-4 bg-slate-50/50 rounded-lg hover:bg-slate-100/50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-medium mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">
                      {course.name}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {course.enrolledStudents} students enrolled
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">
                    ₹{course.totalRevenue.toLocaleString()}
                  </p>
                  <div className="w-20 bg-slate-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min(
                          (course.enrolledStudents /
                            Math.max(
                              ...topCourses.map((c) => c.enrolledStudents),
                              1
                            )) *
                            100,
                          100
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <svg
              className="w-12 h-12 text-slate-400 mx-auto mb-4"
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
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              No courses available
            </h3>
            <p className="text-slate-500 mb-4">
              Create your first course to see performance data.
            </p>
            <Link
              href="/admin/dashboard/courses"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
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
              Create Course
            </Link>
          </div>
        )}
      </div>

      {/* Performance Overview Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Revenue Overview
          </h3>
          <div className="h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-slate-400 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <p className="text-slate-500 text-sm">
                Revenue chart will be implemented here
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Total: ₹{stats.totalRevenue.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Enrollment Trend */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Enrollment Trends
          </h3>
          <div className="h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-slate-400 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-slate-500 text-sm">
                Enrollment chart will be implemented here
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Total Students: {stats.totalStudents}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">
          System Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Database", status: "Healthy", color: "green" },
            { label: "API Services", status: "Online", color: "green" },
            { label: "File Storage", status: "Active", color: "green" },
            { label: "Backup System", status: "Running", color: "green" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-slate-50/50 rounded-lg"
            >
              <span className="text-sm font-medium text-slate-700">
                {item.label}
              </span>
              <div className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    item.color === "green"
                      ? "bg-green-500"
                      : item.color === "yellow"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                ></div>
                <span
                  className={`text-xs font-medium ${
                    item.color === "green"
                      ? "text-green-700"
                      : item.color === "yellow"
                      ? "text-yellow-700"
                      : "text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
