import './OfferCard.css';

const OfferCard = ({ title, description, image }) => {
    return (
        <div className="offer-card">
            <div className="offer-card-img-container">
                <img src={image} alt={title} className="offer-card-image" />
            </div>
            <div className="offer-card-desc-container">
                <p className="offer-card-description">{description}</p>
            </div>
        </div>
    );
}

export default OfferCard;