"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="flex w-full max-w-[1380px] flex-col md:flex-row gap-4 md:gap-6 p-4">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-xl md:text-4xl font-extrabold mt-10 md:mt-14 ml-4 md:ml-0">
          The transfer of real estate
        </h2>
        {/* Image positioned under the title on mobile */}
        <div className="flex justify-center md:hidden mb-4">
          <Image
            src="/image/aboutus.png"
            alt="profile-image"
            width={400}
            height={400}
            className="w-full object-cover"
          />
        </div>
        <p className="text-sm sm:text-base md:text-lg font-poppins mt-4 ml-4 md:ml-0">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim ad dignissimos non tempora aliquid, maxime tempore totam amet reiciendis veritatis accusamus, maiores atque doloribus voluptas minus fuga voluptatem explicabo!
        </p>

        <div className="flex flex-col sm:flex-row mt-14 ml-4 md:ml-0 space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-black text-white text-sm w-full h-16 sm:w-36 rounded-full text-center py-3">
            Book Now!
          </button>
          <button className="text-sm w-full sm:w-32 rounded-full py-3 border border-black text-black">
            <span className="hover:bg hover:text-white px-4 py-1 rounded-full">Read More</span>
          </button>
        </div>

        {/* Statistics Section */}
        <div className="flex justify-center md:justify-start mt-24 gap-14 ml-6 md:ml-0">
          <div className="text-center">
            <Image src="/image/12+.png" alt="12+" width={100} height={80} />
            <p className="mt-4">Customers</p>
          </div>
          <div className="text-center">
            <Image src="/image/14+.png" alt="14+" width={100} height={80} />
            <p className="mt-4">Offices</p>
          </div>
          <div className="text-center">
            <Image src="/image/10+.png" alt="10+" width={100} height={0} />
            <p className="mt-4">Students</p>
          </div>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="flex-1 flex justify-center md:justify-end mt-10">
        {/* This will show the image only on medium and larger screens */}
        <Image
          src="/image/aboutus.png"
          alt="profile-image"
          width={500}
          height={500}
          className="hidden md:block w-full md:w-[400px] lg:w-[500px] object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;
