import React from 'react';

import Product from './product/product';
import arrowUp from './../../asset/arrow-up.png'
import './products.css';

const Products = (props) => {
    window.onscroll = () => { scrollFunction() };
    const scrollFunction = () => {
        const url = window.location.href;
        const scrollButton = document.getElementById('products-gotop')
        if (document.documentElement.scrollTop > 50 && url === "http://localhost:3000/catalog") {
            scrollButton.style.display = "block";
        } else {
            if (url === "http://localhost:3000/catalog") {
                scrollButton.style.display = "none";
            }
        }
    }

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

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
                <Product />
                <Product />
            </div>

            <div id="products-gotop" className="products-gotop" onClick={scrollToTop}>
                <img src={arrowUp} alt={arrowUp} />
            </div>

        </div>
    );
}

export default Products;