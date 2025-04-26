
import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Twitter} from "lucide-react";
import { AiOutlineDiscord } from "react-icons/ai";


export const Header = () => {
  return (
    <nav className="flex items-center justify-between gap-[40px_54px] self-stretch text-lg text-[rgba(20,47,56,1)] font-semibold text-center w-full">
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
          {/* https://react-icons.github.io/react-icons/ */}
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
  );
};
