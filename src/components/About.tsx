/**
 * About Component
 *
 * Two-section layout with product image on left and about image on right.
 * Responsive: side-by-side on larger screens, stacked on smaller screens.
 * Uses mobile-optimized image below 768px via picture element.
 */

import "./About.css";
import { imageAssets } from "../utils/imageAssets";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-left">
                <img src={imageAssets.aboutTopImages} alt="Product showcase" className="about-image about-image2" />
            </div>

            <div className="about-right">
                <div className="about-right-inner">
                    <h2 className="about-heading">About</h2>
                    <picture>
                        <source
                            media="(max-width: 768px)"
                            srcSet={imageAssets.aboutSectionMobile}
                        />
                        <img
                            src={imageAssets.aboutSection}
                            alt="About QATM"
                            className="about-image"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
};

export default About;
