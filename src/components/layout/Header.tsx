import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Shivanand Maurya</Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => 
                `hover:text-blue-400 transition-colors ${isActive ? 'text-blue-400' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        {/* Mobile menu button will go here */}
      </nav>
    </header>
  );
};

export default Header;
