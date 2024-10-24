"use client";
import React from 'react';
import Image from "next/image";
<main className="w-full max-w-[1380px] h-[617px] rounded-3xl mt-10 bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9]"></main>
const Services = () => {
  return (
    <main className="w-full max-w-[1380px] flex flex-col md:flex-row items-center justify-center mt-9 gap-8 md:gap-8 p-8">

      {/* Service 1 */}
      <div className="relative text-center md:text-left ">
        <Image 
          src="/image/messages.png"
          alt='message-icon'
          width={80}
          height={80}
          className='mx-auto md:mx-0'
        />
        <h2 className='text-lg md:text-3xl text-black font-bold mt-4'>Answer questions</h2>
        <p className='text-lg text-gray-900 mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla similique tempora iste eos.
        </p>
      </div>

      {/* Service 2 */}
      <div className="relative text-center md:text-left">
        <Image
          src="/image/sms.png"
          alt='sms-tracking'
          width={80}
          height={80}
          className='mx-auto md:mx-0'
        />
        <h2 className='text-lg md:text-3xl text-black font-bold mt-4'>Select a quote</h2>
        <p className='text-lg text-gray-900 mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla similique tempora iste eos.
        </p>
      </div>

      {/* Service 3 */}
      <div className="relative text-center md:text-left">
        <Image
          src="/image/edit-2.png"
          alt="edit-2"
          width={80}
          height={80}
          className='mx-auto md:mx-0'
        />
        <h2 className="text-lg md:text-3xl text-black font-bold mt-4">Get Registered</h2>
        <p className="text-lg text-gray-900 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nulla similique tempora iste eos.
        </p>
      </div>

    </main>
  );
}

export default Services;
