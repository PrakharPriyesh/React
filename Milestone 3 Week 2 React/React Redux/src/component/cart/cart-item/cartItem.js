import React from 'react';
import './cartItem.css'

const CartItem = ({ cartProducts, removeItemFromCart }) => {
    let items = null
    items = (
        Object.keys(cartProducts).map((key) => {
            const {img, name,price,count,seller} = cartProducts[key]
            return (
                // Did not create another component as css were different will learn to use relative dimensions
                <div className="cart-product-card" key={key}>
                    <div className="cart-product-body">
                        <img className="cart-product-img" src={img} alt={img} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.vexels.com/media/users/3/148920/isolated/preview/a8016baffbce8083fcc0313f2c904e6e-red-office-chair-clipart-by-vexels.png" }} />
                        <div className="cart-product-name">{name}</div>
                        <div className="cart-product-text">
                            <b>Rs. {price} X {count}</b>
                        </div>
                        <button className="cart-product-button" id={key} onClick={removeItemFromCart} value={seller}>Remove</button>
                    </div>
                </div>
            )
        })
    )

    return (
        <>
            {items}
        </>
    );
}

export default CartItem;