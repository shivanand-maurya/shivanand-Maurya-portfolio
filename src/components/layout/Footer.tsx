import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Shivanand Maurya. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Social links will go here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
