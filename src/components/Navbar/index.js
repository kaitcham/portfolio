import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImGithub } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';
import { CgMenu, CgClose } from 'react-icons/cg';
import Wrapper from './NavbarStyles';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Wrapper className="container-fluid">
      <div className="container">
        <Link to="/" className="logo">
          <span className="primary-text">M</span>
          <span className="secondary-text">C</span>
          <span>hristian</span>
        </Link>
        <nav className="navbar">
          <ul className={isMenuOpen ? 'nav-links show-nav' : 'nav-links'}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Blogs</a>
            </li>
          </ul>
          <div className="social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kaitcham"
            >
              <ImGithub />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kaitcham/"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <button
            type="button"
            className="navbar-icons"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CgClose /> : <CgMenu />}
          </button>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
