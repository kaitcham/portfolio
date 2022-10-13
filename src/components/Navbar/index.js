import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';
import NavbarWrapper from './NavbarStyles';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOPen] = useState(false);
  const handleClick = () => setIsMenuOPen(!isMenuOpen);

  return (
    <NavbarWrapper>
      <div className="navbar__container">
        <h1 className="navbar__logo">MChristian</h1>
        <button type="button" className="navbar__icons" onClick={handleClick}>
          {isMenuOpen ? <CgClose /> : <CgMenu />}
        </button>
      </div>
      <ul className={isMenuOpen ? 'navbar__links active' : 'navbar__links'}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
