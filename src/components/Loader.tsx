/**
 * Loader Component
 * 
 * Displays a centered spinner animation while content is loading.
 * Covers the full viewport with a solid background to prevent content flash.
 */

import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;
