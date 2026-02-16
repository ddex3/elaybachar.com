import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play, Pause, Heart, Camera } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

interface LovePortfolioProps {
  items: PortfolioItem[];
}

const LovePortfolio: React.FC<LovePortfolioProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, 3000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, items.length]);

  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.imageUrl;
      img.onload = () => handleImageLoad(item.id);
      img.onerror = () => handleImageError(item.id);
    });
  }, [items]);

  const handleImageLoad = (itemId: number) => {
  };

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const toggleLike = (itemId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleImageError = (itemId: number) => {
    setImageErrors(prev => new Set(prev).add(itemId));
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="love" 
      className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
      aria-labelledby="love-title"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-50 to-transparent rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gray-50 to-transparent rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="love-title" className="text-5xl md:text-7xl font-thin tracking-wider mb-6 text-gray-900">
              LOVE
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl cursor-pointer group" 
            onClick={() => openModal(items[currentIndex])}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {imageErrors.has(items[currentIndex]?.id || 0) ? (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center text-gray-500">
                  <Camera className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Image not available</p>
                </div>
              </div>
            ) : (
              <motion.img
                key={currentIndex}
                src={items[currentIndex]?.imageUrl}
                alt={`${items[currentIndex]?.title} - Featured love`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                loading="eager"
                fetchPriority="high"
                onError={() => handleImageError(items[currentIndex]?.id || 0)}
              />
            )}
            
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-8 left-8 text-white">
                <motion.p 
                  key={`category-${currentIndex}`}
                  className="text-lg font-light tracking-wider opacity-80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {items[currentIndex]?.category}
                </motion.p>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-6 pointer-events-none">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  prevItem();
                }}
                className="group p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous love"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>
              
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  nextItem();
                }}
                className="group p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next love"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            <div className="absolute top-6 right-6 flex space-x-3 pointer-events-none">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(items[currentIndex]?.id, e);
                }}
                className="group p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={likedItems.has(items[currentIndex]?.id) ? "Unlike love" : "Like love"}
              >
                <Heart 
                  className={`w-5 h-5 ${likedItems.has(items[currentIndex]?.id) ? 'text-red-500 fill-red-500' : 'text-white'}`} 
                />
              </motion.button>
              
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAutoPlaying(!isAutoPlaying);
                }}
                className="group p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isAutoPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </motion.button>
            </div>
          </motion.div>


        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative flex items-center justify-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              {imageErrors.has(selectedItem.id) ? (
                <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center bg-gray-200">
                  <div className="text-center text-gray-500">
                    <Camera className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg">Image not available</p>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedItem.imageUrl}
                  alt={`${selectedItem.title} - ${selectedItem.category} photography`}
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                  loading="eager"
                  fetchPriority="high"
                  onError={() => handleImageError(selectedItem.id)}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LovePortfolio;
