import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="flex justify-center space-x-25 px-15 text-xl py-6 font-happymonkey font-bold">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
