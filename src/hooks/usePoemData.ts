
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
    // This function fetches poem data dynamically from the images directory
    const fetchPoemData = async () => {
      try {
        // Create an empty object to store author data
        const poemAuthors: Record<string, string[]> = {};
        
        // Get all poem image files dynamically using import.meta
        const modules = import.meta.glob('/src/assets/poems/*.{jpg,jpeg,png}', { eager: true });

        Object.entries(modules).forEach(([path, mod]) => {
          // Extract the filename from the path
          const file = path.split('/').pop() || '';
          // Extract author name from filename (e.g., "Abhiyanshu 1.jpg" -> "Abhiyanshu")
          const nameParts = file.split(' ');
          const name = nameParts[0];
          if (!poemAuthors[name]) {
            poemAuthors[name] = [];
          }
          // Use the resolved URL from Vite
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const imageUrl = typeof mod === 'string' ? mod : (mod as any).default;
          poemAuthors[name].push(imageUrl);
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
