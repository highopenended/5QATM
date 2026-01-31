/**
 * HeroSection Component
 * Hero section displaying the main hero image.
 * Uses mobile-optimized image below 768px, desktop image otherwise.
 */

import './HeroSection.css';
import { imageAssets } from '../utils/imageAssets';

const HeroSection = () => {
  return (
    <section id="top" className="hero-section">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={imageAssets.heroImageMobile}
        />
        <img
          src={imageAssets.heroImage}
          alt="Hero"
          className="hero-image"
        />
      </picture>
    </section>
  );
};

export default HeroSection;














