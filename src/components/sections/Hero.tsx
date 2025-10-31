import React from 'react';
import Button from '../ui/Button';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-gray-800">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I'm Shivanand Maurya 👋</h1>
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'Automation Engineer',
            2000,
            'Tech Creator',
            2000,
            'Fitness Motivator',
            2000,
          ]}
          wrapper="h2"
          speed={50}
          className="text-2xl md:text-4xl text-blue-400 mb-8"
          repeat={Infinity}
        />
        <div className="space-x-4 mb-8">
          <Button>View Projects</Button>
          <Button variant="secondary">Download Resume</Button>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Shivanand-Maurya" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/shivanandmaurya" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400"><FaLinkedin /></a>
          <a href="https://instagram.com/transformwithshiva" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-400"><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
