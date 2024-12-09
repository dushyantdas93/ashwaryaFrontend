import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Slider from "./Slider.jsx"
import AboutUs from "./AboutUs.jsx";
import Services from './Services.jsx';
import Gallery from './Gallery.jsx';
import FooterLg from './FooterLg.jsx';

const Home = () => {
  return (
    <div className="">
<Navbar/>
    <div className='container mx-auto  h-screen pt-16 '>

        <Slider />
        <AboutUs />
        <Services />
        <Gallery />
        <FooterLg/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home