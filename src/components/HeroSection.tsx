/**
 * HeroSection Component
 * Hero section displaying the main hero image and bottom-right promo image.
 * Uses mobile-optimized images below 768px, desktop images otherwise.
 * Bottom image links to 5QATM Light products section.
 */

import './HeroSection.css';
import { imageAssets } from '../utils/imageAssets';

const HeroSection = () => {
  const handleScrollToLight = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('qatm-light');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="hero-section">
      <h1 className="visually-hidden">5QATM - Premium Japanese Hair Care Products</h1>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={imageAssets.heroImageMobile}
        />
        <img
          src={imageAssets.heroImage}
          alt="5QATM Professional Hair Care Products - Premium Japanese Treatment Solutions"
          className="hero-image"
          width="2732"
          height="1787"
        />
      </picture>
      <a 
        href="#qatm-light" 
        onClick={handleScrollToLight}
        className="hero-image-bottom-wrapper"
        aria-label="Scroll to 5QATM Light Products"
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={imageAssets.heroImageBottomMobile}
          />
          <img
            src={imageAssets.heroImageBottom}
            alt="5QATM Light Products"
            className="hero-image-bottom"
            width="2732"
            height="1787"
            loading="lazy"
          />
        </picture>
      </a>
    </section>
  );
};

export default HeroSection;














