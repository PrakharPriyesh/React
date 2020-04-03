import React from 'react';
import PropTypes from 'prop-types';
import './productItem.css';

const ProductCard = ({ element, sellerId, addItemToCartHandler, uniqueKey }) => {
    const { img, name, stock, price } = element
    return (
        <div className="product-card">
            <div className="product-body">
                <img className="product-img" src={img} alt={img} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png" }} />
                <div className="product-name">{name}</div>
                <div className="product-text">
                    Rs. {price + " "} <br />
                    <font className="product-stock">Stock: {stock}</font>
                </div>
                <button className="product-button" onClick={addItemToCartHandler} id={uniqueKey} value={sellerId}>Add to Cart</button>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    element: PropTypes.object,
    sellerId: PropTypes.string,
    addItemToCartHandler: PropTypes.func,
    uniqueKey: PropTypes.string
}

export default ProductCard;