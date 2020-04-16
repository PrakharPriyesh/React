import React from 'react';

import Product from './product/product'
import './products.css';

function Products(props) {
    return (
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
    );
}

export default Products;