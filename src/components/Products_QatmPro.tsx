/**
 * Products_QatmPro Component
 *
 * Displays the 5QATM PRO product lineup with clickable product images
 * positioned over a circular background.
 * Each product uses pixel-perfect click detection via ClickableProduct component.
 */

import "./Products_QatmPro.css";
import logoImage from "../assets/5QATM-logo.png";
import emulsionImage from "../assets/pro-product-emission.png";
import shampooImage from "../assets/pro-product-shampoo.png";
import treatmentImage from "../assets/pro-product-treatment.png";
import rebirthImage from "../assets/pro-product-rebirth.png";
import coreImage from "../assets/pro-product-core.png";
import ClickableProduct from "./clickableProducts/ClickableProduct";

const Products_QatmPro = () => {
    return (
        <section id="products" className="products-qatm-pro-section">
            <div className="products-header">
                <h2>Products</h2>
            </div>
            <div className="pro-title-header">
                <img 
                    src={logoImage} 
                    alt="5QATM" 
                    className="pro-title-logo"
                    width="572"
                    height="224"
                    loading="lazy"
                />
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
                    width={282}
                    height={927}
                />
                <span className="pro-label pro-label-emulsion">Emulsion</span>

                <ClickableProduct
                    src={shampooImage}
                    alt="5QATM PRO Shampoo"
                    href="https://item.rakuten.co.jp/24quantum/5shampoo300ml/"
                    className="pro-product pro-product-shampoo"
                    scale={1.5}
                    width={344}
                    height={834}
                />
                <span className="pro-label pro-label-shampoo">Shampoo</span>

                <ClickableProduct
                    src={treatmentImage}
                    alt="5QATM PRO Treatment"
                    href="https://item.rakuten.co.jp/24quantum/5treatment300g/"
                    className="pro-product pro-product-treatment"
                    scale={1.6}
                    width={341}
                    height={892}
                />
                <span className="pro-label pro-label-treatment">Treatment</span>

                <ClickableProduct
                    src={rebirthImage}
                    alt="5QATM PRO Rebirth"
                    href="https://item.rakuten.co.jp/24quantum/5rebirth200g/"
                    className="pro-product pro-product-rebirth"
                    scale={1.0}
                    width={240}
                    height={888}
                />
                <span className="pro-label pro-label-rebirth">Rebirth</span>

                <ClickableProduct
                    src={coreImage}
                    alt="5QATM PRO Core"
                    href="https://item.rakuten.co.jp/24quantum/5core200g/"
                    className="pro-product pro-product-core"
                    scale={1.2}
                    width={277}
                    height={876}
                />
                <span className="pro-label pro-label-core">Core</span>
            </div>
        </section>
    );
};

export default Products_QatmPro;
