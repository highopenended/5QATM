/**
 * HeroSection Component
 * Hero section displaying the main hero image.
 */

import './HeroSection.css';
import section1Image from '../assets/section1.png';

const HeroSection = () => {
  return (
    <section id="top" className="hero-section">
      <img 
        src={section1Image} 
        alt="Hero" 
        className="hero-image"
      />
    </section>
  );
};

export default HeroSection;














