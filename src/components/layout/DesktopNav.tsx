
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";
import LogoutConfirmDialog from "./LogoutConfirmDialog";

interface DesktopNavProps {
  onLoginClick: () => void;
}

const DesktopNav = ({ onLoginClick }: DesktopNavProps) => {
  const { isAdmin, setIsAdmin } = useAdmin();

  const handleLogout = async () => {
    try {
      await fetch("https://scriveners.pythonabc.org/api/logout", {
        credentials: "include",
      });
      setIsAdmin(false);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="hidden md:flex items-center justify-between px-16 py-6 text-xl font-bold text-sky-400/95 font-['Open Sans']">
      <div className="text-sky-400 text-3xl font-bold font-['Poppins']">
        <Link to="/">SCRIVENERS</Link>
      </div>
      
      <div className="flex items-center space-x-12 -ml-32">
        <Link to="/leaderboard" className="hover:text-sky-300">LEADERBOARD</Link>
        <Link to="/litfest25" className="hover:text-sky-300">LITFEST</Link>
        <Link to="https://forms.gle/pwREpTgTVkmgUjVo7" className="hover:text-sky-300">JOIN NOW</Link>
      </div>
      
      <div className="flex items-center">
        {isAdmin ? (
          <LogoutConfirmDialog
            onLogout={handleLogout}
            trigger={
              <button
                className="text-sky-400 hover:text-sky-300 flex items-center gap-1"
                title="Logout"
              >
                <User size={24} />
                <span className="text-sm">Admin</span>
              </button>
            }
          />
        ) : (
          <button
            onClick={onLoginClick}
            className="text-sky-400 hover:text-sky-300"
            title="Admin Login"
          >
            <User size={24} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default DesktopNav;
