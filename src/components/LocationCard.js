import './LocationCard.css';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const LocationCard = ({ city, address, coords }) => {
    return (
        <div className="location-card">
            <div className="location-info">
                <h2>{city}</h2>
                {city === "Olhão" ? (
                    <OlhaoInfo />
                ) : (
                    <TaviraInfo />
                )}
            </div>
            <div className = "gmaps-embed-container">
                <APIProvider apiKey={process.env.REACT_APP_GMAPS_API_KEY}>
                    <Map
                        defaultZoom={15}
                        defaultCenter={ { lat: coords.lat, lng: coords.lng } }>
                    <Marker
                        position={ { lat: coords.lat, lng: coords.lng } }
                        onClick={() => {
                            const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`;
                            window.open(gmapsUrl, "_blank");
                        }} />
                    </Map>
                </APIProvider>
            </div>
        </div>
    );
};

const OlhaoInfo = () => {
    return (
        <div className="info-container">
            <a href="https://maps.app.goo.gl/1JEBDZxNjmRSnQVH6" target="_blank">R. Vasco da Gama, 8700-522 Olhão, Portugal</a>
            <p>Hours: 11:30 - 15:00, 19:00 - 23:00</p>
            <a href="tel:+351289153829">+351 289 153 829</a>
        </div>
    )
}

const TaviraInfo = () => {
    return (
        <div className="info-container">
            <a href="https://maps.app.goo.gl/ZSRC9vmcMSCujyRu5" target="_blank">R. Gonçalo Velho 16, 8800-349 Tavira, Portugal</a>
            <p>Hours: 11:30 - 15:00, 18:30 - 23:00</p>
            <a href="tel:+351281327685">+351 281 327 685</a>
        </div>
    )
}

export default LocationCard;