/**
 * HeroSection Component
 * Hero section with full-bleed background (desktop) or main image (mobile).
 * Desktop: hero-image-background fills the section; content overlays on top.
 * Mobile: hero-image-mobile displayed as img. Bottom promo links to 5QATM Light.
 */

import './HeroSection.css';
import heroImageBackground from '../assets/hero-image-background.webp';
import heroImageMobile from '../assets/hero-image-mobile.webp';
import heroImage from '../assets/hero-image.webp';
import heroImageHair2 from '../assets/hero-image-hair2.webp';
import heroImageHair1 from '../assets/hero-image-hair1.webp';
import heroImageCircleRight from '../assets/hero-image-circle-right.webp';
import heroImageBottomMobile from '../assets/hero-image-bottom-mobile.webp';
import heroImageBottom from '../assets/hero-image-bottom.webp';

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
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${heroImageBackground})` }}
        aria-hidden
      />
      <picture className="hero-image-wrapper">
        <source
          media="(max-width: 768px)"
          srcSet={heroImageMobile}
          width="800"
          height="1000"
        />
        <img
          src={heroImage}
          alt="5QATM Professional Hair Care Products - Premium Japanese Treatment Solutions"
          className="hero-image"
          width="2732"
          height="1787"
        />
      </picture>
      <img
        src={heroImageHair2}
        alt=""
        className="hero-overlay-hair2"
        width="800"
        height="1000"
        loading="lazy"
        aria-hidden
      />
      <img
        src={heroImageHair1}
        alt=""
        className="hero-overlay-hair1"
        width="800"
        height="1000"
        loading="lazy"
        aria-hidden
      />
      <img
        src={heroImageCircleRight}
        alt=""
        className="hero-overlay-circle"
        width="500"
        height="500"
        loading="lazy"
        aria-hidden
      />
      <a 
        href="#qatm-light" 
        onClick={handleScrollToLight}
        className="hero-image-bottom-wrapper"
        aria-label="Scroll to 5QATM Light Products"
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={heroImageBottomMobile}
          />
          <img
            src={heroImageBottom}
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














