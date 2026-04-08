/**
 * About Component
 *
 * Two-section layout with product image on left and about image on right.
 * Responsive: side-by-side on larger screens, stacked on smaller screens.
 * Uses mobile-optimized image below 768px via picture element.
 */

import "./About.css";
import aboutTopImages from "../assets/about-top-images.webp";
import aboutSectionMobile from "../assets/about-section-mobile.webp";
import aboutSection from "../assets/about-section.webp";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-left">
                <img 
                    src={aboutTopImages} 
                    alt="5QATM hair care product collection featuring shampoo, treatment, and styling products" 
                    className="about-image about-image2"
                    width="1390"
                    height="1556"
                    loading="lazy"
                />
            </div>

            <div className="about-right">
                <div className="about-right-inner">
                    <h2 className="about-heading">About</h2>
                    <picture>
                        <source
                            media="(max-width: 768px)"
                            srcSet={aboutSectionMobile}
                        />
                        <img
                            src={aboutSection}
                            alt="5QATM professional hair care technology and product benefits"
                            className="about-image"
                            width="749"
                            height="852"
                            loading="lazy"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
};

export default About;
