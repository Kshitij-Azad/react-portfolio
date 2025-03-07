import React, { useState } from "react";

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
          <li><a href="#" className="hover:text-yellow-300 ">Home</a></li>
          <li><a href="#" className="hover:text-yellow-300">About</a></li>
          <li><a href="#" className="hover:text-yellow-300">Skills</a></li>
          <li><a href="#" className="hover:text-yellow-300">Projects</a></li>
          <li><a href="#" className="hover:text-yellow-300">Experience</a></li>
          <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col space-y-4 bg-cyan-950 p-4 text-white mt-2 md:hidden" id="toggle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <li><a href="#" className="block hover:text-yellow-300">Home</a></li>
          <li><a href="#" className="block hover:text-yellow-300">About</a></li>
          <li><a href="#" className="block hover:text-yellow-300">Skills</a></li>
          <li><a href="#" className="block hover:text-yellow-300">Projects</a></li>
          <li><a href="#" className="block hover:text-yellow-300">Experience</a></li>
          <li><a href="#" className="block hover:text-yellow-300">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};
