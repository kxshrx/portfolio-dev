import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const externalLinks = [
    { name: 'Resume', href: '/resume.pdf', icon: faFileAlt },
    { name: 'GitHub', href: 'https://github.com/kxshrx', icon: faGithub },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/kxshrx', icon: faLinkedin },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bg-light/80 dark:bg-bg-dark/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      } ${isScrolled && !isAtTop ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
              className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
              Portfolio
          </Link>

          {/* External Links */}
          <div className="flex items-center space-x-4 no-select">
            {externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent transition-colors duration-300"
                aria-label={link.name}
              >
                <FontAwesomeIcon icon={link.icon} className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
