import { Instagram } from "lucide-react";
import { AiOutlineDiscord } from "react-icons/ai";
import { Header } from "@/components/layout/Header";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full min-h-screen bg-stone-800 relative">
      <div className="w-full bg-white/25 shadow-lg outline outline-1 outline-offset-[-1px] outline-white overflow-hidden">
        <Header />
        
        <div className="relative w-full px-4 md:px-16 min-h-[600px] md:min-h-[800px]">
          {/* Decorative backgrounds */}
          <div className="absolute inset-0 z-0">
            <div className="hidden md:block w-52 h-80 absolute right-20 top-1/4 origin-top-left rotate-[38.26deg] bg-stone-300 shadow-lg blur-xl" />
            <div className="hidden md:block w-36 h-[40vh] absolute right-24 top-[5vh] origin-top-left rotate-[38.26deg] bg-amber-100 shadow-lg blur-[100px]" />
            <div className="hidden md:block w-72 h-72 absolute left-1/3 top-24 bg-emerald-300/25 rounded-full shadow-lg blur-[100px]" />
            <div className="hidden md:block w-96 h-96 absolute right-12 top-1/2 bg-white/25 rounded-full shadow-lg blur-[100px]" />
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block absolute right-[81.5px] top-[calc(40%)] h-[calc(42%)] w-0.5 bg-black z-0" />

          <div className="flex flex-col md:flex-row relative z-10">
            {/* Left side text */}
            <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Poppins'] text-slate-800 leading-tight md:leading-[82px] mt-8 md:mt-0">
                SCRIVENERS CLUB<br />PRESENTS YOU
              </h1>
              <p className="mt-6 md:mt-8 text-xl md:text-2xl text-gray-900 font-normal font-['Open Sans'] leading-loose max-w-[633px]">
                Website where you can read stories, poems, quotes submitted by our members, see scoreboards of competition.
              </p>

              {/* Social links for mobile */}
              <div className="flex md:hidden mt-8 gap-4">
                <a 
                  href="https://discord.gg/e3bceyAC2b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-sky-400 transition-colors"
                >
                  <AiOutlineDiscord size={28} />
                </a>
                <a 
                  href="https://www.instagram.com/scriveners.club/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-sky-400 transition-colors"
                >
                  <Instagram size={28} />
                </a>
              </div>
            </div>

            {/* Right side image + grouped ellipses */}
            <div className="w-full md:w-1/2 flex justify-center items-center relative mt-20">
              <div className="relative flex justify-center items-center">
                {/* Gradient background circle */}
                <div className="absolute w-[600px] h-[600px] bg-gradient-to-bl from-stone-400 to-lime-100 rounded-full blur-[80px] z-0" />

                {/* Image */}
                <div className="w-[300px] h-[300px] md:w-[562px] md:h-[563px] rounded-full overflow-hidden shadow-md border border-black/10 z-10">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/ad5bbae593c2463dac7a2da4d170e8bc/40374c2f807a26f9b787f374c6caf686aff303b5?placeholderIfAbsent=true" 
                    alt="Scriveners Club" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Social links on side for desktop */}
              <div className="hidden md:flex flex-col absolute right-0 top-1/4 gap-5 z-20">
                <a 
                  href="https://discord.gg/e3bceyAC2b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-sky-400 transition-colors"
                  aria-label="Discord"
                >
                  <AiOutlineDiscord size={35} />
                </a>
                <a 
                  href="https://www.instagram.com/scriveners.club/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-sky-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Quote section at bottom */}
          <div className="w-full flex mt-8 md:mt-16 relative z-10">
            <div className="hidden md:block w-64 h-32 bg-stone-400 relative">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/ad5bbae593c2463dac7a2da4d170e8bc/9c65d963d3c55c33193858d566004e96b8d8a857?placeholderIfAbsent=true" 
                alt="Book" 
                className="w-48 h-32 absolute left-4 top-0 object-cover"
              />
            </div>
            <div className="w-full bg-slate-800 p-6 md:p-8 rounded-br-[20px] md:rounded-none">
              <p className="text-white text-base md:text-lg leading-loose">
                You know you've read a good book when you turn the last page and feel a little as if you have lost a friend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
