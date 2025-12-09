/**
 * DailyCare Component
 *
 * Two-column layout featuring product benefits (left) and product showcase (right).
 * Left: Two teal boxes with overlaid text. Right: "Daily Care" header + product images.
 * All text scales proportionally with container width using vw units.
 * Mobile: Items reorder to alternate between product images and teal boxes.
 */

import "./DailyCare.css";
import backgroundImage from "../assets/daily-care-background.png";
import tealBox1 from "../assets/daily-care-left-teal-1.png";
import tealBox2 from "../assets/daily-care-left-teal-2.png";
import productImage1 from "../assets/daily-care-right-image1.png";
import productImage2 from "../assets/daily-care-right-image2.png";

const DailyCare = () => {
    return (
        <section
            className="daily-care-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Daily Care Header - Order 1 on mobile */}
            <div className="daily-care-header">
                <div className="daily-care-header-content">
                    <h2>Daily Care</h2>
                    <div className="header-underline"></div>
                </div>
            </div>

            {/* Product 1: Shampoo/Treatment - Order 2 on mobile */}
            <div className="product-box-wrapper product-1">
                <img src={productImage1} alt="Shampoo and Treatment" className="product-box-image" />
                <div className="product-box-content">
                    <p className="product-label">5QATM</p>
                    <h4 className="product-title">Shampoo<br />Treatment</h4>
                    <p className="product-subtitle">5クァンタムシャンプー<br />5クァンタムトリートメント</p>
                </div>
            </div>

            {/* Teal Box 1 - Order 3 on mobile */}
            <div className="teal-box-wrapper teal-1">
                <img src={tealBox1} alt="" className="teal-box-image" />
                <div className="teal-box-content">
                    <h3 className="teal-box-header">速乾 × 美髪</h3>
                    <p className="teal-box-subheader">
                        毎日のドライヤー時間を<span className="highlight">30%</span>短縮
                    </p>
                    <p className="teal-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

            {/* Product 2: Emulsion - Order 4 on mobile */}
            <div className="product-box-wrapper product-2">
                <img src={productImage2} alt="Emulsion" className="product-box-image" />
                <div className="product-box-content">
                    <p className="product-label">5QATM</p>
                    <h4 className="product-title">Emulsion</h4>
                    <p className="product-subtitle">5クァンタムエマルジョン<br />洗い流さないトリートメント</p>
                </div>
            </div>

            {/* Teal Box 2 - Order 5 on mobile */}
            <div className="teal-box-wrapper teal-2">
                <img src={tealBox2} alt="" className="teal-box-image" />
                <div className="teal-box-content">
                    <h3 className="teal-box-header">
                        髪の<span className="highlight">内側・外側</span>から
                    </h3>
                    <p className="teal-box-subheader">
                        徹底した<span className="highlight">髪質改善</span>成分を配合
                    </p>
                    <p className="teal-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DailyCare;
