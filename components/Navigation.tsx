'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold gradient-text">
            TJ
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>

          <a
            href="https://github.com/tanay-jagadeesh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
