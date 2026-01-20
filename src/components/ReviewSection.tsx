/**
 * ReviewSection Component
 *
 * Displays professional reviews with header text, decorative image, and three review boxes.
 * Structure: "Reviews"/"Professionals" title, staff-excite-text image, three teal boxes with staff images.
 * Staff images overlap the teal boxes for visual interest.
 */

import "./ReviewSection.css";
import reviewBackground from "../assets/review-background.png";
import staffExciteText from "../assets/staff-excite-text.png";
import staff1Image from "../assets/staff-1.png";
import staff2Image from "../assets/staff-2.png";
import staff3Image from "../assets/staff-3.png";

const ReviewSection = () => {
    return (
        <section 
            className="review-section"
            style={{ backgroundImage: `url(${reviewBackground})` }}
        >
            {/* Header: Title + Excite Text Image */}
            <div className="review-header">
                <div className="review-title-wrapper">
                    <h2 className="review-title-line1">Reviews</h2>
                    <h3 className="review-title-line2">Professionals</h3>
                </div>
                <img src={staffExciteText} alt="" className="staff-excite-image" />
            </div>

            {/* Review 1: Teal box left, staff-1 overlapping right */}
            <div className="review-item review-item-1">
                <div className="review-teal-box">
                    <div className="review-content">
                        <div className="review-brand">GRANMASH</div>
                        <div className="review-name">
                            <span className="review-name-last">小林</span>
                            <span className="review-name-first">忠</span>
                            <span className="review-name-honorific">様</span>
                        </div>
                        <div className="review-separator"></div>
                        <div className="review-text-line review-text-thin">ドライヤーの時間が</div>
                        <div className="review-text-line">
                            <span className="review-text-big">圧倒的</span>
                            <span className="review-text-thin">に</span>
                            <span className="review-text-big">短縮</span>
                            <span className="review-text-thin">できるだけでなく、</span>
                        </div>
                        <div className="review-text-line">
                            <span className="review-text-big">素晴らしい質感</span>
                            <span className="review-text-thin">です。</span>
                        </div>
                    </div>
                </div>
                <img src={staff1Image} alt="Professional review" className="staff-image staff-image-1" />
            </div>

            {/* Review 2: Teal box right, staff-2 overlapping left */}
            <div className="review-item review-item-2">
                <div className="review-teal-box">
                    <div className="review-content">
                        {/* Empty structure ready for content */}
                    </div>
                </div>
                <img src={staff2Image} alt="Professional review" className="staff-image staff-image-2" />
            </div>

            {/* Review 3: Teal box left, staff-3 overlapping right */}
            <div className="review-item review-item-3">
                <div className="review-teal-box">
                    <div className="review-content">
                        {/* Empty structure ready for content */}
                    </div>
                </div>
                <img src={staff3Image} alt="Professional review" className="staff-image staff-image-3" />
            </div>
        </section>
    );
};

export default ReviewSection;
