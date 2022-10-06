import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { CgMenu, CgClose } from 'react-icons/cg';
import NavbarWrapper from './NavbarStyles';

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
          spy
          smooth
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
              spy
              smooth
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
              spy
              smooth
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
              spy
              smooth
              duration={500}
              offset={50}
              onClick={isMenuOpen && screenWidth < 768 ? handleClick : null}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
      <button type="button" className="navbar__icons" onClick={handleClick}>
        {isMenuOpen ? <CgClose /> : <CgMenu />}
      </button>
    </NavbarWrapper>
  );
};

export default Navbar;
