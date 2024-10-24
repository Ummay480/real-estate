"use client";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOtherServicesOpen, setIsOtherServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const otherServicesRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleOtherServices = () => setIsOtherServicesOpen(prev => !prev);
  const toggleSearch = () => setIsSearchOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (otherServicesRef.current && !otherServicesRef.current.contains(event.target as Node)) {
        setIsOtherServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative w-full max-w-[1380px] h-[90px] mt-10 p-3 rounded-full z-10 bg-gray-50 text-black">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex-shrink-0 w-[100px] h-auto">
          <Image src="/image/Logo.png" alt="logo" width={100} height={27.5} />
        </div>

        <div className="hidden md:flex justify-center w-full max-w-[571px] h-[60px] space-x-12 items-center bg-white rounded-full ml-32">
          <a href="#about" className="text-black hover:text-gray-600 cursor-pointer" onClick={handleLinkClick}>About Us</a>
          <a href="#projects" className="text-black hover:text-gray-600 cursor-pointer" onClick={handleLinkClick}>Projects</a>
          <a href="#services" className="text-black hover:text-gray-600 cursor-pointer" onClick={handleLinkClick}>Services</a>
          <a href="#listings" className="text-black hover:text-gray-600 cursor-pointer" onClick={handleLinkClick}>Listings</a>
          
          <div className="hidden md:flex items-center" ref={searchRef}>
            <button className="text-black hover:text-gray-600 cursor-pointer" onClick={toggleSearch}>
              <Image src="/image/search.png" alt="search icon" width={20} height={20} />
            </button>
            {isSearchOpen && (
              <input type="text" placeholder="Search..." className="ml-2 p-2 border border-gray-300 rounded shadow-md" />
            )}
          </div>
        </div>

        <div className="hidden md:flex" ref={otherServicesRef}>
          <button onClick={toggleOtherServices} className="text-black hover:text-gray-600 cursor-pointer">
            Other Services
          </button>
          {isOtherServicesOpen && (
            <div className="absolute mt-2 bg-white rounded shadow-md">
              <a href="#services" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={handleLinkClick}>Service 1</a>
              <a href="#projects" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={handleLinkClick}>Service 2</a>
              <a href="#about" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={handleLinkClick}>Service 3</a>
            </div>
          )}
        </div>

        <div className="relative flex-shrink-0 md:hidden my-2" ref={menuRef}>
          <button onClick={toggleMenu} className="text-black hover:text-gray-600 cursor-pointer">
            <div className="flex flex-col space-y-1">
              <div className="h-1 w-6 bg-black cursor-pointer"></div>
              <div className="h-1 w-6 bg-black cursor-pointer"></div>
              <div className="h-1 w-6 bg-black cursor-pointer"></div>
            </div>
          </button>
        </div>

        <a href="#contact" className="hidden md:flex bg-white text-black hover:bg-gray-300 border border-black rounded-full w-full max-w-[158px] h-[60px] py-2 px-4 flex-shrink-0 flex items-center justify-center">
          Contact Us
        </a>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 px-6 py-4">
            <a href="#about" className="text-black hover:text-gray-600 cursor-pointer" onClick={handleLinkClick}>About Us</a>
            <a href="#projects" className="text-black hover:text-gray-600 cursor-pointer" onClick={handleLinkClick}>Projects</a>
            <a href="#services" className="text-black hover:text-gray-600 cursor-pointer" onClick={handleLinkClick}>Services</a>
            <a href="#listings" className="text-black hover:text-gray-600 cursor-pointer" onClick={handleLinkClick}>Listings</a>
            
            <div className="relative mt-4">
              <button className="text-black hover:text-gray-600" onClick={toggleSearch}>
                <Image src="/image/search.png" alt="search icon" width={20} height={20} />
              </button>
              {isSearchOpen && (
                <input type="text" placeholder="Search..." className="ml-2 p-2 border border-gray-300 rounded shadow-md" />
              )}
            </div>

            <div className="relative">
              <button onClick={toggleOtherServices} className="text-black hover:text-gray-600 cursor-pointer">
                Other Services
              </button>
              {isOtherServicesOpen && (
                <div className="mt-2 bg-white rounded shadow-md">
                  <a href="#services" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={handleLinkClick}>Service 1</a>
                  <a href="#projects" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={handleLinkClick}>Service 2</a>
                  <a href="#about" className="block px-4 py-2 text-black hover:bg-gray-100" onClick={handleLinkClick}>Service 3</a>
                </div>
              )}
            </div>

            <a href="#contact" className="bg-gray-200 text-black hover:bg-gray-300 rounded-full px-4 py-2 cursor-pointer" onClick={handleLinkClick}>Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
