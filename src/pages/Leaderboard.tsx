
import { ArrowDown } from "lucide-react";

const Leaderboard = () => {
  const leaderboardEntries = [
    { rank: 1, username: "username", score: 1 },
    { rank: 2, username: "username", score: 2 },
    { rank: 3, username: "username", score: 3 },
    { rank: 4, username: "username", score: 4 },
    { rank: 5, username: "username", score: 5 },
    { rank: 6, username: "username", score: 6 },
    { rank: 7, username: "username", score: 7 },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex flex-col">
        {/* Header section */}
        <div className="flex items-center justify-between px-[90px] py-[38px] max-md:px-[40px] max-sm:px-[20px]">
          <div className="text-[#1D0D0D] text-2xl font-bold font-[Poppins]">
            Excluded Soldiers Of Hitler
          </div>
          
          {/* Mobile menu buttons - hidden on desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-20 text-[#142F38] text-lg font-semibold font-[Open Sans]">
              <div>Home</div>
              <div>Poems</div>
              <div>Contact Us</div>
            </div>
            
            <div className="flex items-center gap-6 bg-[#142E38] px-6 py-10 rounded-[54px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6665 2.6665C21.2905 2.6665 26.6665 8.0425 26.6665 14.6665C26.6665 21.2905 21.2905 26.6665 14.6665 26.6665C8.0425 26.6665 2.6665 21.2905 2.6665 14.6665C2.6665 8.0425 8.0425 2.6665 14.6665 2.6665ZM14.6665 23.9998C19.8225 23.9998 23.9998 19.8225 23.9998 14.6665C23.9998 9.50917 19.8225 5.33317 14.6665 5.33317C9.50917 5.33317 5.33317 9.50917 5.33317 14.6665C5.33317 19.8225 9.50917 23.9998 14.6665 23.9998ZM25.9798 24.0945L29.7518 27.8652L27.8652 29.7518L24.0945 25.9798L25.9798 24.0945Z" fill="white"/>
              </svg>
              
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.3335 29.3335C5.3335 26.5045 6.4573 23.7914 8.45769 21.791C10.4581 19.7906 13.1712 18.6668 16.0002 18.6668C18.8291 18.6668 21.5422 19.7906 23.5426 21.791C25.543 23.7914 26.6668 26.5045 26.6668 29.3335H24.0002C24.0002 27.2118 23.1573 25.1769 21.657 23.6766C20.1567 22.1763 18.1219 21.3335 16.0002 21.3335C13.8784 21.3335 11.8436 22.1763 10.3433 23.6766C8.84302 25.1769 8.00016 27.2118 8.00016 29.3335H5.3335ZM16.0002 17.3335C11.5802 17.3335 8.00016 13.7535 8.00016 9.3335C8.00016 4.9135 11.5802 1.3335 16.0002 1.3335C20.4202 1.3335 24.0002 4.9135 24.0002 9.3335C24.0002 13.7535 20.4202 17.3335 16.0002 17.3335ZM16.0002 14.6668C18.9468 14.6668 21.3335 12.2802 21.3335 9.3335C21.3335 6.38683 18.9468 4.00016 16.0002 4.00016C13.0535 4.00016 10.6668 6.38683 10.6668 9.3335C10.6668 12.2802 13.0535 14.6668 16.0002 14.6668Z" fill="white"/>
              </svg>
              
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 5.3335H28V8.00016H4V5.3335ZM12 14.6668H28V17.3335H12V14.6668ZM4 24.0002H28V26.6668H4V24.0002Z" fill="white"/>
              </svg>
            </div>
          </div>
          
          {/* Mobile view controls - shown only on mobile */}
          <div className="flex md:hidden items-center gap-8">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6665 2.6665C21.2905 2.6665 26.6665 8.0425 26.6665 14.6665C26.6665 21.2905 21.2905 26.6665 14.6665 26.6665C8.0425 26.6665 2.6665 21.2905 2.6665 14.6665C2.6665 8.0425 8.0425 2.6665 14.6665 2.6665ZM14.6665 23.9998C19.8225 23.9998 23.9998 19.8225 23.9998 14.6665C23.9998 9.50917 19.8225 5.33317 14.6665 5.33317C9.50917 5.33317 5.33317 9.50917 5.33317 14.6665C5.33317 19.8225 9.50917 23.9998 14.6665 23.9998ZM25.9798 24.0945L29.7518 27.8652L27.8652 29.7518L24.0945 25.9798L25.9798 24.0945Z" fill="white"/>
            </svg>
            
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5.3335H28V8.00016H4V5.3335ZM12 14.6668H28V17.3335H12V14.6668ZM4 24.0002H28V26.6668H4V24.0002Z" fill="white"/>
            </svg>
          </div>
        </div>
        
        {/* Leaderboard header */}
        <div className="w-full h-[102px] bg-[#142F38] flex items-center justify-between px-[90px] max-md:px-[40px] max-sm:px-[20px]">
          <div className="text-white font-['Roboto_Condensed'] text-[70px] font-bold max-md:text-[50px] max-sm:text-[40px]">
            LEADER BOARD
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-white font-['Roboto'] text-[40px] max-md:text-[32px] max-sm:text-[24px]">
              Poem
            </div>
            <ArrowDown className="w-6 h-6 text-white opacity-80" />
          </div>
        </div>
        
        {/* Leaderboard content */}
        <div className="px-[90px] py-10 max-md:px-[40px] max-sm:px-[20px]">
          <div className="flex flex-col gap-[72px] text-white font-['M_PLUS_1'] text-2xl">
            {leaderboardEntries.map((entry) => (
              <div key={entry.rank} className="flex items-center gap-[51px]">
                <div>{entry.rank}</div>
                <div>{entry.username}</div>
                <div>{entry.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
