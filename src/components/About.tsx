/**
 * About Component
 *
 * Two-section layout with product image on left and about image on right.
 * Responsive: side-by-side on larger screens, stacked on smaller screens.
 * Needs cleaning up
 */

import "./About.css";
import aboutTopImages from "../assets/about-top-images.png";
import aboutSectionImage from "../assets/about-section.png";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-left">
                <img src={aboutTopImages} alt="Product showcase" className="about-image about-image2" />
            </div>

            <div className="about-right">
                <img src={aboutSectionImage} alt="About QATM" className="about-image" />
            </div>
        </section>
    );
};

export default About;
