import BigTealCircle from './BigTealCircle';
import SmallWhiteCircle from './SmallWhiteCircle';
import PictureAndCircle1 from './PictureAndCircle1';
import PictureAndCircle2 from './PictureAndCircle2';
import './HeroImage.css';

function HeroImage() {
  return (
    <section className="section hero-image">
      <div className="hero-left">
        <BigTealCircle />
      </div>
      <div className="hero-center">
        {/* Center content placeholder */}
      </div>
      <div className="hero-right">
        <PictureAndCircle1 />
        <PictureAndCircle2 />
      </div>
    </section>
  );
}

export default HeroImage;

