import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

interface MobileNavProps {
  onLoginClick: () => void;
}

const MobileNav = ({ onLoginClick }: MobileNavProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Link to="/poems" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-white text-lg font-semibold hover:text-sky-300">
              POEMS
            </Link>
            <Link to="/symphony-of-minds" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-white text-lg font-semibold hover:text-sky-300">
              SYMPHONY OF THE MIND
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
