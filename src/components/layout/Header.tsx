
import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Twitter, Menu } from "lucide-react";
import { AiOutlineDiscord } from "react-icons/ai";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between gap-[40px_54px] self-stretch text-lg text-[rgba(20,47,56,1)] font-semibold text-center w-full">
        <div className="flex items-center gap-[40px_54px]">
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
            className="underline self-stretch basis-auto my-auto hover:text-primary"
          >
            LeaderBoard
          </Link>
        </div>
        
        <div className="flex items-center gap-4 mr-6">
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

          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[rgba(20,47,56,1)] hover:text-primary"
          >
            <Twitter size={24} />
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden flex-col w-full">
        <div className="flex items-center justify-between p-4">
          <div className="text-[rgba(67,81,81,1)] text-2xl font-bold">
            Scriveners
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[rgba(20,47,56,1)] p-2"
          >
            <Menu size={24} />
          </button>
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
              <Link to="/leaderboard" className="text-[rgba(20,47,56,1)] text-lg font-semibold underline hover:text-primary">
                LeaderBoard
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
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[rgba(20,47,56,1)] hover:text-primary"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
