"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";

interface User {
  $id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

// Helper function to handle errors safely
const handleError = (error: unknown): void => {
  console.error("Error details:", error);

  if (error && typeof error === "object") {
    const errorObj = error as Record<string, unknown>;

    if ("code" in errorObj) {
      console.error("Error code:", errorObj.code);
    }
    if ("message" in errorObj) {
      console.error("Error message:", errorObj.message);
    }
  }

  if (error instanceof Error) {
    console.error("Error message:", error.message);
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const currentUser = await account.get();
      setUser({
        $id: currentUser.$id,
        name: currentUser.name,
        email: currentUser.email,
      });
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      console.log("Login attempt for email:", email);
      console.log("Project ID:", "68d39a30000c8880732f");

      const session = await account.createEmailPasswordSession(email, password);
      console.log("Session created successfully:", session);

      const currentUser = await account.get();
      console.log("User retrieved:", currentUser);

      setUser({
        $id: currentUser.$id,
        name: currentUser.name,
        email: currentUser.email,
      });
    } catch (error) {
      handleError(error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      handleError(error);
      throw error;
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
