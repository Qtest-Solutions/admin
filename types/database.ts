export interface Course {
  id: string;
  name: string;
  description: string | null;
  fee: number;
  duration: string | null;
  level: "beginner" | "intermediate" | "advanced";
  status: "active" | "inactive" | "draft";
  created_at: string;
  updated_at: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  course_id: string | null;
  fees_paid: number;
  status: "active" | "inactive" | "completed";
  enrollment_date: string;
  created_at: string;
  updated_at: string;
}

export interface StudentWithCourse extends Student {
  course_name: string | null;
  course_fee: number | null;
  course_duration: string | null;
  course_level: string | null;
  payment_percentage: number | null;
}

export interface CourseAnalytics {
  id: string;
  name: string;
  fee: number;
  status: string;
  enrolled_students: number;
  total_revenue: number;
  avg_fees_paid: number;
  created_at: string;
}
