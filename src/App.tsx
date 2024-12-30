import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import AboutMe from './components/AboutMe.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import GitHub from './components/GitHub.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import DotNavigation from './components/DotNavigation.tsx';
import { ThemeToggle } from './components/ThemeToggle.tsx';
import { ThemeProvider } from './components/ThemeProvider.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import './styles/tailwind.css';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // GSAP animations
    gsap.to('.fade-in', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.fade-in',
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#f8f8f8] via-[#f0f0f0] to-[#f8f8f8] dark:from-[#000000] dark:via-[#1a1a1a] dark:to-[#000000] transition-colors duration-500">
        <CustomCursor />
        <Header />
        <DotNavigation />
        <main>
          <Hero />
          <AboutMe />
          <Projects />
          <GitHub />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
