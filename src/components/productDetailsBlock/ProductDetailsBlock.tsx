/**
 * ProductDetailsBlock Component
 *
 * Displays individual product information including name, amount, and description.
 * Used as a reusable block in product detail sections.
 */

import "./ProductDetailsBlock.css";

interface ProductDetailsBlockProps {
    name: string;
    amount: string;
    details: string;
}

const ProductDetailsBlock = ({ name, amount, details }: ProductDetailsBlockProps) => {
    return (
        <div className="product-details-block">
            <h3 className="product-name">{name}</h3>
            <p className="product-amount">{amount}</p>
            <p className="product-details">{details}</p>
        </div>
    );
};

export default ProductDetailsBlock;
