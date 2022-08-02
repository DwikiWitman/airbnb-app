import './App.css';
import NavigationBar from "./components/NavigationBar"
import "./style/landingPage.css"
import Hero from './components/Hero';
import SliderCard from './components/SliderCard';

function App() {
  return (
    <div>
      {/* Nav section */}
      <NavigationBar />
      {/* Hero Image section */}
      <Hero />
      {/* Slider section */}
      <SliderCard />
    </div>
  );
}

export default App;
