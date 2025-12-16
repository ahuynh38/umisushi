import './About.css';
import OfferCard from './OfferCard';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about-container" id="about">
            <div className="about-content">
                <h1>{t('about-us')}</h1>
                <div className="offer-cards-grid">
                    <OfferCard 
                        className="offer-card"
                        title="Waterfront Seating"
                        description={t('waterfront-desc')}
                        image={require('../res/tavira-waterfront.jpg')}
                    />
                    <OfferCard
                        className="offer-card" 
                        title="Handcrafted Sushi"
                        description={t('sushi-desc')}
                        image={require('../res/sushi.jpg')}
                    />
                    <OfferCard 
                        className="offer-card"
                        title="Modern Interior"
                        description={t('wood-desc')}
                        image={require('../res/olhao-interior.jpg')}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;