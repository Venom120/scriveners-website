
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";

interface MobileNavProps {
  onLoginClick: () => void;
}

const MobileNav = ({ onLoginClick }: MobileNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAdmin } = useAdmin();

  return (
    <>
      <div className="md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-sky-400"
        >
          <Menu size={24} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-slate-800 shadow-md z-50 md:hidden">
          <div className="flex flex-col items-center py-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-sky-400 text-lg font-semibold hover:text-sky-300">
              Home
            </Link>
            <Link to="/story" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-sky-400 text-lg font-semibold hover:text-sky-300">
              Story
            </Link>
            <Link to="/poems" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-sky-400 text-lg font-semibold hover:text-sky-300">
              Poems
            </Link>
            <Link to="/leaderboard" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-sky-400 text-lg font-semibold hover:text-sky-300">
              LeaderBoard
            </Link>
            <Link to="/litfest25" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-sky-400 text-lg font-semibold hover:text-sky-300">
              LitFest25
            </Link>
            {isAdmin && (
              <div 
                className="py-2 cursor-pointer flex items-center gap-1 text-sky-400"
                onClick={() => {
                  onLoginClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className="text-sm">Admin</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
