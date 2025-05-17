
import { Link } from "react-router-dom";
import { User, Search, Menu } from "lucide-react";
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
    <nav className="hidden md:flex items-center justify-between px-16 py-6 text-xl font-bold text-sky-400/95 font-['Open Sans'] bg-[#142E38]">
      <div className="text-sky-400 text-3xl font-bold font-['Poppins']">
        <Link to="/">SCRIVENERS</Link>
      </div>
      
      <div className="flex items-center space-x-12">
        <Link to="/story" className="hover:text-sky-300">STORY</Link>
        <Link to="/poems" className="hover:text-sky-300">POEMS</Link>
        <Link to="/leaderboard" className="hover:text-sky-300">LEADERBOARD</Link>
        <Link to="/litfest25" className="hover:text-sky-300">LITFEST</Link>
        <Link to="https://forms.gle/pwREpTgTVkmgUjVo7" className="hover:text-sky-300">JOIN NOW</Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <button
          className="text-sky-400 hover:text-sky-300"
          title="Search"
        >
          <Search size={32} />
        </button>
        
        {isAdmin ? (
          <LogoutConfirmDialog
            onLogout={handleLogout}
            trigger={
              <button
                className="text-sky-400 hover:text-sky-300 flex items-center gap-1"
                title="Logout"
              >
                <User size={32} />
                <span className="sr-only">Admin</span>
              </button>
            }
          />
        ) : (
          <button
            onClick={onLoginClick}
            className="text-sky-400 hover:text-sky-300"
            title="Admin Login"
          >
            <User size={32} />
          </button>
        )}
        
        <button
          className="text-sky-400 hover:text-sky-300"
          title="Menu"
        >
          <Menu size={32} />
        </button>
      </div>
    </nav>
  );
};

export default DesktopNav;
