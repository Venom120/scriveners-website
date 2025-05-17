
import { Link } from "react-router-dom";
import { Instagram, Search, User, Menu } from "lucide-react";
import { AiOutlineDiscord } from "react-icons/ai";
import { useAdmin } from "@/contexts/AdminContext";

interface DesktopNavProps {
  onLoginClick: () => void;
}

const DesktopNav = ({ onLoginClick }: DesktopNavProps) => {
  const { isAdmin } = useAdmin();

  return (
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
        
        <button
          onClick={onLoginClick}
          className="text-[rgba(20,47,56,1)] hover:text-primary flex items-center gap-1"
          title={isAdmin ? "Admin" : "Admin Login"}
        >
          <User size={24} />
          {isAdmin && <span className="text-sm">Admin</span>}
        </button>
      </div>
    </nav>
  );
};

export default DesktopNav;
