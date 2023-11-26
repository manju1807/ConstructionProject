import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex space-x-2 text-center mx-auto justify-center">
      <Link to="/" className="hover:text-gray-600">
        Home
      </Link>
      <Link to="/about" className="hover:text-gray-600">
        About
      </Link>
      <Link to="/services" className="hover:text-gray-600">
        Services
      </Link>
      <Link to="/projects" className="hover:text-gray-600">
        Projects
      </Link>
      <Link to="/contact" className="hover:text-gray-600">
        Contact us
      </Link>
    </div>
  );
};

export default Navbar;
