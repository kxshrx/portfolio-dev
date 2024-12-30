import React, { useRef, useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCode, FaTimes, FaLaptopCode } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with React and TypeScript',
    longDescription: 'A responsive portfolio website featuring smooth animations, dark mode support, and optimized performance. Built with React, TypeScript, and Tailwind CSS.',
    image: 'https://placehold.co/600x400/2563eb/ffffff/png?text=Portfolio',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    github: 'https://github.com/kxshrx/portfolio',
    demo: 'https://kxshrx.dev'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Full-stack task management application with real-time updates',
    longDescription: 'A comprehensive task management solution with features like real-time updates, drag-and-drop organization, and team collaboration. Built using the MERN stack.',
    image: 'https://placehold.co/600x400/6366f1/ffffff/png?text=Task+Management',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/kxshrx/task-manager',
    demo: 'https://taskmanager.kxshrx.dev'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking application with detailed forecasts',
    longDescription: 'A weather dashboard that provides real-time weather data, 7-day forecasts, and interactive maps. Integrates with multiple weather APIs for accurate data.',
    image: 'https://placehold.co/600x400/ec4899/ffffff/png?text=Weather+Dashboard',
    technologies: ['React', 'Redux', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/kxshrx/weather-dashboard',
    demo: 'https://weather.kxshrx.dev'
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce platform with features like user authentication, product management, and secure payment processing.',
    longDescription: 'Built with React and Node.js, this platform supports various payment methods and offers a smooth user experience.',
    image: 'https://placehold.co/600x400/14b8a6/ffffff/png?text=E-Commerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/kxshrx/ecommerce',
    demo: 'https://ecommerce-demo.com'
  },
  {
    id: 5,
    title: 'Blog Application',
    description: 'A full-featured blogging platform allowing users to create, edit, and comment on posts.',
    longDescription: 'Built with Next.js and GraphQL, this application provides a seamless experience for both writers and readers.',
    image: 'https://placehold.co/600x400/6366f1/ffffff/png?text=Blog+App',
    technologies: ['Next.js', 'GraphQL', 'Apollo', 'MongoDB'],
    github: 'https://github.com/kxshrx/blog',
    demo: 'https://blog-demo.com'
  }
];

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl w-full max-w-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full aspect-video object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
            {project.title}
          </h3>
          
          <p className="text-text-secondary dark:text-dark-text-secondary mb-6">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-accent/10 dark:bg-accent/20 text-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                View Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-light text-white rounded-lg transition-colors"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div 
      className="project-card group cursor-pointer bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[450px] flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-4 py-2 text-white text-sm font-medium">
              View Details
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-text-primary dark:text-dark-text-primary group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-accent/10 dark:bg-accent/20 text-accent font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-accent/10 dark:bg-accent/20 text-accent font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors duration-300 group/link"
                aria-label="View GitHub Repository"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="w-5 h-5 text-text-secondary dark:text-dark-text-secondary group-hover/link:text-accent transition-colors" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors duration-300 group/link"
                aria-label="View Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt className="w-4 h-4 text-text-secondary dark:text-dark-text-secondary group-hover/link:text-accent transition-colors" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const cards = container.getElementsByClassName('project-card');
    if (cards.length === 0) return;

    const cardWidth = cards[0].clientWidth;
    const gap = 32;
    const scrollAmount = index * (cardWidth + gap);
    const maxScroll = container.scrollWidth - container.clientWidth;

    container.scrollTo({
      left: Math.min(scrollAmount, maxScroll),
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  const scrollToOffset = (offset: number) => {
    const container = carouselRef.current;
    if (!container) return;

    const cards = container.getElementsByClassName('project-card');
    if (cards.length === 0) return;

    const cardWidth = cards[0].clientWidth;
    const gap = 32;
    const containerWidth = container.clientWidth;
    const cardsPerView = Math.floor(containerWidth / (cardWidth + gap));
    const maxIndex = projects.length - cardsPerView;

    const newIndex = Math.max(0, Math.min(maxIndex, currentIndex + offset));
    if (newIndex !== currentIndex) {
      scrollToIndex(newIndex);
    }
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const cards = container.getElementsByClassName('project-card');
    if (cards.length === 0) return;

    const cardWidth = cards[0].clientWidth;
    const gap = 32;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const cardsPerView = Math.floor(containerWidth / (cardWidth + gap));
    const maxIndex = projects.length - cardsPerView;
    
    const newIndex = Math.max(0, Math.min(maxIndex, Math.round(scrollLeft / (cardWidth + gap))));
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollTimeout: NodeJS.Timeout;
    const handleScrollThrottled = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    };

    carousel.addEventListener('scroll', handleScrollThrottled);
    handleScroll(); // Initial position check

    return () => {
      carousel.removeEventListener('scroll', handleScrollThrottled);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      handleScroll();
      if (currentIndex > 0) {
        scrollToIndex(currentIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <section id="projects" className="py-24 bg-transparent scroll-smooth">
      <div className="container mx-auto px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-8 text-left flex items-center gap-3">
          <FaLaptopCode className="text-accent w-8 h-8" />
          My Work
        </h2>
        
        <div className="relative group/carousel">
          {/* Left Arrow */}
          <button
            onClick={() => scrollToOffset(-1)}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 focus:outline-none"
            aria-label="Previous projects"
          >
            <div className="bg-gradient-to-r from-bg-light/80 dark:from-bg-dark/80 to-transparent p-2 rounded-l-lg">
              <FaChevronLeft className="w-6 h-6 text-text-primary dark:text-dark-text-primary hover:text-accent transition-colors" />
            </div>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollToOffset(1)}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 focus:outline-none"
            aria-label="Next projects"
          >
            <div className="bg-gradient-to-l from-bg-light/80 dark:from-bg-dark/80 to-transparent p-2 rounded-r-lg">
              <FaChevronRight className="w-6 h-6 text-text-primary dark:text-dark-text-primary hover:text-accent transition-colors" />
            </div>
          </button>

          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="overflow-x-auto py-4 scroll-smooth hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div className="flex gap-8 px-4">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="w-[350px] flex-shrink-0 transform transition-transform duration-300 hover:-translate-y-2"
                >
                  <ProjectCard 
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-accent w-6'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
