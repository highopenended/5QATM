/**
 * NavBar Component
 * 
 * Sticky navigation bar with logo, navigation links, and action button.
 * Logo and button link to the Rakuten store page.
 * Mobile menu slides out from right.
 */

import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="https://www.rakuten.co.jp/24quantum/" className="navbar-logo">
          5QATM
        </a>
        
        <div className="navbar-right">
          <button 
            className="navbar-link" 
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button 
            className="navbar-link" 
            onClick={() => handleNavClick('products')}
          >
            Products
          </button>
          <button 
            className="navbar-link" 
            onClick={() => handleNavClick('reviews')}
          >
            Reviews
          </button>
          <button 
            className="navbar-link" 
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
          <a 
            href="https://www.rakuten.co.jp/24quantum/" 
            className="navbar-button"
          >
            button
          </a>
        </div>

        <button 
          className="navbar-hamburger"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg 
            width="56" 
            height="56" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="3" width="20" height="2" fill="white" rx="1" />
            <rect x="2" y="10.5" width="20" height="2" fill="white" rx="1" />
            <rect x="2" y="18" width="20" height="2" fill="white" rx="1" />
          </svg>
        </button>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="mobile-menu-link" 
          onClick={() => handleNavClick('about')}
        >
          About
        </button>
        <button 
          className="mobile-menu-link" 
          onClick={() => handleNavClick('products')}
        >
          Products
        </button>
        <button 
          className="mobile-menu-link" 
          onClick={() => handleNavClick('reviews')}
        >
          Reviews
        </button>
        <button 
          className="mobile-menu-link" 
          onClick={() => handleNavClick('contact')}
        >
          Contact
        </button>
        <a 
          href="https://www.rakuten.co.jp/24quantum/" 
          className="mobile-menu-button"
        >
          button
        </a>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default NavBar;





