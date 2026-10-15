// import { Link } from 'react-router-dom';
// function Navbar() {
//   return (
//     <nav className="flex justify-center space-x-25 px-15 text-xl py-6 font-happymonkey font-bold">
//       <Link to="/">Home</Link>
//       <Link to="/about">About Me</Link>
//       <Link to="/blogs">Blogs</Link>
//       <Link to="/contact">Contact</Link>
//     </nav>
//   );
// }

// export default Navbar;

import { Menu, X } from 'lucide-react'; // Optional: Icon library
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/30 backdrop-blur-md shadow-md px-6 py-4 rounded-xl border border-white/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">


        {/* Hamburger icon */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-10 font-bold font-happymonkey text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-4 font-bold font-happymonkey text-lg px-6">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

