import React from 'react';

// Custom smooth scroll function for finer control over duration and easing
const smoothScrollTo = (targetSelector: string, duration: number = 1000) => {
  const targetElement = document.querySelector(targetSelector);
  if (!targetElement) return;

  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const headerOffset = window.innerWidth >= 768 ? 80 : 64; // Match CSS in index.html
  const distance = targetPosition - headerOffset;
  let startTime: number | null = null;

  // Easing function for a smooth acceleration/deceleration effect
  const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      smoothScrollTo(targetId, 1000);
    }
  };

  return (
    <section id="home" className="min-h-[60vh] flex items-center justify-center text-center py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Full-Stack Developer & Creative Problem-Solver
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          I build beautiful, responsive, and robust web applications from scratch. Passionate about clean code, intuitive UI/UX, and leveraging modern technologies to create amazing digital experiences.
        </p>
        <a 
          href="#projects" 
          onClick={handleNavClick}
          className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
