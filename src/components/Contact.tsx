"use client";
import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <main className="w-full rounded-3xl max-w-[1380px] h-[457px] mt-10 bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] p-4 mb-14">
      {/* Contact Section */}
      <section className="flex flex-col md:flex-row gap-4 items-start"> {/* Ensured items align to the start */}
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="font-bold text-4xl md:text-5xl font-poppins md:ml-7 mt-6 md:mt-12">
            Subscribe Our Newsletter
          </h1>
          <p className="font-poppins mt-4 text-lg md:ml-7">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, non odit totam et qui asperiores quisquam suscipit modi deserunt excepturi error quidem omnis corporis recusandae blanditiis. Quo id laboriosam totam.
                    </p>
          {/* Image positioned under the heading in mobile view */}
          <div className="flex justify-center md:hidden mt-4">
            <Image
              src="/image/white-house.png"
              alt="house-image"
              width={606}
              height={557}
              className="w-full max-w-[250px] object-cover"
            />
          </div>

          

          {/* Input and Button Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mt-6 lg:mt-10 ml-6">
            <input
              type="email"
              className="bg-white text-gray-900 py-2 w-full lg:w-42 h-14 rounded-full mb-4 lg:mb-0 text-left pl-6 placeholder-gray-400"
              placeholder="Enter your email"
            />
            <button className="bg-black text-white py-2 w-full lg:w-40 h-14 rounded-full text-center lg:-ml-7">
              Get Quote
            </button>
          </div>
        </div>

        {/* Right Side (Desktop View) */}
        <div className="hidden md:flex flex-1 justify-end -mt-20">
          {/* Display image only on larger screens */}
          <Image
            src="/image/white-house.png"
            alt="house-image"
            width={606}
            height={557}
            className="max-w-[500px] object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;
