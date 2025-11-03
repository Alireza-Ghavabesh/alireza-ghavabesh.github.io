import React, { useState, useEffect } from 'react';

// NOTE: smoothScrollTo is REMOVED since we are using CSS scroll-behavior.

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // ... (Your existing scroll logic for header styling remains)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // NOTE: handleNavClick is REMOVED.
  // The links will now rely on the native anchor behavior.

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Notice the removal of onClick={handleNavClick} */}
        <a href="#home" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          DevFolio
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              {/* Notice the removal of onClick={handleNavClick} */}
              <a href="#projects" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Projects
              </a>
            </li>
            <li>
              {/* Notice the removal of onClick={handleNavClick} */}
              <a href="#contact" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;