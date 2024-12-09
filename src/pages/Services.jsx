import React from "react";
import image1 from "/images/image1.jpeg"
import image2 from "/images/image2.jpg"
import image3 from "/images/image3.jpeg"
import image4 from "/images/image4.webp"
import image5 from "/images/image5.jpeg"
import image6 from "/images/image6.jpeg"

const Services = () => {
  const photographerServices = [
    {
      id: 1,
      name: "John Doe Photography",
      specialization: "Wedding Photography",
      location: "New York, NY",
      services: ["Pre-wedding shoots", "Wedding day coverage", "Photo albums"],
      priceRange: "20000 - 50000",
      image:image1 ,
    },
    {
      id: 2,
      name: "Pixel Perfect Studio",
      specialization: "Portrait Photography",
      location: "San Francisco, CA",
      services: ["Headshots", "Family portraits", "Pet photography"],
      priceRange: "5000 - 20000",
      image: image6,
    },
    {
      id: 3,
      name: "Urban Lens",
      specialization: "Street and Event Photography",
      location: "Los Angeles, CA",
      services: ["Event coverage", "Cityscapes", "Street art"],
      priceRange: "10000 - 30000",
      image: image5,
    },
    {
      id: 4,
      name: "Golden Hour Captures",
      specialization: "Landscape and Nature Photography",
      location: "Seattle, WA",
      services: ["Scenic photoshoots", "Nature documentaries"],
      priceRange: "15000 - 40000",
      image: image4,
    },
    {
      id: 1,
      name: "John Doe Photography",
      specialization: "Wedding Photography",
      location: "New York, NY",
      services: ["Pre-wedding shoots", "Wedding day coverage", "Photo albums"],
      priceRange: "20000 - 50000",
      image:image1 ,
    },
    {
      id: 2,
      name: "Pixel Perfect Studio",
      specialization: "Portrait Photography",
      location: "San Francisco, CA",
      services: ["Headshots", "Family portraits", "Pet photography"],
      priceRange: "5000 - 20000",
      image: image4,
    },
    {
      id: 3,
      name: "Urban Lens",
      specialization: "Street and Event Photography",
      location: "Los Angeles, CA",
      services: ["Event coverage", "Cityscapes", "Street art"],
      priceRange: "10000 - 30000",
      image: image3,
    },
    {
      id: 4,
      name: "Golden Hour Captures",
      specialization: "Landscape and Nature Photography",
      location: "Seattle, WA",
      services: ["Scenic photoshoots", "Nature documentaries"],
      priceRange: "15000 - 40000",
      image: image4,
    },
    {
      id: 1,
      name: "John Doe Photography",
      specialization: "Wedding Photography",
      location: "New York, NY",
      services: ["Pre-wedding shoots", "Wedding day coverage", "Photo albums"],
      priceRange: "20000 - 50000",
      image:image1 ,
    },
    {
      id: 2,
      name: "Pixel Perfect Studio",
      specialization: "Portrait Photography",
      location: "San Francisco, CA",
      services: ["Headshots", "Family portraits", "Pet photography"],
      priceRange: "5000 - 20000",
      image: image2,
    },
    {
      id: 3,
      name: "Urban Lens",
      specialization: "Street and Event Photography",
      location: "Los Angeles, CA",
      services: ["Event coverage", "Cityscapes", "Street art"],
      priceRange: "10000 - 30000",
      image: image3,
    },
    {
      id: 4,
      name: "Golden Hour Captures",
      specialization: "Landscape and Nature Photography",
      location: "Seattle, WA",
      services: ["Scenic photoshoots", "Nature documentaries"],
      priceRange: "15000 - 40000",
      image: image4,
    },
  ];

  return (
    <div className="services px-6 lg:p-0 lg:pb-16 pb-16">
      <div className="heading py-2">
        <h1 className="text-2xl font-bold">Our Best Services</h1>
      </div>
      <div className=" flex flex-wrap  items-center justify-center ">
        {photographerServices?.map((item, idx) => {
          return (
            <div className="image-box rounded-lg overflow-hidden lg:w-1/3 p-2 overflow-hidden        text-center text-2xl font-bold relative">
             <div className="relative rounded-md">
             <div className="bg-black opacity-70 absolute inset-0 h-10 flex items-center justify-center">
                <h3 className="py-2 px-4 text-white opacity-90 shadow-lg text-xl font-semibold">
                {item.specialization}
                </h3>
              </div>
              <div className="">
                <img src={item.image} alt="" className="" />
              </div>

                 <div className="bg-black opacity-70 text-start flex-col lg:flex-row text-xl justify-between p-2 absolute bottom-0 text-white flex items-center w-full">
                <h1 className="text-start font-semibold">
                 
                </h1>
                <div className="flex lg:gap-2 gap-10 justify-between text-sm">
                  <h1>{item.priceRange}</h1>
                  <h1>Khairagarh</h1>
                </div>
              </div>
              </div>
              </div> 
          );
        })}
      </div>
    </div>
  );
};

export default Services;
