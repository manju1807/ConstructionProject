import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { IoMenu, IoArrowBack } from 'react-icons/io5';
import Logo from '../assets/icons8-tailwindcss-480.png';

const Navbar = () => {
  const [bgStyle, setBgStyle] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const location = useLocation();

  const ToggleMenu = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const isHomepage = location.pathname === '/';
    setBgStyle(isHomepage);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsSidebarActive(false);
  };

  return (
    <nav
      className={`${
        isActive ? 'bg-white py-0 shadow-md' : 'bg-transparent py-0'
      } ${
        bgStyle
          ? 'text-gray-700'
          : `${isActive ? 'text-gray-700' : 'text-gray-50'}`
      } fixed w-full z-50 transition-all duration-300`}
    >
      <div
        className='container flex items-center justify-between py-2 w-full h-full px-6 md:px-4 relative'
        style={{ borderBottom: '1px solid #0f172a1a' }}
      >
        <Link to={'/'}>
          <motion.div>
            <img className='w-[40px]' src={Logo} alt='' />
          </motion.div>
        </Link>
        <motion.div className='md:flex hidden space-x-4'>
          <Link
            to='/'
            className={`${
              bgStyle ? 'hover:text-gray-500' : 'hover:text-gray-300'
            }`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to='/about'
            className={`${
              bgStyle ? 'hover:text-gray-500' : 'hover:text-gray-300'
            }`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to='/services'
            className={`${
              bgStyle ? 'hover:text-gray-500' : 'hover:text-gray-300'
            }`}
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to='/projects'
            className={`${
              bgStyle ? 'hover:text-gray-500' : 'hover:text-gray-300'
            }`}
            onClick={handleLinkClick}
          >
            Projects
          </Link>
          <Link
            to='/contact'
            className={`${
              bgStyle ? 'hover:text-gray-500' : 'hover:text-gray-300'
            }`}
            onClick={handleLinkClick}
          >
            Contact us
          </Link>
        </motion.div>
        <div
          className='md:hidden flex cursor-pointer hover:text-gray-400'
          onClick={ToggleMenu}
        >
          <IoMenu className='text-2xl' />
        </div>
      </div>
      <div
        className={`md:hidden absolute z-50 top-0 ${
          isSidebarActive ? 'right-0' : '-right-[60rem]'
        }  bg-white min-w-[100vw] min-h-[100vh] max-h-screen max-w-screen-sm transition-all duration-300`}
      >
        <div>
          <div
            className={`container flex place-content-end mx-auto px-6 py-3 w-full items-center `}
            style={{ borderBottom: '1px solid #0f172a1a' }}
          >
            <IoArrowBack
              onClick={ToggleMenu}
              className={`${
                bgStyle ? 'text-gray-600' : 'text-gray-600'
              } text-2xl hover:text-gray-500 cursor-pointer mt-2`}
            />
          </div>
          <motion.div className='flex md:hidden justify-center items-center h-[100vh] w-[100vw] '>
            <div
              className={`flex flex-col h-full items-center justify-center space-y-4 text-xl ${
                bgStyle ? 'text-gray-700' : 'text-gray-700'
              }`}
            >
              <Link
                to='/'
                className={`${
                  bgStyle ? 'hover:text-gray-500' : 'hover:text-gray-500'
                }`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to='/about'
                className={`${
                  bgStyle ? 'hover:text-gray-500' : 'hover:text-gray-500'
                }`}
                onClick={handleLinkClick}
              >
                About
              </Link>
              <Link
                to='/services'
                className={`${
                  bgStyle ? 'hover:text-gray-500' : 'hover:text-gray-500'
                }`}
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link
                to='/projects'
                className={`${
                  bgStyle ? 'hover:text-gray-500' : 'hover:text-gray-500'
                }`}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
              <Link
                to='/contact'
                className={`${
                  bgStyle ? 'hover:text-gray-500' : 'hover:text-gray-500'
                }`}
                onClick={handleLinkClick}
              >
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
