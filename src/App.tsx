import { lazy, Suspense } from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Loader from './components/Loader';

// Lazy load below-the-fold components
const DailyCare = lazy(() => import('./components/DailyCare'));
const WeeklyCare = lazy(() => import('./components/WeeklyCare'));
const Products_QatmPro = lazy(() => import('./components/Products_QatmPro'));
const Products_QatmPro_Details = lazy(() => import('./components/Products_QatmPro_Details'));
const Products_QatmLight = lazy(() => import('./components/Products_QatmLight'));
const GangParade = lazy(() => import('./components/GangParade'));
const ReviewSection = lazy(() => import('./components/ReviewSection'));
const FooterSection = lazy(() => import('./components/FooterSection'));

function App() {
  return (
    <div className="viewport-shell">
      <main className="viewport-app">
        <NavBar />
        <HeroSection />
        <About />
        <Suspense fallback={<Loader />}>
          <DailyCare />
          <WeeklyCare />
          <Products_QatmPro />
          <Products_QatmPro_Details />
          <Products_QatmLight />
          <GangParade />
          <ReviewSection />
          <FooterSection />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
