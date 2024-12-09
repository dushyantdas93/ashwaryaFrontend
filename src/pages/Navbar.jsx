import React, { useState } from "react";
import {
  FaBars,
  FaHome,
  FaCog,
  FaImages,
  FaVideo,
  FaPhoneAlt,
  FaInfoCircle,
} from "react-icons/fa"; // Import React Icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <a href="#" className="text-2xl font-bold">
              {/* <img
                src="your-logo.png" // Replace with your logo's path
                alt="Logo"
                className="h-10"
              /> */}
                          Ashwarya Manik
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="#home"
                className="text-white flex items-center space-x-2 hover:text-gray-400"
              >
                <FaHome className="lg:hidden"/>
                <span>Home</span>
              </a>
              <a
                href="#services"
                className="text-white flex items-center space-x-2 hover:text-gray-400"
              >
                <FaCog className="lg:hidden"/>
                <span>Service</span>
              </a>
              <a
                href="#gallery"
                className="text-white flex items-center space-x-2 hover:text-gray-400"
              >
                <FaImages className="lg:hidden"/>
                <span>Gallery</span>
              </a>
              <a
                href="#contact"
                className="text-white flex items-center space-x-2 hover:text-gray-400"
              >
                <FaPhoneAlt className="lg:hidden"/>
                <span>Contact</span>
              </a>
              <a
                href="#about-us"
                className="text-white flex items-center space-x-2 hover:text-gray-400"
              >
                <FaInfoCircle className="lg:hidden"/>
                <span>About Us</span>
              </a>
              <a
                href="#enquiry"
                className="text-white flex items-center space-x-2 hover:text-gray-400"
              >
                <FaPhoneAlt className="lg:hidden"/>
                <span>Enquiry</span>
              </a>
              <a
                href="#video-gallery"
                className="text-white flex items-center space-x-2 hover:text-gray-400"
              >
                <FaVideo className="lg:hidden"/>
                <span>Video Gallery</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <a
            href="#home"
            className="text-white flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            <FaHome />
            <span>Home</span>
          </a>
          <a
            href="#services"
            className="text-white flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            <FaCog />
            <span>Service</span>
          </a>
          <a
            href="#gallery"
            className="text-white flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            <FaImages />
            <span>Gallery</span>
          </a>
          <a
            href="#contact"
            className="text-white flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            <FaPhoneAlt />
            <span>Contact</span>
          </a> */}
          <a
            href="#about-us"
            className="text-white flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            <FaInfoCircle />
            <span>About Us</span>
          </a>
          <a
            href="#enquiry"
            className="text-white flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            <FaPhoneAlt />
            <span>Enquiry</span>
          </a>
          <a
            href="#video-gallery"
            className="text-white flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
          >
            <FaVideo />
            <span>Video Gallery</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
