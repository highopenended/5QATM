import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import DailyCare from './components/DailyCare';
import WeeklyCare from './components/WeeklyCare';
import Products_QatmPro from './components/Products_QatmPro';
import Products_QatmPro_Details from './components/Products_QatmPro_Details';
import Products_QatmLight from './components/Products_QatmLight';
import GangParade from './components/GangParade';
import ReviewSection from './components/ReviewSection';
import Loader from './components/Loader';
import { useImagePreloader } from './hooks/useImagePreloader';
import { allImageUrls } from './utils/imageAssets';

function App() {
  const { isLoading } = useImagePreloader(allImageUrls);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="viewport-shell">
      <div className="viewport-app">
        <NavBar />
        <HeroSection />
        <About />
        <DailyCare />
        <WeeklyCare />
        <Products_QatmPro />
        <Products_QatmPro_Details />
        <Products_QatmLight />
        <GangParade />
        <ReviewSection />
      </div>
    </div>
  );
}

export default App;
