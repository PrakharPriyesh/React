import React from 'react';

import Navbar from './../navbar/navbar';
import Sidebar from './../sidebar/sidebar';
import BackButton from './back-button/backButton';
import ProductDetailsContainer from './product-details-container/productDetailsContainer';
import './productDetails.css';

const ProductDetails = (props) => {
    return (
        <div className="product-details">
            <Navbar />
            <Sidebar />
            <div className="product-details-button">
                <BackButton />
            </div>
            <ProductDetailsContainer />
        </div>
    );
}

export default ProductDetails;