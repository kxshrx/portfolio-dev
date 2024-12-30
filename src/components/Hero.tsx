import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    // Animate the floating circle
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        y: -20,
        rotation: 360,
        scale: 1.1,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    // Create gradient animation
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        backgroundPosition: '100% 100%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-transparent relative overflow-hidden"
      style={{
        backgroundSize: '200% 200%',
        backgroundPosition: '0% 0%'
      }}
    >
      {/* Background circle */}
      <div
        ref={circleRef}
        className="absolute w-[40rem] h-[40rem] rounded-full bg-gradient-to-r from-purple-600/20 via-purple-500/15 to-purple-600/20 dark:from-accent/10 dark:via-purple-800/5 dark:to-accent/5 blur-3xl"
        style={{ zIndex: 0 }}
      />

      {/* Content container */}
      <div className="relative z-10 text-center space-y-12">
        {/* Name and typewriter effect */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-text-primary light:text-dark-text-primary">
            Hi, I'm <span className="bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#5B21B6] text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">Kishore</span>
          </h1>
          <div className="h-20 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1500,
                'UI/UX Designer',
                1500,
                'Problem Solver',
                1500,
                'Tech Enthusiast',
                1500,
              ]}
              wrapper="h2"
              speed={50}
              className="text-3xl md:text-5xl font-medium text-text-secondary light:text-dark-text-secondary"
              repeat={Infinity}
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="pt-12 flex items-center justify-center gap-6">
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-10 py-5 bg-accent text-white text-xl rounded-full font-medium transition-all duration-300 hover:bg-accent/80 hover:scale-105 hover:shadow-lg"
          >
            Explore My Work
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-10 py-5 border-2 border-accent text-accent text-xl rounded-full font-medium transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh]">
        <div 
          className="w-full h-full bg-gradient-to-t from-black/15 light:from-black/10 to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
