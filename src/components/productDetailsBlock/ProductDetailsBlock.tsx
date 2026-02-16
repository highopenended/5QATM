/**
 * ProductDetailsBlock Component
 *
 * Displays individual product information including name, amount, and description.
 * Used as a reusable block in product detail sections.
 */

import { type ReactNode } from "react";
import "./ProductDetailsBlock.css";

interface ProductDetailsBlockProps {
    name: string;
    amount: string | ReactNode;
    details: string;
    image?: string;
    imageWidth?: number;
    imageHeight?: number;
}

const ProductDetailsBlock = ({ name, amount, details, image, imageWidth, imageHeight }: ProductDetailsBlockProps) => {
    return (
        <div className="product-details-block">
            {image && <img 
                src={image} 
                alt={name} 
                className="product-details-image"
                width={imageWidth}
                height={imageHeight}
                loading="lazy"
            />}
            <h3 className="product-name">{name}</h3>
            <div className="product-content-wrapper">
                <p className="product-amount">{amount}</p>
                <p className="product-details">{details}</p>
            </div>
        </div>
    );
};

export default ProductDetailsBlock;
