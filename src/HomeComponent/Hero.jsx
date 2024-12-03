import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../assets/package.svg";
import menu from "../assets/menu.svg";
import cancelMenu from "../assets/cancel menu.svg";

const Hero = () => {
  const images = [
    "/src/assets/apexfront.png",
    "/src/assets/bikebox.png",
    "/src/assets/carton.png",
    "/src/assets/Rectangle.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);
  return (
    <div className="wrapper relative h-[550px]  w-full overflow-hidden  text-[#ffffff] ">
      <div
        className="wrap absolute inset-0 transition-all duration-500   "
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "overlay",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="head flex justify-between items-center h-fit px-6 md:px-10 py-2">
          <div className="logo flex pt-3">
            <img src={logo} alt="logo" />
            <h2 className="text-2xl font-semibold   ">Apex</h2>
          </div>
          <div
            className="block md:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <img src={cancelMenu} alt="" /> : <img src={menu} />}
          </div>
          <div className="nav hidden md:flex items-center gap-6  pt-3">
            <nav>
              <div className="flex space-x-10 list-none font-normal text-xl">
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Services</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
                <li>
                  <Link>FAQs</Link>
                </li>
              </div>
            </nav>
            <button className="px-5 py-2  font-semibold text-xl bg-[#7f7caf] hover:bg-[#a09cd8] rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className=" flex justify-center items-center h-[400px] ">
          <div className="px-6 md:px-16 md:w-[50%]">
            <h1 className="font-bold md:text-5xl py-2 text-center">
              The Logistics Company you can trust to Deliver
            </h1>
            <p className="font-normal text-base text-center py-4">
              Welcome to Apex Logistics your reliable partner for fast, flexible
              delivery. Track in real-time and enjoy 24/7 support with every
              shipment
            </p>
            <div className="flex my-2 bg-white mt-3 w-fit mx-auto py-1 px-1 rounded-xl">
              <input
                type="text"
                placeholder="Enter tracking number"
                className="md:w-[350px] px-2 text-black outline-none"
              />
              <button className="border px-10 py-2 bg-[#7f7caf] hover:bg-[#a09cd8] rounded-lg">
                Track
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            } cursor-pointer`}
          ></div>
        ))}
      </div>
      {openMenu && (
        <div
          onClick={() => {
            setOpenMenu(false);
          }}
          className="w-full top-14 right-0 h-svh flex md:hidden  fixed inset-y-0 bg-black bg-opacity-50 z-40"
        >
          <div className="bg-[#4b8bbe]  fixed inset-y-0 top-[55px] right-0 h-[50%] w-full  z-50 shadow-lg overflow-y-auto">
            <div className="block  flex-1 pt-5 pb-4 px-6 ">
              <div>
                <nav>
                  <div className=" list-none font-normal text-xl">
                    <li className="py-3">
                      <Link>Home</Link>
                    </li>
                    <li className="py-3">
                      <Link>About Us</Link>
                    </li>
                    <li className="py-3">
                      <Link>Services</Link>
                    </li>
                    <li className="py-3">
                      <Link>Contact</Link>
                    </li>
                    <li className="py-3">
                      <Link>FAQs</Link>
                    </li>
                  </div>
                </nav>
                <button className="px-5 py-2 mt-5  font-semibold text-xl bg-[#7f7caf] hover:bg-[#a09cd8] rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
