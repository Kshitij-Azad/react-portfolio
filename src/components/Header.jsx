import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 bg-nav font-serif fixed top-0 left-0 right-0" id="nav-bg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <div>
          <a href="#" className="text-2xl font-bold">Kshitij Azad</a>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-2xl" aria-label="Toggle navigation menu" aria-expanded={isOpen ? "true" : "false"}>
          ☰
        </button>

        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-cyan-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-cyan-500">About</Link></li>
          <li><Link to="/skills" className="hover:text-cyan-500">Skills</Link></li>
          <li><Link to="/projects" className="hover:text-cyan-500">Projects</Link></li>
          <li><Link to="/experience" className="hover:text-cyan-500">Experience</Link></li>
          <li><Link to="/contact" className="hover:text-cyan-500" id="chat">Contact</Link></li>
        </ul>
        
        <a href="./assets/pdf/Kshitij_Azad.pdf" download="Kshitij_Azad_CV.pdf" className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-slate-900"> Download CV </a>
      </div>

      {isOpen && (
        <ul
          className="flex flex-col space-y-4 text-black mt-2 md:hidden" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          <li><Link to="/" className="block hover:text-cyan-500">Home</Link></li>
          <li><Link to="/about" className="block hover:text-cyan-500">About</Link></li>
          <li><Link to="/skills" className="block hover:text-cyan-500">Skills</Link></li>
          <li><Link to="/projects" className="block hover:text-cyan-500">Projects</Link></li>
          <li><Link to="/experience" className="block hover:text-cyan-500">Experience</Link></li>
          <li><Link to="/contact" className="block hover:text-cyan-500">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};
