import React from 'react';

import Product from './product/product';
import './products.css';

function Products(props) {
    return (
        <div className="products">
            <div className="products-heading">
                <font>PRODUCT CATALOG</font>
            </div>
            <div className="products-container">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default Products;