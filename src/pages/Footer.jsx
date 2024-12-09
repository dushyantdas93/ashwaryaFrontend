import React from "react";
import { FaHome, FaCog, FaImages, FaPhoneAlt } from "react-icons/fa"; // Import React Icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-2 lg:hidden fixed bottom-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Home Section */}
          {[
            { title: "home", icon: FaHome },
            { title: "service", icon: FaCog },
            { title: "contact", icon: FaPhoneAlt },
            { title: "gallery", icon: FaImages },
          ]?.map((item, idx) => {
            return (
              <div className="flex flex-col items-center justify-center ">
                <a
                  href={item.title}
                  className="text-white  hover:text-gray-400 text-sm flex items-center justify-center flex-col gap-1 capitalize"
                >
                  <item.icon className="text-xl" />
                  {item.title}
                </a>
              </div>
            );
          })}

          {/* Service Section */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
