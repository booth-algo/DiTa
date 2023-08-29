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
      title: "The Fast and the Furious",
      num: '1',
      iconBg: "#383E56",
      card_photo: car09,
      points: [
        "Whether we pick you up at the airport or drop you off at your final destination, we strive to impress you every step of the way. That’s what makes us unique.", "You and your family are always in good hands with us",
      ],
    },
    {
      title: "Destination",
      num: '2',
      iconBg: "#383E56",
      card_photo: macau02,
      points: [
        "We will ensure that you get to your destination in style, no matter how you travel.",
        "Limousine service is second to none.", "As a company, we are constantly striving to improve how we operate.", "Adding convenience and safety to your life is our goal.", "Luxurious Lifestyle"
      ],
    },
    {
      title: "lmao",
      num: '3',
      iconBg: "#383E56",
      card_photo: car09,
      points: [
        "Our team of professional drivers is dedicated to ensuring your safety and comfort during your travels with us.", "We take pride in maintaining a fleet of well-maintained vehicles and are committed to keeping them clean and inviting for our passengers.", "Powered by the best cars",
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
          name: "1",
          color: "blue-text-gradient",
        },
        {
          name: "1",
          color: "green-text-gradient",
        },
        {
          name: "1",
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
          name: "1",
          color: "blue-text-gradient",
        },
        {
          name: "1",
          color: "green-text-gradient",
        },
        {
          name: "1",
          color: "pink-text-gradient",
        },
      ],
      image: car04,
    },
  ];
  
  export { services, experiences };