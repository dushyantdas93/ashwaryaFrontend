import React from "react";

const Gallery = () => {
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
    {
      id: 4,
      name: "Golden Hour Captures",
      specialization: "Landscape and Nature Photography",
      location: "Seattle, WA",
      services: ["Scenic photoshoots", "Nature documentaries"],
      priceRange: "$1500 - $4000",
      image: "https://example.com/images/golden-hour-captures.jpg",
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
    {
      id: 4,
      name: "Golden Hour Captures",
      specialization: "Landscape and Nature Photography",
      location: "Seattle, WA",
      services: ["Scenic photoshoots", "Nature documentaries"],
      priceRange: "$1500 - $4000",
      image: "https://example.com/images/golden-hour-captures.jpg",
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
    }
  ];

  return (
    <div className="services px-6 lg:p-0 lg:pb-16 pb-16 text-center">
      <div className="heading py-2">
        <h1 className="text-start text-2xl font-bold">Our Best Gallery</h1>
      </div>
      <div className=" flex flex-wrap  gap-4  justify-center lg:gap-y-12 lg:justify-around py-10">
        {photographerServices?.map((item, idx) => {
          return (
            <div className="image-box rounded-lg overflow-hidden bg-white text-center text-2xl font-bold relative border lg:w-1/6">
          
              <div className="img">
                <img src="images/services-img/1.jpg" alt="" />
              </div>

            </div>
          );
        })}
      </div>
              <button className="text-xl font-bold capitalize p-2 px-3 bg-blue-300 rounded-lg ">More Detail</button>
    </div>
  );
};

export default Gallery;
