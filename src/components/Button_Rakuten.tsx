/**
 * Button_Rakuten Component
 *
 * Reusable CTA button linking to the Rakuten product page.
 * Teal outline style with hover fill effect and arrow icon.
 */

import "./Button_Rakuten.css";

interface ButtonRakutenProps {
    /** Optional custom class for wrapper positioning */
    wrapperClassName?: string;
}

const Button_Rakuten = ({ wrapperClassName = "" }: ButtonRakutenProps) => {
    return (
        <div className={`rakuten-button-wrapper ${wrapperClassName}`}>
            <a
                href="https://www.rakuten.co.jp/24quantum/"
                target="_blank"
                rel="noopener noreferrer"
                className="rakuten-button"
            >
                購入ページへ
                <span className="button-arrow"></span>
            </a>
        </div>
    );
};

export default Button_Rakuten;

