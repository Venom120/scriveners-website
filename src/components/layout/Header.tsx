
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import AdminLoginDialog from "@/components/layout/AdminLoginDialog";
import { useAdmin } from "./HeaderUtils";
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
    <div className="w-full bg-slate-800 rounded-tr-[19px] rounded-bl-[19px] overflow-hidden z-50">
      {/* Desktop Navigation */}
      <DesktopNav 
        onLoginClick={openLoginDialog} 
        />

      {/* Mobile Navigation */}
      <nav className="flex md:hidden flex-col w-full">
        <div className="flex items-center justify-between p-4 font-['Inter'] bg-[#1E1E1E]">
          <div className="text-[#5DD1E3] text-3xl font-bold ">
            <Link to="/">SCRIVENERS</Link>
          </div>
          <div className="flex items-center gap-3">
            {isAdmin ? (
              <LogoutConfirmDialog
              onLogout={handleLogout}
              trigger={
                <button
                className="text-white hover:text-primary hover:text-sky-300 flex items-center gap-1"
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
                className="text-white hover:text-primary hover:text-sky-300"
                title="Admin Login"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </button>
            )}
            <MobileNav 
              onLoginClick={openLoginDialog} 
            />
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
    <HeaderContent />
  );
};
