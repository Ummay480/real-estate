"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="w-full max-w-[1380px] h-auto lg:h-[617px] rounded-3xl mt-8 bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9]">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row gap-6 p-6 lg:p-12 mt-10 lg:mt-0">
        {/* Left Side */}
        <div className="flex-1">
          <p className="font-poppins mt-6 text-center lg:text-left text-sm lg:text-base ml-0 lg:ml-12">
            Welcome to Realestate
          </p>
          <h1 className="font-poppins text-gray-400 text-2xl lg:text-7xl font-bold text-center lg:text-left ml-0 lg:ml-10 mt-4">
            Manage Your Property
          </h1>
          <p className="font-poppins text-center lg:text-left text-sm lg:text-base mt-4 lg:mt-6 ml-0 lg:ml-10">
            You will have everything nearby: supermarket, buses, station, the
            carmen neighborhood, etc.
          </p>

          {/* Input and Button Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-6 lg:mt-10">
            <input
              type="email"
              className="bg-white text-gray-900 py-2 w-full lg:w-42 h-14 rounded-full mb-4 lg:mb-0 text-left pl-10 placeholder-gray-400"
              placeholder="Enter your email"
            />
            <button className="bg-black text-white py-2 w-full lg:w-40 h-14 rounded-full text-center lg:-ml-7">
              Get Quote
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <Image
            src="/image/main-house.png" // Make sure this image is in your /public folder
            alt="house-image"
            className="w-full lg:w-auto h-auto"
            width={785}
            height={667}
            priority={true} // Preloads the image for better performance
          />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
