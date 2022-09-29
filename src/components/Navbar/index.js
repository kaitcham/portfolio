import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { NavbarWrapper } from './NavbarStyles';
import { CgMenu, CgClose } from 'react-icons/cg';
import './NavbarStyles.js';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOPen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  const handleClick = () => setIsMenuOPen(!isMenuOpen);
  return (
    <NavbarWrapper>
      <div className="navbar__logo">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={isMenuOpen && screenWidth < 768 ? handleClick : null}
        >
          MChristian
        </Link>
      </div>
      {(isMenuOpen || screenWidth > 768) && (
        <ul className="navbar__links">
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={isMenuOpen && screenWidth < 768 ? handleClick : null}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={50}
              onClick={isMenuOpen && screenWidth < 768 ? handleClick : null}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={50}
              onClick={isMenuOpen && screenWidth < 768 ? handleClick : null}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
      <div className="navbar__icons" onClick={handleClick}>
        {isMenuOpen ? <CgClose /> : <CgMenu />}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
