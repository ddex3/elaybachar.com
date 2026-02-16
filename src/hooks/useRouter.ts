import { useState, useEffect, useCallback } from 'react';

export interface Route {
  path: string;
  sectionId: string;
  label: string;
}

const routes: Route[] = [
  { path: '/', sectionId: 'home', label: 'Home' },
  { path: '/portrait', sectionId: 'portrait', label: 'Portrait' },
  { path: '/concept', sectionId: 'concept', label: 'Concept' },
  { path: '/love', sectionId: 'love', label: 'Love' },
  { path: '/about', sectionId: 'about', label: 'About' },
  { path: '/contact', sectionId: 'contact', label: 'Contact' },
];

export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [activeSection, setActiveSection] = useState('home');

  const getSectionIdFromPath = useCallback((path: string): string => {
    const route = routes.find(r => r.path === path);
    return route ? route.sectionId : 'home';
  }, []);

  const getPathFromSectionId = useCallback((sectionId: string): string => {
    const route = routes.find(r => r.sectionId === sectionId);
    return route ? route.path : '/';
  }, []);

  const navigate = useCallback((path: string) => {
    const sectionId = getSectionIdFromPath(path);
    
    window.history.pushState({ path }, '', path);
    setCurrentPath(path);
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [getSectionIdFromPath]);

  const navigateToSection = useCallback((sectionId: string) => {
    const path = getPathFromSectionId(sectionId);
    navigate(path);
  }, [getPathFromSectionId, navigate]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const path = window.location.pathname;
      const sectionId = getSectionIdFromPath(path);
      
      setCurrentPath(path);
      setActiveSection(sectionId);

      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getSectionIdFromPath]);

  useEffect(() => {
    const path = window.location.pathname;
    const sectionId = getSectionIdFromPath(path);
    
    setCurrentPath(path);
    setActiveSection(sectionId);

    if (path !== '/') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [getSectionIdFromPath]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const path = getPathFromSectionId(sectionId);
            
            if (path !== currentPath) {
              window.history.replaceState({ path }, '', path);
              setCurrentPath(path);
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [currentPath, getPathFromSectionId]);

  return {
    currentPath,
    activeSection,
    navigate,
    navigateToSection,
    routes
  };
};
