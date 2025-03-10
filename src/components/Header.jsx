import React, { useState } from "react";
import {Link} from "react-router-dom";  
  

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);


  return (
    <nav className="bg-cyan-950 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-lg font-bold">Kshitij Azad</a>

        <button
          onMouseEnter={handleMouseEnter}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <ul className="hidden md:flex space-x-6">
          <li><Link to={'/'}><a href="#" className="hover:text-yellow-300 ">Home</a></Link></li>
          <li><Link to={'/about'}><a href="#" className="hover:text-yellow-300">About</a></Link></li>
          <li><Link to={'/skills'}><a href="#" className="hover:text-yellow-300">Skills</a></Link></li>
          <li><Link to={'/projects'}><a href="#" className="hover:text-yellow-300">Projects</a></Link></li>
          <li><Link to={'/experience'}><a href="#" className="hover:text-yellow-300">Experience</a></Link></li>
          <li><Link to={'/contact'}><a href="#" className="hover:text-yellow-300">Contact</a></Link></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col space-y-4 bg-cyan-950 p-4 text-white mt-2 md:hidden" id="toggle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <li><Link to={'/'}><a href="#" className="block hover:text-yellow-300">Home</a></Link></li>
          <li><Link to={'/about'}><a href="#" className="block hover:text-yellow-300">About</a></Link></li>
          <li><Link to={'/skills'}><a href="#" className="block hover:text-yellow-300">Skills</a></Link></li>
          <li><Link to={'/projects'}><a href="#" className="block hover:text-yellow-300">Projects</a></Link></li>
          <li><Link to={'/experience'}><a href="#" className="block hover:text-yellow-300">Experience</a></Link></li>
          <li><Link to={'/'}><a href="#" className="block hover:text-yellow-300">Contact</a></Link></li>
        </ul>
      )}
    </nav>
  );
};
