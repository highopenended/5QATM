/**
 * Centralized Image Assets Registry
 * 
 * All image imports for the application are centralized here for:
 * - Easy preloading of all images before app render
 * - Consistent import paths
 * - Type safety
 */

// Hero Section
import heroImage from '../assets/hero-image.png';
import heroImageMobile from '../assets/hero-image-mobile.png';
import heroImageBottom from '../assets/hero-image-bottom.png';
import heroImageBottomMobile from '../assets/hero-image-bottom-mobile.png';

// About Section
import aboutTopImages from '../assets/about-top-images.png';
import aboutSection from '../assets/about-section.png';
import aboutSectionMobile from '../assets/about-section-mobile.png';

// Daily Care Section
import dailyCareBackground from '../assets/daily-care-background.png';
import dailyCareTeal1 from '../assets/daily-care-left-teal-1.png';
import dailyCareTeal2 from '../assets/daily-care-left-teal-2.png';
import dailyCareProduct1 from '../assets/daily-care-right-image1.png';
import dailyCareProduct2 from '../assets/daily-care-right-image2.png';

// Weekly Care Section
import weeklyCareBackground from '../assets/weekly-care-background.png';
import weeklyCareLeft from '../assets/weekly-care-left-image.png';
import weeklyCareNew from '../assets/weekly-care-new-image.png';

// Pro Products
import proEmulsion from '../assets/pro-product-emission.png';
import proShampoo from '../assets/pro-product-shampoo.png';
import proTreatment from '../assets/pro-product-treatment.png';
import proRebirth from '../assets/pro-product-rebirth.png';
import proCore from '../assets/pro-product-core.png';

// Light Products
import lightShampoo from '../assets/light-products-shampoo.png';
import lightTreatment from '../assets/light-products-treatment.png';

// Refill Packs
import refillShampoo from '../assets/refillpack-shampoo.png';
import refillTreatment from '../assets/refillpack-treatment.png';
import refillRebirth from '../assets/refillpack-rebirth.png';
import refillCore from '../assets/refillpack-core.png';
import refillEmulsion from '../assets/refillpack-emulsion.png';

// Gang Parade Section
import gangParadeText from '../assets/gang-parade-text-image.png';
import gangParadeBackground from '../assets/gang-parade-background.png';

// Review Section
import reviewBackground from '../assets/review-background.png';
import staffExciteText from '../assets/staff-excite-text.png';
import staff1 from '../assets/staff-1.png';
import staff2 from '../assets/staff-2.png';
import staff3 from '../assets/staff-3.png';
import reviewExciteText from '../assets/review-excite-text.png';
import reviewExciteTextWrap from '../assets/review-excite-text-wrap.png';
import reviewLady1 from '../assets/review-lady1.png';
import reviewLady2 from '../assets/review-lady2.png';

/**
 * Complete collection of all application images
 */
export const imageAssets = {
  // Hero
  heroImage,
  heroImageMobile,
  heroImageBottom,
  heroImageBottomMobile,
  
  // About
  aboutTopImages,
  aboutSection,
  aboutSectionMobile,
  
  // Daily Care
  dailyCareBackground,
  dailyCareTeal1,
  dailyCareTeal2,
  dailyCareProduct1,
  dailyCareProduct2,
  
  // Weekly Care
  weeklyCareBackground,
  weeklyCareLeft,
  weeklyCareNew,
  
  // Pro Products
  proEmulsion,
  proShampoo,
  proTreatment,
  proRebirth,
  proCore,
  
  // Light Products
  lightShampoo,
  lightTreatment,
  
  // Refill Packs
  refillShampoo,
  refillTreatment,
  refillRebirth,
  refillCore,
  refillEmulsion,
  
  // Gang Parade
  gangParadeText,
  gangParadeBackground,
  
  // Review Section
  reviewBackground,
  staffExciteText,
  staff1,
  staff2,
  staff3,
  reviewExciteText,
  reviewExciteTextWrap,
  reviewLady1,
  reviewLady2,
};

/**
 * Array of all image URLs for preloading
 */
export const allImageUrls = Object.values(imageAssets);

export default imageAssets;
