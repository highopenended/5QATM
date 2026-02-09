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
import logoImage from "../assets/5QATM-logo.png";
import Button_Rakuten from "./Button_Rakuten";

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
                    <img src={logoImage} alt="5QATM" className="product-label" />
                    <div className="product-title-wrapper">
                        <h4 className="product-title product-title-shampoo">Shampoo</h4>
                        <h4 className="product-title product-title-treatment">Treatment</h4>
                    </div>
                    <p className="product-subtitle">5クァンタムシャンプー<br />5クァンタムトリートメント</p>
                </div>
            </div>

            {/* Teal Box 1 - Order 3 on mobile */}
            <div className="teal-box-wrapper teal-1">
                <img src={tealBox1} alt="" aria-hidden="true" className="teal-box-image" />
                <div className="teal-box-content">
                    <h3 className="teal-box-header">速乾<span className="header-x">×</span>美髪</h3>
                    <p className="teal-box-subheader">毎日のドライヤー時間を</p>
                    <p className="teal-box-highlight-line"><span className="highlight">30<span className="percent-symbol">%</span></span>短縮</p>
                    <p className="teal-box-text">
                        クァンタムシリーズ（ストレート、トリートメント、シャンプー）は
                        <span className="highlight">脂質を極力使うことなく</span>
                        、アクアミストの保湿力を使う事で『早く乾く』を実現しています。
                    </p>
                    <p className="teal-box-text">
                        超純水にブラックシリカを漬け込むことにより、浸透力を高め、髪や肌の水分量をあげます。
                        <span className="highlight">２４アクアミスト</span>
                        の保湿力により、さらなる速乾を実現し、驚くほどみずみずしいサラッと艶やかな質感を生み出します。
                    </p>
                </div>
            </div>

            {/* Product 2: Emulsion - Order 4 on mobile */}
            <div className="product-box-wrapper product-2">
                <img src={productImage2} alt="Emulsion" className="product-box-image" />
                <div className="product-box-content">
                    <img src={logoImage} alt="5QATM" className="product-label" />
                    <h4 className="product-title">Emulsion</h4>
                    <p className="product-subtitle">5クァンタムエマルジョン<br />洗い流さないトリートメント</p>
                </div>
            </div>

            {/* Teal Box 2 - Order 5 on mobile */}
            <div className="teal-box-wrapper teal-2">
                <img src={tealBox2} alt="" aria-hidden="true" className="teal-box-image" />
                <div className="teal-box-content">
                    <h3 className="teal-box-header">
                        <span className="highlight">髪</span>
                        の
                        <span className="highlight">内側・外側</span>
                        から
                    </h3>
                    <p className="teal-box-subheader">
                        徹底した<span className="highlight">髪質改善</span>成分を配合
                    </p>
                    <p className="teal-box-text">
                    ダメージによって硬くなった髪に、しなやかさと潤いを与える
                    <span className="highlight">天然由来の脂質成分をたっぷり配合。</span>
                    また、近年多く見られる
                    <span className="highlight">シリコーンの過剰蓄積（ビルドアップ）</span>
                    を防止しながら、ツヤと手触りをしっかりアップ。
                    褪色防止効果も期待できるため、カラーをした髪にもおすすめです。
                    </p>
                </div>
            </div>

            {/* Product Page Button - Order 6 on mobile */}
            <Button_Rakuten wrapperClassName="daily-care-button" />
        </section>
    );
};

export default DailyCare;
