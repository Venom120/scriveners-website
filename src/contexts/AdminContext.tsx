
import { createContext, useContext, useState, useCallback } from "react";

interface AdminContextType {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  checkAuthStatus: () => Promise<boolean>;
}

export const AdminContext = createContext<AdminContextType>({
  isAdmin: false,
  setIsAdmin: () => {},
  checkAuthStatus: async () => false,
});

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const checkAuthStatus = useCallback(async () => {
    try {
      const response = await fetch("https://scriveners.pythonabc.org/api/check-auth", {
        credentials: "include", // Important for cookies
      });
      const data = await response.json();
      setIsAdmin(data.authenticated);
      return data.authenticated;
    } catch (error) {
      console.error("Error checking auth status:", error);
      setIsAdmin(false);
      return false;
    }
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin, checkAuthStatus }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
