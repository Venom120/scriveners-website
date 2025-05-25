
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

interface SymphonyOfMindsBannerProps {
  onRegisterClick: () => void;
}

const SymphonyOfMindsBanner = ({ onRegisterClick }: SymphonyOfMindsBannerProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full relative overflow-hidden">
      <AspectRatio ratio={isMobile ? 2.4/1 : 16/4.5} className="bg-zinc-200 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating musical notes */}
          <div className="absolute top-10 left-10 text-white/20 animate-bounce text-4xl">♪</div>
          <div className="absolute top-20 right-20 text-white/30 animate-pulse text-3xl">♫</div>
          <div className="absolute bottom-16 left-16 text-white/25 animate-bounce text-5xl">♬</div>
          <div className="absolute bottom-10 right-10 text-white/20 animate-pulse text-4xl">♩</div>
          
          {/* Animated gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-lg animate-pulse"></div>
        </div>

        {/* Left side image */}
        <div className="absolute left-0 top-0 h-full z-0 w-1/3 overflow-hidden">
          <img 
            src="/src/components/images/litfest24left.svg"
            alt="Symphony of Minds"
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Center image */}
        <div className="absolute left-1/3 top-0 h-full z-0 w-1/3 overflow-hidden">
          <img 
            src="/src/components/images/litfest24centre.svg"
            alt="Symphony of Minds"
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Right side image */}
        <div className="absolute right-0 top-0 h-full z-0 w-1/3 overflow-hidden">
          <img 
            src="/src/components/images/litfest24right.svg"
            alt="Symphony of Minds"
            className="h-full w-full object-cover"
          />
        </div>
        
        {/* Content overlay with word art */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-8 z-10 bg-slate-50/60 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          {/* Word Art Title */}
          <div className="relative mb-4">
            <h1 className="text-3xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-center mb-1 md:mb-2">
              Symphony of Minds
            </h1>
            {/* Decorative underline */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full animate-pulse"></div>
          </div>
          
          <p className="text-sm md:text-2xl text-gray-700 font-medium text-center mb-2 md:mb-4 px-2">
            Where Literature Meets Imagination
          </p>
          <p className="text-sm md:text-xl text-gray-600 font-normal text-center mb-4 md:mb-8 px-2">
            Join us for an immersive experience of creativity, expression, and literary excellence!
          </p>
          
          <button 
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base md:text-xl font-semibold px-6 py-3 md:py-4 rounded-full w-40 md:w-52 h-12 md:h-16 inline-flex justify-center items-center mt-2 md:mt-4 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Register Now
          </button>
        </div>
      </AspectRatio>
    </div>
  );
};

export default SymphonyOfMindsBanner;
