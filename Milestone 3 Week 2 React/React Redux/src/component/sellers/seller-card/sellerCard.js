import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './sellerCard.css';


const SellerCard = ({ id, name, contact, address, icon, rating, setVisibility }) => {
    return (
        <Link to={"sellers/" + id}>
            <div className="seller-card" onClick={setVisibility}>
                <img className="seller-icon" src={icon} alt={icon} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png" }}></img>

                <div className="seller-name">
                    {name}
                </div>

                <div className="seller-rating">
                    Rating: {rating} stars
                </div>

                <div className="seller-description">
                    This is a dummy descripton for the seller. This talks about the offerings, address & ratings of the seller.
                    This is a dummy descripton for the seller. This talks about the offerings, address & ratings of the seller.
                    This is a dummy descripton for the seller. This talks about the offerings, address & ratings of the seller.
                </div>

                <div className="seller-address">
                    Mob: {contact}
                    <br />
                    Location: {address}
                </div>
            </div>
        </Link>
    )
}

SellerCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    contact: PropTypes.string,
    icon: PropTypes.string,
    rating: PropTypes.string
}

export default SellerCard;