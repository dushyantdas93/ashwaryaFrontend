import React from 'react'
import dushyant from "/images/profile.jpg"
import camera from "/images/camera.jpg";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import camera1 from "/images/Camera/camera1.webp"
import camera2 from "/images/Camera/camera2.jpeg"
import camera3 from "/images/Camera/camera3.webp"
import camera4 from "/images/Camera/camera4.webp"
import camera5 from "/images/Camera/camera5.webp"
import camera6 from "/images/Camera/camera6.webp"

import { FaGithub } from "react-icons/fa";
import {Link} from "react-router-dom"

const AboutUs = () => {
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
    const icons = [
      {
        socalIcon: FaInstagram,
        url:contactInfo?.instagram
      },
      {
        socalIcon: IoLogoYoutube,
      url:contactInfo?.youtube
      },
      {
        socalIcon: FaLinkedin,
        url:contactInfo?.linkedIn
      },
      {
        socalIcon: FaFacebookSquare,
        url: contactInfo?.facebook
      }
    ];
  return (
    <div className="text-center p-2 bg-white text-gray-900 ">
      <h1 className="uppercase lg:text-3xl font-bold text-xl border-b-2 py-2">
        Kabir PhotoStudio {contactInfo.address}
      </h1>
      <div className="lg:flex p-10 justify-around  ">
        <div className="flex flex-col items-center justify-center lg:justify-start lg:w-1/4 h-96 rounded-lg border text-white  gap-2  overflow-hidden">
          <img src={dushyant} alt="" className="rounded-t-lg object-contain h-2/3 w-full object-container rounded-full pt-2" />

          <div className="pb-4 bg-black w-full  items-end py-2
          ">
            <h1 className="text-xl font-bold">{contactInfo?.name}</h1>
            <h3>{contactInfo.profession}</h3>
            <div className="flex gap-2 justify-center py-2">
              { icons.map((Icon, index) => (
                <Link to={Icon.url} key={index} target="_blank">
                  {" "}
                  { (
                    <Icon.socalIcon
                      key={index}
                      className="size-5 lg:size-9 drop-shadow-2xl "
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
            faces. <span className="text-orange-400">Kabir PhotoStudio {contactInfo.address}</span>{" "}
            has been part of amazing celebrations.
          </p>{" "}
          <p>
            {" "}
            Our services cover all aspects of an Indian wedding perfectly-
            making us the best wedding organizers in {contactInfo.address}. We will
            help you select the perfect venues for your corporate events in {" "}
             {contactInfo.address} and weddings. We provide Wedding Pandal
            Decoration, Wedding Caterring, Full Caterring, Birthday Party
            Organiser, Engagement Party, Pandal Decoration, Light Decoration,
            Flower Decoration, Bridal Entry, Groom Entry, Corparate Event, DJ
            Orchestra, Ballon Decoration, expert photographers to frame your
            special moments.
                  </p>
                 
                  
        </div>
        
      </div>
      <h1 className='text-2xl font-bold capitalize py-2'>camera Details</h1>
      <div className='flex flex-wrap items-center justify-center gap-6 lg:gap-2 pb-6 lg:p-0 '>

                      
                      {[camera1,camera2,camera3,camera4,camera5,camera1,camera2,camera3,camera4,camera5,camera1,camera6,camera1,camera2,camera3,camera4,camera5,camera6 ].map((item, idx) => {
                         return (
                           <img
                             src={item}
                             alt=""
                             className="size-24 lg:size-32 rounded-lg shadow-md"
                           />
                         );
                     })}
                  </div>
    </div>
  );
}

export default AboutUs