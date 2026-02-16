import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PortfolioGallery from './components/PortfolioGallery';
import PortraitPortfolio from './components/PortraitPortfolio';
import ConceptPortfolio from './components/ConceptPortfolio';
import LovePortfolio from './components/LovePortfolio';
import About from './components/About';
import Contact from './components/Contact';
import Thanks from './components/Thanks';
import Footer from './components/Footer';
import { portraitPortfolio, conceptPortfolio, lovePortfolio } from './data/portfolioData';
import { useRouter } from './hooks/useRouter';

const ImagePreloader: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const criticalImages = [
      '/images/general/elayProfile.jpg',
      '/images/general/mainImage.png',
      portraitPortfolio[0]?.imageUrl,
      conceptPortfolio[0]?.imageUrl,
      lovePortfolio[0]?.imageUrl,
      ...portraitPortfolio.slice(0, 2).map(item => item.imageUrl),
      ...conceptPortfolio.slice(0, 2).map(item => item.imageUrl),
      ...lovePortfolio.slice(0, 2).map(item => item.imageUrl)
    ].filter(Boolean);

    setTotalImages(criticalImages.length);

    const preloadCriticalImages = async () => {
      let loadedCount = 0;
      
      const loadImage = (imageUrl: string) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          
          const timeout = setTimeout(() => {
            loadedCount++;
            setImagesLoaded(loadedCount);
            resolve();
          }, 1000);
          
          img.onload = () => {
            clearTimeout(timeout);
            loadedCount++;
            setImagesLoaded(loadedCount);
            resolve();
          };
          
          img.onerror = () => {
            clearTimeout(timeout);
            loadedCount++;
            setImagesLoaded(loadedCount);
            resolve();
          };
          
          img.src = imageUrl;
        });
      };

      for (const imageUrl of criticalImages) {
        await loadImage(imageUrl);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 500);

      setTimeout(() => {
        const allImages = [
          ...portraitPortfolio.map(item => item.imageUrl),
          ...conceptPortfolio.map(item => item.imageUrl),
          ...lovePortfolio.map(item => item.imageUrl),
          '/images/general/elayProfile.jpg',
          '/images/general/mainImage.png'
        ];
        
        const remainingImages = allImages.filter(img => !criticalImages.includes(img));
        remainingImages.forEach((imageUrl) => {
          const img = new Image();
          img.src = imageUrl;
        });
      }, 100);
    };

    preloadCriticalImages();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-slate-200 border-t-slate-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-light">Loading... {Math.round((imagesLoaded / totalImages) * 100)}%</p>
          <div className="w-64 bg-slate-200 rounded-full h-2 mt-4">
            <div 
              className="bg-slate-600 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${(imagesLoaded / totalImages) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

function HomePage() {
  const { navigateToSection } = useRouter();

  const scrollToPortfolio = () => {
    navigateToSection('portrait');
  };

  return (
    <>
      <Hero onScrollToPortfolio={scrollToPortfolio} navigateToSection={navigateToSection} />
      
      <PortraitPortfolio items={portraitPortfolio} />
      
      <ConceptPortfolio items={conceptPortfolio} />
      
      <LovePortfolio items={lovePortfolio} />
      
      <About />
      
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ImagePreloader />
        <header>
          <Navigation />
        </header>
        
        <main role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </main>
        
        <Footer navigateToSection={() => {}} />
      </div>
    </Router>
  );
}

export default App;