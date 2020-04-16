import React from 'react';

import Navbar from './../navbar/navbar';
import Sidebar from './../sidebar/sidebar';
import Products from './../products/products'
import './catalog.css';

function Catalog(props) {
    return (
        <>

            <div className="catalog-container">
                <div className="catalog-item1">
                    <Sidebar />
                </div>
                <div className="catalog-item2">
                    <Navbar />
                    <Products />
                </div>
            </div>
        </>
    );
}

export default Catalog;