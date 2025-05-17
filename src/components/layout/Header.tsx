
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AdminLoginDialog from "@/components/AdminLoginDialog";
import { AdminProvider, useAdmin } from "@/contexts/AdminContext";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import LogoutConfirmDialog from "./LogoutConfirmDialog";

const HeaderContent = () => {
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const { isAdmin, checkAuthStatus, setIsAdmin } = useAdmin();
  const { toast } = useToast();

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const handleLoginSuccess = async () => {
    const authenticated = await checkAuthStatus();
    if (authenticated) {
      toast({
        title: "Login successful",
        description: "You are now logged in as admin",
      });
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("https://scriveners.pythonabc.org/api/logout", {
        credentials: "include",
      });
      setIsAdmin(false);
      toast({
        title: "Logged out",
        description: "You have been logged out successfully",
      });
    } catch (error) {
      console.error("Error during logout:", error);
      toast({
        title: "Error",
        description: "Failed to logout",
        variant: "destructive",
      });
    }
  };

  const openLoginDialog = () => {
    if (isAdmin) {
      // The logout button is wrapped in LogoutConfirmDialog in the UI
      return;
    }
    setLoginDialogOpen(true);
  };

  return (
    <div className="bg-[rgba(255,255,255,0.25)] border ml-16 mr-8 flex flex-col overflow-hidden rounded-[20px] border-white border-solid">
      {/* Desktop Navigation */}
      <DesktopNav 
        onLoginClick={openLoginDialog} 
      />

      {/* Mobile Navigation */}
      <nav className="flex md:hidden flex-col w-full">
        <div className="flex items-center justify-between p-4">
          <div className="text-[rgba(67,81,81,1)] text-2xl font-bold">
            <Link to="/">Scriveners</Link>
          </div>
          <div className="flex items-center gap-3">
            {isAdmin ? (
              <LogoutConfirmDialog
                onLogout={handleLogout}
                trigger={
                  <button
                    className="text-[rgba(20,47,56,1)] hover:text-primary flex items-center gap-1"
                    title="Logout"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span className="text-sm">Admin</span>
                  </button>
                }
              />
            ) : (
              <button
                onClick={() => setLoginDialogOpen(true)}
                className="text-[rgba(20,47,56,1)] hover:text-primary"
                title="Admin Login"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </button>
            )}

            <MobileNav onLoginClick={openLoginDialog} />
          </div>
        </div>
      </nav>
      
      {/* Admin Login Dialog */}
      <AdminLoginDialog
        open={loginDialogOpen}
        onOpenChange={setLoginDialogOpen}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export const Header = () => {
  return (
    <AdminProvider>
      <HeaderContent />
    </AdminProvider>
  );
};

// Export context hook for easy access
export { useAdmin } from "@/contexts/AdminContext";
