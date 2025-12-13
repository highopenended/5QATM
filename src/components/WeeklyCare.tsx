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
                    <div className="product-box-content">
                        <p className="product-label">5<span className="qatm-text">QATM</span></p>
                        <div className="product-title-wrapper">
                            <h4 className="product-title product-title-rebirth">Rebirth</h4>
                            <h4 className="product-title product-title-core">Core</h4>
                        </div>
                        <p className="product-subtitle">
                            5クァンタムリバース
                            <br />
                            5クァンタムコア
                        </p>
                    </div>
                </div>
                <div className="weekly-teal-box">
                    <div className="weekly-teal-content">
                        <h3 className="teal-box-header">本格サロン級ケア</h3>
                        <p className="teal-box-subheader">
                            週に１、２回のスペシャルケアで<br />
                            <span className="highlight">極上の髪質</span>に
                        </p>
                        <ul className="teal-box-list">
                            <li>エルカラクトン、レブリン酸がしっとり感とツヤを与え、ドライヤー やアイロンの熱と反応して毛髪を修復</li>
                            <li>キュアテイン、ファイバーハンスがダメージ部分に吸着し内部補修、強化</li>
                            <li>シアバター、24アクアミストが毛髪の水分量を上げる事でツヤとしなやかさをアップ</li>
                        </ul>
                        <p className="teal-box-text">
                            これらを考えうる最高のバランスでオールインワンにできるのが5クァンタムリバースです。
                        </p>
                        <p className="teal-box-text">
                            また5クァンタムコアと併用する事でより効果を上げる事ができます。
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
                <p className="how-to-use-subtext">シャンプーからの流れを動画で紹介しています</p>

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

