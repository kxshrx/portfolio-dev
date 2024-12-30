import React, { useState, useEffect, useCallback } from 'react';

const DotNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Sections matching App.tsx structure
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'github', label: 'GitHub' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const calculateVisibility = useCallback(() => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    
    // Show dots after scrolling past 30% of the first viewport height
    return scrollPosition > viewportHeight * 0.3;
  }, []);

  const findActiveSection = useCallback(() => {
    // Get all section elements
    const sectionElements = sections.map(section => ({
      id: section.id,
      element: document.getElementById(section.id)
    })).filter(section => section.element);

    // If at bottom of page, select last section
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
      return sections[sections.length - 1].id;
    }

    // Find the section that's currently most visible in the viewport
    let mostVisibleSection = sections[0].id;
    let maxVisibleHeight = 0;

    sectionElements.forEach(({ id, element }) => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const visibleHeight = Math.min(
        window.innerHeight,
        Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0))
      );
      
      if (visibleHeight > maxVisibleHeight) {
        maxVisibleHeight = visibleHeight;
        mostVisibleSection = id;
      }
    });

    return mostVisibleSection;
  }, [sections]);

  const handleScroll = useCallback(() => {
    // Update visibility
    const shouldBeVisible = calculateVisibility();
    if (shouldBeVisible !== isVisible) {
      setIsVisible(shouldBeVisible);
    }

    // Only update active section if navigation is visible
    if (shouldBeVisible) {
      const newActiveSection = findActiveSection();
      if (newActiveSection && newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    }
  }, [activeSection, isVisible, calculateVisibility, findActiveSection]);

  useEffect(() => {
    const scrollListener = () => {
      handleScroll();
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerOffset = 80; // Adjust this value based on your fixed header height
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav 
      className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
      }`}
    >
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end"
            aria-label={`Navigate to ${section.label} section`}
          >
            <span className="absolute right-8 px-3 py-1 text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-bg-light dark:bg-bg-dark text-text-primary dark:text-dark-text-primary shadow-lg">
              {section.label}
            </span>
            
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-accent scale-125'
                  : 'bg-text-secondary/20 dark:bg-dark-text-secondary/20 hover:bg-accent/50'
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default DotNavigation;
