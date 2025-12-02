/**
 * HeroImage Component
 * 
 * Full-viewport hero section with background image and decorative elements:
 * - Left: Large teal circle with overlapping white circle
 * - Center: Background image visible
 * - Right: Two photo cards with teal badge overlays
 * 
 * Uses CSS Grid for layout. All sizing is relative to the container
 * for consistent scaling across zoom levels and devices.
 */

import hairPhoto1 from '../../assets/hair-photo1.png';
import hairPhoto2 from '../../assets/hair-photo2.png';
import pouch1 from '../../assets/pouch1.png';
import pouch2 from '../../assets/pouch2.png';
import './HeroImage.css';

function HeroImage() {
  return (
    <section className="hero-image">
      {/* Left Column: Circles */}
      <div className="hero-left">
        <h2 className="hero-title">Filler Text</h2>
        <div className="circle-stack">
          <div className="circle-big">
            <span className="circle-text">Filler Text</span>
          </div>
          <div className="circle-small">
            <span className="circle-text">Filler Text</span>
          </div>
        </div>
      </div>

      {/* Center Column: Spacer for background visibility */}
      <div className="hero-center" />

      {/* Right Column: Photo Cards */}
      <div className="hero-right">
        <div className="card">
          <img src={hairPhoto1} alt="Hair photo 1" className="card-image" />
          <div className="card-badge">
            <span className="circle-text">Filler Text</span>
          </div>
        </div>

        <div className="card">
          <img src={hairPhoto2} alt="Hair photo 2" className="card-image" />
          <div className="card-badge">
            <span className="circle-text">Filler Text</span>
            <div className="pouches">
              <img src={pouch1} alt="Pouch 1" className="pouch" />
              <img src={pouch2} alt="Pouch 2" className="pouch" />
            </div>
          </div>
        </div>

        <a
          href="https://www.rakuten.co.jp/24quantum/"
          className="hero-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Filler Text
        </a>
      </div>
    </section>
  );
}

export default HeroImage;
