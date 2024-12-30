import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-8 h-8" />,
      url: 'https://twitter.com/kxshrx',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="w-8 h-8" />,
      url: 'https://github.com/kxshrx',
      color: 'hover:text-[#333]'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-8 h-8" />,
      url: 'https://linkedin.com/in/kishorkumar2821',
      color: 'hover:text-[#0077B5]'
    }
  ];

  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-text-secondary/20 dark:via-dark-text-secondary/20 to-transparent" />
      </div>
      <section id="contact" className="py-16 bg-transparent">
        <div className="container mx-auto px-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-8 flex items-center gap-3 justify-center">
            <FaEnvelope className="text-accent w-8 h-8" />
            Let's Connect!
          </h2>
          
          <p className="text-base text-text-secondary dark:text-dark-text-secondary mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just want to connect!
          </p>

          <div className="flex flex-col items-center gap-6">
            {/* Email Button */}
            <a
              href="mailto:kishorkumar2821@gmail.com"
              className="group inline-flex items-center gap-2 px-5 py-2 text-base font-medium text-accent hover:text-white bg-accent/10 hover:bg-accent rounded-full transition-all duration-300"
            >
              <FaEnvelope className="w-4 h-4 transition-transform group-hover:scale-110" />
              kishorkumar2821@gmail.com
            </a>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 text-text-primary dark:text-dark-text-primary ${link.color} transition-all duration-300 hover:scale-110`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
