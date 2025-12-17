import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import DailyCare from './components/DailyCare';
import WeeklyCare from './components/WeeklyCare';
import Products_QatmPro from './components/Products_QatmPro';
import Products_QatmPro_Details from './components/Products_QatmPro_Details';

function App() {
  return (
    // <div className="site-viewport">
    <div className="viewport-shell">
      <div className="viewport-app">
        <NavBar />
        <HeroSection />
        <About />
        <DailyCare />
        <WeeklyCare />
        <Products_QatmPro />
        <Products_QatmPro_Details />
      </div>
    </div>
    // </div>
  );
}

export default App;
