import './Home.css';
import Navbar from './Navbar';
import About from './About';
import Location from './Location'

// Import resources
import home_logo from '../res/only_writing.png';
import ayce from '../res/ayce.png';

const Home = () => (
    <div className="homepage-container">
        <Navbar />
        <div className="home-section">
            <div className="home-content">
                <img src={home_logo} className="home-logo" alt="logo" />
                <img src={ayce} className="ayce-logo" alt="all you can eat" />
                <a class='call-button' href="tel:+351289153829" target="_blank" role="button">Call Us</a> 
            </div>
        </div>
        <About />
        <Location />
    </div>
)

export default Home;