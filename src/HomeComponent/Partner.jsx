import "./partner.css";
import React, { useState, useEffect } from "react";
import company from "../assets/Company logo.svg";
import company1 from "../assets/Company logo (1).svg";
import company2 from "../assets/Company logo (2).svg";
import company3 from "../assets/Company logo (3).svg";
import company4 from "../assets/Company logo (4).svg";
import company5 from "../assets/Company logo (5).svg";
import company6 from "../assets/Company logo (6).svg";
const Partner = () => {
  const patners = [
    { pics: company },
    { pics: company1 },
    { pics: company2 },
    { pics: company3 },
    { pics: company4 },
    { pics: company5 },
    { pics: company6 },
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle switching to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === patners.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const timer = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(timer); // Cleanup function to clear the timer
  }, [nextImage]); // Runs once when component mounts

  return (
    <div className="image-slider overflow-hidden my-10">
      <div
        className="slider-container2 flex justify-between space-x-10 px-6"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out", //adding this line or not will make it work (line is optional)
        }}
      >
        {patners.map((partner, index) => (
          <img
            key={index}
            src={partner.pics}
            alt={`Slide ${index + 1}`}
            className="slider-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Partner;
