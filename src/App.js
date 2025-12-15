import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Location from './components/Location';

// Import resources
import home_logo from './res/only_writing.png';
import ayce from './res/ayce.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Location />
    </div>
  );
}

const Home = () => (
  <div className="home-container" id="home">
    <div className="home-content">
      <img src={home_logo} className="home-logo" alt="logo" />
      <img src={ayce} className="ayce-logo" alt="all you can eat" />
      <a class='call-button' href="tel:+351289153829" target="_blank" role="button">Call Us</a>
    </div>
  </div>
)

export default App;
