/**
 * useImagePreloader Hook
 * 
 * Custom hook to preload an array of images before rendering content.
 * Returns loading state to control when to show the main application.
 * 
 * @param imageUrls - Array of image URLs to preload
 * @returns Object containing loading state
 */

import { useState, useEffect } from 'react';

interface UseImagePreloaderReturn {
  /** Whether images are still loading */
  isLoading: boolean;
  /** Progress percentage (0-100) */
  progress: number;
}

export const useImagePreloader = (imageUrls: string[]): UseImagePreloaderReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setIsLoading(false);
      setProgress(100);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    /**
     * Preload a single image using the Image API
     */
    const preloadImage = (url: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        
        img.onerror = () => {
          // Continue even if an image fails to load
          loadedCount++;
          setProgress(Math.round((loadedCount / totalImages) * 100));
          resolve();
        };
        
        img.src = url;
      });
    };

    /**
     * Preload all images concurrently
     */
    const preloadAllImages = async () => {
      try {
        await Promise.all(imageUrls.map(preloadImage));
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    preloadAllImages();
  }, [imageUrls]);

  return { isLoading, progress };
};
