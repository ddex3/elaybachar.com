import React, { useState, useEffect } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

interface PortfolioGalleryProps {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
  sectionId: string;
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ title, subtitle, items, sectionId }) => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());

  const handleImageError = (itemId: number) => {
    setImageErrors(prev => new Set(prev).add(itemId));
  };

  const handleImageLoad = (itemId: number) => {
    setImagesLoaded(prev => new Set(prev).add(itemId));
  };

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = items.map((item) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            handleImageLoad(item.id);
            resolve();
          };
          img.onerror = () => {
            handleImageError(item.id);
            resolve();
          };
          img.src = item.imageUrl;
        });
      });

      await Promise.all(imagePromises);
    };

    preloadImages();
  }, [items]);

  return (
    <section 
      id={sectionId} 
      className="section-padding bg-white"
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id={`${sectionId}-title`} 
            className="text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl font-thin tracking-wider mb-4 text-balance"
          >
            {title}
          </h2>
          <p className="text-responsive-xl font-light text-gray-600 tracking-wide text-balance max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div 
          className="portfolio-grid" 
          role="list" 
          aria-label={`${title} gallery`}
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="group relative aspect-responsive overflow-hidden bg-gray-100 cursor-pointer rounded-lg sm:rounded-xl"
              role="listitem"
            >
              {imageErrors.has(item.id) ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <div className="text-center text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Image not available</p>
                  </div>
                </div>
              ) : (
                <img
                  src={item.imageUrl}
                  alt={`${item.title} - ${item.category} photography by Elay Bachar`}
                  className="img-responsive transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                  onLoad={() => handleImageLoad(item.id)}
                  onError={() => handleImageError(item.id)}
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <div className="text-center text-white">
                    <p className="text-sm font-light tracking-wider opacity-80">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;