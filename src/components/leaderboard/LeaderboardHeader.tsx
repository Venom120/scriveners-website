
import { ArrowDown } from "lucide-react";

const LeaderboardHeader = () => {
  return (
    <div className="w-full bg-[#142F38] flex items-center justify-between px-5 py-4 md:px-[90px] md:h-[102px]">
      <div className="text-white font-['Roboto_Condensed'] text-[40px] md:text-[70px] font-bold">
        LEADERBOARD
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="text-white font-['Roboto'] text-[24px] md:text-[40px]">
          Poem
        </div>
        <ArrowDown className="w-4 h-4 md:w-6 md:h-6 text-white opacity-80" />
      </div>
    </div>
  );
};

export default LeaderboardHeader;
