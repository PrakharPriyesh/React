import React from 'react';

import InformationTab from './../information-tab/informationTab';
import productImg from './../../../asset/ecommerce/004.jpg';
import './productDetailsContainer.css';

const ProductDetailsContainer = (props) => {
    return (
        <div className="pdc">
            <div className="pdc-heading">
                <font>PRODUCT DETAILS</font>
            </div>
            <div className="pdc-c1">
                <div className="pdc-c1-product-img">
                    <img src={productImg} alt={productImg} />
                </div>
            </div>
            <div className="pdc-c2">
                <div className="pdc-c2-tags"></div>
                <div className="pdc-c2-product-name">
                    <font>Beautiful Chair for Kids</font>
                </div>
                <br></br>
                <div className="pdc-c2-price">
                    <font id="pdc-c2-price-offer">&#36;180.99</font>
                    <font id="pdc-c2-price-actual">&#36;280.99</font>
                </div>
                <hr />
                <div className="pdc-c2-product-description">
                    This is a demo description for the product Beautiful Chair for Kids. This section describes the product and explains its relevance. This section describes the product and explains its relevance. This is a demo description for the product.
                </div>
                <div className="pdc-c2-sizes">
                    Available Size<br /><br />
                    <div>S</div>
                    <div>M</div>
                    <div>XL</div>
                </div>
                <div className="pdc-c2-about-seller">
                    <font>About Seller</font>
                </div>
                <div className="pdc-c2-tabs-container">
                    <InformationTab />
                </div>
            </div >
        </div>
    );
}

export default ProductDetailsContainer;