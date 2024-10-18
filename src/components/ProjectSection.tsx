"use client"
import React from 'react';
import Image from "next/image";

const ProjectSection = () => {
    return (
        <main className="flex flex-col w-full max-w-[1380px] lg:flex-row items-center justify-center gap-4 px-4 mt-12">

            {/* Project 1 */}
            <div className="relative text-black p-6 rounded-lg bg-white border-2 shadow-gray-700 shadow-lg w-full lg:w-1/3">
                <div className="bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] rounded-lg overflow-hidden h-[300px]">
                    <Image
                        className="w-full h-full object-cover" 
                        src="/image/orangeHouse.png"
                        alt='orangeHouse'
                        width={1381}
                        height={438}
                    />
                </div>
                <div className="mt-4">
                    <h2 className="text-lg text-black font-bold">Sobha Heartland II Villas</h2>
                    <p className="text-sm text-gray-900 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla similique tempora iste eos.</p>
                </div>
            </div>

            {/* Project 2 */}
            <div className="relative text-black p-6 rounded-lg bg-white border-2 shadow-gray-700 shadow-lg w-full lg:w-1/3">
                <div className="bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] rounded-lg overflow-hidden h-[300px]"> {/* Fixed height */}
                    <Image
                        className="w-full h-full object-cover"  
                        src="/image/whiteHouse.png"
                        alt='whiteHouse'
                        width={1381}
                        height={438}
                    />
                </div>
                <div className="mt-4">
                    <h2 className="text-lg text-black font-bold">Sobha Heartland II Villas</h2>
                    <p className="text-sm text-gray-900 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla similique tempora iste eos.</p>
                </div>
            </div>

            {/* Project 3 */}
            <div className="relative text-black p-6 rounded-lg bg-white border-2 shadow-gray-700 shadow-lg w-full lg:w-1/3">
                <div className="bg-gradient-to-r from-[#C1DEE8] to-[#FBD9B9] rounded-lg overflow-hidden h-[300px]"> 
                    <Image
                        className="w-full h-full object-cover" 
                        src="/image/blueHouse.png"
                        alt='blueHouse'
                        width={1381}
                        height={438}
                    />
                </div>
                <div className="mt-4">
                    <h2 className="text-lg text-black font-bold">Sobha Heartland II Villas</h2>
                    <p className="text-sm text-gray-900 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla similique tempora iste eos.</p>
                </div>
            </div>

        </main>
    )
}

export default ProjectSection;
