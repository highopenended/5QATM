/**
 * GangParade Section
 * Presents the gang parade hero styling, outlined typography, and embedded video.
 */

import './GangParade.css';
import gangParadeTextImage from '../assets/gang-parade-text-image.png';

const GangParade = () => {
  return (
    <section className="gang-parade" aria-label="Gang Parade introduction">
      <div className="gang-parade__content-shell">
        <img 
          className="gang-parade__text-image" 
          src={gangParadeTextImage} 
          alt="GANG PARADE による 24アクアミスト & 5QATM 紹介動画"
        />

        <div className="gang-parade__iframe-wrapper">
          <iframe
            className="gang-parade__iframe"
            src="https://www.youtube.com/embed/zse0H_zENpA"
            title="Gang Parade 24 Aqua Mist & 5QATM introduction"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <a
          className="gang-parade__cta"
          href="https://youtu.be/mVnobVD9MMs"
          target="_blank"
          rel="noreferrer"
        >
          ロングバージョンはこちら！
        </a>
      </div>
    </section>
  );
};

export default GangParade;
