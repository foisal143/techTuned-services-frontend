import { Link, NavLink } from 'react-router-dom';
import Container from '../../../components/Container';
import { useEffect, useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change '50' to your desired scroll position
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex  h-[116px] justify-between items-center ">
          <div className="w-fit text-2xl font-bold">TechTuned Services</div>
          <div
            className={`lg:static absolute transition-all duration-200 lg:bg-transparent bg-white w-full lg:w-fit ${
              isOpen ? 'left-0 top-24 p-5' : '-left-[100%] top-24 p-5'
            }`}
          >
            <ul
              className={`  lg:flex text-center  justify-center space-y-8 lg:space-y-0 lg:gap-5 active-links`}
            >
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/"> Home</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/case-studies"> Case Studies</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              </li>
              <li className="hover:text-brandPrimary transition-all duration-200">
                <NavLink to="/terms-condition">Terms & Condition</NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:hidden block">
            <button onClick={() => setIsOpen(prev => !prev)}>
              {!isOpen ? <FaBars /> : <FaXmark />}
            </button>
          </div>
          <div className="hidden lg:block">
            <Link to="/login">
              {' '}
              <button className="btn-primary ">Login</button>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
