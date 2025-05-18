
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

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
            className="bg-black/40 text-white p-2 rounded-full disabled:opacity-30"
          >
            &#10094;
          </button>
          <button 
            onClick={onNextImage}
            disabled={!currentAuthor || currentImageIndex === currentAuthor.images.length - 1}
            className="bg-black/40 text-white p-2 rounded-full disabled:opacity-30"
          >
            &#10095;
          </button>
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="mt-4 flex overflow-x-auto pb-2 space-x-2">
        {currentAuthor?.images.map((image, index) => (
          <button
            key={index}
            onClick={() => onThumbnailClick(index)}
            className={cn(
              "flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2",
              currentImageIndex === index ? "border-sky-400" : "border-transparent"
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
    </div>
  );
};

export default PoemViewer;
