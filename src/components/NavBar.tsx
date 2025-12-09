/**
 * NavBar Component
 * 
 * Sticky navigation bar with logo, navigation links, and action button.
 * Logo and button link to the Rakuten store page.
 */

import './NavBar.css';

const NavBar = () => {
  const handleNavClick = (section: string) => {
    // Placeholder for scroll functionality
    console.log(`Navigate to ${section} section`);
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
      </div>
    </nav>
  );
};

export default NavBar;



