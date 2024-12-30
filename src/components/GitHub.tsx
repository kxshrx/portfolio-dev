import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const GitHub: React.FC = () => {
  return (
    <section id="github" className="py-24 bg-transparent scroll-smooth">
      <div className="container mx-auto px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-8 text-left flex items-center gap-3">
          <FaGithub className="text-accent w-8 h-8" />
          GitHub Activity
        </h2>

        {/* Contribution Calendar */}
        <div className="bg-white/50 dark:bg-[#0a0a0a] backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300 mb-8">
          <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-4">
            Contribution Calendar
          </h3>
          <div className="relative">
            <img
              src="https://ghchart.rshah.org/7C3AED/kxshrx"
              alt="GitHub Contribution Calendar"
              className="w-full block dark:hidden"
            />
            <img
              src="https://ghchart.rshah.org/kxshrx"
              alt="GitHub Contribution Calendar"
              className="w-full hidden dark:block dark:invert dark:opacity-80"
            />
          </div>
        </div>

        {/* Featured Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: 'Portfolio Website',
              description: 'My personal portfolio website built with React and TailwindCSS',
              language: 'TypeScript',
              stars: 12,
              forks: 5
            },
            {
              name: 'Weather App',
              description: 'A weather application using OpenWeather API',
              language: 'JavaScript',
              stars: 8,
              forks: 3
            }
          ].map((repo, index) => (
            <div
              key={index}
              className="group p-6 bg-white/50 dark:bg-[#0a0a0a] backdrop-blur-sm rounded-xl hover:bg-white/60 dark:hover:bg-[#111111] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {repo.name}
              </h3>
              <p className="text-text-secondary dark:text-dark-text-secondary mb-4">
                {repo.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 group-hover:text-accent transition-colors duration-300">
                    <span className="text-text-secondary dark:text-dark-text-secondary">⭐</span>
                    <span className="text-text-secondary dark:text-dark-text-secondary">
                      {repo.stars}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 group-hover:text-accent transition-colors duration-300">
                    <span className="text-text-secondary dark:text-dark-text-secondary">🔱</span>
                    <span className="text-text-secondary dark:text-dark-text-secondary">
                      {repo.forks}
                    </span>
                  </div>
                </div>
                
                <div className="px-3 py-1 bg-accent/5 dark:bg-black/60 rounded-full group-hover:bg-accent/10 dark:group-hover:bg-black/80 transition-colors duration-300">
                  <span className="text-sm text-text-secondary dark:text-dark-text-secondary group-hover:text-accent transition-colors duration-300">
                    {repo.language}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Profile Button */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/kxshrx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#7C3AED]/10 dark:bg-[#0a0a0a]/60 hover:bg-[#7C3AED]/20 dark:hover:bg-[#0a0a0a]/80 text-[#7C3AED] rounded-full transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
