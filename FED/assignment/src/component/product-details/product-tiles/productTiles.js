import React from 'react';

import './productTiles.css';



const ProductTiles = (props) => {
    const images = importAll(require.context('./../../../asset/ecommerce/', false, /\.(png|jpe?g|svg)$/));
    return (
        <div className="product-tiles">
            <img src={images[0]} alt={images[0]}/>
            <img src={images[1]} alt={images[1]}/>
            <img src={images[2]} alt={images[2]}/>
            <img src={images[3]} alt={images[3]}/>
            <img src={images[0]} alt={images[0]}/>
            <img src={images[1]} alt={images[1]}/>
        </div>
    );
}

function importAll(r) {
    return r.keys().map(r);
}

export default ProductTiles;