import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, User } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";
import LogoutConfirmDialog from "./LogoutConfirmDialog";

interface MobileNavProps {
  onLoginClick: () => void;
}

const MobileNav = ({ onLoginClick }: MobileNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAdmin, setIsAdmin } = useAdmin();

  const handleLogout = async () => {
    try {
      await fetch("https://scriveners.pythonabc.org/api/logout", {
        credentials: "include",
      });
      setIsAdmin(false);
      setIsMobileMenuOpen(false); // Close menu after logout
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-white hover:text-sky-300"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 font-bold text-white font-['Inter'] bg-[#1E1E1E] shadow-md z-50 md:hidden">
          <div className="flex flex-col items-center py-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-white text-lg font-semibold hover:text-sky-300">
              Home
            </Link>
            <Link to="/leaderboard" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-white text-lg font-semibold hover:text-sky-300">
              LEADERBOARD
            </Link>
            <Link to="/litfest25" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-white text-lg font-semibold hover:text-sky-300">
              LITFEST
            </Link>
            <Link to="https://forms.gle/pwREpTgTVkmgUjVo7" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-white text-lg font-semibold hover:text-sky-300">
              JOIN NOW
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
