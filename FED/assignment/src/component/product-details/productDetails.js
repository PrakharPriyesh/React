import React from 'react';

import Navbar from './../navbar/navbar';
import Sidebar from './../sidebar/sidebar';
import BackButton from './back-button/backButton';
import ProductDetailsContainer from './product-details-container/productDetailsContainer';
import Footer from './../footer/footer';
import './productDetails.css';

const ProductDetails = (props) => {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
        });
    }

    scrollTop()

    return (
        <div className="product-details">
            <Navbar />
            <Sidebar />
            <BackButton />
            <ProductDetailsContainer />
            <Footer />
        </div>
    );
}

export default ProductDetails;