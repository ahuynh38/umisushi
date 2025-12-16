import './Location.css';
import LocationCard from './LocationCard';
import { useTranslation } from 'react-i18next';

const Location = () => {
    const { t } = useTranslation();

    return (
        <div className="location-container" id="location">
            <div className="location-content">
                <h1>{t('locations')}</h1>
                <div className="location-list">
                    <LocationCard 
                        className="location-card"
                        city="Olhão" 
                        address="R. Vasco da Gama, 8700-522 Olhão, Portugal" 
                        coords={{ lat: 37.0260866156541, lng: -7.8402293489295225 }} 
                    />
                    <LocationCard
                        className="location-card"
                        city="Tavira" 
                        address="R. Gonçalo Velho 16, 8800-349 Tavira, Portugal" 
                        coords={{ lat: 37.126794808884824, lng: -7.650483816688315 }} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Location;