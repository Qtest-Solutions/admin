import {
  databases,
  DATABASE_ID,
  COURSES_COLLECTION_ID,
  STUDENTS_COLLECTION_ID,
  ID,
  Query,
} from "../lib/appwrite";
import {
  Course,
  Student,
  StudentWithCourse,
  CourseWithStats,
  DashboardStats,
} from "../types/appwrite";

// Course Services
export const courseService = {
  // Create course
  async create(
    courseData: Omit<Course, "$id" | "$createdAt" | "$updatedAt">
  ): Promise<Course> {
    try {
      const response = await databases.createDocument(
        "68d39b5f0019cffd745f", // Your database ID
        "courses",
        ID.unique(),
        courseData
      );
      return response as unknown as Course;
    } catch (error) {
      console.error("Error creating course:", error);
      throw error;
    }
  },

  // Get all courses
  async getAll(): Promise<Course[]> {
    try {
      const response = await databases.listDocuments(
        "68d39b5f0019cffd745f",
        "courses",
        [Query.orderDesc("$createdAt")]
      );
      return response.documents as unknown as Course[];
    } catch (error) {
      console.error("Error fetching courses:", error);
      throw error;
    }
  },

  // Get course by ID
  async getById(courseId: string): Promise<Course> {
    try {
      const response = await databases.getDocument(
        "68d39b5f0019cffd745f",
        "courses",
        courseId
      );
      return response as unknown as Course;
    } catch (error) {
      console.error("Error fetching course:", error);
      throw error;
    }
  },

  // Update course
  async update(
    courseId: string,
    courseData: Partial<Omit<Course, "$id" | "$createdAt" | "$updatedAt">>
  ): Promise<Course> {
    try {
      const response = await databases.updateDocument(
        "68d39b5f0019cffd745f",
        "courses",
        courseId,
        courseData
      );
      return response as unknown as Course;
    } catch (error) {
      console.error("Error updating course:", error);
      throw error;
    }
  },

  // Delete course
  async delete(courseId: string): Promise<void> {
    try {
      await databases.deleteDocument(
        "68d39b5f0019cffd745f",
        "courses",
        courseId
      );
    } catch (error) {
      console.error("Error deleting course:", error);
      throw error;
    }
  },

  // Search courses
  async search(searchTerm: string, status?: string): Promise<Course[]> {
    try {
      const queries = [Query.orderDesc("$createdAt")];

      if (searchTerm) {
        queries.push(Query.search("name", searchTerm));
      }

      if (status && status !== "all") {
        queries.push(Query.equal("status", status));
      }

      const response = await databases.listDocuments(
        "68d39b5f0019cffd745f",
        "courses",
        queries
      );
      return response.documents as unknown as Course[];
    } catch (error) {
      console.error("Error searching courses:", error);
      throw error;
    }
  },
};

