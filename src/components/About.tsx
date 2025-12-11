/**
 * About Component
 *
 * Two-section layout with product image on left and about image on right.
 * Responsive: side-by-side on larger screens, stacked on smaller screens.
 */

import "./About.css";
import section2Image from "../assets/section2.png";
import aboutSectionImage from "../assets/about-section.png";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-left">
                <img src={section2Image} alt="Product showcase" className="about-image" />
            </div>

            <div className="about-right">
                <img src={aboutSectionImage} alt="About QATM" className="about-image" />
            </div>
        </section>
    );
};

export default About;
