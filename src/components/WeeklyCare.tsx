/**
 * WeeklyCare Component
 *
 * Single-column layout featuring weekly special care products.
 * Structure: Section title, product image + teal info box, how-to video, new product splash, CTA button.
 * Styling mirrors DailyCare patterns for consistency.
 */

import "./WeeklyCare.css";
import backgroundImage from "../assets/weekly-care-background.png";
import leftImage from "../assets/weekly-care-left-image.png";
import newProductImage from "../assets/weekly-care-new-image.png";
import Button_Rakuten from "./Button_Rakuten";

const WeeklyCare = () => {
    return (
        <section
            className="weekly-care-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Section Title */}
            <div className="weekly-care-header">
                <div className="weekly-care-header-content">
                    <h2>Weekly Special Care</h2>
                    <div className="weekly-header-underline"></div>
                </div>
            </div>

            {/* Product Row: Left Image + Right Teal Box */}
            <div className="weekly-product-row">
                <div className="weekly-left-image-wrapper">
                    <img src={leftImage} alt="Rebirth Core Treatment" className="weekly-left-image" />
                </div>
                <div className="weekly-teal-box">
                    <div className="weekly-teal-content">
                        <h3 className="teal-box-header">本格サロン級ケア</h3>
                        <p className="teal-box-subheader">
                            週に１、２回のスペシャルケアで<br />
                            <span className="highlight">極上の髪質</span>に
                        </p>
                        <ul className="teal-box-list">
                            <li>ホエイケラチン、ヘプリン類がしっとり艶やかで弾力のあるツヤ髪へ導きます。</li>
                            <li>プラセンタエキスやドクダミエキスが、頭皮環境を整えながら内部の潤いを補い、健康的な髪を育みます。</li>
                            <li>シアバターやアルガンオイルが髪の保湿と艶を与え、まとまりのある質感に仕上げます。</li>
                        </ul>
                        <p className="teal-box-text">
                            これらを叶える５感動のパラダイスウールインワントリートメント、それがの５クァンタムリバースです。
                        </p>
                        <p className="teal-box-text">
                            ５クァンタムコア／抜き取り不要２１分放置だけの簡単工程で上質な髪の手触りに♡
                        </p>
                    </div>
                </div>
            </div>

            {/* How to Use Section */}
            <div className="how-to-use-section">
                <div className="how-to-use-header">
                    <h3>How to use</h3>
                    <div className="how-to-use-underline"></div>
                </div>
                <p className="how-to-use-subtext">シャンプー後の水気を軽く切り、毛先を中心に塗りトリートメント</p>

                {/* Embedded Video */}
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/ISvHb1abnJc"
                        title="How to use 5QATM Weekly Care"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* New Product Splash */}
            <div className="new-product-splash">
                <img src={newProductImage} alt="New 5QATM Light Products" className="new-product-image" />
            </div>

            {/* CTA Button */}
            <Button_Rakuten />
        </section>
    );
};

export default WeeklyCare;

