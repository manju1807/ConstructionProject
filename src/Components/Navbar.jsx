import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import Logo from "../assets/icons8-tailwindcss-480.png";
import { IoMenu } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const ToggleMenu = () => {
    setIsSidebarActive(!isSidebarActive);
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    );
  });
  return (
    <nav
      className={`${
        isActive ? "bg-white py-0 shadow-md" : "bg-transparent py-0"
      } fixed w-full z-20 transition-all duration-300`}
    >
      <div
        className="container flex items-center justify-between w-full h-full px-4 md:px-2 relative"
        style={{ borderBottom: "1px solid #0f172a1a" }}
      >
        <Link to={"/"}>
          <motion.div>
            <img className="w-[40px]" src={Logo} alt="" />
          </motion.div>
        </Link>
        <motion.div className="md:flex hidden space-x-4">
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
        </motion.div>
        <div
          className="md:hidden flex cursor-pointer hover:text-gray-600"
          onClick={ToggleMenu}
        >
          <IoMenu className="text-2xl" />
        </div>
      </div>
      <div
        className={`md:hidden absolute top-0 ${
          isSidebarActive ? "right-0" : "-right-[30rem]"
        }  bg-white min-w-[100vw] min-h-[100vh] max-h-screen max-w-screen-sm transition-all duration-300`}
      >
        <div>
          <div
            className="container flex place-content-end mx-auto px-4 py-4 w-full items-center"
            style={{ borderBottom: "1px solid #0f172a1a" }}
          >
            <IoArrowBack
              onClick={ToggleMenu}
              className="text-2xl hover:text-gray-600 cursor-pointer mt-2"
            />
          </div>
          <motion.div className="flex md:hidden justify-center items-center h-[100vh] w-[100vw] ">
            <div className="flex flex-col h-full items-center justify-center space-y-4 text-xl">
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
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