// Student Services
export const studentService = {
  // Create student
  async create(
    studentData: Omit<Student, "$id" | "$createdAt" | "$updatedAt">
  ): Promise<Student> {
    try {
      // Validate required fields
      if (!studentData.studentId) {
        throw new Error("Student ID is required");
      }

      // Check if studentId already exists
      const existingStudent = await this.getByStudentId(studentData.studentId);
      if (existingStudent) {
        throw new Error("Student ID already exists");
      }

      const response = await databases.createDocument(
        "68d39b5f0019cffd745f",
        "students",
        ID.unique(),
        {
          ...studentData,
          enrollmentDate:
            studentData.enrollmentDate || new Date().toISOString(),
        }
      );
      return response as unknown as Student;
    } catch (error) {
      console.error("Error creating student:", error);
      throw error;
    }
  },

  // Get all students
  async getAll(): Promise<Student[]> {
    try {
      const response = await databases.listDocuments(
        "68d39b5f0019cffd745f",
        "students",
        [Query.orderDesc("$createdAt")]
      );
      return response.documents as unknown as Student[];
    } catch (error) {
      console.error("Error fetching students:", error);
      throw error;
    }
  },

  // Get student by database ID
  async getById(studentId: string): Promise<Student> {
    try {
      const response = await databases.getDocument(
        "68d39b5f0019cffd745f",
        "students",
        studentId
      );
      return response as unknown as Student;
    } catch (error) {
      console.error("Error fetching student:", error);
      throw error;
    }
  },

  // Get student by custom Student ID
  async getByStudentId(studentId: string): Promise<Student | null> {
    try {
      const response = await databases.listDocuments(
        "68d39b5f0019cffd745f",
        "students",
        [Query.equal("studentId", studentId)]
      );

      if (response.documents.length > 0) {
        return response.documents[0] as unknown as Student;
      }
      return null;
    } catch (error) {
      console.error("Error fetching student by studentId:", error);
      return null;
    }
  },

  // Update student
  async update(
    studentId: string,
    studentData: Partial<Omit<Student, "$id" | "$createdAt" | "$updatedAt">>
  ): Promise<Student> {
    try {
      // If updating studentId, check if it already exists
      if (studentData.studentId) {
        const existingStudent = await this.getByStudentId(
          studentData.studentId
        );
        if (existingStudent && existingStudent.$id !== studentId) {
          throw new Error("Student ID already exists");
        }
      }

      const response = await databases.updateDocument(
        "68d39b5f0019cffd745f",
        "students",
        studentId,
        studentData
      );
      return response as unknown as Student;
    } catch (error) {
      console.error("Error updating student:", error);
      throw error;
    }
  },

  // Delete student
  async delete(studentId: string): Promise<void> {
    try {
      await databases.deleteDocument(
        "68d39b5f0019cffd745f",
        "students",
        studentId
      );
    } catch (error) {
      console.error("Error deleting student:", error);
      throw error;
    }
  },

  // Get students with course details
  async getWithCourses(): Promise<StudentWithCourse[]> {
    try {
      const [students, courses] = await Promise.all([
        this.getAll(),
        courseService.getAll(),
      ]);

      return students.map((student) => ({
        ...student,
        course: student.courseId
          ? courses.find((course) => course.$id === student.courseId)
          : undefined,
      }));
    } catch (error) {
      console.error("Error fetching students with courses:", error);
      throw error;
    }
  },

  // Enhanced search students - now includes studentId
  async search(searchTerm: string, status?: string): Promise<Student[]> {
    try {
      const queries = [Query.orderDesc("$createdAt")];

      if (status && status !== "all") {
        queries.push(Query.equal("status", status));
      }

      // If there's a search term, we'll get all students and filter client-side
      // because Appwrite's search might not work across multiple fields
      const response = await databases.listDocuments(
        "68d39b5f0019cffd745f",
        "students",
        queries
      );

      let students = response.documents as unknown as Student[];

      // Client-side filtering for search term across multiple fields
      if (searchTerm) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        students = students.filter(
          (student) =>
            student.name.toLowerCase().includes(lowerSearchTerm) ||
            student.studentId.toLowerCase().includes(lowerSearchTerm) ||
            (student.email &&
              student.email.toLowerCase().includes(lowerSearchTerm)) ||
            (student.phone && student.phone.includes(searchTerm))
        );
      }

      return students;
    } catch (error) {
      console.error("Error searching students:", error);
      throw error;
    }
  },

  // Get students by course
  async getByCourse(courseId: string): Promise<Student[]> {
    try {
      const response = await databases.listDocuments(
        "68d39b5f0019cffd745f",
        "students",
        [Query.equal("courseId", courseId), Query.orderDesc("$createdAt")]
      );
      return response.documents as unknown as Student[];
    } catch (error) {
      console.error("Error fetching students by course:", error);
      throw error;
    }
  },

  // Get students by status
  async getByStatus(status: string): Promise<Student[]> {
    try {
      const response = await databases.listDocuments(
        "68d39b5f0019cffd745f",
        "students",
        [Query.equal("status", status), Query.orderDesc("$createdAt")]
      );
      return response.documents as unknown as Student[];
    } catch (error) {
      console.error("Error fetching students by status:", error);
      throw error;
    }
  },

  // Validate student ID format
  validateStudentId(studentId: string): boolean {
    // Only allow alphanumeric characters
    const pattern = /^[a-zA-Z0-9]+$/;
    return (
      pattern.test(studentId) && studentId.length >= 3 && studentId.length <= 20
    );
  },

  // Generate next available student ID (optional helper)
  async generateNextStudentId(prefix: string = "qtest"): Promise<string> {
    try {
      const students = await this.getAll();
      const existingIds = students
        .map((s) => s.studentId)
        .filter((id) => id.startsWith(prefix))
        .map((id) => {
          const num = id.replace(prefix, "");
          return parseInt(num) || 0;
        })
        .sort((a, b) => b - a);

      const nextNumber = existingIds.length > 0 ? existingIds[0] + 1 : 1;
      return `${prefix}${nextNumber.toString().padStart(3, "0")}`;
    } catch (error) {
      console.error("Error generating student ID:", error);
      throw error;
    }
  },
};

