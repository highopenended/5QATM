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
}

const ProductDetailsBlock = ({ name, amount, details, image }: ProductDetailsBlockProps) => {
    const style = image ? { '--product-image': `url(${image})` } as React.CSSProperties : {};
    
    return (
        <div className="product-details-block">
            <h3 className="product-name">{name}</h3>
            <div className="product-content-wrapper" style={style}>
                <p className="product-amount">{amount}</p>
                <p className="product-details">{details}</p>
            </div>
        </div>
    );
};

export default ProductDetailsBlock;
