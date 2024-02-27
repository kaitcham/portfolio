import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ImGithub } from 'react-icons/im';
import { FaLinkedinIn } from 'react-icons/fa';
import { CgMenu, CgClose } from 'react-icons/cg';
import Wrapper from './NavbarStyles';

const Navbar = () => {
  const screenSize = window.innerWidth;
  const [scroll, setScroll] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(window.scrollY));

    return () => {
      window.removeEventListener('scroll', () => setScroll(window.scrollY));
    };
  }, [scroll]);

  return (
    <Wrapper className="container-fluid" scroll={scroll}>
      <div className="container">
        <Link
          spy
          smooth
          to="home"
          exact="true"
          offset={-80}
          duration={500}
          className="logo"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="primary-text">M</span>
          <span className="secondary-text">C</span>
          <span>hristian</span>
        </Link>
        <nav className="navbar">
          <ul className={isMenuOpen ? 'nav-links show-nav' : 'nav-links'}>
            {/* <li>
              <Link
                spy
                smooth
                exact="true"
                to="about"
                offset={screenSize < 768 ? -123 : -80}
                duration={500}
                activeClass="active"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                About
              </Link>
            </li> */}
            <li>
              <Link
                spy
                smooth
                exact="true"
                to="portfolio"
                offset={screenSize < 768 ? -123 : -80}
                duration={500}
                activeClass="active"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
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
