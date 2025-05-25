
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

interface SymphonyOfMindsBannerProps {
  onRegisterClick: () => void;
}

const SymphonyOfMindsBanner = ({ onRegisterClick }: SymphonyOfMindsBannerProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full relative overflow-hidden">
      <AspectRatio ratio={isMobile ? 2.4/1 : 16/4.5} className="bg-gradient-to-br from-amber-50 to-orange-100 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        {/* Animated background elements matching poster theme */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating pencils */}
          <div className="absolute top-10 left-10 text-amber-600/30 animate-float text-4xl">✏️</div>
          <div className="absolute top-20 right-20 text-orange-600/40 animate-float-slow text-3xl">📝</div>
          <div className="absolute bottom-16 left-16 text-yellow-600/35 animate-float text-5xl">📚</div>
          <div className="absolute bottom-10 right-10 text-amber-700/30 animate-float-slow text-4xl">🎭</div>
          
          {/* Animated bees like in poster */}
          <div className="absolute top-8 right-1/4 w-8 h-8 animate-float">
            <div className="w-full h-full bg-yellow-400 rounded-full relative">
              <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>
          <div className="absolute bottom-12 left-1/3 w-6 h-6 animate-float-slow">
            <div className="w-full h-full bg-yellow-400 rounded-full relative">
              <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
            </div>
          </div>
          
          {/* Decorative triangular banners like in poster */}
          <div className="absolute top-4 left-1/4 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-orange-400/40 animate-float"></div>
          <div className="absolute top-8 right-1/3 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-amber-500/40 animate-float-slow"></div>
          
          {/* Animated gradient orbs with poster colors */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-300/30 to-amber-400/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-br from-yellow-300/30 to-orange-300/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>
        
        {/* Content overlay with poster-inspired styling */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 z-10 bg-gradient-to-br from-amber-50/80 to-orange-100/80">
          {/* Word Art Title matching poster style */}
          <div className="relative mb-4">
            <h1 className="text-4xl md:text-8xl font-bold text-amber-900 font-['Playfair Display'] text-center mb-1 md:mb-2 drop-shadow-lg transform">
              Symphony Of Minds
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-orange-800 font-['Playfair Display'] text-center transform ">
              2025
            </h2>
            {/* Decorative underline matching poster */}
            <div className="w-full h-2 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 rounded-full mt-2 transform -rotate-1"></div>
          </div>
          
          <p className="text-sm md:text-xl text-amber-800 font-semibold font-['K2D'] text-center mb-2 md:mb-4 px-2 animate-fade-in">
            Organized by English dept. and Scriveners club, GGITS
          </p>
          <p className="text-sm md:text-lg text-amber-700 font-medium font-['K2D'] text-center mb-4 md:mb-8 px-2 animate-fade-in delay-500">
            Join us for an immersive experience of creativity, expression, and literary excellence!
          </p>
          
          <button 
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-base md:text-xl font-bold font-['Inter'] px-8 py-4 md:py-5 rounded-full w-48 md:w-60 h-14 md:h-18 inline-flex justify-center items-center mt-2 md:mt-4 hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-amber-800 animate-pulse"
          >
            Register Now
          </button>
        </div>
      </AspectRatio>
    </div>
  );
};

export default SymphonyOfMindsBanner;
