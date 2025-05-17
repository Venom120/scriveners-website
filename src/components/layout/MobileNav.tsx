
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, User } from "lucide-react";
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
          className="p-2"
        >
          <Menu size={24} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden">
          <div className="flex flex-col items-center py-4">
            <Link to="/" className="py-2 text-[#142F38] text-lg font-semibold hover:text-primary">
              Home
            </Link>
            <Link to="/poems" className="py-2 text-[#142F38] text-lg font-semibold hover:text-primary">
              Poems
            </Link>
            <Link to="/leaderboard" className="py-2 text-[#142F38] text-lg font-semibold hover:text-primary">
              LeaderBoard
            </Link>
            <Link to="/litfest25" className="py-2 text-[#142F38] text-lg font-semibold hover:text-primary">
              LitFest25
            </Link>
            <div 
              className="py-2 cursor-pointer flex items-center gap-1"
              onClick={() => {
                onLoginClick();
                setIsMobileMenuOpen(false);
              }}
            >
              <User size={24} />
              {isAdmin && <span className="text-sm">Admin</span>}
            </div>
            
            <div className="flex items-center gap-6 mt-2">
              <a 
                href="https://www.instagram.com/scriveners.club/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[rgba(20,47,56,1)] hover:text-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="https://discord.gg/e3bceyAC2b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[rgba(20,47,56,1)] hover:text-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
