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
      return response as Course;
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
      return response.documents as Course[];
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
      return response as Course;
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
      return response as Course;
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
      return response.documents as Course[];
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
      return response as Student;
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
      return response.documents as Student[];
    } catch (error) {
      console.error("Error fetching students:", error);
      throw error;
    }
  },

  // Get student by ID
  async getById(studentId: string): Promise<Student> {
    try {
      const response = await databases.getDocument(
        "68d39b5f0019cffd745f",
        "students",
        studentId
      );
      return response as Student;
    } catch (error) {
      console.error("Error fetching student:", error);
      throw error;
    }
  },

  // Update student
  async update(
    studentId: string,
    studentData: Partial<Omit<Student, "$id" | "$createdAt" | "$updatedAt">>
  ): Promise<Student> {
    try {
      const response = await databases.updateDocument(
        "68d39b5f0019cffd745f",
        "students",
        studentId,
        studentData
      );
      return response as Student;
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

  // Search students
  async search(searchTerm: string, status?: string): Promise<Student[]> {
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
        "students",
        queries
      );
      return response.documents as Student[];
    } catch (error) {
      console.error("Error searching students:", error);
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

      return {
        totalCourses: courses.length,
        activeCourses: courses.filter((c) => c.status === "active").length,
        totalStudents: students.length,
        activeStudents: students.filter((s) => s.status === "active").length,
        completedStudents: students.filter((s) => s.status === "completed")
          .length,
        totalRevenue: students.reduce((sum, s) => sum + s.feesPaid, 0),
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
};
