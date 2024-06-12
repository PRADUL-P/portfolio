import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Logo from '../assets/image.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 right-0 z-50 w-full">
      <div className="flex items-center justify-between h-16 px-6 bg-gray-800 bg-opacity-60 backdrop-blur-lg">
        <div>
          <ScrollLink
            to="home"
            className='flex items-center text-white hover:text-gray-300'
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            {/* <img className='h-8' src={Logo} alt='Logo' /> */}
            <h1 className='ml-2 text-xl font-nme uppercase'>pradul</h1>
          </ScrollLink>
        </div>
        <button
          className="text-white block lg:hidden"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-2xl z-50"
          />
        </button>
        <div className="hidden lg:flex lg:space-x-4">
          <ScrollLink
            to="home"
            className="text-white hover:text-gray-300 font-medium"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            Home
          </ScrollLink>
          <RouterLink
            to="/portfolio"
            className="text-white hover:text-gray-300 font-medium"
          >
            Portfolio
          </RouterLink>
          <ScrollLink
            to="about"
            className="text-white hover:text-gray-300 font-medium"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            About
          </ScrollLink>
        
         
          <ScrollLink
            to="projects"
            className="text-white hover:text-gray-300 font-medium"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            Projects
          </ScrollLink>
          {/* <ScrollLink
            to="services"
            className="text-white hover:text-gray-300 font-medium"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            Services
          </ScrollLink> */}
          <ScrollLink
            to="contact"
            className="text-white hover:text-gray-300 font-medium"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
          >
            
            Contact
          </ScrollLink>
        </div>
      </div>
      <div
        className={`fixed top-15 right-0  h-full bg-gray-800 bg-opacity-60 backdrop-blur-lg flex justify-end transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="p-5 space-y-4 mt-20">
          <ScrollLink
            to="home"
            className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            onClick={toggleMenu}
          >
            Home
          </ScrollLink>
          <RouterLink
            to="/portfolio"
            className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            onClick={toggleMenu}
          >
            Portfolio
          </RouterLink>
          <ScrollLink
            to="about"
            className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            onClick={toggleMenu}
          >
            About
          </ScrollLink>
         
          <ScrollLink
            to="services"
            className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            onClick={toggleMenu}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="projects"
            className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            onClick={toggleMenu}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            className="block text-white hover:text-gray-300 px-3 py-2 font-medium"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            onClick={toggleMenu}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
