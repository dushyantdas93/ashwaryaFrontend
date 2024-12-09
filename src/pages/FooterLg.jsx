import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  FaInstagram,
  FaLinkedin,
  FaHashnode,
  FaMedium,
  FaGithub,
} from "react-icons/fa6";

const FooterLg = () => {
  const icons = [
    {
      socialIcon: FaInstagram,
      url: "https://www.instagram.com/dushyantdas93/",
    },
    {
      socialIcon: FaGithub,
      url: "https://github.com/dushyantdas93",
    },
    {
      socialIcon: FaLinkedin,
      url: "https://www.linkedin.com/in/dushyant-manikpuri-b2433b259/",
    },
    {
      socialIcon: FaHashnode,
      url: "https://hashnode.com/@dushyantdas93",
    },
    {
      socialIcon: FaMedium,
      url: "https://medium.com/@dushyantdas93",
    },
  ];

  return (
    <div className="bg-gray-800 text-white py-10">
      {/* Footer Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
        {/* Logo and About */}
        <div className="space-y-4">
          <img src="images/logo.png" alt="Logo" className="w-32" />
          <p className="text-sm">
            We provide Wedding Pandal Decoration, Wedding Catering, Full
            Catering, Birthday Party Organizing, Engagement Party, and Pandal
            Decoration services.
          </p>
          <ul className="flex space-x-4">
            {icons.map((icon, index) => (
              <li key={index}>
                <a
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-400"
                >
                  <icon.socialIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-col space-y-2 items-start">
            <button className="text-sm hover:text-gray-400">Home</button>
            <button className="text-sm hover:text-gray-400">About</button>
            <button className="text-sm hover:text-gray-400">Services</button>
            <button className="text-sm hover:text-gray-400">
              Video Gallery
            </button>
            <button className="text-sm hover:text-gray-400">
              Photo Gallery
            </button>
            <button className="text-sm hover:text-gray-400">Enquiry</button>
            <button className="text-sm hover:text-gray-400">Contact Us</button>
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#" className="hover:text-gray-400">
                Wedding Pandal Decoration
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Wedding Catering
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Full Catering
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Birthday Party Organizing
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Engagement Party
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-400">
                Pandal Decoration
              </Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Address</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <p>Dhanbad, Jharkhand.</p>
            </li>
            <li>
              <p>+91 8877887627, 9304768892</p>
            </li>
            <li>
              <p>shrishyamevents47@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-5 space-y-4 lg:space-y-0">
          <p className="text-sm">
            Copyright © 2023 All Rights Reserved by{" "}
            <span className="font-bold">Shrishya Events</span>
          </p>
          <ul className="flex space-x-4">
            <li>
              <Link to="#" className="text-sm hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLg;
