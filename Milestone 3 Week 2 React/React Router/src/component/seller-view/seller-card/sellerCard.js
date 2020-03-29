import React from 'react';
import './sellerCard.css';
import { Link } from 'react-router-dom';

const SellerCard = ({ id, name, contact}) => {
    return (
        <Link to={"sellers/" + id}>
            <div className="seller-card">
                {id}
                {name}
                {contact}
            </div>
        </Link>
    )
}

export default SellerCard;