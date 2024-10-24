"use client";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOtherServicesOpen, setIsOtherServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu
  const searchRef = useRef<HTMLDivElement>(null); // Ref for the search field
  const otherServicesRef = useRef<HTMLDivElement>(null); // Ref for the other services dropdown

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleOtherServices = () => setIsOtherServicesOpen(prev => !prev);
  const toggleSearch = () => setIsSearchOpen(prev => !prev);

  // Close the search and other services when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current && !searchRef.current.contains(event.target as Node) &&
        isSearchOpen
      ) {
        setIsSearchOpen(false);
      }
      if (
        otherServicesRef.current && !otherServicesRef.current.contains(event.target as Node) &&
        isOtherServicesOpen
      ) {
        setIsOtherServicesOpen(false);
      }
    };

    // Add event listener when either search or other services is open
    if (isSearchOpen || isOtherServicesOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchOpen, isOtherServicesOpen]);

  return (
    <nav className="relative w-full max-w-[1380px] h-[90px] mt-10 p-3 rounded-full z-10 bg-gray-50 text-black">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo Section */}
        <div className="flex-shrink-0 w-[100px] h-auto">
          <Image 
            src="/image/Logo.png" 
            alt="logo"
            width={100}
            height={27.5}
          />
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex justify-center w-full max-w-[571px] h-[60px] space-x-12 items-center bg-white rounded-full ml-32">
          <a href="#about" className="text-black hover:text-gray-600 cursor-pointer">About Us</a>
          <a href="#projects" className="text-black hover:text-gray-600 cursor-pointer">Projects</a>
          <a href="#services" className="text-black hover:text-gray-600 cursor-pointer">Services</a>
          <a href="#projects" className="text-black hover:text-gray-600 cursor-pointer">Listings</a>

          <div className="hidden md:flex items-center" ref={searchRef}>
            <button className="text-black hover:text-gray-600 cursor-pointer" onClick={toggleSearch}>
              <Image 
                src="/image/search.png" 
                alt="search icon"
                width={20}
                height={20}
              />
            </button>
            {isSearchOpen && (
              <input 
                type="text"
                placeholder="Search..."
                className="ml-2 p-2 border border-gray-300 rounded shadow-md"
              />
            )}
          </div>
        </div>

        {/* Other Services Button (Outside Menu Bar) */}
        <div className="hidden md:flex" ref={otherServicesRef}>
          <button onClick={toggleOtherServices} className="text-black hover:text-gray-600 cursor-pointer">
            Other Services
          </button>
          {isOtherServicesOpen && (
            <div className="absolute mt-2 bg-white rounded shadow-md">
              <a href="#services" className="block px-4 py-2 text-black hover:bg-gray-100">Service 1</a>
              <a href="#projects" className="block px-4 py-2 text-black hover:bg-gray-100">Service 2</a>
              <a href="#about" className="block px-4 py-2 text-black hover:bg-gray-100">Service 3</a>
            </div>
          )}
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="relative flex-shrink-0 md:hidden my-2">
          <button onClick={toggleMenu} className="text-black hover:text-gray-600 cursor-pointer"
          style={{cursor:'pointer'}}// Explicity set cursor style
          >
             <div className="flex flex-col space-y-1">
              <div className="h-1 w-6 bg-black"></div>
              <div className="h-1 w-6 bg-black"></div>
              <div className="h-1 w-6 bg-black"></div>
            </div>
          </button>
        </div>

        {/* Contact Button */}
        <a href="#contact" className="hidden md:flex bg-white text-black hover:bg-gray-300 border border-black rounded-full w-full max-w-[158px] h-[60px] py-2 px-4 flex-shrink-0 flex items-center justify-center">
          Contact Us
        </a>
      </div>

      {/* Mobile Menu (For Small Screens) */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 px-6 py-4">
            {/* Search Button at the Top of Mobile Menu */}
            <div className="relative mt-4" ref={searchRef}>
              <button className="text-black hover:text-gray-600" onClick={toggleSearch}>
                <Image 
                  src="/image/search.png" 
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </button>
              {isSearchOpen && (
                <input 
                  type="text"
                  placeholder="Search..."
                  className="ml-2 p-2 border border-gray-300 rounded shadow-md"
                />
              )}
            </div>
            <a href="#about" className="text-black hover:text-gray-600 cursor-pointer">About Us</a>
            <a href="#projects" className="text-black hover:text-gray-600 cursor-pointer">Projects</a>
            <a href="#services" className="text-black hover:text-gray-600 cursor-pointer">Services</a>
            <a href="#projects" className="text-black hover:text-gray-600 cursor-pointer">Listings</a>

            {/* Other Services */}
            <div className="relative" ref={otherServicesRef}>
              <button onClick={toggleOtherServices} className="text-black hover:text-gray-600 cursor-pointer">
                Other Services
              </button>
              {isOtherServicesOpen && (
                <div className="mt-2 bg-white rounded shadow-md">
                  <a href="#services" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">Service 1</a>
                  <a href="#projects" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">Service 2</a>
                  <a href="#about" className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">Service 3</a>
                </div>
              )}
            </div>

            <a href="#contact" className="bg-gray-200 text-black hover:bg-gray-300 rounded-full px-4 py-2 cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
