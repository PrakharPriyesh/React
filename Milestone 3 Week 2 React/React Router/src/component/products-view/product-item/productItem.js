import React from 'react';
import './productItem.css'

function ProductCard({element,sellerId,addItemToCartHandler,uniqueKey}) {
    return (
        <div className="product-card">
            <div className="product-body">
                <img className="product-img" src={element.img} alt={element.img} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png" }} />
                <div className="product-name">{element.name}</div>
                <div className="product-text">
                    Rs. {element.price + " "} <br />
                    <font className="product-stock">Stock: {element.stock}</font>
                </div>
                <button className="product-button" onClick={addItemToCartHandler} id={uniqueKey} value={sellerId}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;