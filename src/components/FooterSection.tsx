/**
 * FooterSection Component
 * 
 * Footer section with navigation links, brand logo, and social media icons.
 * Solid teal background with white text.
 * Navigation links scroll to corresponding sections.
 */

import './FooterSection.css';
import logoImg from '../assets/5QATM-logo.png';

const FooterSection = () => {
  /**
   * Handles navigation link clicks by scrolling to the target section
   * @param section - ID of the target section (e.g., 'top', 'about', 'products', 'reviews')
   */
  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Navigation Links Row */}
        <nav className="footer-nav">
          <button 
            className="footer-nav-link footer-nav-link-top" 
            onClick={() => handleNavClick('top')}
          >
            Top
          </button>
          <button 
            className="footer-nav-link" 
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button 
            className="footer-nav-link" 
            onClick={() => handleNavClick('products')}
          >
            Products
          </button>
          <button 
            className="footer-nav-link" 
            onClick={() => handleNavClick('reviews')}
          >
            Reviews
          </button>
        </nav>

        {/* Bottom Row: Brand + Social Icons */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <a
              href="https://www.rakuten.co.jp/24quantum/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="5QATM 楽天市場店"
            >
              <img src={logoImg} alt="5QATM" className="footer-brand-logo" />
            </a>
          </div>
          
          <div className="footer-social">
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
                <circle cx="18" cy="6" r="1" fill="white"/>
              </svg>
            </a>
            
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <svg 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
                <path 
                  d="M13.5,9.8c0-0.8,0.7-1.1,1.5-1.1c0.8,0,1.6,0.2,1.6,0.2l0.5-3c0,0-1.1-0.4-3.6-0.4c-1.6,0-2.5,0.6-3.1,1.5
                  c-0.6,0.8-0.6,2.2-0.6,3v2H7.5V15h2v6.5h3.8V15h3l0.2-3h-3.2V9.8z" 
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
