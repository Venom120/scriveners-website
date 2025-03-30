import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="flex items-center gap-[40px_54px] self-stretch text-lg text-[rgba(20,47,56,1)] font-semibold text-center w-full">
      <div className="text-[rgba(67,81,81,1)] text-2xl font-bold self-stretch grow">
        Excluded Soldiers Of Hitler
      </div>
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
    </nav>
  );
};
