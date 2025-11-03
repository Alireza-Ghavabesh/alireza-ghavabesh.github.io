import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-6 md:px-12 py-8 pt-24">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
