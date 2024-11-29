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
          Indian Therapy Center
        </div>
        <div className={`nav_right ${isMenuOpen ? 'active' : ''}`}>
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#services">Services</a></li>
            <li className="nav-item"><a href="#testimonials">Testimonials</a></li>
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
