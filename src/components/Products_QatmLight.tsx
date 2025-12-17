/**
 * Products_QatmLight Component
 *
 * Displays the 5QATM Light product line with clickable product images,
 * product details, and refill pack information.
 * All elements use absolute positioning for consistent scaling across screen sizes.
 */

import "./Products_QatmLite.css";
import backgroundImage from "../assets/light-products-background.png";
import shampooImage from "../assets/light-products-shampoo.png";
import treatmentImage from "../assets/light-products-treatment.png";
import ClickableProduct from "./clickableProducts/ClickableProduct";
import ProductDetailsBlock from "./productDetailsBlock/ProductDetailsBlock";
import Button_Rakuten from "./Button_Rakuten";

const Products_QatmLight = () => {
    return (
        <section className="products-qatm-light-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Main Header */}
            <div className="light-header">
                <h2>5QATM LIGHT</h2>
            </div>

            {/* Products Container */}
            <div className="light-products-container">
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
            </div>

            {/* Product Details Blocks */}
            <div className="light-details-container">
                <div className="light-details-left">
                    <ProductDetailsBlock
                        name="ライトシャンプー"
                        amount={<>100ml<span className="amount-slash">/</span>500ml<span className="amount-slash">/</span>1000ml</>}
                        details="4アクアミストを使用したバージン毛～ライトダメージ毛向け速乾シャンプー 髪の乾く時間を約40％短縮"
                    />
                </div>
                <div className="light-details-right">
                    <ProductDetailsBlock
                        name="ライトトリートメント"
                        amount={<>100g<span className="amount-slash">/</span>480g<span className="amount-slash">/</span>1000g</>}
                        details="シャンプーと合わせてご使用ください。うねりや癖毛、パサついた髪もサラサラふわっとまとまる美髪へ導きます。"
                    />
                </div>
            </div>

            {/* First Button */}
            <Button_Rakuten wrapperClassName="light-button-1" />

            {/* Refill Packs Header */}
            <div className="refill-packs-header">
                <h2>REFILL PACKS</h2>
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

            {/* Second Button */}
            <Button_Rakuten wrapperClassName="light-button-2" />
        </section>
    );
};

export default Products_QatmLight;

