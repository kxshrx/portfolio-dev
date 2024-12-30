import React from 'react';
import { 
  FaReact, FaNode, FaPython, FaDocker, FaGithub, FaAws,
  FaDatabase, FaCode, FaTools, FaCloud, FaUser
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiNextdotjs, SiExpress,
  SiMongodb, SiPostgresql, SiRedis, SiFirebase,
  SiGooglecloud, SiVercel, SiNetlify, SiLinux,
  SiGit, SiDocker, SiFastapi, SiGraphql
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

interface TechStack {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const techStacks: TechStack[] = [
  {
    name: 'React',
    icon: <FaReact className="text-4xl" />,
    color: 'text-[#61DAFB] hover:text-[#61DAFB]/80'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-4xl" />,
    color: 'text-[#3178C6] hover:text-[#3178C6]/80'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="text-4xl" />,
    color: 'text-text-primary dark:text-dark-text-primary hover:text-text-secondary dark:hover:text-dark-text-secondary'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-4xl" />,
    color: 'text-[#06B6D4] hover:text-[#06B6D4]/80'
  },
  {
    name: 'Node.js',
    icon: <FaNode className="text-4xl" />,
    color: 'text-[#339933] hover:text-[#339933]/80'
  },
  {
    name: 'Python',
    icon: <FaPython className="text-4xl" />,
    color: 'text-[#3776AB] hover:text-[#3776AB]/80'
  },
  {
    name: 'Express',
    icon: <SiExpress className="text-4xl" />,
    color: 'text-text-primary dark:text-dark-text-primary hover:text-text-secondary dark:hover:text-dark-text-secondary'
  },
  {
    name: 'FastAPI',
    icon: <SiFastapi className="text-4xl" />,
    color: 'text-[#009688] hover:text-[#009688]/80'
  },
  {
    name: 'GraphQL',
    icon: <SiGraphql className="text-4xl" />,
    color: 'text-[#E10098] hover:text-[#E10098]/80'
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-4xl" />,
    color: 'text-[#47A248] hover:text-[#47A248]/80'
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="text-4xl" />,
    color: 'text-[#4169E1] hover:text-[#4169E1]/80'
  },
  {
    name: 'Redis',
    icon: <SiRedis className="text-4xl" />,
    color: 'text-[#DC382D] hover:text-[#DC382D]/80'
  },
  {
    name: 'Firebase',
    icon: <SiFirebase className="text-4xl" />,
    color: 'text-[#FFCA28] hover:text-[#FFCA28]/80'
  },
  {
    name: 'Git',
    icon: <SiGit className="text-4xl" />,
    color: 'text-[#F05032] hover:text-[#F05032]/80'
  },
  {
    name: 'Docker',
    icon: <SiDocker className="text-4xl" />,
    color: 'text-[#2496ED] hover:text-[#2496ED]/80'
  },
  {
    name: 'AWS',
    icon: <FaAws className="text-4xl" />,
    color: 'text-[#FF9900] hover:text-[#FF9900]/80'
  },
  {
    name: 'Google Cloud',
    icon: <SiGooglecloud className="text-4xl" />,
    color: 'text-[#4285F4] hover:text-[#4285F4]/80'
  },
  {
    name: 'Vercel',
    icon: <SiVercel className="text-4xl" />,
    color: 'text-text-primary dark:text-dark-text-primary hover:text-text-secondary dark:hover:text-dark-text-secondary'
  },
  {
    name: 'Linux',
    icon: <SiLinux className="text-4xl" />,
    color: 'text-text-primary dark:text-dark-text-primary hover:text-text-secondary dark:hover:text-dark-text-secondary'
  },
  {
    name: 'React Native',
    icon: <TbBrandReactNative className="text-4xl" />,
    color: 'text-[#61DAFB] hover:text-[#61DAFB]/80'
  }
];

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-transparent scroll-smooth">
      <div className="absolute top-0 left-0 w-full h-[30vh] -translate-y-full">
        <div 
          className="w-full h-full bg-gradient-to-b from-black/15 light:from-black/10 to-transparent"
        />
      </div>
      <div className="container mx-auto px-8 max-w-6xl">
        {/* About Me Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-8 text-left flex items-center gap-3">
            <FaUser className="text-accent w-8 h-8" />
            About Me
          </h2>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Profile Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                Hi, I'm Kishore Kumar, a passionate Full Stack Developer with expertise in building modern web applications. I specialize in React, TypeScript, and Node.js, focusing on creating performant and user-friendly solutions.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                With a strong foundation in both frontend and backend development, I enjoy tackling complex problems and turning innovative ideas into reality. I'm particularly interested in scalable architectures, clean code practices, and optimizing user experiences.
              </p>
              <p className="text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Profile Image/Illustration */}
            <div className="relative order-first md:order-last">
              <div className="aspect-square rounded-2xl overflow-hidden bg-accent/10 dark:bg-black/40 relative">
                {/* Add your profile image here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-accent">Your Image Here</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 dark:bg-black/40 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 dark:bg-black/40 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div>
          <h2 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-8 text-left flex items-center gap-3">
            <FaCode className="text-accent w-8 h-8" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6 max-w-4xl mx-auto">
            {techStacks.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex items-center justify-center"
                title={tech.name}
              >
                <div className={`transition-all duration-300 ${tech.color} hover:scale-125`}>
                  {tech.icon}
                </div>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
