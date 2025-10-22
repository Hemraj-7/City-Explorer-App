// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="bg-[rgb(27,160,222)] p-2 rounded-xl">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s6-5.686 6-10A6 6 0 0012 5a6 6 0 00-6 6c0 4.314 6 10 6 10z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-[rgb(27,160,222)]">City Explorer</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-800 hover:text-blue-500 font-medium">Home</a>
            <a href="#map" className="text-gray-800 hover:text-blue-500 font-medium">Map</a>
            <a href="#weather" className="text-gray-800 hover:text-blue-500 font-medium">Weather</a>
            <a href="#features" className="text-gray-800 hover:text-blue-500 font-medium">Features</a>
            <a
              href="#map"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
          <a href="#" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-blue-500 font-medium">Home</a>
          <a href="#map" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-blue-500 font-medium">Map</a>
          <a href="#weather" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-blue-500 font-medium">Weather</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-gray-800 hover:text-blue-500 font-medium">Features</a>
          <a
            href="#map"
            onClick={() => setIsOpen(false)} 
            className="block w-full text-center bg-[hsl(201,82%,51%)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(16,156,231)] transition"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
