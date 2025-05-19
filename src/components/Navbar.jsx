import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gray-900 shadow-md bg-opacity-90 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <Link
          to="/"
          className="text-4xl font-bold text-white transition hover:text-purple-400"
          onClick={closeMenu}
        >
          Taiga Mizuno
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden space-x-8 text-2xl md:flex">
          <Link to="/" className="font-bold text-white transition hover:text-purple-400">Home</Link>
          <Link to="/about" className="font-bold text-white transition hover:text-purple-400">About</Link>
          <Link to="/projects" className="font-bold text-white transition hover:text-purple-400">Projects</Link>
          <Link to="/contact" className="font-bold text-white transition hover:text-purple-400">Contact</Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="z-40 flex flex-col items-center py-6 space-y-6 text-white bg-gray-900 shadow-lg md:hidden">
          <Link
            to="/"
            onClick={closeMenu}
            className="w-full px-6 py-3 text-xl text-center transition rounded-md hover:bg-purple-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="w-full px-6 py-3 text-xl text-center transition rounded-md hover:bg-purple-700"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={closeMenu}
            className="w-full px-6 py-3 text-xl text-center transition rounded-md hover:bg-purple-700"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="w-full px-6 py-3 text-xl text-center transition rounded-md hover:bg-purple-700"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
