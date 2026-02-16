/**
 * Products_QatmPro_Details Component
 *
 * Displays detailed information for all 5QATM PRO products.
 * Uses ProductDetailsBlock components in a responsive flex layout.
 * Horizontal on large screens, vertical on small screens.
 */

import "./Products_QatmPro_Details.css";
import ProductDetailsBlock from "./productDetailsBlock/ProductDetailsBlock";
import emissionImage from "../assets/pro-product-emission.webp";
import shampooImage from "../assets/pro-product-shampoo.webp";
import treatmentImage from "../assets/pro-product-treatment.webp";
import rebirthImage from "../assets/pro-product-rebirth.webp";
import coreImage from "../assets/pro-product-core.webp";

const Products_QatmPro_Details = () => {
    return (
        <section className="products-qatm-pro-details-section">
            <div className="products-details-container">
                <ProductDetailsBlock
                    name="エマルジョン"
                    amount="200g"
                    details="5QATMシリーズの洗い流さないトリートメント。高級材料マリンナノファイバーと24アクアミストによる保湿力でアウトバストリートメントの領域を超えた高い質感を実現。"
                    image={emissionImage}
                    imageWidth={282}
                    imageHeight={927}
                />
                <ProductDetailsBlock
                    name="シャンプー"
                    amount={<>300ml<span className="amount-slash">/</span>500ml</>}
                    details="２種類のケラチンが毛髪に吸着することで補習効果と速乾効果を生み出し、さらにアクアミストで髪を保湿。無駄な脂質を抑えることで毎日のドライヤー時間を30％短縮できます。"
                    image={shampooImage}
                    imageWidth={344}
                    imageHeight={834}
                />
                <ProductDetailsBlock
                    name="トリートメント"
                    amount={<>300g<span className="amount-slash">/</span>500g</>}
                    details="脂質を極力使わず、アクアミストの保湿力を使う事で『早く乾く』を実現。熱保護、表面皮脂処理で、驚くほどみずみずしいサラッと艶やかな質感を生み出します。"
                    image={treatmentImage}
                    imageWidth={341}
                    imageHeight={892}
                />
                <ProductDetailsBlock
                    name="リバース"
                    amount="200g"
                    details="髪の内側から外側まで全てのケアがこれひとつでできる【オールインワントリートメント】。熱反応型補修成分と高保湿成分で今までになかった毛先のまとまりを体感できます。"
                    image={rebirthImage}
                    imageWidth={240}
                    imageHeight={888}
                />
                <ProductDetailsBlock
                    name="コア"
                    amount="200g"
                    details="お家でできるサロンケア以上の高濃度の【集中トリートメント】。ダメージで流出した水分、脂質を高級原料マリンナノファイバーとアクアミストで補給。併用するトリートメントの効果もよりアップ！"
                    image={coreImage}
                    imageWidth={277}
                    imageHeight={876}
                />
            </div>
        </section>
    );
};

export default Products_QatmPro_Details;
