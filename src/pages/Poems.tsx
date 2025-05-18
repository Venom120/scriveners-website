import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Interface for poem images
interface PoemAuthor {
  name: string;
  poemCount: number;
  images: string[];
}

const Poems = () => {
  const [authors, setAuthors] = useState<PoemAuthor[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // This function fetches poem data from the static list of image paths
    const fetchPoemData = () => {
      try {
        // Extract author names and poem counts from filenames
        const poemAuthors: Record<string, string[]> = {};
        
        // Extract poem files from folder structure
        const poemFiles = [
          "Abhiyanshu 1.jpg", "Abhiyanshu 2.jpg", "Abhiyanshu 3.jpg", 
          "Abhiyanshu 4.jpg", "Abhiyanshu 5.jpg", "Abhiyanshu 6.jpg",
          "Ansh 1.jpg", 
          "Anuj 1.jpg", "Anuj 2.jpg", "Anuj 3.jpg",
          "Gurjot 1.jpg", "Gurjot 2.jpg", "Gurjot 3.jpg", "Gurjot 4.jpg", 
          "Gurjot 5.jpg", "Gurjot 6.jpg", "Gurjot 7.jpg",
          "Kanak 1.jpg", "Kanak 2.jpg", "Kanak 3.jpg", "Kanak 4.jpg", 
          "Kanak 5.jpg", "Kanak 6.jpg", "Kanak 7.jpg", "Kanak 8.jpg", "Kanak 9.jpg",
          "Karuna 1.jpg", "Karuna 2.jpg", "Karuna 3.jpg", "Karuna 4.jpg", "Karuna 5.jpg",
          "Kruti 1.jpg", "Kruti 2.jpg", "Kruti 3.jpg", "Kruti 4.jpg", "Kruti 5.jpg", "Kruti 6.jpg",
          "Kushagra 1.jpg",
          "Mahak 1.jpg", "Mahak 2.jpg", "Mahak 3.jpg", "Mahak 4.jpg", "Mahak 5.jpg", 
          "Mahak 6.jpg", "Mahak 7.jpg", "Mahak 8.jpg", "Mahak 9.jpg", "Mahak 10.jpg", 
          "Mahak 11.jpg", "Mahak 12.jpg", "Mahak 13.jpg", "Mahak 14.jpg", "Mahak 15.jpg", "Mahak 16.jpg",
          "Niharika 1.jpg", "Niharika 2.jpg", "Niharika 3.jpg", "Niharika 4.jpg", "Niharika 5.jpg",
          "Niharika 6.jpg", "Niharika 7.jpg", "Niharika 8.jpg", "Niharika 9.jpg", "Niharika 10.jpg",
          "Niharika 11.jpg", "Niharika 12.jpg", "Niharika 13.jpg", "Niharika 14.jpg", "Niharika 15.jpg",
          "Niharika 16.jpg", "Niharika 17.jpg",
          "Shreya 1.jpg", "Shreya 2.jpg",
          "Simpi 1.jpg", "Simpi 2.jpg", "Simpi 3.jpg", "Simpi 4.jpg", "Simpi 5.jpg", 
          "Simpi 6.jpg", "Simpi 7.jpg", "Simpi 8.jpg", "Simpi 9.jpg", "Simpi 10.jpg", 
          "Simpi 11.jpg", "Simpi 12.jpg", "Simpi 13.jpg", "Simpi 14.jpg",
          "Urooz 1.jpg",
          "Vaanya 1.jpg", "Vaanya 2.jpg", "Vaanya 3.jpg", "Vaanya 4.jpg", "Vaanya 5.jpg",
          "Vaanya 6.jpg", "Vaanya 7.jpg", "Vaanya 8.jpg", "Vaanya 9.jpg", "Vaanya 10.jpg",
          "Vaanya 11.jpg", "Vaanya 12.jpg"
        ];
        
        // Group poems by author
        poemFiles.forEach(file => {
          const nameParts = file.split(' ');
          const name = nameParts[0]; // Extract author name
          
          if (!poemAuthors[name]) {
            poemAuthors[name] = [];
          }
          
          // Create path to image
          poemAuthors[name].push(`/src/components/images/poems/${file}`);
        });
        
        // Convert to array and sort by poem count (descending)
        const sortedAuthors = Object.entries(poemAuthors)
          .map(([name, images]) => ({
            name,
            poemCount: images.length,
            images
          }))
          .sort((a, b) => b.poemCount - a.poemCount);
        
        setAuthors(sortedAuthors);
        
        // Set default selected author to the one with most poems
        if (sortedAuthors.length > 0) {
          setSelectedAuthor(sortedAuthors[0].name);
        }
      } catch (error) {
        console.error("Error loading poem images:", error);
      }
    };

    fetchPoemData();
  }, []);

  const handleAuthorClick = (authorName: string) => {
    setSelectedAuthor(authorName);
    setCurrentImageIndex(0); // Reset to first image when changing author
  };

  const handleNextImage = () => {
    if (!selectedAuthor) return;
    const authorData = authors.find(a => a.name === selectedAuthor);
    if (authorData && currentImageIndex < authorData.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Get the current author's poems
  const currentAuthor = authors.find(a => a.name === selectedAuthor);
  const currentImage = currentAuthor?.images[currentImageIndex];

  return (
    <div className="min-h-screen bg-stone-900 flex flex-col">
      <Header />
      
      <div className="container mx-auto p-6 flex-grow">
        <div className="w-full max-w-7xl mx-auto mt-8 relative">
          {/* Decorative blurs similar to Index page */}
          <div className="absolute w-96 h-96 right-0 bottom-0 bg-white/25 rounded-full shadow-xl blur-[100px] -z-10" />
          <div className="absolute w-72 h-72 left-1/4 top-20 bg-emerald-300/25 rounded-full shadow-xl blur-[100px] -z-10" />
          <div className="absolute w-60 h-80 right-1/4 bottom-40 bg-stone-300 shadow-xl blur-xl -z-10" />
          
          <h1 className="text-5xl font-bold text-sky-400 mb-8 text-center">POEMS</h1>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Authors sidebar */}
            <div className="lg:col-span-1 bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h2 className="text-2xl font-bold text-sky-400 mb-4">Authors</h2>
              <div className="space-y-2">
                {authors.map((author) => (
                  <button
                    key={author.name}
                    onClick={() => handleAuthorClick(author.name)}
                    className={cn(
                      "w-full text-left px-4 py-2 rounded-lg flex items-center justify-between",
                      selectedAuthor === author.name 
                        ? "bg-sky-400/20 text-white" 
                        : "text-gray-300 hover:bg-slate-700"
                    )}
                  >
                    <span className="text-xl font-medium">{author.name}</span>
                    <span className="bg-sky-400/40 text-white px-2 py-1 rounded-full text-sm">
                      {author.poemCount}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Poems display */}
            <div className="lg:col-span-2">
              {selectedAuthor ? (
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
                        onClick={handlePrevImage}
                        disabled={currentImageIndex === 0}
                        className="bg-black/40 text-white p-2 rounded-full disabled:opacity-30"
                      >
                        &#10094;
                      </button>
                      <button 
                        onClick={handleNextImage}
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
                        onClick={() => setCurrentImageIndex(index)}
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
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-xl text-gray-400">Select an author to view their poems</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poems;
