/**
 * HeroImage Component
 * 
 * Simple hero section with background image.
 */

import sectionHeroImage from '../../assets/section-hero-image-full.png';

function HeroImage() {
  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${sectionHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}

export default HeroImage;
