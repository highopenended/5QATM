/**
 * Products_QatmPro Component
 *
 * Displays the 5QATM PRO product lineup with clickable product images
 * positioned over a circular background.
 * Each product uses pixel-perfect click detection via ClickableProduct component.
 */

import "./Products_QatmPro.css";
import emulsionImage from "../assets/pro-product-emission.png";
import shampooImage from "../assets/pro-product-shampoo.png";
import treatmentImage from "../assets/pro-product-treatment.png";
import rebirthImage from "../assets/pro-product-rebirth.png";
import coreImage from "../assets/pro-product-core.png";
import ClickableProduct from "./clickableProducts/ClickableProduct";

const Products_QatmPro = () => {
    return (
        <section className="products-qatm-pro-section">
            <div className="products-header">
                <h2>Products</h2>
            </div>
            <div className="pro-title-header">
                <span className="pro-title-5">5</span>
                <span className="pro-title-qatm">QATM</span>
                <span className="pro-title-pro"> PRO</span>
            </div>
            <div className="products-container">
                <div className="pro-circle"></div>
                <ClickableProduct
                    src={emulsionImage}
                    alt="5QATM PRO Emulsion"
                    href="https://item.rakuten.co.jp/24quantum/24emulsion200g/"
                    className="pro-product pro-product-emulsion"
                    scale={1.3}
                />

                <ClickableProduct
                    src={shampooImage}
                    alt="5QATM PRO Shampoo"
                    href="https://item.rakuten.co.jp/24quantum/5shampoo300ml/"
                    className="pro-product pro-product-shampoo"
                    scale={1.5}
                />

                <ClickableProduct
                    src={treatmentImage}
                    alt="5QATM PRO Treatment"
                    href="https://item.rakuten.co.jp/24quantum/5treatment300g/"
                    className="pro-product pro-product-treatment"
                    scale={1.6}
                />

                <ClickableProduct
                    src={rebirthImage}
                    alt="5QATM PRO Rebirth"
                    href="https://item.rakuten.co.jp/24quantum/5rebirth200g/"
                    className="pro-product pro-product-rebirth"
                    scale={1.0}
                />

                <ClickableProduct
                    src={coreImage}
                    alt="5QATM PRO Core"
                    href="https://item.rakuten.co.jp/24quantum/5core200g/"
                    className="pro-product pro-product-core"
                    scale={1.2}
                />
            </div>
        </section>
    );
};

export default Products_QatmPro;
