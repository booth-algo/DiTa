import {
    car01,car02,car03,car04,car05,car06,car07,car08,car09,
    macau02,
  } from "../assets";
    
  export const navLinks = [
    {
      id: "booking",
      title: "Booking",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },

  ];
  
  const experiences = [
    {
      title: "Smooth and Speedy",
      num: '1',
      iconBg: "#383E56",
      card_photo: car09,
      points: [
        "Seamless Transfers: Whether it's a pickup from the airport or a drop-off at your destination, we ensure an impressive journey.", 
        "Trustworthy Service: Rest assured, you and your family are always in good hands with us.", 
        "Constant Improvement: As a company, we’re always looking for ways to enhance our operations for your convenience."
      ],
    },
    {
      title: "Destination Delivered in Style",
      num: '2',
      iconBg: "#383E56",
      card_photo: macau02,
      points: [
        "Premium Travel: We guarantee a stylish arrival to your destination.",
        "Unmatched Service: Our limousine service stands out as the best in the business.", 
        "Safety & Convenience: Our topmost priority is adding safety and convenience to your journey."
      ],
    },
    {
      title: "Top Tier Travel Comfort",
      num: '3',
      iconBg: "#383E56",
      card_photo: car09,
      points: [
        "Professional Drivers: Our team of drivers is dedicated to ensuring your safety and comfort throughout your journey", 
        "Pristine Fleet: We pride ourselves on having a fleet of well-maintained and clean vehicles for our passengers.", 
        "Elite Vehicles: Our service is powered by the finest cars in the industry.",
      ],
    },
  ];
  
  const services = [
    {
      name: "Luxurious Ride",
      description:
        "para1",
      tags: [
        {
          name: "smooth",
          color: "blue-text-gradient",
        },
        {
          name: "grand",
          color: "green-text-gradient",
        },
        {
          name: "comfortable",
          color: "pink-text-gradient",
        },
      ],
      image: car09,
    },
    {
      name: "Enjoyable Journey",
      description:
        "para1",
      tags: [
        {
          name: "pleasurable",
          color: "blue-text-gradient",
        },
        {
          name: "delightful",
          color: "green-text-gradient",
        },
        {
          name: "smooth",
          color: "pink-text-gradient",
        },
      ],
      image: car03,
    },
    {
      name: "Professional Service",
      description:
        "para3",
      tags: [
        {
          name: "expertise",
          color: "blue-text-gradient",
        },
        {
          name: "reliable",
          color: "green-text-gradient",
        },
        {
          name: "flawless",
          color: "pink-text-gradient",
        },
      ],
      image: car04,
    },
  ];
  
  export { services, experiences };