import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import DailyCare from './components/DailyCare';
import WeeklyCare from './components/WeeklyCare';
import Products_QatmPro from './components/Products_QatmPro';

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
      </div>
    </div>
    // </div>
  );
}

export default App;