// Analytics Services
export const analyticsService = {
  // Get dashboard stats
  async getDashboardStats(): Promise<DashboardStats> {
    try {
      const [courses, students] = await Promise.all([
        courseService.getAll(),
        studentService.getAll(),
      ]);

      const activeCourses = courses.filter((c) => c.status === "active").length;
      const inactiveCourses = courses.filter(
        (c) => c.status === "inactive"
      ).length;
      const draftCourses = courses.filter((c) => c.status === "draft").length;

      const activeStudents = students.filter(
        (s) => s.status === "active"
      ).length;
      const inactiveStudents = students.filter(
        (s) => s.status === "inactive"
      ).length;
      const completedStudents = students.filter(
        (s) => s.status === "completed"
      ).length;

      const totalRevenue = students.reduce((sum, s) => sum + s.feesPaid, 0);
      const averageRevenue =
        students.length > 0 ? totalRevenue / students.length : 0;

      return {
        totalCourses: courses.length,
        activeCourses,
        inactiveCourses,
        draftCourses,
        totalStudents: students.length,
        activeStudents,
        inactiveStudents,
        completedStudents,
        totalRevenue,
        averageRevenue,
        totalEnrollments: students.length, // Assuming each student is one enrollment
      };
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      throw error;
    }
  },

  // Get courses with statistics
  async getCoursesWithStats(): Promise<CourseWithStats[]> {
    try {
      const [courses, students] = await Promise.all([
        courseService.getAll(),
        studentService.getAll(),
      ]);

      return courses.map((course) => {
        const courseStudents = students.filter(
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
    } catch (error) {
      console.error("Error fetching courses with stats:", error);
      throw error;
    }
  },

  // Get revenue by month
  async getRevenueByMonth(
    year: number
  ): Promise<{ month: string; revenue: number }[]> {
    try {
      const students = await studentService.getAll();
      const monthlyRevenue = new Array(12).fill(0);
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      students.forEach((student) => {
        if (student.enrollmentDate) {
          const enrollmentDate = new Date(student.enrollmentDate);
          if (enrollmentDate.getFullYear() === year) {
            const month = enrollmentDate.getMonth();
            monthlyRevenue[month] += student.feesPaid;
          }
        }
      });

      return monthlyRevenue.map((revenue, index) => ({
        month: monthNames[index],
        revenue,
      }));
    } catch (error) {
      console.error("Error fetching revenue by month:", error);
      throw error;
    }
  },

  // Get enrollment trends
  async getEnrollmentTrends(
    days: number = 30
  ): Promise<{ date: string; enrollments: number }[]> {
    try {
      const students = await studentService.getAll();
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(endDate.getDate() - days);

      const trends: { [key: string]: number } = {};

      // Initialize all dates with 0
      for (
        let d = new Date(startDate);
        d <= endDate;
        d.setDate(d.getDate() + 1)
      ) {
        const dateStr = d.toISOString().split("T")[0];
        trends[dateStr] = 0;
      }

      // Count enrollments by date
      students.forEach((student) => {
        if (student.enrollmentDate) {
          const enrollmentDate = new Date(student.enrollmentDate);
          const dateStr = enrollmentDate.toISOString().split("T")[0];
          if (trends.hasOwnProperty(dateStr)) {
            trends[dateStr]++;
          }
        }
      });

      return Object.entries(trends).map(([date, enrollments]) => ({
        date,
        enrollments,
      }));
    } catch (error) {
      console.error("Error fetching enrollment trends:", error);
      throw error;
    }
  },
};

// Lead Services (if you're using the leads functionality)
export const leadService = {
  // Create lead
  async create(leadData: any): Promise<any> {
    try {
      const response = await databases.createDocument(
        "68d39b5f0019cffd745f",
        "leads", // Make sure this collection exists
        ID.unique(),
        leadData
      );
      return response as unknown as any;
    } catch (error) {
      console.error("Error creating lead:", error);
      throw error;
    }
  },

  // Get all leads
  async getAll(): Promise<any[]> {
    try {
      const response = await databases.listDocuments(
        "68d39b5f0019cffd745f",
        "leads",
        [Query.orderDesc("$createdAt")]
      );
      return response.documents as unknown as any[];
    } catch (error) {
      console.error("Error fetching leads:", error);
      throw error;
    }
  },

  // Get leads with courses
  async getWithCourses(): Promise<any[]> {
    try {
      const [leads, courses] = await Promise.all([
        this.getAll(),
        courseService.getAll(),
      ]);

      return leads.map((lead) => ({
        ...lead,
        course: lead.interestedCourseId
          ? courses.find((course) => course.$id === lead.interestedCourseId)
          : undefined,
      }));
    } catch (error) {
      console.error("Error fetching leads with courses:", error);
      throw error;
    }
  },

  // Update lead
  async update(leadId: string, leadData: any): Promise<any> {
    try {
      const response = await databases.updateDocument(
        "68d39b5f0019cffd745f",
        "leads",
        leadId,
        leadData
      );
      return response as unknown as any;
    } catch (error) {
      console.error("Error updating lead:", error);
      throw error;
    }
  },

  // Delete lead
  async delete(leadId: string): Promise<void> {
    try {
      await databases.deleteDocument("68d39b5f0019cffd745f", "leads", leadId);
    } catch (error) {
      console.error("Error deleting lead:", error);
      throw error;
    }
  },

  // Convert lead to student
  async convertToStudent(leadId: string, studentData: any): Promise<void> {
    try {
      // Create student record
      await studentService.create(studentData);

      // Update lead status to converted
      await this.update(leadId, { status: "converted" });
    } catch (error) {
      console.error("Error converting lead to student:", error);
      throw error;
    }
  },
};

// Utility Services
export const utilityService = {
  // Backup data
  async backupData(): Promise<{ courses: Course[]; students: Student[] }> {
    try {
      const [courses, students] = await Promise.all([
        courseService.getAll(),
        studentService.getAll(),
      ]);

      return { courses, students };
    } catch (error) {
      console.error("Error backing up data:", error);
      throw error;
    }
  },

  // Get system statistics
  async getSystemStats(): Promise<{
    totalRecords: number;
    databaseSize: string;
    lastBackup: string;
  }> {
    try {
      const [courses, students] = await Promise.all([
        courseService.getAll(),
        studentService.getAll(),
      ]);

      const totalRecords = courses.length + students.length;

      return {
        totalRecords,
        databaseSize: `${Math.round(totalRecords * 0.5)}KB`, // Rough estimate
        lastBackup: new Date().toISOString(),
      };
    } catch (error) {
      console.error("Error fetching system stats:", error);
      throw error;
    }
  },

  // Validate data integrity
  async validateDataIntegrity(): Promise<{
    isValid: boolean;
    issues: string[];
  }> {
    try {
      const issues: string[] = [];
      const [courses, students] = await Promise.all([
        courseService.getAll(),
        studentService.getAll(),
      ]);

      // Check for students with invalid course references
      students.forEach((student) => {
        if (
          student.courseId &&
          !courses.find((c) => c.$id === student.courseId)
        ) {
          issues.push(
            `Student ${student.studentId} references non-existent course ${student.courseId}`
          );
        }
      });

      // Check for duplicate student IDs
      const studentIds = students.map((s) => s.studentId);
      const duplicateIds = studentIds.filter(
        (id, index) => studentIds.indexOf(id) !== index
      );
      if (duplicateIds.length > 0) {
        issues.push(`Duplicate student IDs found: ${duplicateIds.join(", ")}`);
      }

      // Check for students with missing required fields
      students.forEach((student) => {
        if (!student.studentId) {
          issues.push(`Student ${student.$id} is missing student ID`);
        }
        if (!student.name) {
          issues.push(
            `Student ${student.studentId || student.$id} is missing name`
          );
        }
      });

      return {
        isValid: issues.length === 0,
        issues,
      };
    } catch (error) {
      console.error("Error validating data integrity:", error);
      throw error;
    }
  },
};

// Export all services
export default {
  courseService,
  studentService,
  analyticsService,
  leadService,
  utilityService,
};
