
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
      <AspectRatio ratio={isMobile ? 3/2 : 16/5} className="bg-zinc-200 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        {/* Background blur effect */}
        <div className="absolute left-[30%] top-[-12px] w-72 h-72 bg-emerald-300/25 rounded-full shadow-[10px_14px_104px_0px_rgba(0,0,0,0.12)] blur-[100px] z-0"></div>
        
        {/* Left side image */}
        <div className="absolute left-0 top-0 h-full z-0">
          <img 
            src="/src/components/images/litfest24left.svg" 
            alt="LitFest decoration" 
            className="h-full object-contain"
          />
        </div>
        
        {/* Right side image */}
        <div className="absolute right-0 top-0 h-full z-0">
          <img 
            src="/src/components/images/litfest24right.svg" 
            alt="LitFest decoration" 
            className="h-full object-contain"
          />
        </div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 font-['K2D'] text-center mb-2">
            LITFEST 2025
          </h1>
          <p className="text-xl md:text-4xl text-gray-800 font-normal font-['K2D'] text-center mb-4 md:mb-8 px-2">
            Join us for a celebration of literature, creativity, and expression
          </p>
          
          <button 
            onClick={onRegisterClick}
            className="bg-sky-400/60 text-neutral-900 text-lg md:text-xl font-normal font-['Inter'] px-4 py-3 md:py-4 rounded-[51px] w-36 md:w-44 h-12 md:h-14 inline-flex justify-center items-center mt-2 md:mt-4 hover:bg-sky-400/80 transition-colors"
          >
            Register now
          </button>
        </div>
      </AspectRatio>
    </div>
  );
};

export default LitFestBanner;
