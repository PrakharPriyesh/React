import React, { useState } from 'react';

import productImg from './../../../asset/ecommerce/002.jpg'
import './product.css'
import { Redirect } from 'react-router';

const Product = (props) => {

    const [clickStatus, clickStatusHandler] = useState(false)

    if (clickStatus) {
        return (
            <Redirect to="product-details" />
        )
    }



    return (
        <div className="product-card-box">
            <div className="product-card" onClick={() => clickStatusHandler(true)}>
                <img className="product-card-img" src={productImg} alt={productImg} />
                <div className="product-card-new-tag">
                </div>
                <div className="product-card-new-tag-text">
                    NEW
                </div>
                <div className="product-card-info">
                    <div className="product-card-name">
                        ELLIOT GLASSES
                    </div>
                    <div className="product-card-offer-price">
                        &#36;678.00
                    </div>
                    <div className="product-card-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>XL</div>
                    </div>
                    <div className="product-card-actual-price">
                        &#36;754.00
                    </div>
                    <div className="product-card-footer">
                        Including Lenses
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Product;