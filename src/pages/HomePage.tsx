import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* Other sections will be added here */}
    </main>
  );
};

export default HomePage;