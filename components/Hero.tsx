'use client';

import { useEffect, useState } from 'react';
import { ContainerTextScroll } from '@/components/ui/container-text-scroll';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ContainerTextScroll>
      {/* Animated background gradient - seasonal */}
      <div className="absolute inset-0 seasonal-bg-gradient"></div>

      {/* Floating orbs - seasonal */}
      <div className="absolute top-20 left-10 w-72 h-72 seasonal-orb-primary rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 seasonal-orb-secondary rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Tanay Jagadeesh</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Software Engineer & Data Scientist
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Building real-time payment systems, coding for orbit, and turning data into insights.
          <br />
          Basketball player. Chess strategist. Fitness enthusiast.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 seasonal-button-gradient rounded-full font-semibold hover:scale-105 transition-transform"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 seasonal-button-border rounded-full font-semibold seasonal-button-border hover:transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      </ContainerTextScroll>
    </section>
  );
}
