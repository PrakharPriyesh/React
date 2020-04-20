import React from 'react';

import Navbar from './../navbar/navbar';
import BackButton from './back-button/backButton';
import './productDetails.css';

const ProductDetails = (props) => {
    return (
        <div className="product-details">
            <div className="product-details-container">
                <Navbar />
                <div className="product-details-container-button">
                    <BackButton />
                </div>
                <div className="product-details-container-body">
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;