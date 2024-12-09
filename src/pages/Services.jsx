import React from "react";

const Services = () => {
  const photographerServices = [
    {
      id: 1,
      name: "John Doe Photography",
      specialization: "Wedding Photography",
      location: "New York, NY",
      services: ["Pre-wedding shoots", "Wedding day coverage", "Photo albums"],
      priceRange: "$2000 - $5000",
      image: "https://example.com/images/john-doe-photography.jpg",
    },
    {
      id: 2,
      name: "Pixel Perfect Studio",
      specialization: "Portrait Photography",
      location: "San Francisco, CA",
      services: ["Headshots", "Family portraits", "Pet photography"],
      priceRange: "$500 - $2000",
      image: "https://example.com/images/pixel-perfect-studio.jpg",
    },
    {
      id: 3,
      name: "Urban Lens",
      specialization: "Street and Event Photography",
      location: "Los Angeles, CA",
      services: ["Event coverage", "Cityscapes", "Street art"],
      priceRange: "$1000 - $3000",
      image: "https://example.com/images/urban-lens.jpg",
    },
    {
      id: 4,
      name: "Golden Hour Captures",
      specialization: "Landscape and Nature Photography",
      location: "Seattle, WA",
      services: ["Scenic photoshoots", "Nature documentaries"],
      priceRange: "$1500 - $4000",
      image: "https://example.com/images/golden-hour-captures.jpg",
    },
  ];

  return (
    <div className="services px-6 lg:p-0 lg:pb-16 pb-16">
      <div className="heading py-2">
        <h1 className="text-2xl font-bold">Our Best Services</h1>
      </div>
      <div className=" flex flex-wrap  gap-4 items-center ">
        {photographerServices?.map((item, idx) => {
          return (
            <div className="image-box rounded-lg overflow-hidden lg:h-96     text-center text-2xl font-bold relative border">
              <div className="bg-black opacity-70 absolute inset-0 h-10 flex items-center justify-center">
                <h3 className="py-2 px-4 text-white opacity-90 shadow-lg text-xl font-semibold">
                  {item.name}
                </h3>
              </div>
              <div className="">
                <img src="images/services-img/1.jpg" alt="" className="" />
              </div>

                 <div className="bg-black opacity-70 text-start flex-col lg:flex-row text-xl justify-between p-2 absolute bottom-0 text-white flex items-center w-full">
                <h1 className="text-start font-semibold">
                  {item.specialization}
                </h1>
                <div className="flex lg:gap-2 gap-10 justify-between text-sm">
                  <h1>{item.priceRange}</h1>
                  <h1>{item.location}</h1>
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
