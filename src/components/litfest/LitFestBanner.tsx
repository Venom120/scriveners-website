
import { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

interface LitFestBannerProps {
  onRegisterClick: () => void;
}

const LitFestBanner = ({ onRegisterClick }: LitFestBannerProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full relative overflow-hidden">
      <AspectRatio ratio={isMobile ? 2.65/1 : 16/4.5} className="bg-zinc-200 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        {/* Left side image */}
        <div className="absolute left-0 top-0 h-full z-0 w-1/3 overflow-hidden">
          <img 
            src="/src/components/images/litfest24left.svg"
            alt="LitFest2k24"
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Center image */}
        <div className="absolute left-1/3 top-0 h-full z-0 w-1/3 overflow-hidden">
          <img 
            src="/src/components/images/litfest24centre.svg"
            alt="LitFest2k24"
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Right side image */}
        <div className="absolute right-0 top-0 h-full z-0 w-1/3 overflow-hidden">
          <img 
            src="/src/components/images/litfest24right.svg"
            alt="LitFest2k24"
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 z-10 bg-slate-50/60 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 font-['K2D'] text-center mb-1 md:mb-2">
            LITFEST 2025
          </h1>
          <p className="text-lg md:text-4xl text-black font-normal font-['K2D'] text-center mb-2 md:mb-8 px-2">
            Sorry for confusion, LitFest events dates might be changed and new events are been added.
          </p>
          <p className="text-lg md:text-4xl text-black font-normal font-['K2D'] text-center mb-2 md:mb-8 px-2">
            Stay tuned for more updates and exciting events coming your way!
          </p>
          
          <button 
            onClick={onRegisterClick}
            className="bg-sky-400/80 text-neutral-900 text-base md:text-xl font-normal font-['Inter'] px-3 py-2 md:py-4 rounded-[51px] w-32 md:w-44 h-10 md:h-14 inline-flex justify-center items-center mt-1 md:mt-4 hover:bg-sky-400/80 transition-colors"
          >
            Register now
          </button>
        </div>
      </AspectRatio>
    </div>
  );
};

export default LitFestBanner;
