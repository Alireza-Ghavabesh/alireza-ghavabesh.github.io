import React, { useState, useEffect } from 'react';
import me from './../../assets/img/me.jpg'


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



  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        <nav className='w-full'>
          <ul className="flex space-x-6 justify-between">
            <div className='flex md:gap-7 gap-4'>
              <li>
                <a href="#projects" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  My Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  Contact Me
                </a>
              </li>
            </div>
            <li>
              <a href="#home" className="flex gap-2 items-center text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                <p className=''>Alireza ghavabesh</p>
                <img src={me} alt="me" className='w-12 h-12 rounded-full' />
              </a>
            </li>
          </ul>


        </nav>


      </div>
    </header>
  );
};

export default Header;