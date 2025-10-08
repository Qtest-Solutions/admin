// Base Appwrite document interface
export interface AppwriteDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $collectionId: string;
  $databaseId: string;
}

// Course interface
export interface Course extends AppwriteDocument {
  name: string;
  description?: string;
  fee: number;
  duration?: string;
  level: "beginner" | "intermediate" | "advanced";
  status: "active" | "inactive" | "draft";
}

// Student interface - Updated with studentId only
export interface Student extends AppwriteDocument {
  studentId: string;
  name: string;
  email: string;
  phone?: string;
  courseId?: string;
  feesPaid: number;
  status: "active" | "inactive" | "completed";
  enrollmentDate: string;
}

// Extended interfaces for relationships and computed data
export interface StudentWithCourse extends Student {
  course?: Course;
  courseName?: string;
  courseFee?: number;
  courseDuration?: string;
  courseLevel?: string;
  paymentPercentage?: number;
}

export interface CourseWithStats extends Course {
  enrolledStudents: number;
  totalRevenue: number;
  averagePayment?: number;
  completionRate?: number;
}

// Dashboard statistics interface
export interface DashboardStats {
  totalCourses: number;
  activeCourses: number;
  inactiveCourses: number;
  draftCourses: number;
  totalStudents: number;
  activeStudents: number;
  completedStudents: number;
  inactiveStudents: number;
  totalRevenue: number;
  averageRevenue: number;
  totalEnrollments: number;
}

// Form interfaces for creating/updating
export interface CourseFormData {
  name: string;
  description?: string;
  fee: number;
  duration?: string;
  level: "beginner" | "intermediate" | "advanced";
  status: "active" | "inactive" | "draft";
}

// Updated StudentFormData with studentId only
export interface StudentFormData {
  studentId: string;
  name: string;
  email: string;
  phone?: string;
  courseId?: string;
  feesPaid: number;
  status: "active" | "inactive" | "completed";
  enrollmentDate?: string;
}

// API Response interfaces
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  documents: T[];
  total: number;
  limit: number;
  offset: number;
}

// Search and filter interfaces
export interface SearchFilters {
  searchTerm?: string;
  status?: string;
  level?: string;
  courseId?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface CourseFilters extends SearchFilters {
  level?: "beginner" | "intermediate" | "advanced";
  status?: "active" | "inactive" | "draft";
  minFee?: number;
  maxFee?: number;
}

// Updated StudentFilters with studentId only (removed entryDate filters)
export interface StudentFilters extends SearchFilters {
  status?: "active" | "inactive" | "completed";
  courseId?: string;
  paymentStatus?: "paid" | "partial" | "pending";
  enrollmentDateFrom?: string;
  enrollmentDateTo?: string;
  studentId?: string;
}

// Analytics interfaces
export interface CourseAnalytics {
  courseId: string;
  courseName: string;
  totalEnrollments: number;
  activeEnrollments: number;
  completedEnrollments: number;
  totalRevenue: number;
  averagePayment: number;
  completionRate: number;
  enrollmentTrend: EnrollmentTrend[];
}

export interface EnrollmentTrend {
  date: string;
  enrollments: number;
  revenue: number;
}

export interface PaymentAnalytics {
  totalPaid: number;
  totalPending: number;
  partialPayments: number;
  fullPayments: number;
  paymentsByMonth: MonthlyPayment[];
}

export interface MonthlyPayment {
  month: string;
  amount: number;
  count: number;
}

// Utility types
export type CourseStatus = Course["status"];
export type StudentStatus = Student["status"];
export type CourseLevel = Course["level"];

// Payment status computed type
export type PaymentStatus = "paid" | "partial" | "pending";

// Sort options
export interface SortOption {
  field: string;
  direction: "asc" | "desc";
  label: string;
}

// Table column interface for dynamic tables
export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: any, item: T) => React.ReactNode;
  className?: string;
}

// Notification interface
export interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// User interface (for admin authentication)
export interface User {
  $id: string;
  name: string;
  email: string;
  emailVerification: boolean;
  status: boolean;
  registration: string;
  passwordUpdate: string;
  prefs: Record<string, any>;
}

// Session interface
export interface Session {
  $id: string;
  userId: string;
  expire: string;
  provider: string;
  providerUid: string;
  providerAccessToken: string;
  providerAccessTokenExpiry: string;
  providerRefreshToken: string;
  ip: string;
  osCode: string;
  osName: string;
  osVersion: string;
  clientType: string;
  clientCode: string;
  clientName: string;
  clientVersion: string;
  clientEngine: string;
  clientEngineVersion: string;
  deviceName: string;
  deviceBrand: string;
  deviceModel: string;
  countryCode: string;
  countryName: string;
  current: boolean;
}

// Error interface
export interface AppwriteError {
  message: string;
  code: number;
  type: string;
  version: string;
}

// Validation interfaces
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormValidation {
  isValid: boolean;
  errors: ValidationError[];
}

// Export utility functions types - Updated to include studentId only
export type CreateCourseData = Omit<
  Course,
  | "$id"
  | "$createdAt"
  | "$updatedAt"
  | "$permissions"
  | "$collectionId"
  | "$databaseId"
>;
export type UpdateCourseData = Partial<CreateCourseData>;
export type CreateStudentData = Omit<
  Student,
  | "$id"
  | "$createdAt"
  | "$updatedAt"
  | "$permissions"
  | "$collectionId"
  | "$databaseId"
>;
export type UpdateStudentData = Partial<CreateStudentData>;

// Query builder types
export interface QueryBuilder {
  limit?: number;
  offset?: number;
  orderBy?: string;
  orderDirection?: "asc" | "desc";
  filters?: Record<string, any>;
  search?: string;
}

// Bulk operations
export interface BulkOperation<T> {
  operation: "create" | "update" | "delete";
  data: T[];
}

export interface BulkResult {
  success: number;
  failed: number;
  errors: string[];
}

// Export/Import interfaces
export interface ExportOptions {
  format: "csv" | "json" | "xlsx";
  fields: string[];
  filters?: SearchFilters;
}

export interface ImportResult {
  imported: number;
  skipped: number;
  errors: string[];
}

// Lead interfaces (simplified: removed notes, followUpDate, assignedTo, priority, leadScore)
export interface Lead extends AppwriteDocument {
  name: string;
  email: string;
  phone?: string;
  interestedCourseId?: string;
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

export interface LeadWithCourse extends Lead {
  course?: Course;
}

export interface LeadCreateData {
  name: string;
  email: string;
  phone?: string;
  interestedCourseId?: string;
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

export interface LeadUpdateData extends Partial<LeadCreateData> {}
