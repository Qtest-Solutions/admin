import { Client, Databases, Account, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("68d39a30000c8880732f");

export const account = new Account(client);
export const databases = new Databases(client);

export const DATABASE_ID = "68d39b5f0019cffd745f";
export const COURSES_COLLECTION_ID = "courses";
export const STUDENTS_COLLECTION_ID = "students";

export { ID, Query };
export default client;
