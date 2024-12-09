import React from "react";
import { FaHome, FaCog, FaImages, FaPhoneAlt } from "react-icons/fa"; // Import React Icons
import { Link } from "react-scroll"; // Import Link from react-scroll

const Footer = () => {
  const menuItems = [
    { title: "home", icon: FaHome, to: "home" },
    { title: "service", icon: FaCog, to: "services" },
    { title: "contact", icon: FaPhoneAlt, to: "contact" },
    { title: "gallery", icon: FaImages, to: "gallery" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-2 lg:hidden fixed bottom-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-around items-center">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center"
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="text-white hover:text-gray-400 text-sm flex items-center justify-center flex-col gap-1 capitalize cursor-pointer"
                aria-label={`Navigate to ${item.title}`}
              >
                <item.icon className="text-xl" />
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
