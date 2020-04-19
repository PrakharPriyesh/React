import React from 'react';

import Navbar from './../navbar/navbar';
import './productDetails.css';

const ProductDetails = (props) => {
    return (
        <div className="product-details">
            <div className="product-details-container">
                <div className="product-details-container-item">
                    <Navbar />
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;