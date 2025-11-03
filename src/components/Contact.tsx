import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Get In <span className="text-cyan-400">Touch</span>
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-12">
        I'm currently open to new opportunities and collaborations. Feel free to reach out through any of the platforms below. Let's build something amazing together!
      </p>
      <div className="flex justify-center items-center flex-wrap gap-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="group flex items-center justify-center h-16 w-16 bg-gray-800 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
          >
            <span className="h-8 w-8">{link.icon}</span>
          </a>
        ))}
      </div>
       <footer className="mt-20 pt-8 border-t border-gray-800 text-gray-500">
        <p>&copy; {new Date().getFullYear()} - Built with React & Tailwind CSS.</p>
      </footer>
    </section>
  );
};

export default Contact;
