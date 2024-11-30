import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className={`nav_name_left ${isMenuOpen ? 'hide' : ''}`}>
            <div className="header_logo">
                  <img
                    src="https://res.cloudinary.com/cloud0310/image/upload/v1732740941/logo2_cizmos.png"
                    alt="Logo"
                  />
            </div>
          <div className="heading_header">Indian Therapy Center</div>
        </div>
        <div className={`nav_right ${isMenuOpen ? 'active' : ''}`}>
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item"><a href="/#about">About</a></li>
            <li className="nav-item"><a href="/services">Services</a></li>
            <li className="nav-item"><a href="/#testimonials">Testimonials</a></li>
            <li className="nav-item"><a href="https://play.google.com/store/apps/details?id=com.yourapp" target="_blank" rel="noopener noreferrer">Download App</a></li>
          </ul>
          <div className={`social-icons ${isMenuOpen ? 'hide' : ''}`}>
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
