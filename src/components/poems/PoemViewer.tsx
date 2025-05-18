
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PoemAuthor {
  name: string;
  poemCount: number;
  images: string[];
}

interface PoemViewerProps {
  selectedAuthor: string | null;
  currentAuthor: PoemAuthor | undefined;
  currentImageIndex: number;
  currentImage: string | undefined;
  onPrevImage: () => void;
  onNextImage: () => void;
  onThumbnailClick: (index: number) => void;
}

const PoemViewer = ({ 
  selectedAuthor,
  currentAuthor,
  currentImageIndex, 
  currentImage,
  onPrevImage,
  onNextImage,
  onThumbnailClick
}: PoemViewerProps) => {
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  // Effect to scroll the thumbnail into view when currentImageIndex changes
  useEffect(() => {
    if (thumbnailRefs.current[currentImageIndex]) {
      thumbnailRefs.current[currentImageIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentImageIndex]);

  if (!selectedAuthor) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-xl text-gray-400">Select an author to view their poems</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-white/10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-sky-400">{selectedAuthor}'s Poems</h2>
        <div className="text-white">
          {currentImageIndex + 1} / {currentAuthor?.images.length}
        </div>
      </div>
      
      {/* Poem image */}
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-2 relative">
        {currentImage && (
          <img 
            src={currentImage} 
            alt={`${selectedAuthor}'s poem ${currentImageIndex + 1}`}
            className="w-full object-contain rounded-lg max-h-[70vh]"
          />
        )}
        
        {/* Navigation controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button 
            onClick={onPrevImage}
            disabled={currentImageIndex === 0}
            className="bg-black/40 text-white p-2 rounded-full disabled:opacity-30 hover:bg-black/60"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={onNextImage}
            disabled={!currentAuthor || currentImageIndex === currentAuthor.images.length - 1}
            className="bg-black/40 text-white p-2 rounded-full disabled:opacity-30 hover:bg-black/60"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      {/* Thumbnails with automatic scrolling */}
      <ScrollArea ref={scrollAreaRef} className="mt-4 pb-2">
        <div className="flex space-x-2 p-1 min-w-full">
          {currentAuthor?.images.map((image, index) => (
            <button
              key={index}
              ref={el => thumbnailRefs.current[index] = el}
              onClick={() => onThumbnailClick(index)}
              className={cn(
                "flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all",
                currentImageIndex === index ? "border-sky-400 shadow-glow" : "border-transparent"
              )}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default PoemViewer;
