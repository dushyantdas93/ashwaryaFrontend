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
import { Link } from "react-scroll"; // Import Link from react-scroll

import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const contactInfo = {
    name: import.meta.env.VITE_NAME }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menu items array for consistency
  const menuItems = [
    { name: "Home", icon: FaHome, to: "home" },
    { name: "Service", icon: FaCog, to: "services" },
    { name: "Gallery", icon: FaImages, to: "gallery" },
    { name: "Contact", icon: FaPhoneAlt, to: "contact" },
    { name: "About Us", icon: FaInfoCircle, to: "about-us" },
    
    { name: "Video Gallery", icon: FaVideo, to: "video-gallery" },
  ];

  return (
    <nav className="bg-gray-900 text-white  fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
           {contactInfo?.name}
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
             {!isMenuOpen ? <FaBars className="h-6 w-6" /> :
              <IoClose className="h-6 w-6 " />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-4">
            {menuItems.map(({ name, icon: Icon, to }) => (
              <Link
                key={name}
                to={to}
                smooth={true}
                duration={500}
                className="flex items-center space-x-2 hover:text-gray-400 cursor-pointer"
              >
                <Icon className="lg:hidden " />
                <span className="font-bold">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden bg-gray-800 px-4 pb-3 space-y-2`}
      >
        {menuItems.map(({ name, icon: Icon, to }) => (
          <Link
            key={name}
            to={to}
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            <Icon />
            <span>{name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
