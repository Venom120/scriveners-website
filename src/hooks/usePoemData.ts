
import { useState, useEffect } from "react";

// Interface for poem images
interface PoemAuthor {
  name: string;
  poemCount: number;
  images: string[];
}

export const usePoemData = () => {
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
    if (selectedAuthor !== authorName) {
      setSelectedAuthor(authorName);
      setCurrentImageIndex(0); // Reset to first image when changing author
    }
  };

  const handleNextImage = () => {
    if (!selectedAuthor) return;
    const authorData = authors.find(a => a.name === selectedAuthor);
    if (authorData && currentImageIndex < authorData.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Get the current author's poems
  const currentAuthor = authors.find(a => a.name === selectedAuthor);
  const currentImage = currentAuthor?.images[currentImageIndex];

  return {
    authors,
    selectedAuthor,
    currentAuthor,
    currentImage,
    currentImageIndex,
    handleAuthorClick,
    handleNextImage,
    handlePrevImage,
    handleThumbnailClick
  };
};
