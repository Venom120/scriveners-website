
import { Header } from "@/components/layout/Header";
import PoemAuthorList from "@/components/poems/PoemAuthorList";
import PoemViewer from "@/components/poems/PoemViewer";
import BackgroundEffects from "@/components/poems/BackgroundEffects";
import { usePoemData } from "@/hooks/usePoemData";

const Poems = () => {
  const {
    authors,
    selectedAuthor,
    currentAuthor,
    currentImage,
    currentImageIndex,
    handleAuthorClick,
    handleNextImage,
    handlePrevImage,
    handleThumbnailClick
  } = usePoemData();

  return (
    <div className="min-h-screen bg-stone-900 flex flex-col">
      <Header />
      
      <div className="container mx-auto p-6 flex-grow">
        <div className="w-full max-w-7xl mx-auto mt-8 relative">
          <BackgroundEffects />
          
          <h1 className="text-5xl font-bold text-sky-400 mb-8 text-center">POEMS</h1>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Authors sidebar */}
            <PoemAuthorList 
              authors={authors}
              selectedAuthor={selectedAuthor}
              onAuthorClick={handleAuthorClick}
            />
            
            {/* Poems display */}
            <div className="lg:col-span-2">
              <PoemViewer 
                selectedAuthor={selectedAuthor}
                currentAuthor={currentAuthor}
                currentImageIndex={currentImageIndex}
                currentImage={currentImage}
                onPrevImage={handlePrevImage}
                onNextImage={handleNextImage}
                onThumbnailClick={handleThumbnailClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poems;
