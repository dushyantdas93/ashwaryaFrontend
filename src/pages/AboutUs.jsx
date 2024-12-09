import React from 'react'
import dushyant from "/images/profile.avif"
import camera from "/images/camera.jpg";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";
import {Link} from "react-router-dom"

const AboutUs = () => {
    
    const icons = [
      {
        socalIcon: FaInstagram,
        url:"https://www.instagram.com/dushyantdas93/"
      },
      {
        socalIcon: FaGithub,
      url: "https://github.com/dushyantdas93"
      },
      {
        socalIcon: FaLinkedin,
        url:"https://www.linkedin.com/in/dushyant-manikpuri-b2433b259/"
      },
      {
        socalIcon: FaHashnode,
        url: "https://www.instagram.com/dushyantdas93/",
      },
      {
        socalIcon: FaMedium,
        url: "https://www.linkedin.com/in/dushyant-manikpuri-b2433b259/"
      },
    ];
  return (
    <div className="text-center p-2 bg-white text-gray-900 ">
      <h1 className="uppercase lg:text-3xl font-bold text-xl border-b-2 py-2">
        Kabir PhotoStudio khairagarh
      </h1>
      <div className="lg:flex p-10 justify-around  ">
        <div className="flex flex-col items-center justify-center lg:justify-start lg:w-1/4 rounded-lg bg-gray-900 text-white  gap-2  overflow-hidden">
          <img src={dushyant} alt="" className="rounded-t-lg object-contain" />

          <div className="pb-4">
            <h1 className="text-xl font-bold">Ashwarya Manikpuri</h1>
            <h3>I am photographer</h3>
            <div className="flex gap-2">
              {icons.map((Icon, index) => (
                <Link to={Icon.url} key={index} target="_blank">
                  {" "}
                  {Icon.url && (
                    <Icon.socalIcon
                      key={index}
                      className="size-7 lg:size-9 drop-shadow-2xl "
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex  flex-col gap-8 lg:gap-6   lg:px-28 leading-relaxed lg:w-3/4 text-start">
          <p className="px-2 text-start">
            Being in the industry for more than 15 years, we have made thousands
            of events come to life that brought smiles to an endless number of
            faces. <span className="text-orange-400">Shri Shyam Events</span>{" "}
            has been part of amazing celebrations.
          </p>{" "}
          <p>
            {" "}
            Our services cover all aspects of an Indian wedding perfectly-
            making us the best wedding organizers in Dhanbad, Jharkhand. We will
            help you select the perfect venues for your corporate events in
            Dhanbad, Jharkhand and weddings. We provide Wedding Pandal
            Decoration, Wedding Caterring, Full Caterring, Birthday Party
            Organiser, Engagement Party, Pandal Decoration, Light Decoration,
            Flower Decoration, Bridal Entry, Groom Entry, Corparate Event, DJ
            Orchestra, Ballon Decoration, expert photographers to frame your
            special moments.
                  </p>
                  <h1 className='text-2xl font-bold capitalize'>camera</h1>
                  <div className='flex flex-wrap items-center justify-center gap-6 lg:gap-2 pb-6 lg:p-0 '>
                      
                      {[1, 1, 1, 1, 1, 1,,1,1,1,,1,1, 1].map((item, idx) => {
                         return (
                           <img
                             src={camera}
                             alt=""
                             className="size-24 lg:size-32 rounded-lg shadow-md"
                           />
                         );
                     })}
                  </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs