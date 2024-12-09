import React from 'react';
import { Element } from 'react-scroll';
import {Link} from "react-router-dom"
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Slider from './Slider.jsx';
import AboutUs from './AboutUs.jsx';
import Services from './Services.jsx';
import Gallery from './Gallery.jsx';
import FooterLg from './FooterLg.jsx';
import Contact from './Contact.jsx';
import VideoGallery from './VideoGallery.jsx';

const Home = () => {

  const contactInfo = {
    whatsapp: import.meta.env.VITE_WHATSAPP,}
  return (
    <div className='relative'>
      <Navbar />
    <Link to={contactInfo.whatsapp} >
    <img src="/images/whatsapp-icons.webp" alt="" className='size-5   lg:size-10 fixed bottom-20 lg:bottom-10 right-5  lg:right-10 z-40' />
    </Link>
      <div className="container mx-auto h-screen ">
        {/* Navigation Links */}
        <nav className="fixed top-0 w-full bg-white shadow z-10">
          <ul className="flex justify-center space-x-4 py-4">
            <li>
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-blue-500"
              >
                Slider
              </Link>
            </li>
            <li>
              <Link 
                to="about-us" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-blue-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="services" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="gallery" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-blue-500"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-blue-500"
              >
              contact
              </Link>
            </li>
            <li>
              <Link 
                to="video-gallery" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-blue-500"
              >
                video-gallery
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sections */}
        <Element name="home" className="pt-20">
          <Slider />
        </Element>
        <Element name="about-us">
          <AboutUs />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="gallery">
          <Gallery />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Element name="video-gallery">
          <VideoGallery />
        </Element>

        <FooterLg />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
