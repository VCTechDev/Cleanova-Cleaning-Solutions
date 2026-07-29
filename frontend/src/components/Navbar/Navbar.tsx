import React, { useState } from 'react';
import './Navbar.css';
import { navItems } from './navItems';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#">Cleanova</a>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id} className="navbar-item">
              <a href={item.href} className="navbar-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="navbar-actions">
          <button className="navbar-cta">SHOP NOW</button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="navbar-hamburger" onClick={toggleMobileMenu}>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="navbar-mobile-menu">
          {navItems.map((item) => (
            <li key={item.id} className="navbar-mobile-item">
              <a href={item.href} className="navbar-mobile-link" onClick={toggleMobileMenu}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="navbar-mobile-item">
            <button className="navbar-mobile-cta">SHOP NOW</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
