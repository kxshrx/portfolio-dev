import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Full Stack Developer',
    company: 'Freelance',
    duration: '2023 - Present',
    description: [
      'Developed and deployed multiple full-stack web applications using React, TypeScript, and Node.js',
      'Implemented responsive designs and optimized performance across various devices',
      'Collaborated with clients to gather requirements and deliver solutions that exceed expectations'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Tech Startup',
    duration: '2022 - 2023',
    description: [
      'Built and maintained responsive web applications using React and modern JavaScript',
      'Collaborated with UI/UX designers to implement pixel-perfect designs',
      'Participated in code reviews and contributed to improving development practices'
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Git', 'Agile']
  },
  {
    title: 'Web Development Projects',
    company: 'Personal & Academic',
    duration: '2021 - 2022',
    description: [
      'Created multiple web applications focusing on user experience and modern design principles',
      'Implemented authentication, database integration, and RESTful APIs',
      'Gained hands-on experience with various frontend and backend technologies'
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'Python', 'SQL', 'Git']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-transparent scroll-smooth">
      <div className="container mx-auto px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-8 text-left flex items-center gap-3">
          <FaBriefcase className="text-accent w-8 h-8" />
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-accent/30 dark:bg-accent/20" />

          {/* Experience items */}
          <div role="list" className="space-y-12 ml-6">
            {experiences.map((exp, index) => (
              <div key={`${exp.title}-${index}`} role="listitem" className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-[1.8rem] top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full ring-2 ring-bg-light dark:ring-black"
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="bg-white/50 dark:bg-black/40 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                      {exp.title}
                    </h3>
                    <p className="text-accent dark:text-accent/80 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-text-secondary dark:text-dark-text-secondary font-medium mt-1">
                      {exp.duration}
                    </p>
                  </div>

                  <ul className="list-disc list-inside space-y-2 mb-4 text-text-secondary dark:text-dark-text-secondary">
                    {exp.description.map((desc, i) => (
                      <li key={`${exp.title}-${i}`} className="text-base">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-accent/10 dark:bg-black/60 text-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
