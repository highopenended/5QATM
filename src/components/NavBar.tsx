/**
 * NavBar Component
 * 
 * Sticky navigation bar with logo, navigation links, and action button.
 * Logo links to Rakuten store. Top-right button links to professional/seminar area.
 * Mobile menu slides out from right.
 */

import { useState } from 'react';
import './NavBar.css';
import logoImage from '../assets/5QATM-logo.png';

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
          <img src={logoImage} alt="5QATM" />
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
          <a 
            href="https://24quantum.jp/%E3%82%BB%E3%83%9F%E3%83%8A%E3%83%BC%E8%B3%87%E6%96%99?password-protected=login&redirect_to=https%3A%2F%2F24quantum.jp%2F%25E3%2582%25BB%25E3%2583%259F%25E3%2583%258A%25E3%2583%25BC%25E8%25B3%2587%25E6%2596%2599%2F" 
            className="navbar-button"
          >
            理美容関係の方はこちら
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
        <a 
          href="https://24quantum.jp/%E3%82%BB%E3%83%9F%E3%83%8A%E3%83%BC%E8%B3%87%E6%96%99?password-protected=login&redirect_to=https%3A%2F%2F24quantum.jp%2F%25E3%2582%25BB%25E3%2583%259F%25E3%2583%258A%25E3%2583%25BC%25E8%25B3%2587%25E6%2596%2599%2F" 
          className="mobile-menu-button"
        >
          理美容関係の方はこちら
        </a>
      </div>

      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default NavBar;





