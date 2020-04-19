import React from 'react';

import Navbar from './../navbar/navbar';
import Sidebar from './../sidebar/sidebar';
import Products from './../products/products'
import './catalog.css';

function Catalog(props) {
    return (
        <>
            <div className="catalog-container">
                <div className="catalog-item">
                    <Sidebar />
                    <Navbar />
                    <Products />
                </div>
            </div>
        </>
    );
}

export default Catalog;