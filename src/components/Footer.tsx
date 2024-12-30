import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-8 bg-transparent relative">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-border dark:bg-dark-border opacity-20" />
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`absolute -top-4 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 dark:bg-black/60 hover:bg-accent/20 dark:hover:bg-black/80 text-accent transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <IoIosArrowUp className="w-5 h-5" />
      </button>

      <div className="container max-w-4xl mx-auto px-4">
        <p className="text-center text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
          {new Date().getFullYear()} | Kishore Kumar J
        </p>
      </div>
    </footer>
  );
};

export default Footer;
