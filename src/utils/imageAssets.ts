/**
 * Centralized Image Assets Registry
 * 
 * All image imports for the application are centralized here for:
 * - Easy preloading of all images before app render
 * - Consistent import paths
 * - Type safety
 */

// Hero Section
import heroImage from '../assets/hero-image.webp';
import heroImageMobile from '../assets/hero-image-mobile.webp';
import heroImageBottom from '../assets/hero-image-bottom.webp';
import heroImageBottomMobile from '../assets/hero-image-bottom-mobile.webp';

// About Section
import aboutTopImages from '../assets/about-top-images.webp';
import aboutSection from '../assets/about-section.webp';
import aboutSectionMobile from '../assets/about-section-mobile.webp';

// Daily Care Section
import dailyCareBackground from '../assets/daily-care-background.webp';
import dailyCareTeal1 from '../assets/daily-care-left-teal-1.webp';
import dailyCareTeal2 from '../assets/daily-care-left-teal-2.webp';
import dailyCareProduct1 from '../assets/daily-care-right-image1.webp';
import dailyCareProduct2 from '../assets/daily-care-right-image2.webp';

// Weekly Care Section
import weeklyCareBackground from '../assets/weekly-care-background.webp';
import weeklyCareLeft from '../assets/weekly-care-left-image.webp';
import weeklyCareNew from '../assets/weekly-care-new-image.webp';

// Pro Products
import proEmulsion from '../assets/pro-product-emission.webp';
import proShampoo from '../assets/pro-product-shampoo.webp';
import proTreatment from '../assets/pro-product-treatment.webp';
import proRebirth from '../assets/pro-product-rebirth.webp';
import proCore from '../assets/pro-product-core.webp';

// Light Products
import lightShampoo from '../assets/light-products-shampoo.webp';
import lightTreatment from '../assets/light-products-treatment.webp';

// Refill Packs
import refillShampoo from '../assets/refillpack-shampoo.webp';
import refillTreatment from '../assets/refillpack-treatment.webp';
import refillRebirth from '../assets/refillpack-rebirth.webp';
import refillCore from '../assets/refillpack-core.webp';
import refillEmulsion from '../assets/refillpack-emulsion.webp';

// Gang Parade Section
import gangParadeText from '../assets/gang-parade-text-image.webp';
import gangParadeBackground from '../assets/gang-parade-background.webp';

// Review Section
import reviewBackground from '../assets/review-background.webp';
import staffExciteText from '../assets/staff-excite-text.webp';
import staff1 from '../assets/staff-1.webp';
import staff2 from '../assets/staff-2.webp';
import staff3 from '../assets/staff-3.webp';
import reviewExciteText from '../assets/review-excite-text.webp';
import reviewExciteTextWrap from '../assets/review-excite-text-wrap.webp';
import reviewLady1 from '../assets/review-lady1.webp';
import reviewLady2 from '../assets/review-lady2.webp';

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
