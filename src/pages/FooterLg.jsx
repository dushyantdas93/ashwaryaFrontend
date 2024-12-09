import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  FaInstagram,
  FaLinkedin,
  FaHashnode,
  FaMedium,
  FaGithub,
} from "react-icons/fa6";

import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";

const FooterLg = () => {

  const contactInfo = {
    name: import.meta.env.VITE_NAME,
    profession: import.meta.env.VITE_PROFESSION,
    address: import.meta.env.VITE_ADDRESS,
    contact: import.meta.env.VITE_CONTACT,
    gmail: import.meta.env.VITE_GMAIL,
    instagram: import.meta.env.VITE_INSTAGRAM,
    linkedIn: import.meta.env.VITE_LINKEDIN,
    youtube: import.meta.env.VITE_YOUTUBE,
    facebook: import.meta.env.VITE_FACEBOOK,
    whatsapp: import.meta.env.VITE_WHATSAPP,
  };

  const socialIcons = [
    { icon: FaInstagram, url: contactInfo?.instagram, label: "Instagram" },
    { icon: IoLogoYoutube, url: contactInfo?.youtube, label: "GitHub" },
    { icon: FaLinkedin, url: contactInfo?.linkedIn, label: "LinkedIn" },
    { icon: FaFacebookSquare, url:contactInfo?.facebook, label: "Hashnode" },
   
  ];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Video Gallery", to: "/video-gallery" },
    { name: "Photo Gallery", to: "/photo-gallery" },
    
    { name: "Contact Us", to: "/contact" },
  ];

  const services = [
    "Wedding",
    "Pre Wedding ",
    "Video shooting",
    "Birthday",
    "Engagement photo",
    "College Function",
  ];

  return (
    <div className="bg-gray-800 text-white py-10">
      {/* Footer Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
        {/* Logo and About */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{contactInfo.name}</h1>
          <p className="text-sm">
            We provide Wedding,
    Pre Wedding ,
    Video shooting,
    Birthday,
    Engagement photo,
    College Function.
          </p>
          <ul className="flex space-x-4">
            {socialIcons.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-400"
                  aria-label={item.label}
                >
                  <item.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
  <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
  <ul className="space-y-2">
    {quickLinks.map((link, index) => (
      <li key={index}>
        <Link
          to={link.id} // Corresponds to the ID of the target section
          smooth={true} // Enables smooth scrolling
          duration={500} // Duration of scroll in milliseconds
          className="text-sm hover:text-gray-400 cursor-pointer"
          aria-label={`Scroll to ${link.name}`}
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index}>
                <Link to="#" className="text-sm hover:text-gray-400">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Address & Contact</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <p>{contactInfo.address}</p>
            </li>
            <li>
              <p>+91 {contactInfo.contact}, {contactInfo.contact}</p>
            </li>
            <li>
              <p>{contactInfo?.gmail}</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-5 space-y-4 lg:space-y-0">
          <p className="text-sm">
       {" "}
            <span className="font-bold">{contactInfo.name}</span>
          </p>
          <ul className="flex space-x-4">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="text-sm hover:text-gray-400"
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLg;
