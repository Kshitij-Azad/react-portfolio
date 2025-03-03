import React, { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyan-950 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-lg font-bold">Kshitij Azad</a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-blue-600 ">Home</a></li>
          <li><a href="#" className="hover:text-gray-700">About</a></li>
          <li><a href="#" className="hover:text-gray-700">Skills</a></li>
          <li><a href="#" className="hover:text-gray-700">Projects</a></li>
          <li><a href="#" className="hover:text-gray-700">Experience</a></li>
          <li><a href="#" className="hover:text-gray-700">Contact</a></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col space-y-4 bg-cyan-950 p-4 text-white mt-2 md:hidden" id="toggle">
          <li><a href="#" className="border py-1 px-1 ml-1 block hover:text-gray-700">Home</a></li>
          <li><a href="#" className="border py-1 px-1 ml-1 block hover:text-gray-700">About</a></li>
          <li><a href="#" className="border py-1 px-1 ml-1 block hover:text-gray-700">Skills</a></li>
          <li><a href="#" className="border py-1 px-1 ml-1 block hover:text-gray-700">Projects</a></li>
          <li><a href="#" className="border py-1 px-1 ml-1 block hover:text-gray-700">Experience</a></li>
          <li><a href="#" className="border py-1 px-1 ml-1 block hover:text-gray-700">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};
