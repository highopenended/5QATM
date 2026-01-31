/**
 * Products_QatmLight Component
 *
 * Displays the 5QATM Light product line with clickable product images,
 * product details, and refill pack information.
 * All elements use absolute positioning for consistent scaling across screen sizes.
 */

import "./Products_QatmLight.css";
import logoImage from "../assets/5QATM-logo.png";
import shampooImage from "../assets/light-products-shampoo.png";
import treatmentImage from "../assets/light-products-treatment.png";
import refillShampooImage from "../assets/refillpack-shampoo.png";
import refillTreatmentImage from "../assets/refillpack-treatment.png";
import refillRebirthImage from "../assets/refillpack-rebirth.png";
import refillCoreImage from "../assets/refillpack-core.png";
import refillEmulsionImage from "../assets/refillpack-emulsion.png";
import lightShampooImage from "./light-shampoo.png";
import lightTreatmentImage from "./light-treatment.png";
import lightButtonImage from "../assets/5QATM-light-button.png";
import lightButton2Image from "../assets/button-text-white.png";
import ClickableProduct from "./clickableProducts/ClickableProduct";
import ProductDetailsBlock from "./productDetailsBlock/ProductDetailsBlock";

const Products_QatmLight = () => {
    return (
        <section id="qatm-light" className="products-qatm-light-section">
            {/* Main Header */}
            <div className="light-header">
                <h2><img src={logoImage} alt="5QATM" className="light-header-logo" /><span className="header-light"> Light</span></h2>
            </div>

            {/* Products Container */}
            <div className="light-products-container">
                <div className="light-circle"></div>
                <ClickableProduct
                    src={shampooImage}
                    alt="5QATM Light Shampoo"
                    href="https://item.rakuten.co.jp/24quantum/qatmlightshampoo100ml/"
                    className="light-product light-product-shampoo"
                    scale={1.4}
                />

                <ClickableProduct
                    src={treatmentImage}
                    alt="5QATM Light Treatment"
                    href="https://item.rakuten.co.jp/24quantum/qatmlighttreatment100g/"
                    className="light-product light-product-treatment"
                    scale={1.4}
                />

                {/* Product Labels */}
                <div className="light-product-label light-label-shampoo">Light Shampoo</div>
                <div className="light-product-label light-label-treatment">Light Treatment</div>
            </div>

            {/* Product Details Blocks */}
            <div className="light-details-container">
                <div className="light-details-left">
                    <ProductDetailsBlock
                        name="ライトシャンプー"
                        amount={<>100ml<span className="amount-slash">/</span>500ml<span className="amount-slash">/</span>1000ml</>}
                        details="24アクアミストを使用したバージン毛～ライトダメージ毛向け速乾シャンプー 髪の乾く時間を約40％短縮"
                        image={lightShampooImage}
                    />
                </div>
                <div className="light-details-right">
                    <ProductDetailsBlock
                        name="ライトトリートメント"
                        amount={<>100g<span className="amount-slash">/</span>480g<span className="amount-slash">/</span>1000g</>}
                        details="シャンプーと合わせてご使用ください。うねりや癖毛、パサついた髪もサラサラふわっとまとまる美髪へ導きます。"
                        image={lightTreatmentImage}
                    />
                </div>
            </div>

            {/* First Button: image CTA, same link as Rakuten button */}
            <div className="rakuten-button-wrapper light-button-1">
                <a
                    href="https://www.rakuten.co.jp/24quantum/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="light-button-1-image-link"
                    aria-label="To the purchase page"
                >
                    <img src={lightButtonImage} alt="To the purchase page" />
                </a>
            </div>

            {/* Refill Packs Header */}
            <div className="refill-packs-header">
                <h2>REFILL PACKS</h2>
            </div>

            {/* Refill Pack Products */}
            <div className="refill-products-container">
                <div className="refill-circle refill-circle-1"></div>
                <div className="refill-circle refill-circle-2"></div>
                <div className="refill-circle refill-circle-3"></div>
                <div className="refill-circle refill-circle-4"></div>
                <div className="refill-circle refill-circle-5"></div>

                <ClickableProduct
                    src={refillShampooImage}
                    alt="5QATM Refill Shampoo"
                    href="https://google.com"
                    className="refill-product refill-product-1"
                    scale={1.0}
                />
                <ClickableProduct
                    src={refillTreatmentImage}
                    alt="5QATM Refill Treatment"
                    href="https://google.com"
                    className="refill-product refill-product-2"
                    scale={1.0}
                />
                <ClickableProduct
                    src={refillRebirthImage}
                    alt="5QATM Refill Rebirth"
                    href="https://google.com"
                    className="refill-product refill-product-3"
                    scale={1.0}
                />
                <ClickableProduct
                    src={refillCoreImage}
                    alt="5QATM Refill Core"
                    href="https://google.com"
                    className="refill-product refill-product-4"
                    scale={1.0}
                />
                <ClickableProduct
                    src={refillEmulsionImage}
                    alt="5QATM Refill Emulsion"
                    href="https://google.com"
                    className="refill-product refill-product-5"
                    scale={1.0}
                />
            </div>

            {/* Refill Pack Text Blocks */}
            <div className="refill-packs-container">
                <div className="refill-pack-text refill-pack-1">
                    <div className="refill-pack-line-1">５QATM</div>
                    <div className="refill-pack-line-2">シャンプー</div>
                    <div className="refill-pack-line-3">1000ml 詰め替え用</div>
                </div>
                <div className="refill-pack-text refill-pack-2">
                    <div className="refill-pack-line-1">５QATM</div>
                    <div className="refill-pack-line-2">トリートメント</div>
                    <div className="refill-pack-line-3">1000g 詰め替え用</div>
                </div>
                <div className="refill-pack-text refill-pack-3">
                    <div className="refill-pack-line-1">リバース</div>
                    <div className="refill-pack-line-2">400ml</div>
                    <div className="refill-pack-line-3">詰め替え用</div>
                </div>
                <div className="refill-pack-text refill-pack-4">
                    <div className="refill-pack-line-1">コア</div>
                    <div className="refill-pack-line-2">400g</div>
                    <div className="refill-pack-line-3">詰め替え用</div>
                </div>
                <div className="refill-pack-text refill-pack-5">
                    <div className="refill-pack-line-1">エマルジョン</div>
                    <div className="refill-pack-line-2">400g</div>
                    <div className="refill-pack-line-3">詰め替え用</div>
                </div>
            </div>

            {/* Second Button: image CTA (button-text-white.png), same link as Rakuten button */}
            <div className="rakuten-button-wrapper light-button-2">
                <a
                    href="https://www.rakuten.co.jp/24quantum/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="light-button-2-image-link"
                    aria-label="To the purchase page"
                >
                    <img src={lightButton2Image} alt="To the purchase page" />
                </a>
            </div>
        </section>
    );
};

export default Products_QatmLight;

