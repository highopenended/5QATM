import hairPhoto2 from '../../assets/hair-photo2.png';
import pouch1 from '../../assets/pouch1.png';
import pouch2 from '../../assets/pouch2.png';
import './PictureAndCircle2.css';

function PictureAndCircle2() {
  return (
    <div className="picture-and-circle-2-container">
      <div className="picture-and-circle-2-wrapper">
        <div className="picture-and-circle-2">
          <img src={hairPhoto2} alt="Hair photo 2" className="picture-and-circle-2-image" />
          <div className="picture-and-circle-2-circle">
            <div className="picture-and-circle-2-content">Filler Text</div>
            <div className="picture-and-circle-2-pouches">
              <img src={pouch1} alt="Pouch 1" className="picture-and-circle-2-pouch" />
              <img src={pouch2} alt="Pouch 2" className="picture-and-circle-2-pouch" />
            </div>
          </div>
        </div>
      </div>
      <a href="https://www.rakuten.co.jp/24quantum/" className="picture-and-circle-2-button" target="_blank" rel="noopener noreferrer">
        Filler Text
      </a>
    </div>
  );
}

export default PictureAndCircle2;

