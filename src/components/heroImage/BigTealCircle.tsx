import SmallWhiteCircle from './SmallWhiteCircle';
import './BigTealCircle.css';

function BigTealCircle() {
  return (
    <div className="big-teal-circle-container">
      <div className="big-teal-circle-text-above">Filler Text</div>
      <div className="big-teal-circle-wrapper">
        <div className="big-teal-circle">
          <div className="big-teal-circle-content">Filler Text</div>
        </div>
        <SmallWhiteCircle />
      </div>
    </div>
  );
}

export default BigTealCircle;

