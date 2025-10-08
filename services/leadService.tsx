// services/leadService.ts
import { Query } from "appwrite";
import { DATABASE_ID, databases } from "../lib/appwrite";
import {
  Lead,
  LeadCreateData,
  LeadUpdateData,
  LeadWithCourse,
} from "../types/appwrite";
import { courseService, studentService } from "./database";

const LEADS_COLLECTION_ID = "leads";

const transformToLead = (doc: any): Lead => {
  return {
    $id: doc.$id,
    $createdAt: doc.$createdAt,
    $updatedAt: doc.$updatedAt,
    $permissions: doc.$permissions,
    $collectionId: doc.$collectionId,
    $databaseId: doc.$databaseId,
    name: doc.name,
    email: doc.email,
    phone: doc.phone,
    interestedCourseId: doc.interestedCourseId, // only this field
    source: doc.source,
    status: doc.status,
  };
};

export const leadService = {
  async getAll(): Promise<Lead[]> {
    const response = await databases.listDocuments(
      DATABASE_ID,
      LEADS_COLLECTION_ID,
      [Query.orderDesc("$createdAt")]
    );
    return response.documents.map(transformToLead);
  },

  async getWithCourses(): Promise<LeadWithCourse[]> {
    const [leads, courses] = await Promise.all([
      this.getAll(),
      courseService.getAll(),
    ]);

    return leads.map((lead) => ({
      ...lead,
      course: lead.interestedCourseId
        ? courses.find((c) => c.$id === lead.interestedCourseId)
        : undefined,
    }));
  },

  async getById(id: string): Promise<Lead> {
    const response = await databases.getDocument(
      DATABASE_ID,
      LEADS_COLLECTION_ID,
      id
    );
    return transformToLead(response);
  },

  async create(data: LeadCreateData): Promise<Lead> {
    // Ensure we never send "interestedCourse"
    const payload: any = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      interestedCourseId: data.interestedCourseId,
      source: data.source,
      status: data.status,
    };

    const response = await databases.createDocument(
      DATABASE_ID,
      LEADS_COLLECTION_ID,
      "unique()",
      payload
    );
    return transformToLead(response);
  },

  async update(id: string, data: LeadUpdateData): Promise<Lead> {
    const payload: any = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      interestedCourseId: data.interestedCourseId,
      source: data.source,
      status: data.status,
    };

    const response = await databases.updateDocument(
      DATABASE_ID,
      LEADS_COLLECTION_ID,
      id,
      payload
    );
    return transformToLead(response);
  },

  async delete(id: string): Promise<void> {
    await databases.deleteDocument(DATABASE_ID, LEADS_COLLECTION_ID, id);
  },

  async convertToStudent(leadId: string, studentData: any): Promise<void> {
    await studentService.create(studentData);
    await this.update(leadId, { status: "converted" });
  },

  async getByStatus(status: string): Promise<Lead[]> {
    const response = await databases.listDocuments(
      DATABASE_ID,
      LEADS_COLLECTION_ID,
      [Query.equal("status", status), Query.orderDesc("$createdAt")]
    );
    return response.documents.map(transformToLead);
  },

  async getByCourse(courseId: string): Promise<Lead[]> {
    const response = await databases.listDocuments(
      DATABASE_ID,
      LEADS_COLLECTION_ID,
      [
        Query.equal("interestedCourseId", courseId),
        Query.orderDesc("$createdAt"),
      ]
    );
    return response.documents.map(transformToLead);
  },
};
