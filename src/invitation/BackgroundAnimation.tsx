
import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create floating books
    const bookColors = ['#8B4513', '#A52A2A', '#800000', '#D2B48C', '#654321'];
    const createFloatingItem = (type: string) => {
      const element = document.createElement('div');
      
      if (type === 'book') {
        element.className = 'bg-item book-floating animate-float';
        element.style.backgroundColor = bookColors[Math.floor(Math.random() * bookColors.length)];
      } else if (type === 'feather') {
        element.className = 'bg-item animate-float-slow';
        element.innerHTML = `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 5C20 15 10 20 5 25C10 30 20 35 25 45C30 35 40 30 45 25C40 20 30 15 25 5Z" fill="#D2B48C" />
        </svg>`;
      } else if (type === 'scroll') {
        element.className = 'bg-item animate-float';
        element.style.width = '60px';
        element.style.height = '40px';
        element.style.borderRadius = '5px';
        element.style.backgroundColor = '#F5F5DC';
        element.style.boxShadow = '0 3px 6px rgba(0,0,0,0.2)';
        element.style.border = '1px solid #D2B48C';
      }
      
      // Position randomly
      const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
      const containerHeight = containerRef.current?.offsetHeight || window.innerHeight;
      
      element.style.left = `${Math.random() * containerWidth}px`;
      element.style.top = `${Math.random() * containerHeight}px`;
      
      // Animation delay
      element.style.animationDelay = `${Math.random() * 5}s`;
      
      containerRef.current?.appendChild(element);
      
      // Remove after animation completes (for performance)
      setTimeout(() => {
        if (containerRef.current?.contains(element)) {
          containerRef.current.removeChild(element);
        }
      }, 30000);
    };
    
    // Create initial batch
    for (let i = 0; i < 8; i++) {
      createFloatingItem('book');
    }
    
    for (let i = 0; i < 5; i++) {
      createFloatingItem('feather');
    }
    
    for (let i = 0; i < 3; i++) {
      createFloatingItem('scroll');
    }
    
    // Create new items periodically
    const interval = setInterval(() => {
      const itemType = ['book', 'feather', 'scroll'][Math.floor(Math.random() * 3)];
      createFloatingItem(itemType);
    }, 3000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    ></div>
  );
};

export default BackgroundAnimation;
