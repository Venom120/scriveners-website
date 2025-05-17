
import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Twitter, Menu, User, Search } from "lucide-react";
import { AiOutlineDiscord } from "react-icons/ai";
import { useState, useEffect, createContext, useContext } from "react";
import AdminLoginDialog from "@/components/AdminLoginDialog";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Create context for admin state
export const AdminContext = createContext<{
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  checkAuthStatus: () => Promise<boolean>;
}>({
  isAdmin: false,
  setIsAdmin: () => {},
  checkAuthStatus: async () => false,
});

// Custom hook to use admin context
export const useAdmin = () => useContext(AdminContext);

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Function to check if user is authenticated
  const checkAuthStatus = async () => {
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
  };

  // Handle successful login
  const handleLoginSuccess = async () => {
    const authenticated = await checkAuthStatus();
    if (authenticated) {
      toast({
        title: "Login successful",
        description: "You are now logged in as admin",
      });
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch("https://scriveners.pythonabc.org/api/logout", {
        credentials: "include", // Important for cookies
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

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin, checkAuthStatus }}>
      <div className="bg-[rgba(255,255,255,0.25)] border ml-16 mr-8 flex flex-col overflow-hidden rounded-[20px] border-white border-solid">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between gap-[4px_5px] self-stretch text-lg text-[rgba(20,47,56,1)] font-semibold text-center w-full">
          <div className="flex items-center gap-[2rem]">
            <div className="text-[rgba(67,81,81,1)] text-2xl font-bold self-stretch">
              Scriveners
            </div>
            <Link to="/" className="self-stretch my-auto hover:text-primary">
              Home
            </Link>
            <Link to="/story" className="self-stretch my-auto hover:text-primary">
              Story
            </Link>
            <Link to="/poems" className="self-stretch my-auto hover:text-primary">
              Poems
            </Link>
            <Link
              to="/leaderboard"
              className="self-stretch basis-auto my-auto hover:text-primary"
            >
              LeaderBoard
            </Link>
            <Link
              to="/litfest25"
              className="self-stretch basis-auto my-auto hover:text-primary"
            >
              LitFest25
            </Link>
          </div>
          
          <div className="flex items-center gap-2 mr-6">
            <a 
              href="https://www.instagram.com/scriveners.club/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[rgba(20,47,56,1)] hover:text-primary"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://discord.gg/e3bceyAC2b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[rgba(20,47,56,1)] hover:text-primary"
            >
              <AiOutlineDiscord size={29} />
            </a>
            
            {/* Admin Login/Logout with confirmation dialog */}
            {isAdmin ? (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    className="text-[rgba(20,47,56,1)] hover:text-primary flex items-center gap-1"
                    title="Logout"
                  >
                    <User size={24} />
                    <span className="text-sm">Admin</span>
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to logout? You'll need to login again to access admin features.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : (
              <button
                onClick={() => setLoginDialogOpen(true)}
                className="text-[rgba(20,47,56,1)] hover:text-primary"
                title="Admin Login"
              >
                <User size={24} />
              </button>
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className="flex md:hidden flex-col w-full">
          <div className="flex items-center justify-between p-4">
            <div className="text-[rgba(67,81,81,1)] text-2xl font-bold">
              Scriveners
            </div>
            <div className="flex items-center gap-3">
              {/* Admin Login/Logout for Mobile with confirmation */}
              {isAdmin ? (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button
                      className="text-[rgba(20,47,56,1)] hover:text-primary"
                      title="Logout"
                    >
                      <User size={20} />
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to logout? You'll need to login again to access admin features.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <button
                  onClick={() => setLoginDialogOpen(true)}
                  className="text-[rgba(20,47,56,1)] hover:text-primary"
                  title="Admin Login"
                >
                  <User size={20} />
                </button>
              )}
              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[rgba(20,47,56,1)] p-2"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="bg-white py-4 shadow-md z-50">
              <div className="flex flex-col items-center gap-4">
                <Link to="/" className="text-[rgba(20,47,56,1)] text-lg font-semibold hover:text-primary">
                  Home
                </Link>
                <Link to="/story" className="text-[rgba(20,47,56,1)] text-lg font-semibold hover:text-primary">
                  Story
                </Link>
                <Link to="/poems" className="text-[rgba(20,47,56,1)] text-lg font-semibold hover:text-primary">
                  Poems
                </Link>
                <Link to="/leaderboard" className="text-[rgba(20,47,56,1)] text-lg font-semibold hover:text-primary">
                  LeaderBoard
                </Link>
                <Link to="/litfest25" className="text-[rgba(20,47,56,1)] text-lg font-semibold hover:text-primary">
                  LitFest25
                </Link>

                <div className="flex items-center gap-6 mt-2">
                  <a 
                    href="https://www.instagram.com/scriveners.club/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[rgba(20,47,56,1)] hover:text-primary"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://discord.gg/e3bceyAC2b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[rgba(20,47,56,1)] hover:text-primary"
                  >
                    <AiOutlineDiscord size={24} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
        {/* Admin Login Dialog */}
        <AdminLoginDialog
          open={loginDialogOpen}
          onOpenChange={setLoginDialogOpen}
          onLoginSuccess={handleLoginSuccess}
        />
      </div>
    </AdminContext.Provider>
  );
};
