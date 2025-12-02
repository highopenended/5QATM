import hairPhoto1 from '../../assets/hair-photo1.png';
import './PictureAndCircle1.css';

function PictureAndCircle1() {
  return (
    <div className="picture-and-circle-1-wrapper">
      <div className="picture-and-circle-1">
        <img src={hairPhoto1} alt="Hair photo 1" className="picture-and-circle-1-image" />
        <div className="picture-and-circle-1-circle">
          <div className="picture-and-circle-1-content">Filler Text</div>
        </div>
      </div>
    </div>
  );
}

export default PictureAndCircle1;

