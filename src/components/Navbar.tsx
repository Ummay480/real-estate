"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="relative ml-20 w-full max-w-[1380px] h-[90px] mt-10 p-3 rounded-full z-10 bg-gray-50 text-black">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-[100px] h-auto">
          <Image src="/image/Logo.png" alt="logo" width={100} height={27.5} />
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex justify-center w-full max-w-[571px] h-[60px] space-x-12 items-center bg-white rounded-full ml-32">
          <a href="/about" className="text-black hover:text-gray-600 cursor-pointer">
            About Us
          </a>
          <a href="/projects" className="text-black hover:text-gray-600 cursor-pointer">
            Projects
          </a>
          <a href="/contact" className="text-black hover:text-gray-600 cursor-pointer">
            Contact Us
          </a>
          <a href="/services" className="text-black hover:text-gray-600 cursor-pointer">
            Services
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="/contact"
          className="hidden md:flex bg-white text-black hover:bg-gray-300 border border-black rounded-full w-full max-w-[158px] h-[60px] py-2 px-4 flex-shrink-0 flex items-center justify-center"
        >
          Contact Us
        </a>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="relative flex-shrink-0 md:hidden">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            <div className="flex flex-col space-y-1">
              <div className="h-1 w-6 bg-black"></div>
              <div className="h-1 w-6 bg-black"></div>
              <div className="h-1 w-6 bg-black"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 px-6 py-4">
            <a href="/about" className="text-black hover:text-gray-600 cursor-pointer">
              About Us
            </a>
            <a href="/projects" className="text-black hover:text-gray-600 cursor-pointer">
              Projects
            </a>
            <a href="/contact" className="text-black hover:text-gray-600 cursor-pointer">
              Contact Us
            </a>
            <a href="/services" className="text-black hover:text-gray-600 cursor-pointer">
              Services
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
