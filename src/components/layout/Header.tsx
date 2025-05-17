
import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Twitter, Menu } from "lucide-react";
import { AiOutlineDiscord } from "react-icons/ai";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    


    <div className="bg-[rgba(255,255,255,0.25)] border flex flex-col overflow-hidden rounded-[20px] border-white border-solid">
      <div className="flex max-md:flex-col max-md:items-stretch">
        <div className="w-[90%] max-md:w-full max-md:ml-0.5 ml-20 mt-3">
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
                className="self-stretch basis-auto my-auto hover:text-primary"
              >
                LeaderBoard
              </Link>
              {/* <Link
                to="/litfest25"
                className="self-stretch basis-auto my-auto hover:text-primary"
              >
                LitFest25
              </Link> */}
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
                  <Link to="/leaderboard" className="text-[rgba(20,47,56,1)] text-lg font-semibold hover:text-primary">
                    LeaderBoard
                  </Link>
                  {/* <Link to="/litfest25" className="text-[rgba(20,47,56,1)] text-lg font-semibold hover:text-primary">
                    LitFest25
                  </Link> */}

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
        </div>
        <div className="w-[10%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-[rgba(20,46,56,1)] flex grow flex-col items-center justify-center w-full px-[20px] py-[20px] rounded-[0px_20px_0px_20px] max-md:mt-6 max-md:px-5 max-md:hidden">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ad5bbae593c2463dac7a2da4d170e8bc/68b64136ef16a17cbe9841f570bd598bad6ebb1f?placeholderIfAbsent=true"
              alt="Logo"
              className="aspect-[4.5] object-contain w-70 max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
