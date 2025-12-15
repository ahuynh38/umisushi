import './About.css';
import OfferCard from './OfferCard';

const About = () => {
    return (
        <div className="about-container" id="about">
            <div className="about-content">
                <h1>What We Offer</h1>
                <div className="offer-cards-grid">
                    <OfferCard 
                        className="offer-card"
                        title="Waterfront Seating"
                        description="Serene waterfront seating, calm views, and the perfect backdrop for enjoying sushi in the open air. [Tavira Location]"
                        image={require('../res/tavira-waterfront.jpg')}
                    />
                    <OfferCard
                        className="offer-card" 
                        title="Waterfront Seating"
                        description="Handcrafted, beautifully prepared, all-you-can-eat sushi, sashimi, and nigiri, made-to-order and a la carte."
                        image={require('../res/sushi.jpg')}
                    />
                    <OfferCard 
                        className="offer-card"
                        title="Waterfront Seating"
                        description=" Warm wood accents, lush greenery, and elegant seating for a chic, contemporary feel. [Olhão Location]"
                        image={require('../res/olhao-interior.jpg')}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;